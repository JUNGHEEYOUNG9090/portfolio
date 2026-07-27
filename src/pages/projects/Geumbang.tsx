import { FaGithub } from "react-icons/fa";

function Geumbang() {
  const tags = [
    "Python",
    "FastAPI",
    "CLIP",
    "RunPod Serverless",
    "PostgreSQL",
    "pgvector",
    "React",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">AI PROJECT</p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900">금방</h1>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            생성형 AI 기반 주거 공간 시각화와 이미지 임베딩 기반 시맨틱 매칭
            추천 서비스입니다.
          </p>

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
            src="/images/geumbang-thumbnail.gif"
            alt="Geumbang"
            className="mx-auto mt-8 mb-10 w-full max-w-3xl rounded-2xl border border-slate-200 shadow-lg"
          />
        </section>

        <ProjectSection title="프로젝트 소개">
          <p>
            사용자가 원하는 주거 공간 이미지를 생성하고, 실제 매물 이미지와
            비교하여 유사한 공간을 추천하는 AI 기반 주거 서비스입니다.
          </p>
        </ProjectSection>

        <ProjectSection title="주요 기능">
          <ul className="list-disc space-y-2 pl-5">
            <li>GPT-Image 기반 주거 공간 이미지 생성</li>
            <li>CLIP Embedding 기반 이미지 의미 검색</li>
            <li>pgvector 기반 벡터 유사도 검색</li>
            <li>RunPod Serverless 기반 이미지 처리 Pipeline</li>
            <li>OAuth 2.0 기반 소셜 로그인</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="AI 기반 이미지 매칭 Pipeline">
          <img
            src="/images/geumbang-pipeline.png"
            alt="Geumbang Pipeline"
            className="mx-auto max-h-[800px] rounded-xl"
          />
        </ProjectSection>

        <ProjectSection title="핵심 구현">
          <h3 className="mb-2 font-bold">
            Serverless 기반 이미지 처리 Pipeline
          </h3>

          <p className="mb-6">
            매일 증가하는 실거래 매물 이미지를 처리하기 위해 RunPod Serverless
            GPU 환경을 활용한 배치 Pipeline을 구현했습니다. 상시 GPU 서버 운영
            대신 필요한 시간에만 GPU 자원을 할당하여 비용 효율적인 구조를
            설계했습니다.
          </p>

          <h3 className="mb-2 font-bold">CLIP Embedding 기반 이미지 검색</h3>

          <p>
            OpenAI CLIP 모델을 활용하여 이미지 벡터를 생성하고, PostgreSQL
            pgvector 기반 유사도 검색을 구현했습니다.
          </p>
        </ProjectSection>

        <ProjectSection title="기술적 의사결정">
          <h3 className="mt-4 mb-2 font-bold">RunPod Serverless 선택</h3>
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  1
                </span>

                <h3 className="text-lg font-bold text-slate-900">초기 구현</h3>
              </div>

              <p className="mb-4 text-slate-600">
                대량 이미지 Embedding 처리를 위해 상시 GPU 서버 대신 RunPod
                Serverless 기반 배치 구조를 선택했습니다. 초기 Docker 기반 환경
                구성 과정에서 이미지 다운로드 Timeout과 파일 검증 오류가
                발생했습니다.
              </p>

              <div className="rounded-lg bg-white p-4 text-sm text-slate-700 shadow-sm">
                Crawling Data
                <br />
                ↓
                <br />
                RunPod Serverless
                <br />
                ↓
                <br />
                CLIP Embedding
                <br />
                ↓
                <br />
                pgvector 저장
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  2
                </span>

                <h3 className="text-lg font-bold text-slate-900">모델 변경</h3>
              </div>

              <p className="text-slate-600">
                초기에는 Text Embedding 모델을 잘못 적용하여 이미지 특징을
                추출하지 못하는 문제가 있었습니다. 이미지와 텍스트 간 의미
                매칭이 가능한 CLIP 모델로 변경하여 Pipeline 방향을 수정했습니다.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  3
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  Pipeline 최적화
                </h3>
              </div>

              <p className="text-slate-600">
                CLIP 모델을 Docker Container 환경으로 구성하고, 이미지 RGB 변환
                및 Padding, Normalization 전처리를 적용하여 Serverless 환경에서
                자동 Embedding 생성 Pipeline을 구축했습니다.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  4
                </span>

                <h3 className="text-lg font-bold text-slate-900">최종 결과</h3>
              </div>
              <p className="mb-4 text-slate-600">
                Cron 기반 자정 배치 작업으로 신규 매물 이미지를 자동 처리하고,
                GPU 자원을 필요한 시점에만 사용하는 비용 효율적인 구조를
                완성했습니다.
              </p>
            </div>
          </div>
          <h4 className="mb-2 font-bold"></h4>
        </ProjectSection>

        <h3 className="mb-4 text-xl font-bold text-slate-900">성능 결과</h3>
        <div className="overflow-x-auto">
          <table className="w-full overflow-hidden rounded-xl border border-slate-200">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">측정 항목</th>
                <th className="px-4 py-3 text-left">결과</th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              <tr className="border-b">
                <td className="px-4 py-3">일일 처리 이미지</td>
                <td className="px-4 py-3">10,000+ 건</td>
              </tr>

              <tr className="border-b bg-slate-50">
                <td className="px-4 py-3">처리 방식</td>
                <td className="px-4 py-3">50장 단위</td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-3">기존 CPU 환경</td>
                <td className="px-4 py-3">약 4시간</td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-3">RunPod GPU 환경</td>
                <td className="px-4 py-3">약 10분</td>
              </tr>

              <tr className="bg-slate-50">
                <td className="px-4 py-3">처리 시간 개선</td>
                <td className="px-4 py-3">약 24배 개선 (약 4시간 → 약 10분)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 flex justify-center border-t border-slate-200 pt-10">
        <a
          href="https://github.com/JUNGHEEYOUNG9090/SKN23-FINAL-1Team"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white"
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

export default Geumbang;
