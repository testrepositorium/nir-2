import { ETab } from "../enums/tab.enum";
import { ITab } from "../interfaces/tab.interface";
import { LTab } from "../labels/tab.label";

export abstract class TabLib {
    /**
     * Справочник вкладок
     */
    public static readonly tabs: ITab[] = [
        {
            [LTab.NAME]: 'Угрозы',
            [LTab.ROUTE]: ETab.THREATS
        },
        {
            [LTab.NAME]: 'В работе...',
            [LTab.ROUTE]: ETab.IN_WORK
        }
    ];
}