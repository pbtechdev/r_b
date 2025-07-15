import React from "react";
import { Button } from "../../ui/button";
import type { ResumeSection } from "../../../types/resume";
import {
  PlusSquare,
  BookOpen,
  Users,
  Briefcase,
  Heart,
  Languages,
  Contact,
} from "lucide-react";

interface AddNewSectionProps {
  onAddSection: (type: ResumeSection["type"], title: string) => void;
}

export const AddNewSection: React.FC<AddNewSectionProps> = ({
  onAddSection,
}) => {
  const sectionTypes = [
    {
      type: "custom" as const,
      title: "Custom Section",
      icon: PlusSquare,
    },
    {
      type: "courses" as const,
      title: "Courses",
      icon: BookOpen,
    },
    {
      type: "extracurricular" as const,
      title: "Extra-Curricular Activities",
      icon: Users,
    },
    {
      type: "internships" as const,
      title: "Internships",
      icon: Briefcase,
    },
    {
      type: "hobbies" as const,
      title: "Hobbies",
      icon: Heart,
    },
    {
      type: "languages" as const,
      title: "Languages",
      icon: Languages,
    },
    {
      type: "references" as const,
      title: "References",
      icon: Contact,
    },
  ];

  return (
    <div className="bg-white rounded-md">
      <div className="px-4 py-3 border-b border-gray-100">
        <span className="font-semibold text-lg">Add New Section</span>
      </div>

      {/* Grid layout for responsive buttons */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sectionTypes.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.type}
              variant="outline"
              size="lg"
              onClick={() => onAddSection(section.type, section.title)}
              className="w-full justify-start gap-2"
            >
              <Icon size={18} className="text-muted-foreground" />
              {section.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
