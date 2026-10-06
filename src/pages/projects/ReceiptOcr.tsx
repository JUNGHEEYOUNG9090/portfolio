import { FaGithub } from "react-icons/fa";

function ReceiptOcr() {
  const tags = [
    "Python",
    "Java",
    "Spring Boot",
    "FastAPI",
    "REST API",
    "OCR",
    "LLM",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">AI PROJECT</p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900">Receipt AI</h1>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            Java/Spring Boot와 Python/FastAPI를 REST API로 연동하여 PaddleOCR-VL
            기반 영수증 OCR 및 LLM 데이터 처리를 구현한 AI 자동화 서비스입니다.
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
            src="/images/receipt-ocr-thumbnail.png"
            alt="Receipt AI"
            className="mx-auto mt-8 mb-10 w-full max-w-3xl rounded-2xl border border-slate-200 shadow-lg"
          />

          <p className="text-lg leading-relaxed text-slate-600">
            Spring Boot를 중심으로 서비스 서버를 구성하고, GPU가 필요한 OCR
            처리는 Python FastAPI 서버로 분리했습니다. 두 서버는 REST API를 통해
            통신하며 OCR 결과를 LLM으로 검증 및 구조화한 후 Excel 파일로
            변환합니다.
          </p>
        </section>

        {/* Project Overview */}
        <ProjectSection title="프로젝트 소개">
          <p>
            Java/Spring Boot 기반 백엔드에 AI 처리 서버를 연동하는 구조를
            구현하기 위해 개발했습니다.
          </p>

          <p className="mt-4">
            영수증 이미지 처리는 GPU 환경이 필요한 PaddleOCR-VL을 사용하므로
            Python FastAPI 서버로 분리하고, Spring Boot에서 REST API를 통해 OCR
            서버를 호출하도록 구성했습니다.
          </p>

          <p className="mt-4">
            OCR 결과는 LLM을 활용해 검증 및 구조화하고, 최종 데이터를 Spring
            Boot에서 Excel 파일로 생성하도록 구현했습니다.
          </p>
        </ProjectSection>

        {/* Features */}
        <ProjectSection title="주요 기능">
          <ul className="list-disc space-y-2 pl-5">
            <li>영수증 이미지 업로드</li>
            <li>PaddleOCR-VL 기반 영수증 OCR</li>
            <li>LLM을 이용한 OCR 결과 검증 및 구조화</li>
            <li>OCR 처리 상태 표시</li>
            <li>Spring Boot 기반 데이터 처리</li>
            <li>Apache POI 기반 Excel 파일 생성</li>
          </ul>
        </ProjectSection>

        {/* Architecture */}
        <ProjectSection title="시스템 아키텍처">
          <div className="rounded-xl bg-slate-50 p-6 text-center text-slate-700">
            <img
              src="/images/receipt-pipeline.png"
              alt="영수증 업로드"
              className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200"
            />
          </div>

          <p className="mt-6">
            서비스는 Spring Boot를 중심으로 구성하고 OCR 처리는 GPU를 사용하는
            Python FastAPI 서버로 분리했습니다.
          </p>

          <p className="mt-4">
            OCR 서버는 Docker 환경에서 실행하여 PaddlePaddle, PaddleOCR, CUDA 및
            모델 실행 환경을 일정하게 유지할 수 있도록 구성했습니다.
          </p>
        </ProjectSection>

        {/* OCR */}
        <ProjectSection title="OCR 처리">
          <h3 className="mb-2 text-lg font-bold text-slate-900">
            PaddleOCR-VL 1.6
          </h3>

          <div className="mt-6 rounded-lg bg-slate-50 p-5 text-sm text-slate-700">
            <img
              src="/images/receipt-ocr-pipeline.png"
              alt="영수증 업로드"
              className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200"
            />
          </div>

          <p>
            영수증 이미지 분석에는 PaddleOCR-VL 1.6을 사용했습니다. OCR 처리는
            Python FastAPI 서버에서 수행하며 GPU를 활용하도록 구성했습니다.
          </p>
        </ProjectSection>

        {/* Performance */}
        <ProjectSection title="성능 측정">
          <p>
            PaddleOCR-VL의 CPU와 GPU 환경을 비교하여 OCR 추론 성능을
            측정했습니다.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full overflow-hidden rounded-xl border border-slate-200">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">환경</th>
                  <th className="px-4 py-3 text-left">Test 01</th>
                  <th className="px-4 py-3 text-left">Test 03</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="px-4 py-3">CPU</td>
                  <td className="px-4 py-3">332.104초</td>
                  <td className="px-4 py-3">1091.889초</td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="px-4 py-3">RTX 4060</td>
                  <td className="px-4 py-3">30.743초</td>
                  <td className="px-4 py-3">46.644초</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            GPU 환경에서 OCR 추론 시간이 크게 감소하는 것을 확인하여 OCR 서버를
            GPU 환경에서 실행하도록 구성했습니다.
          </p>
        </ProjectSection>

        {/* Technical Decisions */}
        <ProjectSection title="기술적 의사결정">
          <h3 className="mb-2 text-lg font-bold text-slate-900">
            OCR 서버 분리
          </h3>

          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            PaddleOCR-VL은 GPU 메모리와 CUDA 환경을 요구하기 때문에 일반적인
            Java 서버와 동일한 환경에서 관리하기 어려웠습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <p>
            OCR 처리를 Python FastAPI 서버로 분리하고 Spring Boot에서 REST API를
            통해 OCR 서버를 호출하도록 구성했습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <p>
            Java 백엔드와 AI 처리 환경의 역할을 분리하면서 GPU 환경을 독립적으로
            구성할 수 있었습니다.
          </p>

          <h3 className="mt-10 mb-2 text-lg font-bold text-slate-900">
            Docker를 이용한 OCR 환경 구성
          </h3>

          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            PaddlePaddle, CUDA, PaddleOCR 및 모델 환경에 따라 실행 결과가 달라질
            수 있었습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <p>
            OCR 서버를 Docker로 구성하고 NVIDIA GPU를 컨테이너에서 사용할 수
            있도록 환경을 구성했습니다.
          </p>

          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <p>
            OCR 실행 환경을 컨테이너로 관리하여 다른 환경에서도 동일한 Python 및
            PaddleOCR 실행 환경을 구성할 수 있도록 했습니다.
          </p>

          <h3 className="mt-10 mb-2 text-lg font-bold text-slate-900">
            서버 구성 단순화
          </h3>

          <p>
            초기에는 React, Spring Boot, Python OCR 서버를 각각 실행하는
            구조였지만, React를 Spring Boot의 정적 리소스로 통합하여 최종적으로
            서비스 서버와 OCR 서버의 2개 서버 구조로 단순화했습니다.
          </p>
        </ProjectSection>

        {/* Demo */}
        <ProjectSection title="실행 결과">
          <h3 className="mb-4 text-lg font-bold text-slate-900">
            1. 영수증 업로드
          </h3>

          <img
            src="/images/receipt-upload.png"
            alt="영수증 업로드"
            className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200"
          />

          <h3 className="mt-10 mb-4 text-lg font-bold text-slate-900">
            2. OCR 분석
          </h3>

          <img
            src="/images/receipt-processing.png"
            alt="OCR 분석 중"
            className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200"
          />

          <h3 className="mt-10 mb-4 text-lg font-bold text-slate-900">
            3. Excel 생성
          </h3>

          <img
            src="/images/receipt-excel.png"
            alt="Excel 결과"
            className="mx-auto w-full max-w-3xl rounded-xl border border-slate-200"
          />
        </ProjectSection>

        {/* Excel */}
        <ProjectSection title="Excel 생성">
          <p>
            Spring Boot에서 OCR 및 LLM 처리가 완료된 데이터를 이용하여 Excel
            파일을 생성합니다.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-3 py-3">거래일시</th>
                  <th className="px-3 py-3">가게명</th>
                  <th className="px-3 py-3">상품명</th>
                  <th className="px-3 py-3">수량</th>
                  <th className="px-3 py-3">단가</th>
                  <th className="px-3 py-3">금액</th>
                  <th className="px-3 py-3">공급가액</th>
                  <th className="px-3 py-3">부가세</th>
                  <th className="px-3 py-3">합계</th>
                </tr>
              </thead>
            </table>
          </div>
        </ProjectSection>

        <div className="mt-16 flex flex-wrap justify-center gap-4 border-t border-slate-200 pt-10">
          <a
            href="https://github.com/JUNGHEEYOUNG9090/receipt_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-medium text-white transition hover:bg-slate-800"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://github.com/JUNGHEEYOUNG9090/receipt_ai_ocr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-700 px-6 py-4 font-medium text-white transition hover:bg-slate-600"
          >
            <FaGithub />
            OCR Server GitHub
          </a>
        </div>
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

export default ReceiptOcr;
