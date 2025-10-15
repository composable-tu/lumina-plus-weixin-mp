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
import zh_CN from './zh-CN';

type ILang = typeof zh_CN;

// 语言包映射
const languages: Record<string, ILang> = {
    'zh-CN': zh_CN, 'zh': zh_CN,
};

// 类型安全的键访问器
type Join<K, P> = K extends string | number ? P extends string | number ? `${K}${'' extends P ? '' : '.'}${P}` : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]];

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ? {
    [K in keyof T]-?: (K extends string | number ? (T[K] extends infer V ? (V extends string ? `${K}` : never) | (Leaves<V, Prev[D]> extends infer R ? Join<K, R> : never) : never) : never);
}[keyof T] : '';

type TranslationPaths = Leaves<ILang>;

class I18n {
    private translations: ILang = zh_CN;

    constructor() {
        this.initLanguage();
    }

    /**
     * 根据键名获取翻译文本，支持 IDE 智能提示
     * @param key 翻译键名，支持点号分隔的嵌套属性，如 "funcation.home"
     */
    tr<TKey extends TranslationPaths>(key: TKey): string {
        try {
            // 按照点号分割键名，例如 "funcation.home" => ['funcation', 'home']
            const keys = key.split('.');
            let value: any = this.translations;

            // 逐层访问对象属性
            for (const k of keys) {
                value = value[k];
                if (value === undefined) {
                    console.warn(`缺少翻译键: ${key}`);
                    return key;
                }
            }

            return value;
        } catch (error) {
            console.error(`翻译键"${key}"时发生错误:`, error);
            return key as string;
        }
    }

    /**
     * 初始化语言，根据微信系统语言设置
     */
    private initLanguage(): void {
        try {
            // 获取微信系统信息
            const info = wx.getAppBaseInfo();
            const language = info.language || 'zh-CN';

            // 设置对应的语言包
            if (languages[language]) this.translations = languages[language]; else this.translations = zh_CN;
        } catch (e) {
            console.error('初始化语言失败，使用默认语言 zh-CN:', e);
            this.translations = zh_CN;
        }
    }
}

// 导出单例实例
const i18n = new I18n();
export default i18n;

// 方便使用的工具函数，支持IDE智能提示
export const tr = <TKey extends TranslationPaths>(key: TKey): string => {
    return i18n.tr(key);
};

// 导出所有可用的翻译键类型
export type {TranslationPaths};
