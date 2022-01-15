<template>
	<div class="container">
		<search-bar @termChange="onTermChange"></search-bar>
		<video-list :videos="videos" ></video-list>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
const API_KEY = 'AIzaSyDJoRO3lTjE22ht1uIu-NQads4pwW__JkQ';

export default {
	name: 'App',
	components: { 
		SearchBar,
		VideoList,
	},
	data() {
		return { videos: [] };
	},
	methods: {
		onTermChange(searchTerm) {
			axios.get('https://www.googleapis.com/youtube/v3/search', {
				params: {
					key: API_KEY,
					type: 'video',
					part: 'snippet',
					q: searchTerm,
				}
			}).then(resonse => {
				this.videos = resonse.data.items;
			});
		}
	},
};
</script>