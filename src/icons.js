import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faComments, faSave, faBell, faCogs, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faComments, faSave, faBell, faCogs, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
