import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
  return (
    <section className="bg-slate-0 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
