import User from '@/view/user/index';
import Production from '@/view/production/index';
import Login from '@/view/auth/login';
import Join from '@/view/family/join';


let router = [
  {
    path: '/family/join', 
    component: Join,
    meta: {
      needAuth: true,
    },
  },
  {
    meta: {
      needAuth: true,
    },
    path: '/production', //后面是传递的参数id
    component: Production,
    exact: true,
  },
  {
    meta: {
      needAuth: true,
    },
    path: '/user',
    component: User,
    routes: [
      /** 嵌套路由  User下面又有两个子页面*/
      // {
      //   path: '/user/test',
      //   component: Test,
      // },
    ],
  },
  {
    meta: {
      needAuth: false,
    },
    path: '/login', //后面是传递的参数id
    component: Login,
    exact: true,
  },
  {
    path: '/', //首页默认加载的页面
    component: User,
  },
];

export default router;
