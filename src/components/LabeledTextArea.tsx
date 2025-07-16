import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LabeledTextareaProps {
  id: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  optional?: boolean;
}

export const LabeledTextarea: React.FC<LabeledTextareaProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}) => (
  <div className="flex flex-col gap-1">
    {label ? (
      <Label
        htmlFor={id}
        className="text-sm font-medium text-muted-foreground pl-1"
      >
        {label}
      </Label>
    ) : null}
    <Textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-gray-100 text-base min-h-60"
    />
  </div>
);
