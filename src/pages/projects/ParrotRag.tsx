import { FaGithub } from "react-icons/fa";

function ParrotRag() {
  const tags = ["Python", "FastAPI", "RAG", "LangChain", "LLM", "Supabase"];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">AI PROJECT</p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900">
            Parrot RAG Chatbot
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            앵무새 관련 문서를 기반으로 질문에 답변하는 RAG(Retrieval-Augmented
            Generation) 챗봇 서비스입니다.
          </p>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/JUNGHEEYOUNG9090/parrot_rag_service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            <FaGithub />
            GitHub
          </a>
        </section>

        {/* Project Overview */}
        <ProjectSection title="프로젝트 소개">
          <p>
            반려동물 AI 서비스는 대부분 개와 고양이에 집중되어 있습니다. 하지만
            앵무새 보호자 역시 전문적인 정보를 쉽게 얻을 수 있는 서비스가
            필요하다고 생각하여 문서 기반 RAG 챗봇을 개발했습니다.
          </p>
        </ProjectSection>

        {/* Features */}
        <ProjectSection title="주요 기능">
          <ul className="list-disc space-y-2 pl-5">
            <li>앵무새 관련 문서 기반 질의응답</li>
            <li>Supabase Vector Database 기반 검색</li>
            <li>Embedding + Retrieval + LLM 답변 생성</li>
            <li>대화 이력을 활용한 후속 질문 검색 보강</li>
            <li>내부 문서 부족 시 Tavily 검색 fallback</li>
            <li>평가셋 기반 Retrieval 성능 측정 및 검색 품질 개선</li>
          </ul>
        </ProjectSection>

        {/* Architecture */}
        <ProjectSection title="RAG Pipeline">
          <img
            src="/images/rag-pipeline.png"
            alt="Retrieval Optimization Process"
            className="mx-auto max-h-[600px] w-auto rounded-xl"
          />
        </ProjectSection>

        {/* Performance */}
        <ProjectSection title="Retrieval 평가 전략">
          <p className="mb-5">
            검색 품질 개선을 위해 99개의 질문-기대 문서 평가셋을 직접 구성하고,
            Retrieval 결과를 Recall 지표로 비교했습니다.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Evaluation Dataset</p>

              <p className="text-2xl font-bold text-slate-900">99 Questions</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Metrics</p>

              <p className="text-2xl font-bold text-slate-900">
                Recall@1 / Recall@3
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-900 p-5 text-white">
            <p className="mb-2 font-bold">Evaluation Flow</p>

            <p>
              질문 입력
              <br />
              ↓
              <br />
              Retriever 검색 결과 확인
              <br />
              ↓
              <br />
              기대 문서 포함 여부 비교
              <br />
              ↓
              <br />
              Recall 계산
            </p>
          </div>
        </ProjectSection>
        {/* Retrieval Improvement */}
        <ProjectSection title="검색 품질 개선 과정">
          <img
            src="/images/parrot-rag-retrieval.png"
            alt="Retrieval Optimization Process"
            className="mx-auto w-full max-w-4xl rounded-xl"
          />
          <div className="space-y-6">
            {/* 1차 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  1차
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  초기 RAG Pipeline
                </h3>
              </div>

              <p className="mb-4 text-slate-600">
                문서 임베딩 후 Vector Search 기반으로 관련 문서를 검색하는 기본
                RAG 구조를 구현했습니다.
              </p>

              <div className="rounded-lg bg-white p-4 text-sm text-slate-700 shadow-sm">
                Document Embedding
                <br />
                ↓
                <br />
                Vector Search
                <br />
                ↓
                <br />
                LLM Answer Generation
              </div>
            </div>

            {/* 2차 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  2차
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  Chunking 개선
                </h3>
              </div>

              <p className="text-slate-600">
                파일 단위 검색의 한계를 개선하기 위해 Markdown Header 기준으로
                문서를 분할하여 의미 단위 검색이 가능하도록 개선했습니다.
              </p>
            </div>

            {/* 3차 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  3차
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  Hybrid Search 적용
                </h3>
              </div>

              <p className="text-slate-600">
                Vector Search와 Keyword Search를 결합하여 검색 성능 개선을
                시도했습니다. 일부 질의에서는 Recall 향상을 확인했지만, 추가
                검색 과정으로 인해 응답 시간이 증가하여 성능과 속도의 균형을
                고려한 결과 최종 Pipeline에서는 제외했습니다.
              </p>
            </div>

            {/* 4차 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  4차
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  Re-ranking 적용
                </h3>
              </div>

              <p className="mb-4 text-slate-600">
                검색 후보 문서를 Cross Encoder 기반 BAAI/bge-reranker-base
                모델로 재평가하여 관련성이 높은 문서를 우선 배치했습니다.
              </p>

              <div className="rounded-lg bg-white p-4 text-sm text-slate-700 shadow-sm">
                Retrieved Documents (10)
                <br />
                ↓
                <br />
                BAAI/bge-reranker-base
                <br />
                ↓
                <br />
                Final Context (3)
              </div>
            </div>

            {/* 결과 */}
            <div className="rounded-xl bg-slate-900 p-6 text-white">
              <h3 className="mb-4 text-lg font-bold">Final Evaluation</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Recall@1</p>

                  <p className="text-3xl font-bold">62.63%</p>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Recall@3</p>

                  <p className="text-3xl font-bold">84.85%</p>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Trouble Shooting */}
        <ProjectSection title="Troubleshooting">
          <h3 className="mb-2 font-bold">후속 질문 검색 실패 개선</h3>

          <p>
            짧은 후속 질문이 들어오는 경우 검색 정확도가 떨어지는 문제를
            해결하기 위해 이전 대화 이력을 활용하여 검색 Query를 보강했습니다.
          </p>

          <h3 className="mb-2 font-bold">Reranker 모델 선택</h3>

          <p>
            초기에는 bge-reranker-large 모델을 적용했으나, 검색 품질 대비 응답
            시간이 증가하는 문제가 있었습니다. 실험 결과 성능과 속도의 균형을
            고려하여 bge-reranker-base 모델을 최종 적용했습니다.
          </p>
        </ProjectSection>
      </div>
    </div>
  );
}

function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-5 text-2xl font-bold text-slate-900">{title}</h2>

      <div className="leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default ParrotRag;
