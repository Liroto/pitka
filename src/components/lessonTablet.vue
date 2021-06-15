<template>
    <div class="lesson-tablet" :style="{'background-color': getDecorationColor, '--bgColor': getDecorationColor}">
        <span>{{lessonName}}</span>
        <span>{{classNumber}}</span>
        <span>{{teacherName}}</span>
        <span class="lesson-tablet__lesson-number">{{lessonNumber}}</span>
    </div>
</template>

<script>
  export default {
    name: "lessonTablet",
    props: ['lessonName', 'classNumber', 'teacherName', 'lessonNumber'],
    data() {
      return {
        //bgColor: '#e01c1c'
      }
    },
    computed: {
      getDecorationColor() {
        return this.$store.getters.getDecorationColor
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../variables';

.lesson-tablet {
    width: 100%;
    min-height: 80px;
    /*background-color: $base-color;*/
    color: $font-color;

    box-shadow: 0 2px 2px rgba(0,0,0,0.5);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;

    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 100%;

        left: calc(100% + 2px);

        /*<!--background-color: $base-color;-->*/
        background-color: var(--bgColor);
        display: none;
    }

    &:hover {
        &:after {
            display: block;
        }
    }
}


.lesson-tablet__lesson-number {
    background-color: #4fae61;

    width: 30px;
    line-height: 30px;
    height: 100%;


    justify-self: right;

    writing-mode: tb-rl;
    transform: rotate(180deg);
    /*width: 100%;*/
}
</style>
