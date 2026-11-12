# JavaScript — Alqoritm Tapşırıqları

JavaScript əsaslarını möhkəmləndirmək, alqoritmik düşünmə qabiliyyətini inkişaf etdirmək və praktiki proqramlaşdırma bacarıqları qazanmaq üçün hazırlanmış 37 tapşırıq.

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

## 🟡 ORTA — 10 SUAL

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

---

## 🔴 ÇƏTİN — 10 SUAL

**28.** Verilmiş array-də ən çox təkrarlanan elementi tapın.

```javascript
[3, 5, 3, 2, 5, 3, 7, 5, 3]
```

Nəticə: `3`

**29.** Verilmiş array-i iki hissəyə bölün.

Məsələn:

```javascript
[10, 20, 30, 40, 50, 60]
```

Nəticə:

```javascript
[10, 20, 30]
[40, 50, 60]
```

**30.** Verilmiş iki array-də ortaq elementləri tapın.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 5, 7, 9];
```

Nəticə:

```javascript
[3, 5]
```

**31.** Verilmiş array-də elementlərin neçə dəfə təkrarlandığını göstərin.

```javascript
[2, 3, 2, 5, 3, 2]
```

Nəticə:

```text
2 → 3 dəfə
3 → 2 dəfə
5 → 1 dəfə
```

**32.** Verilmiş array-də ardıcıl gələn eyni elementləri tapın.

```javascript
[1, 2, 2, 3, 4, 4, 4, 5]
```

Nəticə:

```text
2
4
```

**33.** `students` array-i verilib:

```javascript
let students = [
    { name: "Ali", age: 20, grade: 75 },
    { name: "Murad", age: 19, grade: 45 },
    { name: "Leyla", age: 21, grade: 90 },
    { name: "Nigar", age: 20, grade: 60 }
];
```

Ən yüksək `grade` olan student object-i tapın.

**34.** `products` array-i verilib:

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

**35.** Verilmiş array-də ən uzun ardıcıl artan hissənin uzunluğunu tapın.

Məsələn:

```javascript
[1, 2, 3, 2, 3, 4, 5, 1]
```

Ən uzun artan hissə: `2, 3, 4, 5`

Nəticə: `4`

**36.** Bir function yazın. Function array qəbul etsin və array-dəki elementlərin yerini dəyişmədən, hər elementin neçə dəfə olduğunu object şəklində `return` etsin.

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

**37. MINI CHALLENGE — SHOPPING CART**

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
5. Qiyməti 100-dən böyük olan məhsulların adlarını göstərin.

Qiymətin hesablanması:

```text
Mouse     → 50 × 2
Keyboard  → 100 × 1
Headset   → 150 × 2
Mousepad  → 30 × 3
```

---

## 📌 QEYD

- Hər tapşırıq ayrıca həll edilməlidir.
- Kodlar JavaScript dilində yazılmalıdır.
- Tapşırıqlarda keçilmiş `if/else`, `switch`, `for`, `while`, array, object və function mövzularından istifadə edilməlidir.
- Kodun oxunaqlı və səliqəli yazılmasına diqqət yetirin.
- Hazır kodlardan istifadə etmədən tapşırıqları müstəqil həll etməyə çalışın.
