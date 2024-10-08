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
    { contents: '컴퓨터공학과 과대표(2017 - 2019)' },
    { contents: 'C, Java, Python, Linux, Visual Basic Android studio' },
    { contents: 'Java Web APP, Arduino 컴퓨터 과학, 컴퓨터 구조' },
    { contents: 'Network, SQL 자료구조, 알고리즘, 인공지능, 머신러닝' },
    { contents: '성적 우수 장학금 수여' },
    { contents: '스펙쌓기 장학금 수여(자격증 취득 장학금)' }
  ]
}

export const codeData: EducationDataProps = {
  title: '코드스테이츠 (Code States)',
  day: '2022.08 - 2023.02',
  contentsList: [
    { contents: 'Frontend 개발을 위한 학습 (HTML5, CSS3, Javascript, React)' },
    { contents: '코딩 테스트 학습 (Javascript, 자료구조, 알고리즘)' },
    { contents: '페어프로그래밍, 협업 프로젝트(git), 멘토링 진행' }
  ]
}

export const certificateData: CertificateProps[] = [
  {
    title: '정보 처리 기사',
    day: '2022.11'
  },
  {
    title: '​SQLD',
    day: '2023.10'
  },
  {
    title: '리눅스 마스터 2급',
    day: '2021.07'
  },
  {
    title: '컴퓨터 활용능력 2급',
    day: '2021.04'
  }
]
