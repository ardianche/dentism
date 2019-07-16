<template>
    <div class="register-layout">
        <span style="font-size:1.4em;margin-bottom:25px; !important">New Patient Form</span>
        <v-divider inset style="width:100%;border-color:#949494;margin-bottom:25px;"></v-divider>
        <v-form>
            <v-text-field v-for="(input,$index) in form" v-model="form[$index]" :key="$index" :label="$index.replace('_',' ')" />
        </v-form>
        <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn color="red darken-1" flat @click="cancel()">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="initiateConfirm()">Make Request</v-btn>
            </v-card-actions>
            <Popup :dialogProp="{message : 'Are you sure you want to continue registering this appointment ?',dialog:true}"
                    v-if="confirmation">
                    <template  v-slot:confirmation style="display:flex;flex-direction:column;">
                                    <span>Are you sure you want to continue registering this patient ?</span>
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
import {mapState,mapActions} from 'vuex';
export default {
    components:{
        Popup,
    },
    beforeMount(){
        this.form = this.new_patient;
    },
    data:()=>{
        return {
            form: null,
            dialog:false,
            confirmation:false,
        }
    },
    computed:{
        ...mapState({
            new_patient : state => state.new_patient
        })
    },
    methods:{
        ...mapActions(['registerPatient']),
        initiateConfirm(){
            this.confirmation = ! this.confirmation;
        },
        confirm(){
            console.log('test');
        this.registerPatient(this.form);
            console.log('testing Make Request button');
            this.confirmation = ! this.confirmation;
        }
    }
}
</script>
<style lang="scss">
    .register-layout{
        padding:50px;
        background-color: white;
        .v-form{
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-column-gap:20px;
            grid-row-gap: 20px;
            .v-text-field{
                text-transform: capitalize;
            }
        }
    }
</style>
