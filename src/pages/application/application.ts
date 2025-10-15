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
import {tr} from "../../i18n/main";

const i18n = {
    application: tr("function.application"),
    activities: tr("application.activities"),
    checkin: tr("application.checkin"),
    fileSubmission: tr("application.fileSubmission"),
    approvals: tr("application.approvals"),
    projectApplication: tr("application.projectApplication"),
    myApprovals: tr("application.myApprovals"),
    group: tr("application.group"),
    joinGroup: tr("application.joinGroup"),
}

Page({
    data: {
        i18n: i18n
    }, onLoad() {
        this.getTabBar().init();
    },
})