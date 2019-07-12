import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FrontPage from './views/FrontPage.vue';
import MainPage from '@/views/main/MainPage.vue';
import About from '@/views/About.vue';
import Appointments from '@/views/main/Appointments.vue';
import Patients from '@/views/main/Patients.vue';
import Inventory from '@/views/main/Inventory.vue';
import Calendar from '@/views/main/Calendar.vue';
import Invoices from '@/views/main/Invoices.vue';
import Stats from '@/views/main/Stats.vue';
import RegisterPatient from '@/views/main/submenus/RegisterPatient.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/log-in',
      name:'frontPage',
      component:FrontPage
    },
    {
      path:'/main',
      name:'mainPage',
      component:MainPage,
      children:[
        {
          path:'/',
          name:'mainPageAbout',
          component:About,
          children:[
            {
              path:'/appointments',
              name:'mainPageAppointments',
              component:Appointments
            },
            {
              path:'/patients',
              name:'mainPagePatients',
              component:Patients,
              children:[
                {
                  path:'/register-patient',
                  component:RegisterPatient,
                  name:'mainPagePatientsRegister'
                }
              ]
            },
            {
              path:'/inventory',
              name:'mainPageInventory',
              component:Inventory
            },
            {
              path:'/calendar',
              name:'mainPageCalendar',
              component:Calendar
            },
            {
              path:'/invoices',
              name:'mainPageInvoices',
              component:Invoices
            },
            {
              path:'/stats',
              name:'mainPageStats',
              component:Stats
            }
          ]
        },
      ]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
