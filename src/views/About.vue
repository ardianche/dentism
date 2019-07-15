<template>
  <div class="about-content-layout">
    <div class="content-boxes">
      <div class="content-sidebar">
          <v-list class="list">
            <v-text-field 
                  label="Search here" 
                  style="padding:20px;"
                  v-model="searchKey">

            </v-text-field>
            <v-list-group
              v-for="(item,$index) in routes"
              :key="item.title"
              :prepend-icon="icons[item.title].icon"
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title @click="goTo(item)">{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <template>
                 <v-list-tile
                    v-for="subItem in item.children"
                    :key="subItem.title"
                    @click="activateSubMenu(item.title,subItem.title)"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title class="submenu" style="font-size:0.8em;" >{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
              </template>
            </v-list-group>
          </v-list>
      </div>
      <div class="content-center">
         <keep-alive>
            <calendar v-if="activeMenu == 'calendar'"/>
            <appointments v-if="activeMenu == 'appointments' " :submenu="submenu"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>

import Calendar from '@/views/main/Calendar.vue';
import Appointments from '@/views/main/Appointments.vue';
export default {
  components:{
    Calendar,
    Appointments,
  },
  beforeMount(){
      this.routes = this.$router.options.routes
                                    .find(item => item.name == 'mainPage')
                                    .children[0]
                                    .children
                                    .map(item => {
                                        return {
                                            title : item.path.substr(1,item.path.length),
                                            path : item.path,
                                            children : !!item.children &&  item.children.map(item => {
                                              return {
                                                title : item.path.substr(1,item.path.length),
                                              }
                                            }) || [],
                                            show:false,
                                        }
                                    });
  },
  watch:{
    searchKey:function(Val){
    this.routes.forEach(item => {
        console.log('item: ', item);
        if(JSON.stringify(item.title).includes(Val)){
          item.show = true;
        }
        // return JSON.stringify(item).includes(Val) ? item.show = true : item.show = false;
      })
    }
  },
  data:()=>{  
    return{
      routes : null,
      searchKey:'',
      icons:{
        'calendar' : {
          name:'calendar',
          icon:'calendar_today'
        },
        'appointments':{
          name:'appointments',
          icon:'calendar_view_day'
        },
        'stats':{
          name:'stats',
          icon:'trending_up'
        },
        'invoices':{
          name:'invoices',
          icon:'receipt'
        },
        'inventory':{
          name:'inventory',
          icon:'donut_large'
        },
        'patients': {
          name:'patients',
          icon:'account_circle'
        }
      },
      submenu:{
        name:null,
        sub:null,
      }
    }
  },
  methods:{
    goTo(item){
      console.log('item: ',item.path)
      // this.$router.go(item.path)
      this.$store.commit('SET_ACTIVE_MENU',item.title);
    },
    activateSubMenu(item,child){
      console.log('item and child : ',item,child);
      this.submenu.name = item;
      this.submenu.sub = child;
      this.$forceUpdate();
    }
  },
  computed:{
    activeMenu(){
      return this.$store.state.activeMenu;
    }
  }
}
</script>
<style lang="scss" scoped>
  .about-content-layout{
    padding:20px;
    height:100%;
    height: calc(100% - 50px);
    overflow-y: scroll;
      .content-boxes{
        height: 100%;
            // overflow-y: scroll;
        border: 1px solid lightgray;
        border-radius: 4px;
        box-shadow: 0px 3px 6px 3px lightgrey;
        display:grid;
        grid-template-columns: 260px 1fr;
        grid-column-gap: 20px;
        .content-sidebar{
          overflow-y: scroll;
          .list{
            box-shadow: 8px 1px 20px 0px lightgrey;
            text-transform:capitalize;
            height:100%;
          }
        }
        .content-center{
          overflow-y:scroll;
        }
      }
  }
</style>