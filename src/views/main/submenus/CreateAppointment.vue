<template>
    <div class="layout">
            <h1>Hello World</h1>
                   <v-form style="display:grid; grid-template-columns:1fr 1fr;grid-column-gap:20px;grid-row-gap:30px;">
                <v-text-field class="registration-input" 
                            label="First Name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Last Name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Clinic name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Contact"
                            required/>
                <v-text-field class="registration-input" 
                            label="City"
                            required/>
                <v-text-field class="registration-input" 
                            label="Country"
                            required/>
                <v-text-field class="registration-input" 
                            label="Region"
                            required/>
                <v-text-field class="registration-input" 
                            label="Owner"
                            required/>
                <v-text-field class="registration-input" 
                            label="Email"
                            required/>
                <v-text-field class="registration-input" 
                            label="Password"
                            required/>
            </v-form>
             <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click="dialog = false;cancel()">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false;confirm()">Make Request</v-btn>
            </v-card-actions>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log('testtest');
    }, 
    data:()=>{
        return{
            dialog:false,
        }
    },
    methods:{
        cancel(){

        },
        confirm(){

        }
    }
}
</script>