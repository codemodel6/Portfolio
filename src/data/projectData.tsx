import mewToon1 from '@/assets/styles/image/projectImg/mewToon1.gif'
import mewToon2 from '@/assets/styles/image/projectImg/mewToon2.gif'

export interface ProjectProps {
  reverse: boolean
  infoColor: string
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
}

export const ProjectData: ProjectProps[] = [
  {
    reverse: false,
    infoColor: '#0705ef',
    title: '뮤툰 (MewToon)',
    subTitle: '웹툰 노래 추천 사이트',
    content:
      '뮤툰은 웹툰에 음악을 함께 들으면 생생함과 재미가 살아나는\n아이디어를 토대로 만들어진 사이트입니다.',
    link1: 'mewtoon.netlify.app',
    link2: 'mewtoon.netlify.app',
    link3: 'mewtoon.netlify.app',
    img1: mewToon1,
    img2: mewToon2,
    preview1: '웹툰 정보를\n빠르게 확인해보세요',
    preview2: '재미있는 프로젝트를\n즐겨보세요!'
  },
  {
    reverse: true,
    infoColor: '#ff0000',
    title: '뮤툰 (MewToon)',
    subTitle: '웹툰 노래 추천 사이트',
    content:
      '뮤툰은 웹툰에 음악을 함께 들으면 생생함과 재미가 살아나는\n아이디어를 토대로 만들어진 사이트입니다.',
    link1: 'mewtoon.netlify.app',
    link2: 'mewtoon.netlify.app',
    link3: 'mewtoon.netlify.app',
    img1: mewToon1,
    img2: mewToon2,
    preview1: '웹툰 정보를\n빠르게 확인해보세요',
    preview2: '재미있는 프로젝트를\n즐겨보세요!'
  }
]
