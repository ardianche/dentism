<template>
  <div class="about-content-layout">
    <div class="content-boxes">
      <div class="content-sidebar">
          <v-list class="list">
            <v-list-group
              v-for="item in routes"
              :key="item.title"
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="subItem in item.children"
                :key="subItem.title"
              >
                <v-list-tile-content>
                  <v-list-tile-title >{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeMount(){
      this.routes = this.$router.options.routes
                                    .find(item => item.name == 'mainPage')
                                    .children[0]
                                    .children
                                    .map(item => {
                                        console.log('item : ',item);
                                        return {
                                            title : item.path.substr(1,item.path.length),
                                            children : !!item.children &&  item.children.map(item => {
                                              return {
                                                title : item.path.substr(1,item.path.length),
                                              }
                                            }) || []
                                        }
                                    });

      console.log('routes : ', this.routes);
  },
  data:()=>{
    return{
      routes : null,
    }
  }
}
</script>
<style lang="scss" scoped>
  .about-content-layout{
    padding:20px;
    height:100%;
      .content-boxes{
        height: 100%;
        border: 1px solid lightgray;
        border-radius: 4px;
        box-shadow: 0px 3px 6px 3px lightgrey;
        display:grid;
        grid-template-columns: 230px 1fr;
        grid-column-gap: 20px;
        .content-sidebar{
          .list{
            box-shadow: 8px 1px 20px 0px lightgrey;
            text-transform:capitalize;
            height:100%;
          }
        }
      }
  }
</style>