import { useState, useEffect } from "react";
import type { Project } from "../types";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyProjects } from "../assets/assets";

const MyProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProject = async () => {
    setProjects(dummyProjects);
    // simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-32">
        {loading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <Loader2Icon className="animate-spin size-7 text-primary" />
          </div>
        ) : projects.length > 0 ? (
          <div className="py-10 min-h-[80vh]">
            <div>
              <div className="flex justify-between mb-12">
                <h1 className="text-2xl font-medium text-white">My Projects</h1>
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 text-white px-3 sm:px-6 py-1 sm:py-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95
              transition-all"
                >
                  <PlusIcon size={18} />
                  Create New
                </button>
              </div>
              <div className="flex flex-wrap gap-3.5">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className=" relative group w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border-gray-700 rounded-lg overflow-hidden shadow-md group hover:shadow-indigo-700/30 hover:border-indigo-800/80 transition-all duration-300"
                  >
                    {/* DESKTOP LIKE MINI PREVIEW */}
                    <div className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800 ">
                      {project.current_code ? (
                        <iframe
                          srcDoc={project.current_code}
                          className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left pointer-events-none"
                          sandbox="allow-scripts allow-same-origin"
                          style={{ transform: "scale(0.25)" }}
                        />
                      ) : (
                        <div>
                          <p>No Preview</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}

                    <div className="p-4 text-white bg-linear-180 from-transparent group-hover:from-indigo-950 to-transparent transition-colors">
                      {/* Title + Badge */}
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium line-clamp-2">
                          {project.name}
                        </h2>

                        <button className="px-2.5 py-0.5 ml-2 text-xs bg-gray-800 border border-gray-700 rounded-full">
                          Website
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                        {project.initial_prompt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center justify-center h-[80vh]">
              <h1 className="text-3xl font-semibold text-gray-300">
                You have No Projects Yet!
              </h1>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 text-white px-3 sm:px-6 py-1 sm:py-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95
              transition-all"
                >
                  <PlusIcon size={18} />
                  Create New
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProjects;
