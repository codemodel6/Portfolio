import type { Ref } from 'vue'

/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 스크롤을 원하는 위치로 이동시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleScrollMove = (move: number) => {
  window.scrollTo({
    top: move,
    behavior: 'smooth'
  })
}

interface StartAnimationProps {
  (startScrollData: number, animationToggle: Ref<boolean>): void
}
/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- 함수 기능 : 정해진 스크롤에 도착했을 때 animationToggle을 true로 바꾸는 함수
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleStartAnimation: StartAnimationProps = (startScrollData, animationToggle) => {
  const scrollPosition = window.scrollY // 현재의 스크롤 값
  console.log(scrollPosition)

  if (scrollPosition >= startScrollData) {
    console.log('접근 성공')
    animationToggle.value = true
  }
}
