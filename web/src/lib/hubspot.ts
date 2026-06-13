type HubSpotContactInput = {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  service_interest?: string;
  lead_source?: string;
  source_page?: string;
  hs_lead_status?: string;
};

export async function syncLeadToHubSpot(input: HubSpotContactInput): Promise<string | null> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) return null;

  const nameParts = (input.firstname ?? "").trim().split(/\s+/);
  const firstname = nameParts[0] ?? "";
  const lastname = nameParts.slice(1).join(" ") || undefined;

  const properties: Record<string, string> = {
    email: input.email,
    firstname,
    ...(lastname ? { lastname } : {}),
    ...(input.phone ? { phone: input.phone } : {}),
    ...(input.service_interest ? { service_interest__c: input.service_interest } : {}),
    hs_lead_status: input.hs_lead_status ?? "NEW",
    lead_source__c: input.lead_source ?? "Website Enquiry",
    ...(input.source_page ? { source_page__c: input.source_page } : {}),
  };

  try {
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (!res.ok) {
      // 409 = contact already exists — try to update instead
      if (res.status === 409) {
        return await updateHubSpotContact(input.email, properties, apiKey);
      }
      console.error("[HubSpot] Create failed:", res.status, await res.text());
      return null;
    }

    const data = (await res.json()) as { id: string };
    return data.id;
  } catch (err) {
    console.error("[HubSpot] Network error:", err);
    return null;
  }
}

async function updateHubSpotContact(
  email: string,
  properties: Record<string, string>,
  apiKey: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ properties }),
      },
    );

    if (!res.ok) {
      console.error("[HubSpot] Update failed:", res.status);
      return null;
    }

    const data = (await res.json()) as { id: string };
    return data.id;
  } catch (err) {
    console.error("[HubSpot] Update network error:", err);
    return null;
  }
}
