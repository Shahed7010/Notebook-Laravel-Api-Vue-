<template>
    <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <!-- Brand/logo -->
        <router-link to="/" class="navbar-brand" >Notebook</router-link>

        <!-- Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/add" class="nav-link">Add Note</router-link>
            </li>
        </ul>
        <ul v-if="!loggedIn" class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/register" class="nav-link" >Register</router-link>
            </li>
        </ul>
        <ul v-else class="navbar-nav ml-auto">
            <li class="nav-item">
                <a @click.prevent="logout" href="#" class="nav-link">Logout</a>
            </li>
        </ul>

    </nav>
    <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
          return{
              loggedIn: localStorage.getItem('loggedIn') == 'true'
          }
        },
        mounted() {
            // loggedIn: localStorage.getItem('loggedIn') == 'true'
        },
        methods:{
            logout(){

                axios.post('/api/logout').then(res => {
                        console.log(res)
                        localStorage.removeItem('loggedIn','true')
                        this.loggedIn = 'false'
                        this.$router.go(0)

                });
            }
        }
    }
</script>
