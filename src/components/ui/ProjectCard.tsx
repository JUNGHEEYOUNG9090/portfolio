import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    stack: string[];
    github: string;
    detail: string;
    role?: string;
    thumbnail: string;
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(project.detail)}
      className="group flex cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 overflow-hidden rounded-xl bg-slate-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-300 "
        />
      </div>
      {/* 프로젝트 제목 */}
      <div className="mb-5">
        <p className="mb-2 text-sm font-semibold text-blue-600">PROJECT</p>

        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
      </div>

      {/* 설명 */}
      <p className="mb-5 leading-relaxed text-slate-600">
        {project.description}
      </p>

      {/* 역할 */}
      {project.role && (
        <div className="mb-5 rounded-lg bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold text-slate-400">ROLE</p>
          <p className="mt-1 font-medium text-slate-700">{project.role}</p>
        </div>
      )}

      {/* 기술 스택 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto border-t border-slate-300 pt-6 flex justify-end">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
        >
          <FaGithub size={18} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
