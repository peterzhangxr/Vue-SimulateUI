/**
 * Created by peterzhang on 2018/4/23.
 */
import './example.css'
import Vue from 'vue'
import App from './App.vue'
import {
    Switch,
    Avatar,
    Button,
    Icon,
    Spinner,
    Search,
    Checkbox,
    Cells,
    Cell,
    CellHd,
    CellBd,
    CellFt
} from '../src/index'
//临时测试

Vue.component('sSwitch', Switch)
Vue.component('sAvatar', Avatar)
Vue.component('sBtn', Button)
Vue.component('sIcon', Icon)
Vue.component('sSpinner', Spinner)
Vue.component('sSearch', Search)
Vue.component('sCheckbox', Checkbox)
Vue.component('sCells', Cells)
Vue.component('sCell', Cell)
Vue.component('sCellHd', CellHd)
Vue.component('sCellBd', CellBd)
Vue.component('sCellFt', CellFt)

new Vue({
    el: '#app',
    render: h => h(App)
})
