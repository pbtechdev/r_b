import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { GripVertical } from "lucide-react";
import EditableTitle from "../EditableTitle";

interface SectionContainerProps {
  value: string;
  title: string;
  onChangeTitle: (newTitle: string) => void;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  value,
  title,
  onChangeTitle,
  children,
}) => (
  <AccordionItem value={value} className="bg-white rounded-md pl-2 pr-4">
    <AccordionTrigger className="hover:no-underline cursor-pointer">
      <div className="flex gap-1 justify-center items-center">
        <GripVertical
          size={18}
          className="text-gray-400 hover:text-primary opacity-0"
        />
        <EditableTitle
          className="font-semibold text-lg"
          title={title}
          onChange={onChangeTitle}
        />
      </div>
    </AccordionTrigger>
    <AccordionContent className="flex flex-col gap-4 text-balance">
      {children}
    </AccordionContent>
  </AccordionItem>
);

export default SectionContainer;
