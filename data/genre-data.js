var local_database = [
  // {
  //   id: '0',
  //   title: 'NBA赛事',
  //   imgUrl: '/images/icons/nba.png',
  //   dataUrl: ''
  // },
  // {
  //   id: '1',
  //   title: '足球联赛',
  //   imgUrl: '/images/icons/football.png',
  //   dataUrl: ''
  // },
  {
    id: '0',
    title: '笑话大全',
    imgUrl: '/images/icons/kidding.png',
    // d595eb48c9184ea303156a4c259f7e03
    dataUrl: 'http://japi.juhe.cn/joke/content/list.from?key=d595eb48c9184ea303156a4c259f7e03',
    navigateUrl: './jokes/joke?genreId='
  },
  {
    id: '1',
    title: '星座运势',
    imgUrl: '/images/icons/constellation.png',
    dataUrl: 'http://ali-star-lucky.showapi.com/star?needMonth=1&needTomorrow=1&needWeek=1&needYear=1&star=',
    navigateUrl: '../constellation/consotellation?genreId='
  },
  {
    id: '2',
    title: '微信精选',
    imgUrl: '/images/icons/wechat.png',
    dataUrl: 'http://jisuwxwzjx.market.alicloudapi.com/weixinarticle/get',
    navigateUrl: '../wechats/wechat?genreId='
  },
  {
    id: '3',
    title: '新闻头条',
    imgUrl: '/images/icons/news.png',
    dataUrl: 'http://toutiao-ali.juheapi.com/toutiao/index?type=',
    navigateUrl: '../news/news?genreId='
  }
  // {
  //   id: '6',
  //   title: '成语字典',
  //   imgUrl: '/images/icons/word.png',
  //   dataUrl: ''
  // },
  // {
  //   id: '7',
  //   title: '新华字典',
  //   imgUrl: '/images/icons/dic.png',
  //   dataUrl: ''
  // }
];
var star_database = [
  {
    id: '0',
    nikeName: 'mojie',
    name: '魔蝎座',
    imgUrl: '/images/stars/mojie.png',
    date: '12.22-1.19',
    chineseData: '12月22日-1月19日'
  },
  {
    id: '1',
    nikeName: 'shuiping',
    name: '水瓶座',
    imgUrl: '/images/stars/shuiping.png',
    date: '1.20-2.18',
    chineseData: '1月20日-2月18日'
  },
  {
    id: '2',
    nikeName: 'shuangyu',
    name: '双鱼座',
    imgUrl: '/images/stars/shuangyu.png',
    date: '2.21-3.20',
    chineseData: '2月21日-3月20日'
  },
  {
    id: '3',
    nikeName: 'baiyang',
    name: '白羊座',
    imgUrl: '/images/stars/baiyang.png',
    date: '3.21-4.19',
    chineseData: '3月21日-4月19日'
  },
  {
    id: '4',
    nikeName: 'jinniu',
    name: '金牛座',
    imgUrl: '/images/stars/jinniu.png',
    date: '4.20-5.20',
    chineseData: '4月20日-5月20日'
  },
  {
    id: '5',
    nikeName: 'shuangzi',
    name: '双子座',
    imgUrl: '/images/stars/shuangzi.png',
    date: '5.21-6.21',
    chineseData: '5月21日-6月21日'
  },
  {
    id: '6',
    nikeName: 'juxie',
    name: '巨蟹座',
    imgUrl: '/images/stars/juxie.png',
    date: '6.22-7.22',
    chineseData: '6月22日-7月22日'
  },
  {
    id: '7',
    nikeName: 'shizi',
    name: '狮子座',
    imgUrl: '/images/stars/shizi.png',
    date: '7.23-8.22',
    chineseData: '7月23日-8月22日'
  },
  {
    id: '8',
    nikeName: 'chunv',
    name: '处女座',
    imgUrl: '/images/stars/chunv.png',
    date: '8.23-9.22',
    chineseData: '8月23日-9月22日'
  },
  {
    id: '9',
    nikeName: 'tiancheng',
    name: '天秤座',
    imgUrl: '/images/stars/tiancheng.png',
    date: '9.23-10.23',
    chineseData: '12月22日-1月19日'
  },
  {
    id: '10',
    nikeName: 'tianxie',
    name: '天蝎座',
    imgUrl: '/images/stars/tianxie.png',
    date: '10.24-11.22',
    chineseData: '12月22日-1月19日'
  },
  {
    id: '11',
    nikeName: 'sheshou',
    name: '射手座',
    imgUrl: '/images/stars/sheshou.png',
    date: '11.23-12.21',
    chineseData: '12月22日-1月19日'
  }
]

module.exports = {
  genreList: local_database,
  starList: star_database
}