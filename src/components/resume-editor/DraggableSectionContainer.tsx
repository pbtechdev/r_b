import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type { ResumeSection } from "../../types/resume";
import { AccordionItem, AccordionTrigger } from "../ui/accordion";
import { cn } from "@/lib/utils";
import EditableTitle from "../EditableTitle";

interface DraggableSectionProps {
  section: ResumeSection;
  children: React.ReactNode;
  onChangeTitle: (newTitle: string) => void;
}

const DraggableSectionContainer: React.FC<DraggableSectionProps> = ({
  section,
  children,
  onChangeTitle,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <AccordionItem
      value={isDragging ? "" : section.id}
      style={style}
      ref={setNodeRef}
      className={cn("bg-white rounded-md pl-2 pr-4", isDragging && "z-10")}
    >
      <AccordionTrigger className="hover:no-underline cursor-pointer">
        <div className="flex gap-1 justify-center items-center">
          <div {...attributes} {...listeners} title="Click and drag to move">
            <GripVertical
              size={18}
              className="text-gray-400 hover:text-primary cursor-grab active:cursor-grabbing"
            />
          </div>
          <EditableTitle
            className="font-semibold text-lg"
            title={section.title}
            onChange={onChangeTitle}
          />
        </div>
      </AccordionTrigger>
      {children}
    </AccordionItem>
  );
};

export default DraggableSectionContainer;
