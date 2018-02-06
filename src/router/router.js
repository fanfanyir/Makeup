import login from '../components/login.vue'
import register from '../components/register.vue'
const routers = [
  {
    path: '/login',
    name: 'login',
    components: login
  },
  {
    path: '/register',
    name: 'register',
    components: register
  }
]
export default routers
