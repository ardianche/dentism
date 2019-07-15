<template>
    <div class="frontpage-layout">
        <div class="frontpage-content-wrapper">
            <div class="frontpage-content"> 
                <div class="frontpage-content-item">
                    <v-icon>
                        calendar_today
                    </v-icon>
                    <h3>
                        Manage your appointments
                    </h3>
                </div>
                <div class="frontpage-content-item">
                    <v-icon>
                        short_text
                    </v-icon>
                    <h3>
                        Access medical data of patients
                    </h3>
                </div>
                <div class="frontpage-content-item">
                    <v-icon>
                        show_chart
                    </v-icon>
                    <h3>
                        Keep track of your stock
                    </h3>
                </div>
            </div>
            <div class="frontpage-side">
                <div class="frontpage-side-header">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>
                    <v-btn class="info" 
                            style="margin-left:auto;min-height:43px;" 
                            @click="authenticate()"
                            > Log In </v-btn>
                </div>
                <div class="frontpage-side-content">
                    <div class="frontpage-side-content-intro">
                        <h1 style="text-align:left;">
                            See what’s happening in the world of dental clinics right now
                        </h1>
                        <span>Join Dentism today!</span>
                    </div>
                    <v-btn class="info" @click="changeDialog()">
                        Sign Up
                    </v-btn>
                    <v-btn class="info" style="background-color:white !important; color:black;border: 1px solid #2196f3;box-shadow:unset !important">
                        Log In
                    </v-btn>
                </div>
            </div>
        </div>
        <popup :dialogProp="dialog" @closeModal="dialog = !dialog">
            <div slot="signup">
                 <v-card-title class="headline" justify-content-center>Request a new account for Dentism</v-card-title>
            <v-card-text>Start enjoying full features of the Dentism platform. The world is yours.</v-card-text>
            <v-form style="display:grid; grid-template-columns:1fr 1fr;grid-column-gap:20px;grid-row-gap:30px;">
                <v-text-field class="registration-input" 
                            label="First Name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Last Name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Clinic name"
                            required/>
                <v-text-field class="registration-input" 
                            label="Contact"
                            required/>
                <v-text-field class="registration-input" 
                            label="City"
                            required/>
                <v-text-field class="registration-input" 
                            label="Country"
                            required/>
                <v-text-field class="registration-input" 
                            label="Region"
                            required/>
                <v-text-field class="registration-input" 
                            label="Owner"
                            required/>
                <v-text-field class="registration-input" 
                            label="Email"
                            required/>
                <v-text-field class="registration-input" 
                            label="Password"
                            required/>
            </v-form>
             <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click="dialog = false;cancel()">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="dialog = false;confirm()">Make Request</v-btn>
            </v-card-actions>
            </div>
        </popup>
    </div>
</template>
<script>
// import {validationRules} from '@/assets/validation-rules';
import Popup from '@/components/common/Popup.vue';
export default {
    components:{
        Popup,
    },
    mounted(){
    },
    data:()=>{
        return{
            dialog:false,
            valid:false,
            email:null,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => /^\w*\w{9,100}$/.test(v) || 'Password is not strong enough!'
            ],
            password: '',
        }
    },
    methods:{
        changeDialog(){
            console.log('test');
            this.dialog = !this.dialog;
            console.log('this.dialog ', this.dialog);
            this.$forceUpdate();
        },
        authenticate(){
            this.$router.push('/main');
        },
    }
}
</script>
<style lang="scss" scoped>
    .frontpage-layout{
        height:100%;
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .frontpage-header{
            padding: 20px;
            background: var(--header-color);
            color: white !important;
            box-shadow: 0px 0px 20px #3a2f2f;
            display: flex;
            justify-content: space-between;
            .header-settings{
                display:flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        .frontpage-content-wrapper{
            height:100%;
            background:url('../assets/content3.png');
            background-size: cover;
            background-repeat: no-repeat;
            display: grid;
            grid-template-columns: 1fr 1fr;
            .frontpage-content{
                background: rgba(0,0,0,0.65);
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 1.3em;
                .frontpage-content-item{
                    display:flex;
                    width:60%;
                    i{
                        margin-right: 30px;
                    }
                }
                .frontpage-content-item:not(:last-child){
                    margin-bottom:40px;
                }
                .frontpage-content-left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    max-width: 50%;
                    margin: auto;
                    font-weight: 600;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 25px 25px 25px 25px;
                    p{
                        font-size: 1em;
                        color:black !important;
                    }
                }
                .v-card{
                    grid-column: 2;
                    margin-right: 50px;
                    padding:20px;
                    .authentication-card-footer{
                        display:flex;
                        justify-content: space-evenly;
                        width:100%;
                    }
                }
                form{
                    padding:20px;
                }
            }
            .frontpage-side{
                background:white;
                display: flex;
                flex-direction: column;
                .frontpage-side-header{
                    padding:20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 20px;
                    input{
                        padding:10px;
                        border:1px solid lightgray;
                        border-radius:4px 4px 4px 4px;
                        min-width: 241px;
                        max-width: 241px;
                    }
                }
                .frontpage-side-content{
                    margin: auto;
                    display: grid;
                    grid-template-rows: 1fr 1fr;
                    width:100%;
                    button{
                        max-width: 60%;
                        margin: auto;
                        width:60%;
                    }
                    .frontpage-side-content-intro{
                        margin: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        max-width: 60%;
                        align-items: flex-start;
                    }
                }
            }
        }
    }
</style>
