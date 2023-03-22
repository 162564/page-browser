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
                    console.log("已经修改为：student")

                },
                changeMainCompany(state,payload){
                    state.showMain = payload.myVal
                    state.myContextType = payload.myCompany
                    console.log("已经修改为：company")
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