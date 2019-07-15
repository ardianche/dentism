<template>
    <Create-Appointment v-if="submenu.sub == 'create-appointment'"/>
</template>
<script>
import CreateAppointment from '@/views/main/submenus/CreateAppointment.vue';
export default {
    props:['submenu'],
    beforeMount(){
        this.sub = this.submenu;
    },
    components:{
        CreateAppointment,
    },
    watch:{
        sub:function(newVal){
            console.log('new vssaoidkal');
        }
    },
    mounted(){
        if(this.submenu.sub == 'create-appointment') this.active = 'create';
        console.log('create');
        console.log('test');
    },
    data:()=>{
        return{
            sub:null,
            active:null,
        }
    }
}
</script>3
