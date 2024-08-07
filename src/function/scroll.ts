/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 스크롤을 원하는 위치로 이동시키는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
export const handleScrollMove = (move: number) => {
  window.scrollTo({
    top: move,
    behavior: 'smooth'
  })
}
