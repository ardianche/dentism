<template>
    <v-layout style="display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;padding:20px;">
                <v-flex
                sm4
                xs12
                class="text-sm-left text-xs-center"
                >
                <v-btn @click="$refs.calendar.prev()" >
                    <v-icon
                    center
                    >
                    keyboard_arrow_left
                    </v-icon>
                    
                </v-btn>
                </v-flex>
            <v-subheader>
                    Your appointments
                </v-subheader>
            <v-flex sm4 xs12 class="text-sm-right text-xs-center">
                <v-btn @click="$refs.calendar.next()">
                    <v-icon
                    center
                    >
                    keyboard_arrow_right
                    </v-icon>
                </v-btn>
            </v-flex>
            
            </v-flex>
                </div>
           <v-calendar
                ref="calendar"
                v-model="focus"
                :type="type"
                color="primary"
                style="height:100%;"
                @click:more="viewDay"
                @click:date="viewDay"
              >
        <template v-slot:day="{ present, past, date }">
            <v-layout
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                   @mouseenter="doSomething()"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-layout>
          </template>
            </v-calendar>
    </v-layout>
</template>
<script>
import {format} from 'date-fns/format';
export default {
    mounted(){
        window.scrollBy(0,210);
    },
    data:()=>{
        return { 
            today:new Date(),
            selectedOpen:false,
             type: 'week',
            focus: new Date(),
            typeOptions: [
                { text: 'Day', value: 'day' },
                { text: '4 Day', value: '4day' },
                { text: 'Week', value: 'week' },
                { text: 'Month', value: 'month' },
                { text: 'Custom Daily', value: 'custom-daily' },
                { text: 'Custom Weekly', value: 'custom-weekly' }
            ],
            tracked: {
                '2019-07-09': [50, 45],
                '2019-07-08': [10],
                '2019-07-07': [0, 78, 5],
                '2019-01-06': [0, 0, 50],
                '2019-07-06': [0, 0, 50],
                '2019-07-05': [0, 10, 23],
                '2019-07-04': [2, 90],
                '2019-07-03': [10, 32],
                '2019-07-02': [80, 10, 10],
                '2019-07-01': [20, 25, 10]
            },
            colors: ['#1867c0', '#fb8c00', '#000000'],
            category: ['Development', 'Meetings', 'Slacking']
        }
    },
    methods:{
        doSomething(){
        },
        viewDay({date}){
            this.focus = date;
            this.type = this.type == 'day' ? 'week' : 'day';
        }
    }
}
</script>
<style lang="scss" scoped>
    .layout{
        height:100%;
    }
</style>