import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		showedModel: false,
		modelDataInfo: {infoData: '', callback: function(){}},
	},
	mutations: {
		model(state, {isShow, dataInfo, callback}){
			state.showedModel = isShow;
			if(dataInfo){
				state.modelDataInfo.infoData = dataInfo;
			}
			if(callback){
				state.modelDataInfo.callback = callback;
			}
		}
	}
});

export default store;