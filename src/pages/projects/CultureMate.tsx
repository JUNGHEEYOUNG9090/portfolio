import { FaGithub } from "react-icons/fa";

function CultureMate() {
  const tags = [
    "Java",
    "Spring Boot",
    "JPA",
    "REST API",
    "Oracle",
    "React",
    "Next.js",
    "Tailwind CSS",
    "WebSocket",
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">
            WEB PROJECT
          </p>

          <h1 className="mb-5 text-4xl font-bold text-slate-900">컬쳐메이트</h1>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            관심사가 같은 사용자들이 함께 이벤트를 즐길 수 있도록 연결하는
            커뮤니티 기반 동행 모집 플랫폼입니다.
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
            src="/images/culturemate-thumbnail.png"
            alt="CultureMate"
            className="mx-auto mt-8 mb-10 w-full max-w-3xl rounded-2xl border border-slate-200 shadow-lg"
          />
        </section>
        <ProjectSection title="프로젝트 소개">
          <p>
            영화, 공연, 전시 등 다양한 문화 활동을 함께 즐길 수 있도록 관심사가
            같은 사용자를 연결하는 동행 모집 플랫폼입니다.
          </p>
        </ProjectSection>

        <ProjectSection title="주요 기능">
          <ul className="list-disc space-y-2 pl-5">
            <li>JWT 기반 회원 인증 및 로그인</li>
            <li>WebSocket 기반 실시간 채팅</li>
            <li>이벤트 모집 및 참여 기능</li>
            <li>사용자 / 관리자 권한 기반 고객센터</li>
            <li>마이페이지 및 사용자 정보 관리</li>
          </ul>
        </ProjectSection>
        <ProjectSection title="핵심 구현">
          <h3 className="mb-2 font-bold">
            사용자 인증 및 실시간 커뮤니케이션 구현
          </h3>

          <p className="mb-6">
            토큰 기반 인증 방식을 적용하여 사용자 인증 흐름을 구현하고,
            WebSocket을 활용한 실시간 채팅 기능을 개발했습니다. 프론트엔드
            미구현 상황에서는 Thymeleaf를 활용하여 기능 동작 검증 및 테스트를
            진행했습니다.
          </p>

          <h3 className="mb-2 font-bold">고객센터 Q&A 기능 개발</h3>

          <p className="mb-6">
            사용자와 관리자의 권한을 구분하고, 문의 등록 및 답변 처리가 가능한
            고객센터 기능을 구현했습니다.
          </p>

          <h3 className="mb-2 font-bold">서비스 안정화 및 Backend 개선</h3>

          <p>
            API 요청 실패 원인을 분석하여 토큰 관리 문제를 해결하고,
            페이지네이션 처리를 Backend로 이관하여 데이터 처리 일관성을
            개선했습니다.
          </p>
        </ProjectSection>
        <ProjectSection title="문제 해결 사례">
          <h3 className="mb-2 font-bold">
            JWT 및 Spring Security 인가 정책 개선
          </h3>
          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            JWT 인증 적용 과정에서 엔드포인트별 접근 권한 설정이 명확하지 않아
            정상적인 인증 토큰을 보유한 사용자도 일부 API 요청에서 403 Forbidden
            오류가 발생했습니다.
          </p>
          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>인증이 필요 없는 Public API와 보호 API 경로를 분리했습니다.</li>
            <li>
              HTTP Method(GET/POST/PUT)에 따른 접근 권한 정책을 정의했습니다.
            </li>
            <li>
              Spring Security 설정을 개선하여 역할(Role) 기반 인가 구조를
              적용했습니다.
            </li>
          </ul>
          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>인증/인가 흐름 분리를 통해 403 오류 해결하였습니다.</li>
            <li>사용자 권한 기반 접근 제어 구조 확립하였습니다.</li>
          </ul>
          <h3 className="mt-8 mb-2 font-bold">
            WebSocket 기반 실시간 채팅 구조 개선
          </h3>
          <h4 className="mt-4 font-semibold text-slate-800">문제</h4>
          <p>
            초기 채팅 기능은 메시지를 DB에 저장하고 사용자가 데이터를 다시
            조회하는 방식으로 구현했습니다. 하지만 사용자가 직접 화면을 갱신해야
            메시지를 확인할 수 있어 실시간 채팅 경험을 제공하기 어려웠습니다.
          </p>
          <h4 className="mt-4 font-semibold text-slate-800">해결</h4>
          <p>
            실시간 양방향 통신이 필요한 채팅 기능 특성을 고려하여 WebSocket 기반
            통신 구조로 변경했습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              WebSocket 연결을 통한 실시간 메시지 전달 구조 구현하였습니다.
            </li>
            <li>
              기존 저장 중심 방식에서 실시간 전달 방식으로 개선하였습니다.
            </li>
            <li>채팅 데이터 저장과 메시지 전달 흐름 분리하였습니다.</li>
          </ul>
          <h4 className="mt-4 font-semibold text-slate-800">결과</h4>
          <p>
            사용자 간 즉각적인 메시지 교환이 가능한 실시간 채팅 기능을
            구현했습니다.
          </p>
        </ProjectSection>
      </div>
      <div className="mt-16 flex flex-col items-center gap-4 border-t border-slate-200 pt-10 sm:flex-row sm:justify-center">
        <a
          href="https://github.com/JUNGHEEYOUNG9090/culture-mate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-white"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://culturemate.notion.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-slate-900 border border-slate-200"
        >
          Development Log
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
export default CultureMate;
