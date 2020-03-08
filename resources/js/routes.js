import login from './components/Login'
import home from './components/Home'
import addNote from './components/AddNote'
import register from './components/Register'
 export default [
     {
      path: '/login', component: login
     },
     {
      path: '/', component: home
     },
     {
      path: '/add', component: addNote
     },
     {
      path: '/register', component: register
     },
 ]
