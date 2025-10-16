/**
 * Copyright (c) 2025 LuminaPJ
 * SM2 Key Generator is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */
import {ActionSheet} from 'tdesign-miniprogram';
import {ActionSheetTheme} from 'tdesign-miniprogram/action-sheet/index';
import {tr} from "../../i18n/main";

const i18n = {
    home: tr("function.home"),
    registering: tr("home.registering"),
    registered: tr("home.registered"),
    ended: tr("home.ended"),
}

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [`${imageCdn}/swiper1.png`, `${imageCdn}/swiper1.png`, `${imageCdn}/swiper1.png`,];

Page({
    data: {
        i18n: i18n, swiperList: swiperList, filterActivityType: "registering"
    }, onLoad() {
        this.getTabBar().init();
    }, onFilterActivityTypeClick() {
        ActionSheet.show({
            align: 'center',
            context: this,
            description: tr("home.filterActivityType"),
            selector: '#t-action-sheet',
            theme: ActionSheetTheme.List,
            items: [{
                label: tr("home.registering"), icon: this.data.filterActivityType === "registering" ? "check" : null
            }, {
                label: tr("home.registered"), icon: this.data.filterActivityType === "registered" ? "check" : null
            }, {
                label: tr("home.ended"), icon: this.data.filterActivityType === "ended" ? "check" : null
            },],
        });
    }, handleFilterActivityTypeSelected(e: WechatMiniprogram.CustomEvent) {
        const label = e.detail.selected.label;
        switch (label) {
            case tr("home.registering"):
                this.setData({filterActivityType: "registering"});
                break;
            case tr("home.registered"):
                this.setData({filterActivityType: "registered"});
                break;
            case tr("home.ended"):
                this.setData({filterActivityType: "ended"});
                break;
        }
    }
})


