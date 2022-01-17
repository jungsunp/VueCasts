<template>
	<div class="container">
		<search-bar @termChange="onTermChange"></search-bar>
		<div>
			<video-detail
				:video="selectedVideo"
			></video-detail>
			<video-list
				:videos="videos"
				@videoSelect="onVideoSelect"
			></video-list>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';
const API_KEY = 'AIzaSyDJoRO3lTjE22ht1uIu-NQads4pwW__JkQ';

export default {
	name: 'App',
	components: {
		SearchBar,
		VideoList,
		VideoDetail,
	},
	data() {
		return { videos: [], selectedVideo: null };
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
		},
		onVideoSelect(video) {
			this.selectedVideo = video;
		},
	},
};
</script>
