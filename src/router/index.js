import Vue from 'vue'
import Router from 'vue-router'
import My from '../layout/My'
import Bargining from '../layout/Bargining'
import Index from '../layout/Index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/My',
            name: 'My',
            component: My
        },
        {
            path: '/Bargining',
            name: 'Bargining',
            component: Bargining
        }

    ]
})