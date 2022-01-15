<template>
	<ul class="list-group">
		<video-list-item
			v-for="video in videos"
			:video="video"
			:key="video.etag"
			@videoSelect="onVideoSelect"
		>
		</video-list-item>
	</ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
	name: 'VideoList',
	components: {
		VideoListItem
	},
	props: [ 'videos' ],
	methods: {
		onVideoSelect(video) {
			this.$emit("videoSelect", video);
		}
	}
}
</script>

<style>

</style>
