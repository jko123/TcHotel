
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/find/find","pages/cart/cart","pages/mine/mine","pages/news/news","pages/reservation/reservation","pages/customer/customer","pages/hotel/hotel","pages/cities/cities","pages/reservationList/reservationList","pages/prize/prize","pages/welfare/welfare","pages/questions/questions","pages/sleep/sleep","pages/winter/winter","pages/search/search","pages/citiesList/citiesList","pages/hotelDetails/hotelDetails","pages/trafficGuidance/trafficGuidance","pages/map/map","pages/viewAllphotos/viewAllphotos","pages/toViewmore/toViewmore","pages/viewDetails/viewDetails","pages/shouquan/shouquan","pages/biji/biji","pages/finddetail/finddetail","pages/mine/center","pages/mine/coupon","pages/mine/hands","pages/mine/join","pages/mine/login","pages/mine/myQR","pages/mine/notice","pages/mine/qusetion","pages/mine/service","pages/mine/setting"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"首页","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#000000","selectedColor":"#ee8e67","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/icons/index.png","selectedIconPath":"static/icons/index1.png"},{"pagePath":"pages/find/find","text":"发现","iconPath":"static/icons/find.png","selectedIconPath":"static/icons/find1.png"},{"pagePath":"pages/cart/cart","text":"订单","iconPath":"static/icons/cart.png","selectedIconPath":"static/icons/cart1.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/icons/mine.png","selectedIconPath":"static/icons/mine1.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"如程酒店","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}},{"path":"/pages/find/find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现","enablePullDownRefresh":true}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订单","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/news/news","meta":{},"window":{"navigationBarTitleText":"最新上线","enablePullDownRefresh":false}},{"path":"/pages/reservation/reservation","meta":{},"window":{"navigationBarTitleText":"预定指南","enablePullDownRefresh":false}},{"path":"/pages/customer/customer","meta":{},"window":{"navigationBarTitleText":"专属客服","enablePullDownRefresh":false}},{"path":"/pages/hotel/hotel","meta":{},"window":{"navigationBarTitleText":"酒店合集","enablePullDownRefresh":false}},{"path":"/pages/cities/cities","meta":{},"window":{"navigationBarTitleText":"开放城市","enablePullDownRefresh":false}},{"path":"/pages/reservationList/reservationList","meta":{},"window":{"navigationBarTitleText":"预定榜单","enablePullDownRefresh":false}},{"path":"/pages/prize/prize","meta":{},"window":{"navigationBarTitleText":"天天抽奖","enablePullDownRefresh":false}},{"path":"/pages/welfare/welfare","meta":{},"window":{"navigationBarTitleText":"新人福利","enablePullDownRefresh":false}},{"path":"/pages/questions/questions","meta":{},"window":{"navigationBarTitleText":"常见问题","enablePullDownRefresh":false}},{"path":"/pages/sleep/sleep","meta":{},"window":{"navigationBarTitleText":"试睡专区","enablePullDownRefresh":false}},{"path":"/pages/winter/winter","meta":{},"window":{"navigationBarTitleText":"冬季福利","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索","enablePullDownRefresh":true}},{"path":"/pages/citiesList/citiesList","meta":{},"window":{"navigationBarTitleText":"城市列表","enablePullDownRefresh":false}},{"path":"/pages/hotelDetails/hotelDetails","meta":{},"window":{"navigationBarTitleText":"酒店详情","enablePullDownRefresh":false}},{"path":"/pages/trafficGuidance/trafficGuidance","meta":{},"window":{"navigationBarTitleText":"交通指南","enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{},"window":{"navigationBarTitleText":"地图","enablePullDownRefresh":false}},{"path":"/pages/viewAllphotos/viewAllphotos","meta":{},"window":{"navigationBarTitleText":"全部图片","enablePullDownRefresh":false}},{"path":"/pages/toViewmore/toViewmore","meta":{},"window":{"navigationBarTitleText":"更多","enablePullDownRefresh":false}},{"path":"/pages/viewDetails/viewDetails","meta":{},"window":{"navigationBarTitleText":"订房必读","enablePullDownRefresh":false}},{"path":"/pages/shouquan/shouquan","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/biji/biji","meta":{},"window":{"navigationBarTitleText":"笔记","enablePullDownRefresh":false}},{"path":"/pages/finddetail/finddetail","meta":{},"window":{"navigationBarTitleText":"体验详情","enablePullDownRefresh":false}},{"path":"/pages/mine/center","meta":{},"window":{"navigationBarTitleText":"兑换中心","enablePullDownRefresh":false}},{"path":"/pages/mine/coupon","meta":{},"window":{"navigationBarTitleText":"优惠详情","enablePullDownRefresh":false}},{"path":"/pages/mine/hands","meta":{},"window":{"navigationBarTitleText":"酒店合作","enablePullDownRefresh":false}},{"path":"/pages/mine/join","meta":{},"window":{"navigationBarTitleText":"开通会员","enablePullDownRefresh":false}},{"path":"/pages/mine/login","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false}},{"path":"/pages/mine/myQR","meta":{},"window":{"navigationBarTitleText":"添加好友","enablePullDownRefresh":false}},{"path":"/pages/mine/notice","meta":{},"window":{"navigationBarTitleText":"程客须知","enablePullDownRefresh":false}},{"path":"/pages/mine/qusetion","meta":{},"window":{"navigationBarTitleText":"常见问题","enablePullDownRefresh":false}},{"path":"/pages/mine/service","meta":{},"window":{"navigationBarTitleText":"专属客服","enablePullDownRefresh":false}},{"path":"/pages/mine/setting","meta":{},"window":{"navigationBarTitleText":"个人设置","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});