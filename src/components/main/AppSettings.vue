<template>
    <div class="setting">
        <h2 class="setting__title" :style="{'color': getDecorationColor}">Настройка приложения</h2>
        <AppSelect :title="'Факультет'"
                   :item-list="getFaculty"
                   @changeItem="changeItem($event, 'faculty')" class="setting__select"
        ></AppSelect>
        <AppSelect :title="'Курс'"
                   :item-list="getCourseList"
                   @changeItem="changeItem($event, 'course')" class="setting__select"
        ></AppSelect>
        <AppSelect :title="'Группа'"
                   :item-list="getGroupList"
                   @changeItem="changeItem($event, 'group')" class="setting__select"
        ></AppSelect>
        <ColorSelect class="setting__color_select"></ColorSelect>
    </div>
</template>

<script>
import AppSelect from '../AppSelect';
import ColorSelect from '../ColorSelect';

import {basicSetting} from '../../mixins/basicSettingSelectedMixins'

  export default {
    mixins:[basicSetting],
    components: {
      AppSelect,
      ColorSelect,
    }
  }
</script>

<style scoped lang="scss">
@import "../../variables";

.setting__title {
    text-align: left;
}
.setting__color_select {
    margin-top: 10px;
}

.setting__select {
    margin-top: 10px;
}
</style>
