import { careers } from "../data/careers";

function Career() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold text-slate-900">Career</h2>

        <div className="space-y-6">
          {careers.map((career) => (
            <div
              key={career.company}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {career.company}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {career.period} · {career.position}
              </p>

              <p className="mt-4 text-slate-600">{career.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {career.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 list-disc space-y-1 pl-5 text-slate-600">
                {career.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
