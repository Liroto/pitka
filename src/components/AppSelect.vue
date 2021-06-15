<template>
    <div class="select">
        <span class="select__title">{{title}}</span>
        <select class="select__list" v-model="selectItem">
            <option v-for="item in itemList" :key="item">{{item}}</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: "AppSelect",
    props: {
      title: String,
      itemList: Array
    },
    data() {
      return {
        selectItem: this.itemList[0]
      }
    },
    computed: {
    },
    watch: {
      selectItem(value) {
        this.$emit('changeItem', value)
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../variables';

.select {
    display: flex;
    flex-direction: column;

    text-align: left;

    /*width: 100%;*/
}
.select__list {
    padding: 10px;
    border: 1px solid $border-color;
}
.select__title {
    margin: 0;
    font-size: $sub-font-size;
    color: $gray-color;
}
</style>
