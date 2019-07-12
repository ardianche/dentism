export const validationRules = [
    emailRules = () => {
        v => !!v || 'E-mail is required',
        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    },
    password = () => {
        v => !!v || 'Password is required',
        v => /^\w*\w{9,100}$/.test(v) || 'Password is not strong enough!'
    }
]