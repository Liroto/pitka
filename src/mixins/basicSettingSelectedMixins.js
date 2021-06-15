const DAY_MAP = {
  'Понедельник' : 'Пн',
  'Вторник' : 'Вт',
  'Среда' : 'Ср',
  'Четверг' : 'Чт',
  'Пятница' : 'Пт',
  'Суббота' : 'Сб',
  'Воскресение' : 'Вс',
}

export const basicSetting = {
  methods: {
    // type can be made {course, group, day, faculty}
    changeItem(val, type) {
      console.log(val)
      console.log(type)
      switch (type) {
        case 'day' : this.$store.commit('setDay', DAY_MAP[val])
          break
        case 'group' : this.$store.commit('setGroup', val)
          break
        case 'course' : this.$store.commit('setCourse', val)
          break
        case 'faculty' : this.$store.commit('setFaculty', val)
          break
      }
    }
  },
  computed: {
    getCourseList() {
      return this.$store.getters.courseList
    },
    getGroupList() {
      return this.$store.getters.groupList
    },
    getFaculty() {
      return this.$store.getters.getFaculty
    },
    getDecorationColor() {
      return this.$store.getters.getDecorationColor
    },
  },
}
