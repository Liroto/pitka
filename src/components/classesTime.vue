<template>
    <div class="classes-time" :style="{'color': decorationColor}">
        <span class="classes-time__number">
            <span class="classes-time__border" :style="selectLesson">
                {{classesNum}}
            </span>
        </span>
        <span class="classes-time__time">{{parseTime(startClassesTime)}}</span>
        <span class="classes-time__time">{{parseTime(endClassesTime)}}</span>
    </div>
</template>

<script>
    import {parseTime} from '../utils';

    export default {
    props: {
      classesNum: Number,
      startClassesTime: Object,
      endClassesTime: Object,
    },
    methods: {
      parseTime(dateTime) {
        return parseTime(dateTime)
      }
    },
    computed: {
      decorationColor() {
        return this.$store.getters.getDecorationColor
      },
      isCurentLesson() {
        const curentTime = new Date()
        const startClassesTime = new Date()
        const endClassesTime = new Date()

        startClassesTime.setHours(this.startClassesTime.hour)
        startClassesTime.setMinutes(this.startClassesTime.minutes)

        endClassesTime.setHours(this.endClassesTime.hour)
        endClassesTime.setMinutes(this.endClassesTime.minutes)

        return startClassesTime < curentTime && curentTime < endClassesTime
      },
      selectLesson() {
        return this.isCurentLesson ? 'border : 5px solid' + this.decorationColor : ''
      }
    }
  }
</script>

<style scoped>
.classes-time {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;

    text-align: left;
    align-items: center;

    border-top: 1px solid #b2b89d;
}

.classes-time__number {
    font-size: 64px;
}

.classes-time__border {
    display: block;

    text-align: center;

    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.classes-time__time {
    font-size: 32px;
}
</style>
