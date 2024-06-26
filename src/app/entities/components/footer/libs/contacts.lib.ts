import { IContact } from "../interfaces/concat.interface";
import { LContact } from "../labels/contact.label";

export abstract class ContactsLib {
    /**
     * Список контактов
     */
    public static readonly contactsList: IContact[] = [
        {
            [LContact.TEXT]: 'github.com',
            [LContact.URL]: 'https://github.com/testrepositorium',
            [LContact.ICON]: 'assets/icons/github.png'
        },
        {
            [LContact.TEXT]: 'telegram.org',
            [LContact.URL]: 'https://t.me/Fimbol',
            [LContact.ICON]: 'assets/icons/telegram.png'
        },
        {
            [LContact.TEXT]: 'eee.offlane@gmail.com',
            [LContact.URL]: 'https://mail.google.com/mail/u/0/#inbox',
            [LContact.ICON]: 'assets/icons/gmail.png'
        }
    ];
}