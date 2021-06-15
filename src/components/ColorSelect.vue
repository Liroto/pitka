<template>
    <div class="color_wrapper">
        <p class="color_wrapper__title">Цвет оформления</p>
        <div class="color">
            <div v-for="color in colors" :key="color"
                 :style="{'background-color': color}"
                 class="color__item" @click="setColor(color)">
                <font-awesome-icon class="color__icon" icon="check" size="2x" v-if="isChecked(color)"/>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: ['#fe5721', '#ff9700', '#fec107', '#9ccd64', '#00bcd8', '#2196f3', '#673ab7'],
      }
    },
    methods: {
      setColor(color) {
        this.$store.commit('setDecorationColor', color)
      },
      isChecked(squareColor) {
        return squareColor === this.decorationColor
      }
    },
    computed: {
      decorationColor() {
        return this.$store.getters.getDecorationColor
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../variables.scss";

.color_wrapper__title {
    text-align: left;
    margin-bottom: 5px;
    font-size: $sub-font-size;
    color: $gray-color;
}
.color {
    display: flex;
    justify-content: space-between;
}
.color__item {
    width: 60px;
    height: 60px;
    border-radius: 5px;
}
.color__icon {
    height: 60px;
}
</style>
