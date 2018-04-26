/**
 * Created by peterzhang on 2018/4/23.
 */
import './example.css'
import Vue from 'vue'
import App from './App.vue'
import {
    Switch,
    Avatar,
    Button
} from '../src/index'
//临时测试

Vue.component('sSwitch', Switch)
Vue.component('sAvatar', Avatar)
Vue.component('sBtn', Button)

new Vue({
    el: '#app',
    render: h => h(App)
})
