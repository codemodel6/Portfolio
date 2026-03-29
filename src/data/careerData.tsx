export interface CareerItem {
  title: string
  contents: string
}

export interface CareerProject {
  companyTitle: string
  companyContents: string
  companyDay: string
  careers: CareerItem[]
}



export const careerData1: CareerProject = {
  companyTitle: '한컴케어링크',
  companyContents: '한글과컴퓨터 계열사',
  companyDay: '2025.02 - NOW',
  careers: [
  {
    title: '케어해',
    contents:
   '- 머신러닝 API 연동을 통한 사용자의 질병 발생 확률 예측 서비스 개발\n- 대규모 트래픽 유입으로 발생한 Cloud NAT 포트 고갈 장애 원인 분석 및 서비스 안정화\n- 부하 테스트 기반 Cloud Run 인프라 용량 산정 및 CPU/Memory·Auto Scaling 설정\n- 하드코딩된 이용약관을 DB 기반 에디터 관리 구조로 전환하여 법적 요구사항 대응 및 모듈화\n- Rich Text Editor 기반 텍스트 편집기 개발 및 저장 데이터 토큰화 적용 (DB 저장 성능 약 80% 개선)\n- 설문조사를 위한 문진표 공통 템플릿 설계·개발 및 기존 설문 구조 공통화, DB 관리 체계 구축\n- 운영팀 요청 기반 회원 데이터 처리 및 서비스 운영 이슈 대응\n- Gemini CLI 도입을 통해 개발 및 유지보수 생산성 향상\n- Codex 및 Codex CLI 도입 후 프로젝트 구조 분석 및 이해를 위한 명령어 스크립트 제작·공유\n- FigmaMake 활용 PDF 제작 자동화 스크립트 공유로 문서 제작 시간 단축\n- Google 스프레드시트 Gemini 기능을 활용하여 기획 요구사항을 JSON 구조로 변환하는 가이드 제작 및 공유\n- AI Agent 기반 업무 자동화 모델 도입 및 적용 검토'   
  },
  {
    title: '케어해 어드민',
    contents:
      '- 레거시 프로젝트의 회원 관리 기능 분석 후 Next.js 전환 (쿼리 구조 개선 및 통신 최적화를 통해 데이터 조회 성능 약 80% 개선)\n- 엑셀 업로드 기능 트랜잭션 처리 및 데이터 가공 구조 개선 (업로드 속도 약 90% 개선 및 데이터 제한 제거)\n- Chart.js 기반 통계 대시보드 개발 및 프론트엔드 데이터 가공 처리\n- react-pdf-renderer를 활용하여 그래프 및 테이블이 포함된 통계 리포트 PDF 생성 기능 개발\n- 신규 기능 개발을 위한 DB 테이블 설계 및 관리' },
  {
    title: 'GX - 유전체 분석 병원 관리 시스템',
    contents:
      '- Next.js + TypeScript 기반의 프론트엔드 로직 개발\n- 커스텀 React Query 훅을 활용한 백엔드 통신 및 데이터 관리\n- 커스텀 Form Field와 Grid 문법을 적용한 게시판 관리 기능 구현\n- Zod를 활용한 popover 기반 실시간 Validation 제작\n- React-Pdf-Renderer를 통한 컴포넌트 PDF 문서화 기능 개발\n- Excel 업로드/다운로드 및 특정 필드 타입 변환 기능 구현\n- 공통 서명 컴포넌트 개발 및 Firebase를 사용한 전자서명 이미지 관리\n- Nest.js 기반 모듈-서비스-컨트롤러 아키텍처 설계 및 개발\n- 트랜잭션을 사용한 멀티 테이블 업데이트 및 오류 관리 로직 구현\n- TypeORM 엔티티 기반의 커스텀 쿼리 작성\n- 엔티티 연관관계 순환 참조 문제 해결\n- Base64 긴 평문을 Firebase 이미지로 변환하여 DB 용량 약 30% 절감\n- 커스텀 훅 분석 및 도입을 통한 코드 품질 개선\n- GCP Cloud Run 프로젝트 초기 세팅 및 Cloud SQL 연결\n- 외부 IP 차단 및 인스턴스 동시 요청 수/커넥션 풀 모니터링\n- YAML 기반 GCP & GitLab 자동화 배포 파이프라인 구축\n- Google Chat 연동을 통한 배포 진행 상황 알림 설정\n- Docker를 사용한 모노레포 프로젝트 배포 세팅 및 진행\n- 레거시 Tomcat 서버 이전 후 가비아 서브 도메인 IPv4 변경 작업 수행\n- History 테이블 트리거 설정 및 관리\n- 서비스 발전을 위한 신규 컬럼 추가 및 DB/스키마 변경\n- MariaDB → MySQL DB Dump 복호화 및 마이그레이션 진행\n- 사용자 요구사항에 따른 데이터 처리 진행' 
    },
  ]
}

export const careerData2: CareerProject = {
  companyTitle: 'HNWorks',
  companyContents: '현대오토에버 우수 협력사 기업',
  companyDay: '2023.05 - 2024.11',
  careers: [
  {
    title: '한국전기연구원 ML 시스템 (2차)',
    contents:
      '- 백엔드 서버로 파일을 전달하는 모듈 공통화 작업 진행\n- React Query 캐시를 활용한 데이터 관리로 통신 자원 효율화\n- JavaScript → TypeScript 변환 리팩토링 진행\n- 재사용 가능한 함수 및 컴포넌트 구조 리팩토링\n- Chart.js 기반 데이터 시각화 고도화\n- 머신러닝 학습 방식 변경에 따른 데이터 변환 리팩토링'
     },
  {
    title: '현대 VMS 프로젝트',
    contents:
      '- 특정 시간 배치 작업에 DB 조회 쿼리를 추가하여 메일 발송 기능 구현\n- 요청 기반 JSON 응답 JSP 페이지 제작 및 통신 처리\n- Android KitKat → SDK 33(Tiramisu) 버전 업그레이드\n- JSP 기반 페이지 반응형 CSS 적용\n- Nexacro14 기반 파일 첨부 게시판 기능 개발\n- 공지사항 팝업 페이지 기능 구현\n- Oracle DML 기반 유지보수 작업 수행'
     },
  {
    title: '사내 평가 프로젝트',
    contents:
      '- Thymeleaf 기반 바닐라 JS 동적 페이지 개발\n- 유연한 데이터 대응을 위한 공통 날짜/시간 함수 모듈 설계\n- Spring Boot MVC 기반 백엔드 로직 구현 및 MariaDB 쿼리 작성\n- toastUI 기반 검색 기능 구현'
     },
  {
    title: '현대 NIDS 프로젝트',
    contents:
      '- 3중 depth UI 구조(콤보박스/라디오) 사용자 편의 화면 구현\n- 600줄 이상의 복합 SQL 작성 (with, join, group by 활용)\n- Oracle pivot을 활용한 데이터 시각화 구조 개선\n- Oracle DML 기반 유지보수 작업 수행'
     },
  {
    title: '한국전기연구원 ML 시스템 (1차)',
    contents:
      '- 재귀 알고리즘을 활용한 데이터 정렬 로직 구현\n- 로그인 및 세션 유지 기능 구현\n- CSV 파일 업로드/다운로드 기능 개발\n- Express 기반 CSV 파싱 및 JSON 변환 API 구현\n- 머신러닝 백엔드와의 API 통신 연결\n- Chart.js 기반 데이터 시각화 구현\n- 애니메이션 기반 모달 및 캔버스 UI 구현\n- Bootstrap 기반 UI 컴포넌트 구현\n- 학습 데이터 조회 게시판 개발'
     },
  ]
}


export const careerProjects: CareerProject[] = [careerData1, careerData2]