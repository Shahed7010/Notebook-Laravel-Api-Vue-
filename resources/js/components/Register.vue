<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
            <form v-on:submit.prevent="register">
                <div class="form-group">
                    <label for="email">Name:</label>
                    <input type="text" class="form-control" placeholder="Enter Name" id="name" v-model="list.name">
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="list.email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="list.password">
                </div>

                <button class="btn btn-primary">Register</button>

            </form>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    axios.defaults.withCredentials = true;

    export default {
        data(){
            return{
                list:{
                    name:'',
                    email:'',
                    password:''

                },
                loggedIn: localStorage.getItem('loggedIn') == 'true'
            }
        },
        methods:{
            register(){
                axios.post('/api/register',this.list).then(res => {
                        console.log(res)
                        axios.get('/airlock/csrf-cookie').then(response => {
                            console.log(response)
                        axios.post('/api/login',this.list).then(res => {
                            console.log(res)
                            localStorage.setItem('loggedIn','true')
                            this.loggedIn = 'true'
                            this.$router.go('/')
                        });
                    });
                });
            }

        }

    };
</script>
