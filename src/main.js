import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import '@/assets/style/reset.scss'
import 'aos/dist/aos.css';

//配置页 http://localhost:8000/configuration/org.vue.eslintrc

Vue.config.productionTip = false
AOS.init();


new Vue({
  render: h => h(App),
}).$mount('#app')
