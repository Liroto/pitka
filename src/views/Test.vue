<template>
  <!-- <div class="">-->
    <div>
        <router-view></router-view>
        <test-component :faculties=faculties></test-component>
    </div>
        
      <!-- <AppFooter class="home__footer"></AppFooter> -->
  <!-- </div> -->
</template>

<script>
import AppHeader from '../components/header/AppHeader';
import lessonTablet from '../components/lessonTablet';
import AppFooter from '../components/footer/AppFooter';
import TestComponent from '../components/test/AppTest';

export default {
  name: 'Home',
  data() {
    return {
        faculties:[
        ],
      lessonList: [
        {
          lessonName: 'Алгебра',
          classNumber: '210',
          teacherName: 'Ольга Ивановна',
          lessonNumber: '1 пара'
        },
        {
          lessonName: 'Алгебра',
          classNumber: '110',
          teacherName: 'Ольга Ивановна',
          lessonNumber: '2 пара'
        },
        {
          lessonName: 'Английский',
          classNumber: '411',
          teacherName: 'Ирина Олеговна',
          lessonNumber: '3 пара'
        },
      ]
    }
  },
   created() {
            this.axios
                .post('http://localhost:8000/api/products/')//обращение к БД, ОЧЕНЬ ВАЖНО!!!!!!!
                .then(response => {
                    this.products = response.data;
                });
        },
  components: {
    AppHeader,
    lessonTablet,
    AppFooter,
    TestComponent
  }
}
</script>
<style scoped lang="scss">
  @import '../variables';

  .home {
    width: $desctop-width;
    margin: 0 auto;

    padding-bottom: 1px;

    box-shadow: 0 2px 2px rgba(0,0,0,0.5);
  }

  .home__lesson-wrapper {
    width: 95%;
    margin: 0 auto;

    position: relative;

    /*max-height: 300px;*/
    /*overflow-y: auto;*/
    /*overflow-x: hidden;*/
  }


  .home__footer {
      width: 95%;
      margin: 20px auto 10px auto;
  }
</style>
