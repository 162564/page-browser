import { createStore } from 'vuex'

const store = createStore({
    modules:{
        school: {
            namespaced:true,
            strict:true,
            state:() => ({
                username: '',
                password: '',
                info:'',
                showMain:'',
                myContextType:'',
            }),
            getters:{
                getShowMain(state){
                    return state.showMain
                },
                getMyContextType(state){
                    return state.myContextType
                }
            },
            actions:{

            },
            mutations: {
                /*改变main中的内容*/
                changeMain(state,payload){
                    state.showMain = payload.myVal
                    state.myContextType = payload.myStudent
                },
                changeMainCompany(state,payload){
                    state.showMain = payload.myVal
                    state.myContextType = payload.myCompany
                },
                bindUserInfo(state,payload){
                    state.username = payload.username
                    state.password = payload.password
                    state.info = payload.info
                }
            }
        },
        student: {
            strict:true,
            state:() => ({

            }),
            getters:{

            },
            actions:{

            },
            mutations: {

            }
        },
        company: {
            strict:true,
            state:() => ({

            }),
            getters:{

            },
            actions:{

            },
            mutations: {

            }
        }
    },
})
export default store