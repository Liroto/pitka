<template>
    <div class="lesson-info">
        <p class="lesson-info__field">Предмет: {{lessonName}}</p>
        <p class="lesson-info__field">Преподаватель: {{teacherName}}</p>
        <p class="lesson-info__field">Аудитория: {{classNumber}}</p>
    </div>
</template>

<script>
  export default {
    props: {
      lessonName: String,
      teacherName: String,
      classNumber: Number
    }
  }
</script>

<style scoped>
.lesson-info__field {
    text-align: left;
}
</style>
