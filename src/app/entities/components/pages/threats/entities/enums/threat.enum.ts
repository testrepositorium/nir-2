/**
 * Вкладки угроз
 * 
 * @property SQL_INJECTION - sql-инъекция
 * @property DDOS_ATTACK - DDoS-атака
 * @property XSS_ATTACK - XSS-атака
 * @property BROKEN_ACCESS_CONTROL - нарушение контроля доступа
 */ 
export enum EThreat {
    SQL_INJECTION = 'sql-injection',
    DDOS_ATTACK = 'ddos-attack',
    XSS_ATTACK = 'xss-attack',
    BROKEN_ACCESS_CONTROL = 'broken-access-control'
}