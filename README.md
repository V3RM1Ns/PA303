# JavaScript — Alqoritm Tapşırıqları

JavaScript əsaslarını möhkəmləndirmək, alqoritmik düşünmə qabiliyyətini inkişaf etdirmək və praktiki proqramlaşdırma bacarıqları qazanmaq üçün hazırlanmış 67 tapşırıq.

## 📚 Öyrənmə Mənbələri

1. [JavaScript.info](https://javascript.info/)
2. [MDN — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
3. [W3Schools — Scope](https://www.w3schools.com/js/js_scope.asp)
4. [GeeksforGeeks — Global and Local Variables](https://www.geeksforgeeks.org/global-and-local-variables-in-javascript/)
5. [W3Schools — Functions](https://www.w3schools.com/js/js_functions.asp)
6. [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
7. [W3Schools — Objects](https://www.w3schools.com/js/js_objects.asp)
8. [MDN — Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
9. [MDN — Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## 🟢 ASAN — 17 SUAL

**1.** Verilmiş `n` ədədinin 3-ə və 7-yə bölünüb-bölünmədiyini tapın.

**2.** Verilmiş `n` və `m` (`n < m`) ədədləri arasındakı tək ədədlərin sayını tapın.

**3.** Verilmiş `n` və `m` (`n < m`) ədədləri arasındakı tək ədədlərin cəmini tapın.

**4.** Verilmiş `n` tam ədədinin sadə və ya mürəkkəb olduğunu tapın.

**5.** Verilmiş array-in içindəki cüt ədədlərin cəmini tapın.

**6.** İstənilən sayda `number` elementi olan array qəbul edən və array-in içindəki cüt ədədlərin kvadratlarının cəmini hesablayan function yazın.

**7.** İki parametr qəbul edən function yazın:
- Hər iki parametrin rəqəm olub-olmadığını yoxlayın.
- Əgər hər ikisi də rəqəmdirsə, həmin iki parametr arasındakı bütün ədədlərin cəmini `return` edin.
- Əks halda uyğun xəbərdarlıq qaytarın.

Məsələn:

```javascript
sumNumbers(10, 15);
```

Nəticə: `75`

**8.** Verilmiş `n` ədədinin 0, müsbət və ya mənfi olduğunu tapın.

**9.** Verilmiş `n` ədədinin rəqəmlərinin sayını tapın.

Məsələn: `12345 → 5`

**10.** Verilmiş `n` ədədinin son rəqəmini tapın.

**11.** Verilmiş `n` ədədinin ilk rəqəmini tapın.

Məsələn: `5832 → 5`

**12.** 1-dən `n`-ə qədər olan ədədlər içərisində 5-ə bölünənləri ekrana çıxarın.

**13.** Verilmiş array-də neçə element olduğunu tapın.

**14.** Verilmiş array-də mənfi elementlərin sayını tapın.

**15.** Verilmiş array-də ən böyük elementi tapın.

**16.** Verilmiş array-də ilk və son elementin yerini dəyişin.

**17.** Verilmiş array-də 10 elementinin ilk dəfə hansı index-də yerləşdiyini tapın. Element tapılmadıqda `-1` qaytarın.

---

## 🟡 ORTA — 40 SUAL

**18.** Verilmiş `n` ədədinin rəqəmləri cəmini tapın.

Məsələn: `5832 → 18`

**19.** Verilmiş `n` ədədinin rəqəmlərinin hasilini tapın.

Məsələn: `234 → 24`

**20.** Verilmiş ədədin tərsi ilə eyni olub-olmadığını yoxlayın.

Məsələn:
- `1221` → Palindrom
- `1234` → Palindrom deyil

**21.** Verilmiş array-də ən kiçik və ən böyük elementin index-lərini tapın.

**22.** Verilmiş array-də 0 olan elementləri silib yeni array qaytaran function yazın.

Məsələn:

```javascript
[5, 0, 3, 0, 8, 2]
```

Nəticə:

```javascript
[5, 3, 8, 2]
```

**23.** Verilmiş array-də mənfi ədədləri 0 ilə əvəz edən function yazın.

Məsələn:

```javascript
[5, -2, 7, -9, 3]
```

Nəticə:

```javascript
[5, 0, 7, 0, 3]
```

**24.** Verilmiş array-də eyni elementlərin olub-olmadığını yoxlayın.

Məsələn:

```javascript
[1, 2, 3, 4] // false
[1, 2, 3, 2] // true
```

**25.** Verilmiş array-də ikinci ən böyük elementi tapın.

Məsələn:

```javascript
[10, 40, 20, 80, 50]
```

Nəticə: `50`

**26.** Verilmiş array-də yalnız unikal elementlərdən yeni array yaradın.

Məsələn:

```javascript
[1, 2, 2, 3, 4, 4, 5]
```

Nəticə:

```javascript
[1, 2, 3, 4, 5]
```

**27.** Bir function yazın. Funksiya array qəbul etsin və array-dəki elementləri tərs ardıcıllıqla yeni array olaraq `return` etsin.

Məsələn:

```javascript
reverseArray([10, 20, 30, 40]);
```

Nəticə:

```javascript
[40, 30, 20, 10]
```

**28.** Verilmiş `n` ədədinin mükəmməl ədəd (özündən başqa bölənlərinin cəmi özünə bərabər olan ədəd) olub-olmadığını yoxlayın.

Məsələn: `28` → `true` (`1 + 2 + 4 + 7 + 14 = 28`)

**29.** Verilmiş `n` ədədinin Armstronq ədədi olub-olmadığını yoxlayın (rəqəmlərinin kubları cəmi özünə bərabər olan 3 rəqəmli ədəd).

Məsələn: `153` → `true` (`1³ + 5³ + 3³ = 153`)

**30.** Verilmiş `n` ədədinin faktorialını (`n!`) hesablayan function yazın.

Məsələn: `5` → `120`

**31.** `n` sayda elementdən ibarət Fibonaççi ardıcıllığını array şəklində qaytaran function yazın.

Məsələn: `6` → `[0, 1, 1, 2, 3, 5]`

**32.** Verilmiş iki tam ədədin ƏBOB-unu (Ən Böyük Ortaq Bölən) tapın.

Məsələn: `12` və `18` → `6`

**33.** Verilmiş iki tam ədədin ƏKOB-unu (Ən Kiçik Ortaq Bölünən) tapın.

Məsələn: `12` və `18` → `36`

**34.** Verilmiş `n` ədədinin ikilik (binary) say sistemindəki qarşılığını string olaraq qaytaran function yazın (hazır `.toString(2)` istifadə etmədən).

Məsələn: `10` → `"1010"`

**35.** Verilmiş `n` ədədinin rəqəmləri içərisində ən böyük rəqəmi tapın.

Məsələn: `49271` → `9`

**36.** Verilmiş `n` ədədinin rəqəmlərini tərsinə çevirib yeni ədəd kimi qaytaran function yazın (string metodları istifadə etmədən).

Məsələn: `1234` → `4321`

**37.** Verilmiş `n` və `m` (`n < m`) aralığındakı bütün sadə ədədləri array şəklində qaytarın.

Məsələn: `10, 20` → `[11, 13, 17, 19]`

**38.** Verilmiş array-dəki bütün elementləri `k` addım sağa sürüşdürən (rotate) function yazın.

Məsələn: `[1, 2, 3, 4, 5], k = 2` → `[4, 5, 1, 2, 3]`

**39.** Verilmiş array-dəki bütün `0`-ları elementlərin sırasını pozmadan array-in sonuna yığın.

Məsələn: `[0, 1, 0, 3, 12]` → `[1, 3, 12, 0, 0]`

**40.** `1`-dən `N`-ə qədər ədədlərdən ibarət olan, lakin bir ədədi əskik olan array-də çatışmayan ədədi tapın.

Məsələn: `[1, 2, 4, 5, 6]` → `3`

**41.** Verilmiş array-in artan sıra ilə düzülüb-düzülmədiyini (`true` və ya `false`) yoxlayan function yazın.

Məsələn: `[1, 3, 5, 8]` → `true`, `[1, 5, 3, 8]` → `false`

**42.** İki sıralanmış (sorted) array-i tək bir sıralanmış array halında birləşdirin (`.sort()` istifadə etmədən).

Məsələn: `[1, 3, 5]` və `[2, 4, 6]` → `[1, 2, 3, 4, 5, 6]`

**43.** Verilmiş array-i tək və cüt ədədlərdən ibarət iki ayrı array-ə bölüb object şəklində qaytarın.

Məsələn: `[1, 2, 3, 4, 5, 6]` → `{ even: [2, 4, 6], odd: [1, 3, 5] }`

**44.** Verilmiş array-də yalnız bir dəfə rast gəlinən (təkrarlanmayan) elementlərdən ibarət yeni array yaradın.

Məsələn: `[4, 5, 1, 2, 1, 4, 3]` → `[5, 2, 3]`

**45.** Verilmiş array-dəki elementlərin ədədi ortasını tapın və ortalamadan böyük olan elementləri yeni array-də qaytarın.

Məsələn: `[10, 20, 30, 40, 50]` → `[40, 50]`

**46.** İki array-in bir-birinə tam bərabər olub-olmadığını (eyni uzunluqda və eyni indeksdə eyni elementlər) yoxlayan function yazın.

Məsələn: `[1, 2, 3]` və `[1, 2, 3]` → `true`

**47.** Verilmiş array-dəki bütün mənfi ədədləri əvvələ, müsbət ədədləri isə sona yığan function yazın.

Məsələn: `[3, -2, 5, -7, 1, -4]` → `[-2, -7, -4, 3, 5, 1]`

**48.** Verilmiş string-dəki sait hərflərin (`a, e, i, o, u, ə, ö, ü, ı`) sayını hesablayan function yazın.

Məsələn: `"JavaScript"` → `3`

**49.** Verilmiş cümlədəki sözlərin sayını tapın (artıq boşluqları nəzərə almadan).

Məsələn: `"  Salam   dünya  necəsən  "` → `3`

**50.** Verilmiş string-də hər bir simvolun neçə dəfə işləndiyini object şəklində qaytarın.

Məsələn: `"alma"` → `{ a: 2, l: 1, m: 1 }`

**51.** Verilmiş cümlədəki ən uzun sözü tapan function yazın.

Məsələn: `"JavaScript öyrənmək çox maraqlıdır"` → `"JavaScript"`

**52.** Verilmiş iki string-in bir-birinin anaqramı olub-olmadığını yoxlayın (eyni hərflərdən fərqli ardıcıllıqla düzülüb-düzülməməsi).

Məsələn: `"listen"` və `"silent"` → `true`

**53.** Verilmiş cümlədəki hər bir sözün ilk hərfini böyük hərfə çevirən function yazın.

Məsələn: `"salam dünya"` → `"Salam Dünya"`

**54.** String-lərdən ibarət array-də verilmiş `search` sözünün neçə dəfə keçdiyini tapın (böyük-kiçik hərf fərqinə baxmadan).

Məsələn: `["Alma", "armud", "ALMA", "banan"], "alma"` → `2`

**55.** `users` array-indən yaşı `18`-dən böyük olan istifadəçilərin yalnız adlarından (`name`) ibarət yeni array yaradın.

```javascript
let users = [
    { name: "Kamran", age: 17 },
    { name: "Aysel", age: 22 },
    { name: "Rəşad", age: 19 }
];
// Nəticə: ["Aysel", "Rəşad"]
```

**56.** Verilmiş `products` array-indəki bütün məhsulların qiymətinə 18% ƏDV əlavə edərək yeni array qaytaran function yazın (orijinal array dəyişməməlidir).

**57.** Verilmiş `employees` array-indəki işçiləri şöbələrinə (`department`) görə qruplaşdıran function yazın.

```javascript
let employees = [
    { name: "Elvin", department: "IT" },
    { name: "Günay", department: "HR" },
    { name: "Tural", department: "IT" }
];
// Nəticə: { IT: ["Elvin", "Tural"], HR: ["Günay"] }
```

---

## 🔴 ÇƏTİN — 10 SUAL

**58.** Verilmiş array-də ən çox təkrarlanan elementi tapın.

```javascript
[3, 5, 3, 2, 5, 3, 7, 5, 3]
```

Nəticə: `3`

**59.** Verilmiş array-i iki hissəyə bölün.

Məsələn:

```javascript
[10, 20, 30, 40, 50, 60]
```

Nəticə:

```javascript
[10, 20, 30]
[40, 50, 60]
```

**60.** Verilmiş iki array-də ortaq elementləri tapın.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 5, 7, 9];
```

Nəticə:

```javascript
[3, 5]
```

**61.** Verilmiş array-də elementlərin neçə dəfə təkrarlandığını göstərin.

```javascript
[2, 3, 2, 5, 3, 2]
```

Nəticə:

```text
2 → 3 dəfə
3 → 2 dəfə
5 → 1 dəfə
```

**62.** Verilmiş array-də ardıcıl gələn eyni elementləri tapın.

```javascript
[1, 2, 2, 3, 4, 4, 4, 5]
```

Nəticə:

```text
2
4
```

**63.** `students` array-i verilib:

```javascript
let students = [
    { name: "Ali", age: 20, grade: 75 },
    { name: "Murad", age: 19, grade: 45 },
    { name: "Leyla", age: 21, grade: 90 },
    { name: "Nigar", age: 20, grade: 60 }
];
```

Ən yüksək `grade` olan student object-i tapın.

**64.** `products` array-i verilib:

```javascript
let products = [
    { name: "Mouse", price: 40 },
    { name: "Keyboard", price: 80 },
    { name: "Monitor", price: 300 },
    { name: "Headset", price: 120 }
];
```

Qiyməti 100-dən aşağı olan məhsullardan yeni array yaradın.

Nəticə:

```javascript
[
    { name: "Mouse", price: 40 },
    { name: "Keyboard", price: 80 }
]
```

**65.** Verilmiş array-də ən uzun ardıcıl artan hissənin uzunluğunu tapın.

Məsələn:

```javascript
[1, 2, 3, 2, 3, 4, 5, 1]
```

Ən uzun artan hissə: `2, 3, 4, 5`

Nəticə: `4`

**66.** Bir function yazın. Function array qəbul etsin və array-dəki elementlərin yerini dəyişmədən, hər elementin neçə dəfə olduğunu object şəklində `return` etsin.

Məsələn:

```javascript
countElements([10, 20, 10, 30, 20, 10]);
```

Nəticə:

```javascript
{
    10: 3,
    20: 2,
    30: 1
}
```

**67. MINI CHALLENGE — SHOPPING CART**

Aşağıdakı `cart` array-i verilib:

```javascript
let cart = [
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Keyboard", price: 100, quantity: 1 },
    { name: "Headset", price: 150, quantity: 2 },
    { name: "Mousepad", price: 30, quantity: 3 }
];
```

Bir və ya bir neçə function istifadə edərək aşağıdakı əməliyyatları yerinə yetirin:

1. Bütün məhsulların ümumi sayını tapın.
2. Məhsulların ümumi qiymətini hesablayın (`price × quantity`).
3. Ən bahalı məhsulu tapın.
4. `quantity >= 2` olan məhsullardan yeni array yaradın.
5. Qiyməti 100-dən böyük olan məhsulların ad
