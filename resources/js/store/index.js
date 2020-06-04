export default {

    state: {
        token: localStorage.getItem('access_token') || null,
        userInfo : '',
    },

    getters: {
        loggedIn(state){
            return state.token != null;
        },
        userInfo(state){
            return state.userInfo;
        }
    },

    mutations: {
        RETRIVE_TOKEN(state,token){
           return state.token = token;
        },
        DESTROY_TOKEN(state){
            return state.token = null;
        },
        RETRIVE_USER(state,userInfo){
            return state.userInfo = userInfo;
        }
    },

    actions: {
        retriveToken(context, creadantial){
            return new Promise(( resolve, reject) => {
                axios.post('/api/auth/signin', {
                    email: creadantial.username,
                    password: creadantial.password,
                })
                .then(function (response) {
                    const token = response.data.token;
                    localStorage.setItem('access_token',token);
                    context.commit('RETRIVE_TOKEN', token)
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error);
                })
            })
        },

        destroyToken(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token
            
            if(context.getters.loggedIn){
                return new Promise(( resolve, reject) => {
                    axios.post('/api/auth/signout')
                    .then(function (response) {
                        localStorage.removeItem('access_token');
                        context.commit('DESTROY_TOKEN');
                        resolve(response)
                    })
                    .catch(function (error) {
                        localStorage.removeItem('access_token');
                        context.commit('DESTROY_TOKEN');
                        reject(error);
                    })
                })
            }
        },

        retriveUser(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token
            if(context.getters.loggedIn){
                return new Promise(( resolve, reject) => {
                    axios.get('/api/auth/me')
                    .then(function (response) {
                        var userInfo = response.data;
                        context.commit('RETRIVE_USER',userInfo);
                        resolve(response)
                    })
                    .catch(function (error) {
                        reject(error);
                    })
                })
            }
        },


        registrationUser(context,data){
            return new Promise(( resolve, reject) => {
                axios.post('/api/auth/signup',{
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error);
                })
            })
        },

        SendpasswordLik(context,data){
            return new Promise(( resolve, reject) => {
                axios.post('/api/auth/password/link',{
                    email: data.email,
                })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error);
                })
            })
        },

        SetnewPassword(context,data){
            return new Promise(( resolve, reject) => {
                axios.post('/api/auth/password/set',{
                    token: data.token,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error);
                })
            })
        }







    }




















}