import Bone from '@bone/bone-mobile';
import HomePage from './app/page/HomePage';
import SetTime from'./app/page/SetTimePage';
import MorePage from './app/page/MorePage';
const app = Bone.createApp({ //创建一个实例
  appName: 'bone-demo', //要显示的dom元素位置
  router: {   //路由
    routes: [  //路由项
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
      }, {
        path: '/settime',
        page: SetTime,
        initialProps: {
          title: '设定时间'
        }
      }
    ]
  },
  extensions: {
    middlewares: [] // 目前仅支持标准redux中间件
  }
});
app.start();
