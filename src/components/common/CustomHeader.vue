<template>
    <div class="header-layout">
        <div class="header-left">
            <div class="ikona">
                <v-icon>menu</v-icon>
            </div>
        </div>
        <div class="header-center">
            <span style="font-size:1.4em;font-weight:600;">Dentism</span>
        </div>
        <div class="header-right">
            <v-tooltip 
                    v-for="(icon,$index) in icons" :key="$index" bottom>
                <template v-slot:activator="{ on }">
                    <v-icon
                        v-on="on"
                        @mouseover="showDescription($index)" 
                        @mouseleave="showDescription($index)" >
                        {{icon.name}}
                    </v-icon>
                </template>
                <span v-if="icon.clicked">
                    {{icon.description}}
                </span>
            </v-tooltip>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            clicked:false,
            icons:[
                {
                    name:'notifications',
                    description:'Notifications',
                    clicked:false,
                },
                {
                    name:'calendar_today',
                    description:'Calendar',
                    clicked:false,
                },
                {
                    name:'person',
                    description:'Person',
                    clicked:false,
                },
                {
                    name:'settings',
                    description:'Settings',
                    clicked:false,
                }
            ]
        }
    },
    methods:{
        showDescription(index){
            this.icons[index].clicked = !this.icons[index].clicked;
        }
    }
}
</script>
<style lang="scss">
    .header-layout{
        padding: 20px;
        background: #03A9F4;
        background: rgba($color: (#03A9F4), $alpha: 0.91);
        box-shadow: 0px 0px 2px 2px lightgrey;
        color: white;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        .header-left{
            display: flex;
            justify-content: flex-start;
            .ikona:hover::after{
                content: "<v-icon aria-hidden='true'>person</v-icon>";
            }
            .ikona::after{
                visibility: hidden !important;
            }
            i:hover > i:nth-child(1){
                visibility: hidden !important;
            }
            .ikona:hover::after{
                visibility: hidden !important;
            }
            
        }
        .header-right{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: auto;
            .v-text-field{
                margin: 0;
                padding:0;
            }
            .v-input{
                margin:0;
                padding:0;
                height:unset !important;
            }
            i:not(:nth-child(7)){
                margin-right:15px;
            }
        }
    }
</style>
