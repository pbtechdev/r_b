import ResumeEditor from "@/components/resume-editor/ResumeEditor";
import { AddNewSection } from "@/components/resume-editor/sections/AddNewSection";
import { Button } from "@/components/ui/button";
import { useResumeData } from "@/hooks/useResumeData";
import { Edit3, LayoutDashboard } from "lucide-react";

const BuilderPage = () => {
  const resumeHook = useResumeData();

  return (
    <div className="min-h-screen bg-indigo-100 flex">
      <div className="flex-1 overflow-y-scroll">
        <div className="p-6 flex flex-col bg-white rounded-b-md">
          <div>
            <Button variant="ghost" className="cursor-pointer">
              <LayoutDashboard />
            </Button>
          </div>
          <div className="flex gap-2 items-center justify-center p-2 font-bold text-2xl">
            Untitled <Edit3 size={16} className="text-gray-500" />
          </div>
          <div className="px-2">
            <div className="flex justify-between items-center text-green-500">
              <span>Your Resume Score</span>
              <span>100%</span>
            </div>
            <div className="h-1 bg-primary"></div>
          </div>
        </div>
        <ResumeEditor resumeHook={resumeHook} />
        <AddNewSection onAddSection={() => {}} />
      </div>
      <div className="flex-1 flex justify-center items-center">Hello</div>
    </div>
  );
};

export default BuilderPage;
