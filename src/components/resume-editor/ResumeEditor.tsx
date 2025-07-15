import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableSection } from "./DraggableSection";
import type { ResumeSection } from "@/types/resume";
import { GripVertical } from "lucide-react";
interface ResumeEditorProps {
  resumeHook: ReturnType<
    typeof import("../../hooks/useResumeData").useResumeData
  >;
}

const ResumeEditor: React.FC<ResumeEditorProps> = ({ resumeHook }) => {
  const { resumeData } = resumeHook;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = resumeData.sections.findIndex(
        (section) => section.id === active.id
      );
      const newIndex = resumeData.sections.findIndex(
        (section) => section.id === over.id
      );

      const newSections = arrayMove(resumeData.sections, oldIndex, newIndex);
      resumeHook.reorderSections(newSections);
    }
  };

  const sortableSections = resumeData.sections.sort(
    (a, b) => a.order - b.order
  );
  const sortableIds = sortableSections.map((section) => section.id);

  const renderSection = (section: ResumeSection) => {
    console.log(section);
    return (
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </p>
      </AccordionContent>
    );
  };

  return (
    <Accordion type="multiple" className="py-2 flex flex-col gap-2">
      <AccordionItem value="item-1" className="bg-white rounded-md pl-2 pr-4">
        <AccordionTrigger className="hover:no-underline cursor-pointer">
          <div className="flex gap-1 justify-center items-center">
            <GripVertical
              size={18}
              className="text-gray-400 hover:text-primary opacity-0"
            />
            <span className="font-semibold text-lg">Product Information</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="bg-white rounded-md pl-2 pr-4">
        <AccordionTrigger className="hover:no-underline cursor-pointer">
          <div className="flex gap-1 justify-center items-center">
            <GripVertical
              size={18}
              className="text-gray-400 hover:text-primary opacity-0"
            />
            <span className="font-semibold text-lg">Product Information</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/** Sortable Accordions */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sortableIds}
          strategy={verticalListSortingStrategy}
        >
          {sortableSections.map((section) => (
            <DraggableSection key={section.id} section={section}>
              {renderSection(section)}
            </DraggableSection>
          ))}
        </SortableContext>
      </DndContext>
    </Accordion>
  );
};

export default ResumeEditor;
