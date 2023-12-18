import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      layout: false,
      component: '@/layouts.tsx',
      routes: [
        {
          path: '/shop/*',
          microApp: 'shop',
        },
      ],
    },
    {
      path:'/login',
      layout: false,
      component: '@/pages/Login/index.tsx',

    }
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'shop',
          entry: '//localhost:8001',
        },
      ],
    },
  },
});
