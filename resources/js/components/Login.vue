<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
    <form v-on:submit.prevent>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="list.email">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="list.password">
        </div>
        <div v-if="err" class="bg-warning">
            <label class="form-check-label">
                {{err}}
            </label>
        </div>
        <br>
        <button @click="login" class="btn btn-primary">Login</button>
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
                err: null,
                list:{
                    email:'',
                    password:''

                },
                loggedIn: localStorage.getItem('loggedIn') == 'true'
            }
        },
        methods:{
            login(){
                axios.get('/airlock/csrf-cookie').then(response => {
                    console.log(response)

                    axios.post('/api/login',this.list).then(res => {
                        console.log(res)
                        if(res.data){
                            localStorage.setItem('loggedIn','true')
                            this.loggedIn = 'true'
                            this.$router.go('/')
                        }else{
                            this.err = 'Wrong Email or Password'
                        }
                    });
                });
            }

        }

    };
</script>
