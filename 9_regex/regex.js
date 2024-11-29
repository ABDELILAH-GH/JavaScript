/**
 * التعبيرات النمطية (Regular Expressions - Regex)
 *
 * التعبيرات النمطية هي طريقة قوية ومختصرة للبحث ومعالجة النصوص.
 * يمكن استخدامها للتحقق من الأنماط أو استبدال النصوص أو تقسيم النصوص إلى أجزاء.
 * 
 * ---- الأساسيات ----
 */

// مثال بسيط: البحث واستبدال النص
let text = "abc abc abc";
let result = text.replace(/abc/g, "replacement"); // نتيجة: "replacement replacement replacement"
// console.log(result);

/**
 * ---- خيارات الأنماط ----
 * g: البحث في النص بالكامل (global).
 * i: تجاهل الفرق بين الأحرف الكبيرة والصغيرة (case-insensitive).
 */

// مثال مع الخيار g:
let text1 = "abc abc ABC";
let result1 = text1.replace(/abc/gi, "found"); // نتيجة: "found found found"
// console.log(result1);

/**
 * ---- رموز التكرار ----
 * x*: صفر أو أكثر من x
 * x+: واحد أو أكثر من x
 * x{n}: بالضبط n من x
 * x{n,}: n أو أكثر من x
 * x{n,m}: على الأقل n وعلى الأكثر m من x
 */

// أمثلة على التكرار:
let pattern1 = /ab*/g; // يبحث عن "a" متبوعة بصفر أو أكثر من "b"
// console.log("abb abbb a".match(pattern1)); // ["abb", "abbb", "a"]

let pattern2 = /a{2,3}/g; // يبحث عن "a" مكررة مرتين أو ثلاث مرات
// console.log("aa aaa aaaa".match(pattern2)); // ["aa", "aaa", "aaa"]

/**
 * ---- الفئات ----
 * [abc]: أي حرف من "a" أو "b" أو "c"
 * [^abc]: أي حرف ما عدا "a" أو "b" أو "c"
 */

// مثال:
let pattern3 = /[aeiou]/g; // أي حرف متحرك
// console.log("hello world".match(pattern3)); // ["e", "o", "o"]

let pattern4 = /[^aeiou]/g; // أي حرف ليس متحركًا
// console.log("hello world".match(pattern4)); // ["h", "l", "l", " ", "w", "r", "l", "d"]

/**
 * ---- الأحرف الخاصة ----
 * \d: أي رقم (0-9)
 * \D: أي شيء عدا رقم
 * \w: أي حرف أو رقم أو "_"
 * \W: أي شيء ليس \w
 * \s: أي مسافة فارغة
 * \S: أي شيء ليس مسافة فارغة
 */

// أمثلة:
// console.log("123 abc 456".match(/\d/g)); // ["1", "2", "3", "4", "5", "6"]
// console.log("123 abc 456".match(/\D/g)); // [" ", "a", "b", "c", " "]

/**
 * ---- الأنماط المتقدمة ----
 * (abc): مجموعة (Group)
 * |: أو (OR)
 */

// مثال: التحقق من النصوص مع المجموعات:
let pattern5 = /(green|red|blue)/g; // يبحث عن "green" أو "red" أو "blue"
// console.log("green on red apple".match(pattern5)); // ["green", "red"]

/**
 * ---- تطبيق عملي ----
 */

// التحقق من صيغة البريد الإلكتروني:
let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
let email = "EXEMPLE@domain.com";
 console.log(emailPattern.test(email)); // true

// البحث عن أرقام الهواتف:
let phonePattern = /\d{3}-\d{3}-\d{4}/;
let phone = "My number is 123-456-7890";
// console.log(phone.match(phonePattern)); // ["123-456-7890"]

// حذف جميع المسافات من النص:
let noSpaces = "Remove all spaces".replace(/\s+/g, "");
// console.log(noSpaces); // "Removeallspaces"
