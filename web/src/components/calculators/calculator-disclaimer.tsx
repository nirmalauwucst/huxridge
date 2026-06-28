import { AlertTriangle } from "lucide-react";
import { TAX_YEAR_LABEL } from "@/lib/calculators/tax-year-config";

type CalculatorDisclaimerProps = {
  className?: string;
};

export function CalculatorDisclaimer({ className }: CalculatorDisclaimerProps) {
  return (
    <div
      role="note"
      className={`bg-amber-50 border-amber-200 flex gap-3 rounded-lg border p-4 text-sm ${className ?? ""}`}
    >
      <AlertTriangle
        className="text-amber-600 mt-0.5 h-4 w-4 shrink-0"
        aria-hidden="true"
      />
      <p className="text-amber-900 leading-relaxed">
        <strong>Estimate only — not tax advice.</strong> This calculator provides an estimate
        based on UK tax rates for {TAX_YEAR_LABEL} and should not be treated as professional tax
        advice. Tax rules and allowances can change, and your personal circumstances may affect
        the final amount.{" "}
        <strong>Please speak to Huxridge for tailored advice before making any financial decisions.</strong>
      </p>
    </div>
  );
}
