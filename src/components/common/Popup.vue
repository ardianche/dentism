
<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.dialogProp" persistent max-width="290">
      <v-card style="padding:20px; width:auto;">
        <slot name="signup">
        </slot>
        <slot name="confirmation">
        </slot>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
    beforeMount(){
        console.log('DATA: ',this.dialogProp);
        this.dialog = this.dialogProp.dialog;
    },
    mounted(){
        console.log('dasd',this.dialog);
                console.log('slots : ',this.$slots);
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