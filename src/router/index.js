import { createRouter, createWebHistory } from 'vue-router'
import MyLogin from "../views/MyLogin.vue";

import ScHeader from "../components/school/ScHeader.vue";
import ScGuide from "../components/school/ScGuide.vue";
import ScMain from "../components/school/ScMain.vue";

import StHeader from "../components/student/StHeader.vue";
import StGuide from "../components/student/StGuide.vue";
import StMain from "../components/student/StMain.vue";

import CHeader from "../components/company/CHeader.vue";
import CGuide from "../components/company/CGuide.vue";
import CMain from "../components/company/CMain.vue";

import SchoolPage from "../views/SchoolPage.vue";
import CompanyPage from "../views/CompanyPage.vue";
import StudentPage from "../views/StudentPage.vue";
import ScForm from "../components/school/main/ScForm.vue";




const routes = [
    {
        path:'/',
        component:MyLogin
    },
    {
        path: '/schoolPage',
        component: SchoolPage,
        children: [
            {
                path: 'scHeader',
                component: ScHeader
            },
            {
                path: 'scGuide',
                component: ScGuide
            },
            {
                path: 'scMain',
                component: ScMain,
                children:[
                    {
                        path:'scForm',
                        component: ScForm,
                    }
                ]
            },
        ]
    },
    {
        path: '/studentPage',
        component: StudentPage,
        children: [
            {
                path:'stHeader',
                component:StHeader
            },
            {
                path:'stGuide',
                component:StGuide
            },
            {
                path:'stMain',
                component:StMain
            },
        ]
    },
    {
        path: '/companyPage',
        component: CompanyPage,
        children: [
            {
                path:'cHeader',
                component:CHeader
            },
            {
                path:'cGuide',
                component:CGuide
            },
            {
                path:'cMain',
                component:CMain
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
