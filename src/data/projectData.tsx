import mewToon1 from '@/assets/styles/image/projectImg/mewToon1.gif'
import mewToon2 from '@/assets/styles/image/projectImg/mewToon2.gif'
import oracle1 from '@/assets/styles/image/projectImg/oracle1.jpg'
import oracle2 from '@/assets/styles/image/projectImg/oracle2.jpg'
import indigo1 from '@/assets/styles/image/projectImg/indigo1.gif'
import indigo2 from '@/assets/styles/image/projectImg/indigo2.gif'
import stack1 from '@/assets/styles/image/projectImg/stack1.jpg'
import stack2 from '@/assets/styles/image/projectImg/stack2.jpg'

export interface ProjectProps {
  reverse: boolean
  projectColor: string
  title: string
  subTitle: string
  content: string
  link1: string
  link2: string
  link3: string
  img1: string
  img2: string
  preview1: string
  preview2: string
  scrollData: number
}

export const ProjectData: ProjectProps[] = [
  {
    reverse: false,
    projectColor: '#110ed8',
    title: '뮤툰 (MewToon)',
    subTitle: '웹툰 노래 추천 사이트',
    content:
      '뮤툰은 웹툰에 음악을 함께 들으면 생생함과 재미가 살아나는\n아이디어를 토대로 만들어진 사이트입니다.',
    link1: 'mewtoon.netlify.app',
    link2: 'https://github.com/codemodel6/MewToon',
    link3: 'https://velog.io/',
    img1: mewToon1,
    img2: mewToon2,
    preview1: '웹툰 정보를\n빠르게 확인해보세요',
    preview2: '재미있는 프로젝트를\n즐겨보세요!',
    scrollData: 1400
  },
  {
    reverse: true,
    projectColor: '#000000',
    title: '포트폴리오 (Portfolio)',
    subTitle: 'codemodel6의 포트폴리오',
    content: 'codemodel6의 경력과 프로젝트 정보를 볼 수 있는\n유용한 정보 사이트입니다.',
    link1: 'mewtoon.netlify.app',
    link2: 'https://github.com/codemodel6/Portfolio',
    link3: 'https://velog.io/',
    img1: mewToon1,
    img2: mewToon2,
    preview1: '인트로의 재미를\n느껴보세요',
    preview2: 'codemodel6의 프로젝트를\n둘러보세요!',
    scrollData: 1900
  },
  {
    reverse: false,
    projectColor: '#ff0000',
    title: 'ORACLE DICTIONARY​',
    subTitle: '오라클 함수 정리 사이트',
    content:
      '오라클 딕셔너리는 오라클의 함수와 실행을 정리해놓은\n​누구나 쉽게 사용할 수 있는 함수 사전입니다. ',
    link1: 'oracledictionary.netlify.app',
    link2: 'https://github.com/codemodel6/OracleDictionary',
    link3: 'https://velog.io/@codemodel6/Oracle-Dictionary',
    img1: oracle1,
    img2: oracle2,
    preview1: '상황별 오라클 함수를\n쉽고 빠르게 찾아보세요!',
    preview2: '대표적인 예시 쿼리와\n실행된 쿼리를 볼 수 있습니다.',
    scrollData: 2400
  },
  {
    reverse: true,
    projectColor: '#000066',
    title: '인디고 (Indiego)​',
    subTitle: '공연 밴드 예매 홍보 사이트',
    content:
      '인디고(Indiego)는 일부 지역에 국한되어 있는 문화 컨텐츠를\n가까운 우리 동네에서 즐길 수는 없을까? 라는 질문에서 시작되었습니다.',
    link1: 'http://indiego.site/',
    link2: 'https://bit.ly/3SsM2Xf',
    link3: 'https://bit.ly/3I7iVUL',
    img1: indigo1,
    img2: indigo2,
    preview1: '달력, 지도, 공연검색을 하며\n인디고 사이트를 즐기세요!',
    preview2: '마크다운에디터로\n자유롭게 글을 작성하세요!',
    scrollData: 2900
  },
  {
    reverse: false,
    projectColor: '#faa602',
    title: '​STACK OVER FLOW​',
    subTitle: '스택 오버 플로우 클론코딩',
    content:
      '스택 오버 플로우(Stack over flow) 사이트의 디자인 및 기능을\n클론코딩하여 개발 질문 제작하였습니다.',
    link1: 'https://bit.ly/3Irj1I1',
    link2: 'https://bit.ly/3XB21DN',
    link3: 'https://bit.ly/3lGFrMp',
    img1: stack1,
    img2: stack2,
    preview1: '궁금한점이나 오류가 났을 때\n언제든지 질문하세요!',
    preview2: '오류가 난 코드를 작성하여\n사람들과 문제를 공유하세요!',
    scrollData: 3400
  }
]
