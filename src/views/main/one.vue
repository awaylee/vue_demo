<template>
	<div :style="style" id="one">
		<div>{{title}}</div>
		this is one
		<div>
			<button @click="toTwo">to two</button>	
		</div>
		<ww :color="color" @title="getMsg"></ww>
	</div>
</template>
<script>

import ss from '@/views/main/ss'
export default{
	data() {
		return {
			style: {
				height: this.sbww.height,
				width: this.sbww.width,
				margin: this.sbww.margin,
				border: this.sbww.border
			},
			color:'red',
			title: '',
			isShow: false
		}
	},
	components:{
		'ww': ss
	},
	props: ['sbww'],
	methods: {
		toTwo: function() {
			this.$emit("comfire");
		},
		getMsg: function(msg){
			console.log(msg);
		}
	},
	mounted: function(){

	}
}
</script>
<style>
	#one{
		background: yellow;
	}
</style>