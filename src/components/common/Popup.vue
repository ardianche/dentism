
<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.dialogProp" persistent max-width="290">
      <v-card style="padding:20px; width:auto;">
        <v-card-title class="headline" justify-content-center>Request a new account for Dentism</v-card-title>
        <v-card-text>Start enjoying full features of the Dentism platform. The world is yours.</v-card-text>
        <slot name="test">
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
        </slot>
        <slot name="signup">
            <v-form>
                <v-text-field class="registration-input" placeholder="test"/>
                <v-text-field class="registration-input" placeholder="test"/>
            </v-form>
        </slot>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
    beforeMount(){
        console.log('DATA: ',this.dialogProp);
        this.dialog = this.dialogProp;
    },
    mounted(){
        console.log('dasd',this.dialog);
    },
    watch:{
        dialogProp(newvalue){
            console.log('test',newvalue);
        },
    },
    data:()=>{
        return{
            dialog : false,
        }
    }, 
    props:['dialogProp'],
    methods:{
        cancel(){
            this.$emit('closeModal',false);
        },
        confirm(){
            this.$emit('closeModal',true);
        }
    }
}
</script>