import { FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section className="bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-lg font-semibold text-blue-600">
          Backend Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900">
          AI Service를 개발하는
          <br />
          Backend Developer
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
          Java/Spring 기반 백엔드 경험을 바탕으로 RAG, LLM, AI 서비스를 구현하는
          개발자입니다.
        </p>

        <div className="mb-10 flex gap-4">
          <a
            href="https://github.com/JUNGHEEYOUNG9090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700">
            <FaEnvelope size={18} />
            hwarang29@naver.com
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "FastAPI",
            "RAG",
            "LLM",
            "LangChain",
            "Java",
            "Spring",
            "React",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
