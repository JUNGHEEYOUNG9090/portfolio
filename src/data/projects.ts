import parrotThumbnail from "../../public/images/parrot-rag-thumbnail.png";
import geumbangThumbnail from "../../public/images/geumbang-thumbnail.gif";
import culturemateThumbnail from "../../public/images/culturemate-thumbnail.png";
import receiptocrthumbnail from "../../public/images/receipt-ocr-thumbnail.png";

export const projects = [
  {
    id: 1,
    title: "Receipt AI",
    description:
      "영수증 이미지를 업로드하면 PaddleOCR-VL 기반 OCR을 이용해 영수증 데이터를 추출하고 LLM으로 추론하여 Excel 파일로 변환하는 AI 자동화 서비스입니다.",
    stack: [
      "Python",
      "Java",
      "Spring Boot",
      "FastAPI",
      "REST API",
      "OCR",
      "LLM",
      "Docker",
    ],
    github: "https://github.com/JUNGHEEYOUNG9090/receipt_ai",
    detail: "/projects/ReceiptOcr",
    role: "개인프로젝트",
    thumbnail: receiptocrthumbnail,
  },
  {
    id: 2,
    title: "Parrot RAG",
    description:
      "앵무새 지식 문서를 기반으로 답변하는 RAG 챗봇 서비스를 구축하고, 검색 품질 개선과 LLM 응답 생성을 구현했습니다.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangSmith",
      "Groq",
      "Supabase",
      "BAAI/bge-m3",
      "Sentence Transformers",
      "Tavily",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    github: "https://github.com/JUNGHEEYOUNG9090/parrot_rag_service",
    detail: "/projects/parrot-rag",
    role: "개인프로젝트",
    thumbnail: parrotThumbnail,
  },
  {
    id: 3,
    title: "금방",
    description:
      "CLIP 기반 이미지 임베딩 파이프라인을 구축하고 RunPod Serverless를 활용해 대량 이미지 처리 자동화를 구현했습니다.",
    stack: [
      "Python",
      "CLIP",
      "React",
      "FastAPI",
      "Tailwind CSS",
      "PostgreSQL",
      "Runpod Serverless",
      "AWS",
    ],
    github: "https://github.com/JUNGHEEYOUNG9090/SKN23-FINAL-1Team",
    detail: "/projects/geumbang",
    role: "Runpod Serverless 파이프라인 담당",
    thumbnail: geumbangThumbnail,
  },
  {
    id: 4,
    title: "컬처메이트",
    description:
      "사용자 간 동행 모집을 위한 웹 서비스를 개발하고 REST API 기반 서비스 구조를 구현했습니다.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Oracle Database",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/JUNGHEEYOUNG9090/culture-mate",
    detail: "/projects/culturemate",
    role: "Backend 개발",
    thumbnail: culturemateThumbnail,
  },
];
