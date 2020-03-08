<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
            <div v-for="item in this.items" :key="item.body" class="container bg-info mt-3">
                <p>{{item.body}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            items: []
            }
        },
        mounted() {
            this.getNotes()
        },
        methods:{
            getNotes(){
                axios.get('/api/notes').then(res => {
                    console.log(res.data)
                    this.items = res.data
                });
            }
        }
    }
</script>
