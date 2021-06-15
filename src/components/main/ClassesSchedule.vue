<template>
    <div>
        <classesTime v-for="(_, idx) in getCountLessons" :key="idx"
                     :classes-num="idx+1"
                     :start-classes-time="getClassesTime[idx]['start']"
                     :end-classes-time="getClassesTime[idx]['end']">
        </classesTime>
    </div>
</template>

<script>
    import classesTime from '../classesTime';
  export default {
    computed: {
      getClassesTime() {
        return this.$store.getters.getClassesTime
      },
      getCountLessons() {
        return this.$store.getters.getLessonsList.length
      }
    },
    components: {
      classesTime
    }
  }
</script>

<style scoped>

</style>
