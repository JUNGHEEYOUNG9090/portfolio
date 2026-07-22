function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-sm font-semibold text-blue-600">ABOUT ME</p>

        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          백엔드 경험을 기반으로
          <br />
          AI 서비스 개발 영역으로 확장하고 있습니다.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-slate-600">
              Java 기반 웹 서비스 개발 경험을 바탕으로 REST API 설계, 데이터
              처리, 시스템 운영 및 유지보수를 경험했습니다.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              이후 Python, FastAPI, LangChain, Vector DB 등을 활용해 RAG 기반 AI
              서비스와 이미지 임베딩 자동화 파이프라인을 구축하며 AI 서비스 개발
              영역으로 확장하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
