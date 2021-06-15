<template>
    <div class="table-column">
        <p class="table-column__title">{{day}}</p>
        <tableCell v-for="lesson in lessonList"
                   :class-number="lesson.classNumber"
                   :lesson-name="lesson.lessonName"
                   class="table-column__cell"></tableCell>
    </div>
</template>

<script>
    import tableCell from './tableCell';

  export default {
    props: {
      lessonList: Array,
      day: String
    },
    computed: {
      getLessonList() {
        return this.$store.getters.getLessonsList
      },
    },
    components: {
      tableCell
    }
  }
</script>

<style scoped lang="scss">
    @import "../../variables";

.table-column__title {
    text-align: left;
    margin: 0;
    height: $table-title-height;
}
.table-column__cell {
    margin-bottom: 10px;
}
</style>
