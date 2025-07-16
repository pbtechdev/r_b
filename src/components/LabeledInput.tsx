import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LabeledInputProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  ...props
}) => (
  <div className="flex flex-col gap-1">
    <Label
      htmlFor={id}
      className="text-sm font-medium text-muted-foreground pl-1"
    >
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-gray-100 text-base"
      {...props}
    />
  </div>
);
