<template>
    <div class="row d-flex justify-content-center">
        <div class="card col-sm-6 p-5 mt-5">
            <div v-for="(item , key) in this.items" class="container  mt-3">
                <div class="bg-light p-2"><p>{{item.body}}</p>
                    <hr>
                    <!-- Button to Open the Modal -->
                    <button type="button" @click="editNote(key)" class="btn-primary" data-toggle="modal" data-target="#myModal">
                        Edit
                    </button>
                    <button class="btn-danger" @click="deleteNote(key,item.id)">Delete</button>
                </div>
            </div>
        </div>


        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Update Note</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="">
                    <!-- Modal body -->
                    <form v-on:submit.prevent>
                        <div class="form-group">
                            <textarea v-model="note.body" class="form-control" autofocus></textarea>
                        </div>

                        <!-- Modal footer -->
                        <div class="float-right p-2">
                            <button @click="updateNote(note.id)" class="btn btn-primary" data-dismiss="modal">Update</button>
                            <button class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </form>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                note:{
                    body:'',
                    id: ''
                },
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
            editNote(key){
                this.note.body = this.items[key].body
                this.note.id = this.items[key].id
            },
            updateNote(id){
                console.log(this.note)
                axios.put(`/api/notes/${id}`,this.note).then(res => {
                    console.log(res)
                     this.getNotes()
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
