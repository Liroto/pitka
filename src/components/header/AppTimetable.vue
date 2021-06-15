<template>
    <div class="timetable" :style="{'background-color': getDecorationColor}">
        <h3 class="timetable__title">Расписание занятий</h3>
        <span> {{getWeekDay | toUpperCase}} {{getDate}}</span> - <span>{{weekType}} неделя</span>
    </div>
</template>

<script>
  export default {
    name: "AppTimetable",
    props: {
      date: {
        type: Date,
        default () {
          return new Date()
        }
      },
      weekType: String,
    },
    data() {
      return {
        options: { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'},
      }
    },
    computed: {
      getDate() {
        return this.date.toLocaleDateString(this.options)
      },
      getWeekDay() {
        return this.date.toLocaleString('ru-RU', { weekday: 'short'})
      },
      getDecorationColor() {
        return this.$store.getters.getDecorationColor
      }
    },
    filters: {
      toUpperCase (value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../variables';

    .timetable {
        /*background: linear-gradient($top-color, $base-color);*/
        color: $font-color;

        padding: 10px;

        text-align: left;
    }

    .timetable__title {
        margin: 0;
    }
</style>

