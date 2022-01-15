import Vue from 'vue';
import App from './App';

new Vue({
	el: '#app',
	render: h => h(App)
});

// another way
// new Vue({
// 	render: h => h(App)
// }).$mount('#app'); 