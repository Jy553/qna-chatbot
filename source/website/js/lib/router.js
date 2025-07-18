

/* eslint-disable global-require */
const { createWebHashHistory } = require('vue-router');

module.exports = {
    base: '/',
    history: createWebHashHistory(),
    routes: [
        {
            path: '/alexa',
            name: 'alexa',
            component: require('../components/alexa/index.vue').default,
        },
        {
            path: '/connect',
            name: 'connect',
            component: require('../components/connect/index.vue').default,
        },
        {
            path: '/genesys',
            name: 'genesys',
            component: require('../components/genesys/index.vue').default,
        },
        {
            path: '/hooks',
            name: 'hooks',
            component: require('../components/hooks/index.vue').default,
        },
        {
            path: '/import',
            name: 'import',
            component: require('../components/import.vue').default,
        },
        {
            path: '/customTranslate',
            name: 'Import Custom Terminology',
            component: require('../components/customTranslate.vue').default,
        },
        {
            path: '/kendraIndex',
            name: 'Kendra Web Page Indexing',
            component: require('../components/kendraIndex.vue').default,
        },
        {
            path: '/export',
            name: 'export',
            component: require('../components/export.vue').default,
        },
        {
            path: '/edit',
            name: 'edit',
            component: require('../components/designer/index.vue').default,
        },
        {
            path: '/loading',
            component: require('../components/loading.vue').default,
        },
        {
            path: '/',
            component: require('../components/loading.vue').default,
        },
        {
            path: '/settings',
            name: 'settings',
            component: require('../components/settings.vue').default,
        },
    ],
};
