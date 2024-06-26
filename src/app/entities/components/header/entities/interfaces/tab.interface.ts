import { ETab } from "../enums/tab.enum";
import { LTab } from "../labels/tab.label";

/**
 * Данные вкладки
 * 
 * @property {string} NAME - имя вкладки
 * @property {ETab} ROUTE - адрес, по которому происходит редирект
 */
export interface ITab {
    [LTab.NAME]: string;
    [LTab.ROUTE]: ETab;
}