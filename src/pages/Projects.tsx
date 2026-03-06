import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Project } from "../types";
import {
  ArrowBigDownDashIcon,
  EyeIcon,
  EyeOffIcon,
  FullscreenIcon,
  LaptopIcon,
  Loader2Icon,
  MessageSquareIcon,
  SaveIcon,
  SmartphoneIcon,
  TabletIcon,
  XIcon,
} from "lucide-react";
import { dummyConversations, dummyProjects } from "../assets/assets";

const Projects = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const [isGenerating, setIsGenerating] = useState(true);
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">(
    "desktop",
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const fetchProject = async () => {
    const project = dummyProjects.find((project) => project.id === projectId);
    setTimeout(() => {
      if (project) {
        setProject({ ...project, conversation: dummyConversations });
        setLoading(false);
        setIsGenerating(project.current_code ? false : true);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader2Icon className="animate-spin size-7 text-primary" />
      </div>
    );
  }

  return project ? (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
      {/* Builder Navbar */}
      <div className="flex max-sm:flex-col sm:items-center gap-4 px-4 py-2 no-scrollbar">
        {/* Left */}
        <div className="flex items-center gap-2 sm:min-w-90 text-nowrap">
          <img
            src="/favicon.svg"
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="max-w-64 sm:max-w-xs">
            <p className="text-sm font-medium capitalize truncate">
              {project.name}
            </p>
            <p className="text-xs text-gray-400 -mt-0.5">
              Previewing last save version
            </p>
          </div>

          <div className="sm:hidden flex-1 flex justify-end">
            {isMenuOpen ? (
              <MessageSquareIcon
                onClick={() => setIsMenuOpen(false)}
                className="size-6 cursor-pointer"
              />
            ) : (
              <XIcon
                onClick={() => setIsMenuOpen(true)}
                className="size-6 cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* middle */}
        <div className="hidden sm:flex gap-2 bg-gray-950 p-1.5 rounded-md">
          <SmartphoneIcon
            onClick={() => setDevice("phone")}
            className={`size-6 p-1 rounded cursor-pointer  ${device === "phone" ? "bg-gray-700" : ""}`}
          />
          <TabletIcon
            onClick={() => setDevice("tablet")}
            className={`size-6 p-1 rounded cursor-pointer  ${device === "tablet" ? "bg-gray-700" : ""}`}
          />
          <LaptopIcon
            onClick={() => setDevice("desktop")}
            className={`size-6 p-1 rounded cursor-pointer  ${device === "desktop" ? "bg-gray-700" : ""}`}
          />
        </div>
        {/* right */}
        <div className="flex items-center justify-end gap-3 flex-1 text-xs sm:text-sm">
          <button>
            <SaveIcon size={16} /> Save
          </button>
          <Link target="_blank" to={`/preview/${project.id}`}>
            <FullscreenIcon size={16} />
            Preview
          </Link>
          <button>
            <ArrowBigDownDashIcon size={16} /> Download
          </button>
          <button>
            {project.isPublished ? 
            <EyeOffIcon size={16}/>  : <EyeIcon size={16}/>
          }
            {project.isPublished ? "Unpublish" : "Publish"}
            </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-3xl font-semibold text-gray-300">
        Unable to load project
      </h1>
    </div>
  );
};

export default Projects;
