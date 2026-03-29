interface ContentsProps {
  contents: string
}

export interface EducationDataProps {
  title: string
  day: string
  contentsList: ContentsProps[]
}

export interface CertificateProps {
  title: string
  day: string
}

export const schoolData: EducationDataProps = {
  title: '성결대학교 컴퓨터공학과',
  day: '2017.03 - 2023.02',
  contentsList: [
    { contents: '컴퓨터공학과 전공 이수 (2017 - 2019)' },
    { contents: 'C, Java, Python, Linux, Visual Basic, Android Studio 학습' },
    { contents: 'Java Web App, Arduino, 컴퓨터공학, 컴퓨터구조 수강' },
    { contents: 'Network, SQL, 자료구조, 알고리즘, 인공지능, 머신러닝 학습' },
    { contents: '성적 우수 장학금 수여' },
    { contents: 'SW개발기초 장학금 수여 (자격증 취득 장학금)' }
  ]
}

export const codeData: EducationDataProps = {
  title: '코드스테이츠 (Code States)',
  day: '2022.08 - 2023.02',
  contentsList: [
    { contents: 'Frontend 개발을 위한 학습 (HTML5, CSS3, JavaScript, React)' },
    { contents: '코딩 테스트 학습 (JavaScript, 자료구조, 알고리즘)' },
    { contents: '페어 프로그래밍, 협업 프로젝트(git), 멘토링 진행' }
  ]
}

export const certificateData: CertificateProps[] = [
  {
    title: '정보처리기사',
    day: '2022.11'
  },
  {
    title: 'ADSP',
    day: '2025.11'
  },
  {
    title: 'SQLD',
    day: '2023.10'
  },
  {
    title: '리눅스마스터 2급',
    day: '2021.07'
  },
  {
    title: '컴퓨터활용능력 2급',
    day: '2021.04'
  }
]

export const languageData: CertificateProps[] = [
  {
    title: 'Toeic Speaking',
    day: 'IM2'
  }
]
