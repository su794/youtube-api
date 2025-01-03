import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import esLocale from 'timeago.js/lib/lang/es';
import itLocale from 'timeago.js/lib/lang/it'; // italian
import zhLocale from 'timeago.js/lib/lang/zh_CN';

register('ko', koLocale);
register('es', esLocale);
register('eu', itLocale);
register('zh_CN', zhLocale);

export function formatAgo(date, lang = 'en_US') {
    return format(date, lang);
}