<template>
  <div class="">
    <AppTable class="table"></AppTable>
  </div>
</template>
<script>
  import AppTable from '../components/table/AppTable';

  export default {
    name: 'Table',
    data() {
      return {

      }
    },
    components: {
      AppTable
    }
  }
</script>

<style scoped>
.table {
  width: 80%;
  margin: 0 auto;
}
</style>
