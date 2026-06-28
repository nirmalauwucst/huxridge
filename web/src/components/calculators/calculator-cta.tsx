import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageSquare, Phone } from "lucide-react";

type CalculatorCtaProps = {
  variant?: "result" | "page";
};

export function CalculatorCta({ variant = "result" }: CalculatorCtaProps) {
  if (variant === "result") {
    return (
      <div className="bg-primary-50 border-primary-100 mt-6 rounded-xl border p-5">
        <p className="text-primary-900 text-sm font-semibold">Want a precise figure?</p>
        <p className="text-muted-foreground mt-1 text-sm">
          This estimate is a useful starting point. For advice tailored to your situation, speak to one of our accountants.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild variant="primary" size="sm">
            <Link href="/book">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book a Free Consultation
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Ask Us About This
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-900 mt-8 rounded-2xl p-6 text-white sm:p-8">
      <h2 className="text-xl font-semibold sm:text-2xl">Ready for personalised advice?</h2>
      <p className="text-primary-200 mt-2 text-sm leading-relaxed">
        Our calculators give you a useful estimate. For tax planning specific to your circumstances, our team is ready to help.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild variant="secondary" size="md">
          <Link href="/book">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book a Free Consultation
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="md"
          className="border-white text-white hover:bg-white/10"
        >
          <Link href="/contact">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact an Accountant
          </Link>
        </Button>
      </div>
    </div>
  );
}
