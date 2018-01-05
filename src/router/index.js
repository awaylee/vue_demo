import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login/login'
import One from '@/views/main/one'
import Two from '@/views/main/two'

Vue.use(Router)

const router =  new Router({
  routes: [
  {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
      	{path:'/one', name:'one', component: One},
      	{path:'/two', name:'two', component: Two}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.path !='/login' && !sessionStorage.getItem('token')){
		next({path:'/login'})
	} else {
		next();
	}
})

export default router;
