<template>
	<div id="home">
		<p>this is home</p>
		<div>{{msg}}</div>
		<p><button @click="two">打开two</button></p>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg:'这是home的值'
			}
		},
		methods: {
			two: function(){
				this.$router.push({path:'two'})
			}
		}
	}
</script>
<style>
	#home{
		width: 100%;
		height: 100%;
		background: #eee;
	}
</style>