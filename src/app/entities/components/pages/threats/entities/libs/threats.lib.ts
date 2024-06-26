import { EThreatInfoField } from "../components/threat-info/entities/threat-info-field.enum";
import { EThreat } from "../enums/threat.enum";
import { IThreatCard } from "../interfaces/threat-card.interface";
import { LThreatCard } from "../labels/threat-card.label";

export abstract class ThreatsLib {
    /**
     * Справочник карточек угроз
     */
    public static readonly threatsList: IThreatCard[] = [
        {
            [LThreatCard.TITLE]: 'SQL-инъекция',
            [LThreatCard.ROUTE]: EThreat.SQL_INJECTION,
            [LThreatCard.IMAGE]: 'assets/icons/injector.png'
        },
        {
            [LThreatCard.TITLE]: 'DDoS-атака',
            [LThreatCard.ROUTE]: EThreat.DDOS_ATTACK,
            [LThreatCard.IMAGE]: 'assets/icons/ddos-attack.png'
        },
        {
            [LThreatCard.TITLE]: 'XSS-атака',
            [LThreatCard.ROUTE]: EThreat.XSS_ATTACK,
            [LThreatCard.IMAGE]: 'assets/icons/xss-attack.png'
        },
        {
            [LThreatCard.TITLE]: 'Нарушение контроля доступа',
            [LThreatCard.ROUTE]: EThreat.BROKEN_ACCESS_CONTROL,
            [LThreatCard.IMAGE]: 'assets/icons/broken-access.png'
        }
    ];

    /**
     * Справочная информация по угрозам для отображения на странице угрозы
     */
    public static threatInfoThesaurus: Record<EThreat, Record<string, string>> = {
        [EThreat.SQL_INJECTION]: {
            [EThreatInfoField.TITLE]: 'SQL-инъекция',
            [EThreatInfoField.DESCRIPTION]: '<span><b>SQL-инъекция</b> - это уязвимость веб-безопасности, которая позволяет злоумышленнику вмешиваться в запросы, которые приложение делает к своей базе данных. ' + 
                                            'Как правило, это позволяет просматривать данные, которые он обычно не может получить. Это могут быть других пользователей, или любые другие данные, доступ к которым имеет само приложение. ' +
                                            'Во многих случаях злоумышленник может изменять или удалять эти данные, вызывая постоянные изменения в содержимом или поведении приложения.</span>',
            [EThreatInfoField.CONSEQUANCES]:'<span>Успешная атака SQL-инъекции может привести к <b>несанкционированному доступу</b> к конфиденциальным данным, таким как пароли, данные кредитных карт или личная информация пользователей. ' +
                                             'Многие громкие утечки данных в последние годы стали результатом атак с использованием SQL-инъекций, что привело к ухудшению репутации и штрафам со стороны регулирующих органов. ' + 
                                             'В некоторых случаях злоумышленник может получить постоянный <b>черный ход</b> в системы организации, что приводит к долгосрочной угрозе, которая может оставаться незамеченной в течение длительного периода времени.</span>',
            [EThreatInfoField.PROTECTION]: 'Существует несколько рекомендаций, позволяющих минимизировать риски пострадать от SQL-инъекций:' +
                                           '<ul>' + 
                                           '<li>Использование параметрических запросов. Вместо того чтобы вставлять пользовательский ввод напрямую в запрос, необходимо использовать специальные местозаменители (проще говоря – использовать POST-запрос, вместо GET-запроса).' +
                                           'Это гарантирует, что ввод будет обработан как данные, а не как часть SQL-кода.</li>' +
                                           '<li>Использование экранирование специальных символов. В некоторых случаях, когда использование параметризованных запросов невозможно, следует экранировать специальные символы в пользовательском вводе.' +
                                           'Это поможет предотвратить внедрение вредоносного кода в ваши SQL-запросы.</li>' +
                                           '<li>Минимизация прав доступа. Если мы создадим систему прав, в которой каждый человек может получать только определенные новости, то данная система сможет прервать запрос, если заметит, ' +
                                           'что получаемые новости не соответствуют текущим пользовательским правам.</li>' + 
                                           '<li>Проверка входных данных на соответствие ожидаемому формату. Это может помочь отсеять потенциально опасные запросы. Фильтрация входных данных позволяет убрать нежелательные символы и строки, которые могут быть использованы в SQL инъекциях</li>' +
                                           '</ul>',
            [EThreatInfoField.LINKS]: '<a href="https://habr.com/ru/articles/725134/" target="_blank">https://habr.com/ru/articles/725134/</a><br>' +
                                      '<a href="https://sky.pro/wiki/javascript/zashita-ot-sql-inuekcii-metody-primery-i-rekomendacii/" target="_blank">https://sky.pro/wiki/javascript/zashita-ot-sql-inuekcii-metody-primery-i-rekomendacii/</a>' 	
        },
        [EThreat.DDOS_ATTACK]: {
            [EThreatInfoField.TITLE]: 'DDoS-атака'
        },
        [EThreat.XSS_ATTACK]: {
            [EThreatInfoField.TITLE]: 'XSS-атака'
        },
        [EThreat.BROKEN_ACCESS_CONTROL]: {
            [EThreatInfoField.TITLE]: 'Нарушение контроля доступа'
        }
    };
}