import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyProjects } from "../assets/assets";
import { Loader2Icon } from "lucide-react";
import ProjectPreview from "../components/projects/ProjectPreview";
import type { Project } from "../types";

const View = () => {
  const { projectId } = useParams();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCode = async () => {
    const project = dummyProjects.find(
      (project) => project.id === projectId, // FIX
    );

    setTimeout(() => {
      if (project) {
        setCode(project.current_code);
      }
      setLoading(false); // always stop loading
    }, 2000);
  };

  useEffect(() => {
    fetchCode();
  }, []); // dependency added

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2Icon className="animate-spin size-7 text-primary" />
      </div>
    );
  }

  return (
    <div>
      {code && (
        <ProjectPreview
          project={{ current_code: code } as Project}
          isGenerating={false}
          showEditorPanel={false}
        />
      )}
    </div>
  );
};

export default View;
