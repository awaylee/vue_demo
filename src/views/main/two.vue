<template>
	<div id="two">
    <Model @model-confire="callbackInfo"></Model>
		this is two
		<div>
			<One :sbww="style" @comfire="writen"></One>
		</div>
		<div>
			<button @click="showModel">boxShow</button>
		</div>

	</div>
</template>
<script>
	import One from '@/views/main/one.vue'
	import Model from '@/components/model'
	export default{
		data(){
			return {
				style: {
					height: '200px',
					width: '200px',
					margin: '0 auto',
					border: '1px solid red'
				}
			}
		},
		components: {
			One,
			Model
		},
		methods: {
			writen: function(){
				console.log("sbww");
			},
			showModel: function(){
				let datainfo = {
					title: 'test',
					name: 'test_name',
					height: 'test_height'
				};
				this.$store.commit("model", {isShow: true, dataInfo: datainfo, callback: this.comfire});
			},
			callbackInfo: function(callback){
				callback && callback();
			},
			comfire: function(){
				console.log(111111111);
			}
		}
	}
</script>

<style>
	#two{
		background: pink;
	}
</style>
