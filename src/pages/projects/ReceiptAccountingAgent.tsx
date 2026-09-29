import { FaGithub } from "react-icons/fa";

function ReceiptAccountingAgent() {
  const tags = [
    "Python",
    "FastAPI",
    "LangGraph",
    "OpenAI",
    "Supabase",
    "React",
    "PaddleOCR",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">AI PROJECT</p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900">
            Receipt Accounting Agent
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            영수증 데이터를 기반으로 지출 내역을 자동으로 분류하고 가계부에
            저장하는 AI Agent 서비스입니다.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            LangGraph를 활용하여 가계부 데이터의 상태에 따라 기존 분류 결과를
            재사용하거나 필요한 경우에만 AI 분류를 수행하도록 조건부 Workflow를
            구성했습니다.
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

          <img
            src="/images/ledger_read.png"
            alt="Receipt Accounting Agent"
            className="mx-auto max-h-[600px] rounded-xl"
          />
        </section>

        {/* Project Overview */}
        <ProjectSection title="프로젝트 소개">
          <p>
            영수증에서 추출한 상품명과 결제 금액을 바탕으로 지출 내역을 자동으로
            분류하고 가계부에 저장하는 서비스를 개발했습니다.
          </p>

          <p className="mt-4">
            단순히 영수증을 분석하고 LLM을 호출하는 방식이 아니라, 저장된 가계부
            데이터의 상태를 확인한 후 필요한 작업만 수행하도록 Workflow를
            구성했습니다.
          </p>

          <p className="mt-4">
            이미 분류된 데이터는 기존 결과를 재사용하고, 아직 분류되지 않은
            데이터에 대해서만 LangGraph를 통해 AI 분류를 수행합니다.
          </p>
        </ProjectSection>

        {/* Problem */}
        <ProjectSection title="프로젝트 목표">
          <div className="grid gap-6 md:grid-cols-3">
            <ProblemCard
              title="입력 자동화"
              description="영수증의 상품명, 수량, 금액 등의 정보를 자동으로 추출합니다."
            />

            <ProblemCard
              title="지출 분류"
              description="추출된 데이터를 식비, 생활비 등의 가계부 카테고리로 분류합니다."
            />

            <ProblemCard
              title="AI 호출 최소화"
              description="이미 분류된 데이터는 기존 결과를 재사용하여 불필요한 AI 호출을 줄입니다."
            />
          </div>
        </ProjectSection>

        {/* Features */}
        <ProjectSection title="주요 기능">
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="영수증 데이터 추출"
              description="OCR 또는 Vision을 이용하여 영수증의 상품명, 수량, 금액 등의 데이터를 구조화합니다."
            />

            <FeatureCard
              title="가계부 자동 분류"
              description="영수증 및 품목 데이터를 식비, 생활비 등의 카테고리로 분류합니다."
            />

            <FeatureCard
              title="LangGraph Workflow"
              description="DB 상태를 확인하고 조건에 따라 기존 결과를 사용하거나 AI 분류를 실행합니다."
            />

            <FeatureCard
              title="가계부 데이터 관리"
              description="영수증과 품목 데이터를 Supabase에 저장하고 조회 및 관리할 수 있습니다."
            />
          </div>
        </ProjectSection>

        {/* Accounting Flow */}
        <ProjectSection title="가계부 처리 흐름">
          <p className="mb-8">
            영수증 분석 결과는 LangGraph 기반의 Receipt Pipeline을 거쳐 가계부
            데이터로 처리됩니다. 이후 Supabase에 저장된 영수증과 품목 데이터를
            조회하거나 수정할 수 있습니다.
          </p>

          <div className="rounded-2xl bg-slate-900 p-8 text-center text-white">
            <FlowStep text="영수증 분석" />
            <FlowArrow />

            <div className="mx-auto grid max-w-xl gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-white p-5 text-slate-900">
                <p className="font-bold">OCR + LLM</p>
                <p className="mt-1 text-sm text-slate-500">
                  OCR 결과를 기반으로 데이터 구조화
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 text-slate-900">
                <p className="font-bold">Vision</p>
                <p className="mt-1 text-sm text-slate-500">
                  이미지에서 직접 영수증 데이터 추출
                </p>
              </div>
            </div>

            <FlowArrow />

            <FlowStep text="receipt_graph (LangGraph)" />

            <FlowArrow />

            <FlowStep text="가계부 데이터 처리" />

            <FlowArrow />

            <div className="mx-auto grid max-w-xl gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-white p-5 text-slate-900">
                <p className="font-bold">receipts</p>
                <p className="mt-1 text-sm text-slate-500">
                  영수증 및 결제 정보
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 text-slate-900">
                <p className="font-bold">receipt_items</p>
                <p className="mt-1 text-sm text-slate-500">영수증 품목 정보</p>
              </div>
            </div>

            <FlowArrow />

            <FlowStep text="Supabase" />

            <FlowArrow />

            <div className="mx-auto grid max-w-xl gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white p-4 text-slate-900">조회</div>

              <div className="rounded-xl bg-white p-4 text-slate-900">수정</div>

              <div className="rounded-xl bg-white p-4 text-slate-900">삭제</div>
            </div>
          </div>
        </ProjectSection>

        {/* LangGraph */}
        <ProjectSection title="LangGraph Workflow">
          <p>
            영수증 분석 결과를 LangGraph의
            <strong className="text-slate-900"> Receipt Pipeline</strong>에
            전달하여 이후 가계부 처리 과정을 수행합니다.
          </p>

          <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="mx-auto max-w-sm rounded-xl bg-white p-5 text-center shadow-sm">
              <p className="font-bold text-slate-900">영수증 분석 결과</p>

              <p className="mt-1 text-sm text-slate-500">
                OCR + LLM 또는 Vision
              </p>
            </div>

            <div className="py-4 text-center text-xl text-slate-400">↓</div>

            <div className="mx-auto max-w-sm rounded-xl bg-blue-600 p-5 text-center text-white shadow-sm">
              <p className="font-bold">receipt_graph</p>

              <p className="mt-1 text-sm text-blue-100">
                LangGraph Receipt Pipeline
              </p>
            </div>

            <div className="py-4 text-center text-xl text-slate-400">↓</div>

            <div className="mx-auto max-w-sm rounded-xl bg-white p-5 text-center shadow-sm">
              <p className="font-bold text-slate-900">가계부 데이터 처리</p>

              <p className="mt-1 text-sm text-slate-500">
                영수증 및 품목 데이터
              </p>
            </div>

            <div className="py-4 text-center text-xl text-slate-400">↓</div>

            <div className="mx-auto max-w-sm rounded-xl bg-white p-5 text-center shadow-sm">
              <p className="font-bold text-slate-900">Supabase</p>

              <p className="mt-1 text-sm text-slate-500">
                receipts / receipt_items
              </p>
            </div>
          </div>

          <h3 className="mb-4 text-lg font-bold text-slate-900">
            Agent 실행 방식
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="mb-3 font-bold text-slate-900">
                Receipt ID 기반 실행
              </h4>

              <p className="text-sm">
                저장된 영수증의 ID를 전달하여 Receipt Pipeline을 실행합니다.
              </p>

              <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-white">
                receipt_graph.invoke(
                {"{"}
                <br />
                &nbsp;&nbsp;"receipt_id": receipt_id
                <br />
                {"}"})
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="mb-3 font-bold text-slate-900">
                Vision 결과 기반 실행
              </h4>

              <p className="text-sm">
                Vision으로 생성한 영수증 데이터를 State로 구성한 뒤 동일한
                Receipt Pipeline으로 전달합니다.
              </p>

              <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-white">
                state = load_vision_receipt(filename)
                <br />
                <br />
                receipt_graph.invoke(state)
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* Why LangGraph */}
        <ProjectSection title="왜 LangGraph를 사용했는가?">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                단순 LLM 호출
              </h3>

              <div className="rounded-lg bg-white p-4 text-center text-sm">
                가계부 데이터
                <br />
                ↓
                <br />
                LLM
                <br />
                ↓
                <br />
                카테고리
              </div>

              <p className="mt-4 text-sm">
                모든 요청에서 AI를 호출하기 때문에 이미 분류된 데이터도 다시
                처리하게 됩니다.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                LangGraph Workflow
              </h3>

              <div className="rounded-lg bg-white p-4 text-center text-sm">
                가계부 데이터
                <br />
                ↓
                <br />
                DB 상태 확인
                <br />
                ↓
                <br />
                조건부 분기
                <br />
                ↓
                <br />
                필요한 경우에만 AI
              </div>

              <p className="mt-4 text-sm">
                DB 상태에 따라 기존 결과를 재사용하거나 AI 분류를 수행하도록
                Workflow를 구성했습니다.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* Database */}
        <ProjectSection title="가계부 데이터 구조">
          <p className="mb-6">
            영수증과 영수증 품목을 분리하여 관리하고, 영수증 및 개별 품목에
            카테고리를 연결할 수 있도록 관계형 데이터 구조를 구성했습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-xl border border-slate-200">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Table</th>

                  <th className="px-4 py-3 text-left">역할</th>

                  <th className="px-4 py-3 text-left">주요 데이터</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">categories</td>

                  <td className="px-4 py-3">가계부 카테고리</td>

                  <td className="px-4 py-3">카테고리명, 설명</td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="px-4 py-3 font-medium">receipts</td>

                  <td className="px-4 py-3">영수증 및 결제 정보</td>

                  <td className="px-4 py-3">
                    가맹점, 거래일, 공급가, VAT, 총액, 결제수단, category_id
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-medium">receipt_items</td>

                  <td className="px-4 py-3">영수증 품목</td>

                  <td className="px-4 py-3">
                    상품명, 수량, 단가, 금액, category_id
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl bg-slate-50 p-6">
            <p className="mb-5 font-semibold text-slate-900">데이터 관계</p>

            <div className="mx-auto max-w-xl text-center">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-bold">categories</p>
              </div>

              <div className="py-3 text-slate-400">↑ category_id</div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-bold">receipts</p>

                  <p className="mt-2 text-sm text-slate-500">
                    영수증 단위 분류
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-bold">receipt_items</p>

                  <p className="mt-2 text-sm text-slate-500">품목 단위 분류</p>
                </div>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* AI Comparison */}
        <ProjectSection title="영수증 분석 방식 비교">
          <p>
            가계부에 사용할 데이터를 생성하는 과정에서는 OCR + LLM과 Vision
            방식을 비교했습니다. 동일한 영수증을 대상으로 정확도, 처리 시간,
            비용을 측정했습니다.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                OCR + LLM
              </h3>

              <p>
                PaddleOCR을 이용하여 텍스트를 추출한 후 LLM으로 영수증 데이터를
                구조화합니다.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Vision</h3>

              <p>
                영수증 이미지를 Vision 모델에 직접 전달하여 구조화된 데이터를
                생성합니다.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">비교 기준</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "추출 정확도",
                "처리 시간",
                "API 비용",
                "상품명",
                "수량",
                "금액",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ProjectSection>

        {/* Technical Decisions */}
        <ProjectSection title="기술적 의사결정">
          <Decision
            title="LangGraph를 가계부 Workflow에 적용"
            description="단순한 LLM 호출이 아니라 DB 상태에 따라 기존 분류 결과를 재사용하거나 AI 분류를 실행하는 조건부 Workflow를 구성하기 위해 LangGraph를 사용했습니다."
          />

          <Decision
            title="분류 결과 재사용"
            description="category_id가 이미 존재하는 데이터는 AI를 다시 호출하지 않고 기존 분류 결과를 사용하도록 구성했습니다."
          />

          <Decision
            title="관계형 DB 기반 가계부 관리"
            description="영수증과 품목처럼 구조화된 데이터를 관리하는 서비스이므로 Supabase의 관계형 테이블과 SQL 기반 조회 및 수정을 사용했습니다."
          />

          <Decision
            title="OCR 서버 분리"
            description="PaddleOCR은 별도의 FastAPI 서버에서 실행하고 메인 Agent에서는 OCR 결과를 전달받아 이후 처리를 담당하도록 구성했습니다."
          />
        </ProjectSection>

        {/* Demo */}
        <ProjectSection title="Demo">
          <h3 className="mb-3 text-lg font-bold text-slate-900">
            1. 가계부 조회
          </h3>

          <img
            src="/images/ledger_read.png"
            alt="Accounting main"
            className="mx-auto w-full max-w-4xl rounded-xl border border-slate-200 shadow-sm"
          />

          <p className="mt-4">
            날짜별 영수증과 품목 데이터를 조회하고 해당 날짜의 총 지출 금액을
            확인할 수 있습니다.
          </p>

          <h3 className="mt-10 mb-3 text-lg font-bold text-slate-900">
            2. 가계부 수정 및 카테고리 관리
          </h3>

          <div className="grid grid-cols-6 gap-4">
            <img
              src="/images/ledger_update1.png"
              alt="Accounting category"
              className="col-span-3 w-full rounded-xl"
            />
            <img
              src="/images/ledger_update2.png"
              alt="Accounting category"
              className="col-span-3 w-full rounded-xl"
            />

            <img
              src="/images/ledger_update3.png"
              alt="Accounting category"
              className="col-span-2 w-full rounded-xl"
            />
            <img
              src="/images/ledger_update4.png"
              alt="Accounting category"
              className="col-span-2 w-full rounded-xl"
            />
            <img
              src="/images/ledger_update5.png"
              alt="Accounting category"
              className="col-span-2 w-full rounded-xl"
            />
          </div>

          <p className="mt-4">
            영수증의 결제 정보와 품목을 수정하고 영수증 및 개별 품목의
            카테고리를 관리할 수 있습니다.
          </p>

          <h3 className="mt-10 mb-3 text-lg font-bold text-slate-900">
            3. AI 분석 결과 비교
          </h3>

          <img
            src="/images/excel_shot.png"
            alt="Receipt analysis comparison"
            className="mx-auto w-full max-w-5xl rounded-xl border border-slate-200 shadow-sm"
          />

          <p className="mt-4">
            OCR + LLM과 Vision 방식으로 생성한 영수증 데이터를 비교하여 추출
            결과와 처리 비용을 확인했습니다.
          </p>
        </ProjectSection>

        {/* GitHub */}
        <div className="mt-16 flex justify-center border-t border-slate-200 pt-10">
          <a
            href="https://github.com/JUNGHEEYOUNG9090/receipt_accounting_agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white"
          >
            <FaGithub />
            GitHub
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

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="mb-3 font-bold text-slate-900">{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function FlowStep({ text }: { text: string }) {
  return (
    <div className="mx-auto max-w-xs rounded-xl bg-white px-6 py-4 font-bold text-slate-900">
      {text}
    </div>
  );
}

function FlowArrow() {
  return <div className="py-3 text-xl text-slate-400">↓</div>;
}

function Decision({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default ReceiptAccountingAgent;
