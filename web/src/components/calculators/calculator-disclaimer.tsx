import { AlertTriangle } from "lucide-react";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";

type CalculatorDisclaimerProps = {
  className?: string;
};

export function CalculatorDisclaimer({ className }: CalculatorDisclaimerProps) {
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm ${className ?? ""}`}
    >
      <AlertTriangle
        className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
        aria-hidden="true"
      />
      <p className="leading-relaxed text-amber-900">
        <strong>Estimate only — not tax advice.</strong> This calculator
        provides an estimate based on UK tax rates for {TAX_YEAR_LABEL} and
        should not be treated as professional tax advice. Tax rules and
        allowances can change, and your personal circumstances may affect the
        final amount.{" "}
        <strong>
          Please speak to Huxridge for tailored advice before making any
          financial decisions.
        </strong>
      </p>
    </div>
  );
}
