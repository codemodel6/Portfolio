<script setup lang="ts"></script>

<template>
  <div class="global-half-block">
    <div class="home-intro-wrapper">
      <div class="intro-title">김경배는 누구인가요?</div>
      <div class="intro-contents">
        코드를 작성할 때,
        <span class="bold-span">더 좋은 코드를 작성하기 위해 항상 고민합니다.</span>
        변화가 많았던 프로젝트에서 애자일을 진행하면서 유지보수성의 중요성을 깨달았고, 이를 통해
        함수의 공통화와 모듈의 독립성의 중요성을 알게 되었습니다. 또한, 유지보수 프로젝트가 많은
        업무 특성상 다른 사람이 작성한 코드를 많이 수정하면서, 가독성에 따라 업무 난이도가
        달라진다는 것을 느꼈습니다. 이를 통해 가독성의 중요성을 깨닫고 JSDoc 및 주석을 많이 사용하여
        가독성이 좋은 코드를 작성하려고 노력합니다.
        <br /><br />
        <span class="bold-span">커뮤니케이션의 중요성을 알고있습니다.</span> 질문이 필요할 때 부담
        없이 질문할 수 있는 환경이 중요하기 때문에, 상대방의 질문을 적극적으로 받아주고 긍정적으로
        답변합니다. 회의를 할 때는 정보 전달 및 대화의 요지가 중요하기 때문에, 명확하게 대답하며
        핵심만을 이야기합니다. <br /><br />
        <span class="bold-span">책임감이 강합니다.</span> 맡은 바를 해결하고자 하는 의지가 강하여
        갑작스럽게 프로젝트에 투입되거나 추가 업무를 맡아도 기한 내에 해결합니다. 이처럼 책임감 있게
        문제를 해결하기 때문에 높은 신뢰도를 얻었고, 이를 기반으로 협업 시 업무를 믿고 맡길 수
        있습니다.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/global/GlobalDisplay.scss';
@import '@/assets/styles/color/ColorNote.scss';

.home-intro-wrapper {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  .intro-title {
    font-size: $large;
    font-weight: bold;
    height: 20%;
  }

  .intro-contents {
    width: 100%;
    font-size: $small;
    height: 80%;
    white-space: pre-line;

    .bold-span {
      font-weight: bold;
      font-size: $small;
    }
  }
}
</style>
