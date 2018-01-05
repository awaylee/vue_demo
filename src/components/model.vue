<template>
	<div id="model" v-show="showedModel">
		<div class="content">
			<p>{{modelData.title}}</p>
			<p>{{modelData.name}}</p>
			<p>{{modelData.height}}</p>
			<button @click="callbackM">submit</button>
		</div>
	</div>
</template>
<script>
	
	export default {
		name: 'model',
		computed: {
			// 是否显示
			showedModel: function(){
				return this.$store.state.showedModel;
			},
			modelData: function(){
				return this.$store.state.modelDataInfo.infoData;
			}
		},
		methods: {
			callbackM: function(){
				this.$emit("model-confire", this.$store.state.modelDataInfo.callback);
				this.closeModel();
			},
			closeModel: function(){
				this.$store.commit('model',{isShow: false});
			}
		}
	}
</script>
<style>
	#model{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
	}
  .content{
    width: 300px;
    height: 300px;
    background: aqua;
  }
</style>
