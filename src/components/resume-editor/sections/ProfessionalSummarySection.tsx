import React from "react";
import type { ProfessionalSummary } from "@/types/resume";
import { LabeledTextarea } from "@/components/LabeledTextArea";

interface ProfessionalSummarySectionProps {
  summary: ProfessionalSummary;
  onUpdate: (summary: string) => void;
}

export const ProfessionalSummarySection: React.FC<
  ProfessionalSummarySectionProps
> = ({ summary, onUpdate }) => {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      <p className="text-muted-foreground text-sm">
        Write a short, energetic paragraph about your professional journey.
        Include your role, major accomplishments, and what motivates you. Finish
        with a list of your key strengths and skills.
      </p>
      <div>
        <LabeledTextarea
          id="summary"
          value={summary.summary}
          onChange={onUpdate}
          placeholder="Creative software engineer with 5+ years of experience building fast, accessible, and beautiful web apps."
        />
        <p className="text-muted-foreground text-sm pl-1 pt-1">
          Tip: write 400-600 characters to increase interview chances
        </p>
      </div>
    </div>
  );
};
