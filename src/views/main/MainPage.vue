<template>
    <div class="mainpage-layout">
        <Custom-Header></Custom-Header>
        <About></About>
    </div>
</template>
<script>
import About from '@/views/About.vue';
import CustomHeader from '@/components/common/CustomHeader.vue';
export default {
    components:{
        CustomHeader,
        About,
    },
    beforeMount(){
    },
    mounted(){
    },
    data:()=>{
        return {
            routes: null,
        }
    }
}
</script>
<style lang="scss" scoped>
    .mainpage-layout{
        height:100%;
    }
</style>
