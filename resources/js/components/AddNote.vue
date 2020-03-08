<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
            <form v-on:submit.prevent="saveNote">
                <div class="form-group">
                    <label>Enter the note</label>
                    <textarea v-model="list.note" class="form-control"></textarea>
                </div>

                <button class="btn btn-primary">Save</button>

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
                    note:'',
                }
            }
        },
        methods:{
            saveNote(){
                // let token = localStorage.getItem('loggedIn')

                        axios.post('/api/notes',this.list).then(res => {
                            console.log(res)
                            this.$router.push('/')
                        }).catch(function (error) {
                            console.log(error.response);
                        });

            }

        }

    };
</script>
