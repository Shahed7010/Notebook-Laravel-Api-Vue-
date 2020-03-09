<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
            <div v-for="(item , key) in this.items" class="container  mt-3">
                <div class="bg-light p-2"><p>{{item.body}}</p>
                    <hr>
                    <button class="btn-primary">Edit</button>
                    <button class="btn-danger" @click="deleteNote(key,item.id)">Delete</button>
                </div>
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
            },
            deleteNote(key,id){
                if (confirm("Are You Sure?")){
                    axios.delete(`/api/notes/${id}`).then(res => {
                        console.log("deleted")
                        this.items.splice(key,1)
                    });
                }
            }
        }
    }
</script>
