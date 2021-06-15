<template>
    <div class="lesson_list">
        <lessonTablet v-for="lesson in lessonList" :key="lesson.lessonNumber"
                      :lesson-name="lesson.lessonName"
                      :class-number="lesson.classNumber"
                      :teacher-name="lesson.teacherName"
                      :lesson-number="lesson.lessonNumber"
                      class="lesson_list-tablet"></lessonTablet>
        <img class="home__bg-image" alt="bg image" src="../../assets/3.jpg">
    </div>
</template>

<script>
    import lessonTablet from '../lessonTablet';
  export default {
    name: "LessonList",
    computed: {
      lessonList() {
        return this.$store.getters.getLessonsList
      }
    },
    components: {
      lessonTablet,
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.lesson_list {
    position: relative;
}
.home__bg-image {
    max-width: 100%;

    position: absolute;
    bottom: 0;
    left: 10%;

    z-index: -1;
}
.lesson_list-tablet {
    margin-top: 10px;

    opacity: 0.9;

    /*<!--background: linear-gradient($top-color, $base-color);-->*/
}
</style>
