<template>
    <div class="header">
        <AppTimetable :week-type="getWeekType" :date="getDate"></AppTimetable>
        <div class="header__selected-wrapper">
            <AppSelect :title="'Курс обучения'"
                       :item-list="getCourseList"
                       @changeItem="changeItem($event, 'course')"
            ></AppSelect>
            <AppSelect :title="'Группа'"
                       :item-list="getGroupList"
                       @changeItem="changeItem($event, 'group')"
            ></AppSelect>
            <AppSelect :title="'День недели'"
                       :item-list="getWeekDayList"
                       @changeItem="changeItem($event, 'day')"
            ></AppSelect>
        </div>
    </div>
</template>

<script>
import AppTimetable from './AppTimetable';
import AppSelect from '../AppSelect';

import {basicSetting} from '../../mixins/basicSettingSelectedMixins';

export default {
    name: "AppHeader",
  mixins: [basicSetting],
    // methods: {
    //   changeItem(val) {
    //     console.log(val)
    //   }
    // },
    computed: {
      getWeekType() {
        return this.$store.getters.weekType
      },
      // getCourseList() {
      //   return this.$store.getters.courseList
      // },
      // getGroupList() {
      //   return this.$store.getters.groupList
      // },
      getDate() {
        return this.$store.getters.getDate
      },
      getWeekDayList() {
        return this.$store.getters.weekDayList
      },
    },
    components: {
      AppTimetable,
      AppSelect
    }
  }
</script>

<style scoped lang="scss">
@import '../../variables';

.header {
    padding-bottom: 15px;

    border-bottom: 1px solid $border-color;

}
.header__selected-wrapper {
    width: 95%;
    margin: 5px auto 0;
    /*margin-top: 5px;*/

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
}
</style>
