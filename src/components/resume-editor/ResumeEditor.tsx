import { Accordion, AccordionContent } from "@/components/ui/accordion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableSectionContainer from "./DraggableSectionContainer";
import type { ResumeSection } from "@/types/resume";
import SectionContainer from "./SectionContainer";
import { PersonalDetailsSection } from "./sections/PersonalDetailsSection";
import { ProfessionalSummarySection } from "./sections/ProfessionalSummarySection";
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

  const handleDragEnd = (event: DragEndEvent) => {
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
      <SectionContainer
        value="item-1"
        title="Personal details"
        onChangeTitle={() => {}}
      >
        <PersonalDetailsSection
          onUpdate={() => {}}
          personalDetails={resumeData.personalDetails}
        />
      </SectionContainer>
      <SectionContainer
        value="item-2"
        title="Professional Summary"
        onChangeTitle={() => {}}
      >
        <ProfessionalSummarySection
          onUpdate={() => {}}
          summary={resumeData.professionalSummary}
        />
      </SectionContainer>

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
            <DraggableSectionContainer
              key={section.id}
              section={section}
              onChangeTitle={() => {}}
            >
              {renderSection(section)}
            </DraggableSectionContainer>
          ))}
        </SortableContext>
      </DndContext>
    </Accordion>
  );
};

export default ResumeEditor;
