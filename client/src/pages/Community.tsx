import { useState, useEffect } from "react";
import type { Project } from "../types";
import { Loader2Icon, PlusIcon, TrashIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "@/configs/axios";
import { toast } from "sonner";
import { motion } from "motion/react";

const Community = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  const fetchProject = async () => {
    try {
      const { data } = await api.get("/api/project/published ");
      setProjects(data.projects);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col relative">
        <div className="flex-grow pt-32 pb-20 relative px-6">
          <div className="absolute top-0 left-0 w-full h-screen grid-bg pointer-events-none -z-10 opacity-40"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

          {loading ? (
            <div className="flex items-center justify-center h-[80vh]">
              <Loader2Icon className="animate-spin size-7 text-primary" />
            </div>
          ) : projects.length > 0 ? (
            <div className="max-w-[1400px] mx-auto">
              <div>
                <div className="text-center mb-16 relative">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text tracking-tight"
                  >
                    Explore the Community
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-text-secondary text-lg max-w-2xl mx-auto"
                  >
                    Be inspired by the best websites built with ParuAI. Clone,
                    remix, and learn from top creators.
                  </motion.p>
                </div>
                <div className="flex flex-wrap gap-3.5">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/view/${project.id}`}
                      target="_blank"
                      className=" w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border-gray-700 rounded-lg overflow-hidden group hover:border-indigo-800/80 transition-all duration-300"
                    >
                      {/* DESKTOP LIKE MINI PREVIEW */}
                      <div
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800 "
                      >
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

                        <div className="flex justify-between items-center mt-6 ">
                          <span className="text-xs text-gray-500 ">
                            {new Date(project.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex gap-3 text-white text-sm mt-2">
                          <button
                            className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md 
                          transition-colors flex items-center gap-2
                          "
                          >
                            <span className="bg-gray-200 size-4.5 rounded-full text-black font-semibold flex items-center justify-center ">
                              {project.user?.name?.slice(0, 1)}
                            </span>
                            <span>{project.user?.name}</span>
                          </button>
                        </div>
                      </div>
                    </Link>
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
      </div>
    </>
  );
};

export default Community;
