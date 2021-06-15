<template>
    <div class="table-setting">
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
        <input type="search" class="table-setting__search" placeholder="Поиск">
    </div>
</template>

<script>
import AppSelect from '../AppSelect';

import {basicSetting} from '../../mixins/basicSettingSelectedMixins';

export default {
  mixins: [basicSetting],
    components: {
      AppSelect,
    }
  }
</script>

<style scoped>

.table-setting {
    display: flex;
    justify-content: space-between;
}
.table-setting__search {
    border-style: none none solid;
}
</style>
