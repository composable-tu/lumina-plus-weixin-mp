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
import {tr} from "../i18n/main"

Page({
    data: {
        value: 'home', list: [{value: 'home', label: tr('function.home'), icon: 'home'}, {
            value: 'application', label: tr('function.application'), icon: 'application'
        }, {value: 'user', label: tr('function.user'), icon: 'user'}],
    }, onChange(e: any) {
        switch (e.detail.value) {
            case "home":
                wx.switchTab({
                    url: '/pages/index/index'
                });
                break;
            case "application":
                wx.switchTab({
                    url: '/pages/application/application'
                });
                break;
            case 'user':
                wx.switchTab({
                    url: '/pages/user/user'
                });
                break;
        }
    },

    /**
     * **重要**
     *
     * 由于微信小程序的页面或组件构建器中的 `onLoad()` 等生命周期方法在 custom tab 不生效，
     * 所以需要在涉及 custom tab 的页面或组件的 `onLoad()` 方法中手动调用 `init()` 方法。如：
     *
     * ```JavaScript
     * onLoad() {
     *     this.getTabBar().init();
     * },
     * ```
     */
    init() {
        const currentPage = getCurrentPages().pop();
        if (currentPage) {
            const route = currentPage.route;
            let defaultTab = 'home';

            if (route.includes('application')) defaultTab = 'application'; else if (route.includes('user')) defaultTab = 'user';

            this.setData({value: defaultTab});
        }
    }
});
