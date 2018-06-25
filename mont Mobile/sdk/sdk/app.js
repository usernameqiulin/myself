import Bone from '@bone/bone-mobile';
import HomePage from './app/page/HomePage';
import MorePage from './app/page/MorePage';

const app = Bone.createApp({
  appName: 'bone-demo',
  router: {
    routes: [
      {
        path: '/',
        page: HomePage,
        initialProps: {
          title: '首页'
        }
      },
      {
        path: '/more',
        page: MorePage,
        initialProps: {
          title: '更多'
        }
      }
    ]
  },
  extensions: {
    middlewares: [] // 目前仅支持标准redux中间件
  }
});
app.start();
