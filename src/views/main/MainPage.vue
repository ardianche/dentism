<template>
    <div class="mainpage-layout">
        <Custom-Header></Custom-Header>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>
import Router from '@/router';
import CustomHeader from '@/components/common/CustomHeader.vue';
export default {
    components:{
        CustomHeader,
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
