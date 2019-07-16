<template>
    <div>
        <register-patient v-if="submenu.sub == 'register-patient'"/>
    </div>
</template>
<script>
import RegisterPatient from '@/views/main/submenus/RegisterPatient.vue';
export default {
    props:['submenu'],
    components:{
        RegisterPatient,
    }
}
</script>
<style lang="scss" scoped>
    
</style>
