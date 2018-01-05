<template>
	<div id="login">
		<p><input type="text" placeholder="请输入账号" v-model="account"></p>
		<p><input type="password" placeholder="请输入密码" v-model="password"></p>
		<p>
			<label for="check"><input type="checkbox" id="check">记住密码</label>
			<input type="button" value="登录" @click="login">
		</p>

	</div>
</template>

<script>
	export default {
		name:'login',
		data () {
			return {
				account: '',
				password: ''
			}
		},
		methods: {
			login: function() {
				sessionStorage.setItem("token",'969696');
				this.$router.push({path:'/'})
			}
		},

	}
</script>
