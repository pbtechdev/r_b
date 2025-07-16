import React, { useState } from "react";
import { Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";

type EditableTitleProps = {
  title: string;
  className?: string;
  onChange: (value: string) => void;
};

const EditableTitle: React.FC<EditableTitleProps> = ({
  title,
  className = "p-2 font-bold text-2xl",
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (!inputValue) {
      setInputValue(title);
    }
    onChange(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.currentTarget.blur();
    }
  };

  return (
    <div className={cn("flex gap-2 items-center justify-center", className)}>
      {isEditing ? (
        <input
          name="title"
          autoFocus
          onClick={(e)=>e.stopPropagation()}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="border-0 border-b-2 border-primary focus:border-primary focus:outline-none focus:ring-0 px-0 py-0 bg-transparent h-auto max-w-46"
        />
      ) : (
        <div className="inline-flex items-center gap-2">
          <span
            className="group inline-flex items-center gap-2 cursor-text"
            onClick={handleEdit}
          >
            {inputValue}
            <Edit3
              size={18}
              className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default EditableTitle;
