import { createStore } from 'vuex'
import plPL from "view-ui-plus/src/locale/lang/pl-PL.js";

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
                user:{},
            }),
            getters:{
                getShowMain(state){
                    return state.showMain
                },
                getMyContextType(state){
                    return state.myContextType
                },
                getUser(state){
                    return state.user
                },
                getUsername(state){
                    return state.username
                },
                getPassword(state){
                    return state.password
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
                },
                changeMainByMyReport(state,payload){
                    state.myContextType = payload.myVal
                    console.log("已经修改为：myReport")
                },
                bindUser(state,payload){
                    state.user = {...payload}
                }
            }
        },
        student: {
            namespaced:true,
            strict:true,
            state:() => ({
                username: '',
                password: '',
                info:'',
                showMain:'',
                user:{},
            }),
            getters:{
                getShowMain(state){
                    return state.showMain
                },
                getUsername(state){
                    return state.username
                },
                getPassword(state){
                    return state.password
                },
                getUser(state){
                    return state.user
                }
            },
            actions:{

            },
            mutations: {
                bindUserInfo(state,payload){
                    state.username = payload.username
                    state.password = payload.password
                    state.info = payload.info
                },
                changeMain(state,payload){
                    state.showMain = payload.myVal
                    console.log('修改为'+ payload.myVal)
                },
                bindUser(state,payload){
                    state.user = {...payload}
                }
            }
        },
        company: {
            namespaced:true,
            strict:true,
            state:() => ({
                username: '',
                password: '',
                info:'',
                showMain:'',
                user:{},
            }),
            getters:{
                getShowMain(state){
                    return state.showMain
                },
                getUsername(state){
                    return state.username
                },
                getPassword(state){
                    return state.password
                },
                getUser(state){
                    return state.user
                }
            },
            actions:{

            },
            mutations: {
                bindUserInfo(state, payload) {
                    state.username = payload.username
                    state.password = payload.password
                    state.info = payload.info
                },
                changeMain(state, payload) {
                    state.showMain = payload.myVal
                    console.log('修改为' + payload.myVal)
                },
                bindUser(state, payload) {
                    state.user = {...payload}
                }
            }
        }
    },
})
export default store