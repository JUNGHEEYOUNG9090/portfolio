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
          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            약 50~60개의 앵무새 관련 문서를 Markdown으로 전처리하고, Embedding
            기반 검색과 LLM을 결합하여 문서 근거 기반 답변을 제공하도록
            구현했습니다.
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
          {/* 대표 이미지 */}
          <img
            src="/images/parrot-rag-thumbnail.png"
            alt="Parrot RAG"
            className="mx-auto mt-8 mb-10 w-full max-w-3xl rounded-2xl border border-slate-200 shadow-lg"
          />
          사용자의 질문은 Embedding 기반 검색을 통해 관련 문서를 찾고,
          Re-ranking으로 상위 문서를 선별한 뒤 LLM이 최종 답변을 생성합니다.
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
                Vector Search와 Keyword Search를 결합하여 검색 후보를
                확보했습니다.
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
                Retrieved Documents (20)
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
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              실험 결과 요약
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-xl border border-slate-200">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">단계</th>
                    <th className="px-4 py-3 text-left">개선 내용</th>
                    <th className="px-4 py-3 text-left">결과</th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  <tr className="border-b">
                    <td className="px-4 py-3">1차</td>
                    <td className="px-4 py-3">Vector Search 기반 RAG</td>
                    <td className="px-4 py-3">기본 Pipeline 구축</td>
                  </tr>

                  <tr className="border-b bg-slate-50">
                    <td className="px-4 py-3">2차</td>
                    <td className="px-4 py-3">Markdown Header Chunking</td>
                    <td className="px-4 py-3">검색 정확도 향상</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3">3차</td>
                    <td className="px-4 py-3">Hybrid Search</td>
                    <td className="px-4 py-3">
                      Vector + Keyword 검색 적용 및 후보 검색 개선
                    </td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="px-4 py-3">4차</td>
                    <td className="px-4 py-3">Re-ranking 적용</td>
                    <td className="px-4 py-3">
                      성능과 속도의 균형으로 최종 채택
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 결과 */}
            <div className="mt-8 rounded-xl bg-slate-900 p-6 text-white">
              <h3 className="mb-4 text-lg font-bold">Final Pipeline</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Recall@1</p>

                  <p className="text-3xl font-bold">62.63%</p>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Recall@3</p>

                  <p className="text-3xl font-bold">84.85%</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Evaluation Dataset </p>
                  <p className="text-3xl font-bold">99 Questions</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Final Model </p>
                  <p className="text-3xl font-bold">bge-reranker-base</p>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Trouble Shooting */}
        <ProjectSection title="기술적 의사결정">
          <h3 className="mb-2 text-lg font-bold">후속 질문 검색 실패 개선</h3>

          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            "그럼 먹여도 돼?", "그건?"과 같은 짧은 후속 질문은 이전 대화 맥락이
            반영되지 않아 검색 정확도가 떨어졌습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <p>
            이전 대화 이력을 함께 전달하여 검색 Query를 보강하고, 문맥을 반영한
            Retrieval이 가능하도록 개선했습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <p>
            후속 질문에서도 이전 대화의 맥락을 유지하여 검색 정확도를 향상시킬
            수 있었습니다.
          </p>

          <h3 className="mt-10 mb-2 text-lg font-bold">Reranker 모델 선택</h3>

          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            bge-reranker-large는 검색 품질은 우수했지만 응답 시간이 크게
            증가했습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <p>bge-reranker-base와 성능 및 응답 시간을 비교 평가했습니다.</p>

          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <p>
            검색 성능을 유지하면서 응답 시간을 줄일 수 있어 최종 Pipeline에는
            bge-reranker-base를 적용했습니다.
          </p>
        </ProjectSection>
      </div>
      <div className="mt-16 flex justify-center border-t border-slate-200 pt-10">
        <a
          href="https://github.com/JUNGHEEYOUNG9090/parrot_rag_service"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white font-medium hover:bg-slate-800 transition"
        >
          <FaGithub />
          GitHub
        </a>
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
