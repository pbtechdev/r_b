import EditableTitle from "@/components/EditableTitle";
import ResumeEditor from "@/components/resume-editor/ResumeEditor";
import { AddNewSection } from "@/components/resume-editor/sections/AddNewSection";
import { Button } from "@/components/ui/button";
import { useResumeData } from "@/hooks/useResumeData";
import { LayoutDashboard } from "lucide-react";

const BuilderPage = () => {
  const resumeHook = useResumeData();

  return (
    <div className="min-h-screen bg-indigo-100 flex">
      <div className="flex-1 overflow-y-scroll">
        <div className="p-2 flex flex-col bg-white rounded-b-md">
          <div>
            <Button variant="ghost" className="cursor-pointer">
              <LayoutDashboard />
            </Button>
          </div>
            <EditableTitle title="Untitled" onChange={()=>{}} />
          <div className="px-6 py-6">
            <div className="flex justify-between items-center pb-0.5 text-primary">
              <span>Your Resume Score</span>
              <span>100%</span>
            </div>
            <div className="h-1 bg-green-600"></div>
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
