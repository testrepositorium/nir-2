import { LContact } from "../labels/contact.label";

/**
 * Данные контакта
 * 
 * @property {string} TEXT - текст
 * @property {strtig} URL - ссылка
 * @property {string} ICON - ссылка на иконку
 */
export interface IContact {
    [LContact.TEXT]: string;
    [LContact.URL]: string;
    [LContact.ICON]: string;
}