<template>
    <div class="layout" >
            <span style="font-size:1.4em;margin-bottom:25px;">New Appointment Form</span>
            <v-divider inset style="width:100%;border-color:#949494;margin-bottom:25px;"></v-divider>
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

            </v-form>
             <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click="cancel()">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="confirm()">Make Request</v-btn>
            </v-card-actions>
            <Popup :dialogProp="{message : 'Are you sure you want to continue registering this appointment ?',dialog:true}"
                    v-if="confirmation"
                    @closeModal="confirm = !confirm" >
                    <template  v-slot:confirmation style="display:flex;flex-direction:column;">
                                    <span>Are you sure you want to continue registering this appointment ?</span>
                                    <v-flex>
                                        <v-btn color="red darken-1" flat @click="dialog = false;cancel()">I'm not sure.</v-btn>
                    <v-btn color="blue darken-1" flat @click="dialog = false;confirm()">Yes, proceed.</v-btn>
                                    </v-flex>
                    </template>
            </Popup>
    </div>
</template>
<script>
import Popup from '@/components/common/Popup.vue';
export default {
    components:{
        Popup,
    },
    mounted(){
    }, 
    data:()=>{
        return{
            dialog:false,
            confirmation:false,
        }
    },
    methods:{
        cancel(){
            this.confirmation = !this.confirmation;
        },
        confirm(){
            this.confirmation = !this.confirmation;
            console.log('testing Make Request button');
        }
    }
}
</script>
<style lang="scss" scoped>
    .layout{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 50px;
        height:100%;
        background-color:white;
        animation-duration: 0.91s;
        animation-name: slidein;
        .v-card__actions{
            align-self:flex-end;
        }
    }
</style>
