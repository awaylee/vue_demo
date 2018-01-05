<template>
	<div id="ss" :style="styles">
		<h3>这是ss组件</h3>
	</div>

</template>

<script>
	export default{
		name:'ss',
		data() {
			return {
				styles:{
					color:this.color
				},
				title:'我要向父组件传值'
			}
		},
		props:['color'],
		mounted: function(){
			this.$emit("title");
		}
	}
</script>
<style>
	#ss{
		border: 1px solid #000;
	}
</style>