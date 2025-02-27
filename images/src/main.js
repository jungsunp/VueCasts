import Vue from 'vue';
import App from './App';
import store from './store/index';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history', // use browser router mode (not has router mode)
	routes: [
		{ path: '/', component: ImageList },
		{ path: '/upload', component: UploadForm },
		{ path: '/oauth2/callback', component: AuthHandler }
	]
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
