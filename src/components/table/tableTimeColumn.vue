<template>
    <div class="time">
        <div v-for="classes in getClassesTime" class="time__cell">
            <p class="time__display">{{parseTime(classes.start) }}</p>
            <p class="time__display">{{parseTime(classes.end)}}</p>

        </div>
    </div>
</template>

<script>
import {parseTime} from '../../utils';

export default {
    methods: {
      parseTime(time) {
        return parseTime(time)
      }
    },
    computed: {
      getClassesTime() {
        return this.$store.getters.getClassesTime
      },
    }
}
</script>

<style scoped lang="scss">
@import "../../variables";

.time__cell {
    min-height: $table-min-height;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;

    justify-content: center;
}
.time__display {
    margin: 0;
}
</style>
