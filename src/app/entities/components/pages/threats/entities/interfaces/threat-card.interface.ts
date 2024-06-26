import { EThreat } from "../enums/threat.enum";
import { LThreatCard } from "../labels/threat-card.label";

/**
 * Карточка угрозы на главной странице угроз
 * 
 * @property {string} TITLE - заголовок
 * @property {EThreat} ROTUE - адрес маршрута
 * @property {string} IMAGE - ссылка на изображение
 */
export interface IThreatCard {
    [LThreatCard.TITLE]: string;
    [LThreatCard.ROUTE]: EThreat;
    [LThreatCard.IMAGE]: string;
}