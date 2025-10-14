// index.ts

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [`${imageCdn}/swiper1.png`, `${imageCdn}/swiper1.png`, `${imageCdn}/swiper1.png`,];

Page({
    data: {
        swiperList,
    }, onLoad() {
        this.getTabBar().init();
    },
})
