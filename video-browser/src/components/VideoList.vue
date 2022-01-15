<template>
	<ul class="list-group">
		<video-list-item 
			v-for="video in videos" 
			:video="video"
			:key="video.etag"
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
	props: [ 'videos' ]
}
</script>

<style>

</style>