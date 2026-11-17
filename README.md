
# 🔢 PART 01 — MATH CHALLENGES

<sub>5 TASKS · HARD LEVEL · MATHEMATICAL LOGIC</sub>

JavaScript `Math` obyektinin metodlarından istifadə edərək riyazi problemləri həll et.

### TASK 01 — Random Number Generator

**Goal:** Verilmiş aralıqda təsadüfi ədədlər yaradan sistem hazırla.

**Requirements:**
- Minimum və maksimum qiymət qəbul et.
- Hər iki sərhəd daxil olmaqla random tam ədəd yarat.
- Minimum maksimumdan böyükdürsə, düzgün idarə et.
- 10 təsadüfi ədəd yarat və array şəklində qaytar.
- Array daxilində təkrar ədədlərin olub-olmadığını yoxla.

**Example:**
```javascript
generateRandomNumbers(10, 50);

// [23, 45, 12, 38, 10, 29, 17, 50, 31, 23]
```

### TASK 02 — Advanced Rounding Calculator

**Goal:** Ədədləri müxtəlif üsullarla yuvarlaqlaşdıran funksiya yaz.

**Requirements:**
- Ən yaxın tam ədədə yuvarlaqlaşdır.
- Aşağı tam ədədə yuvarlaqlaşdır.
- Yuxarı tam ədədə yuvarlaqlaşdır.
- Vergüldən sonra verilmiş sayda rəqəm saxla.
- Ədədin müsbət, mənfi və ya sıfır olduğunu müəyyən et.

**Example:**
```javascript
roundNumber(15.6789, 2);

// {
//   round: 16,
//   floor: 15,
//   ceil: 16,
//   fixed: 15.68,
//   sign: "positive"
// }
```

### TASK 03 — Geometry Calculator

**Goal:** Dairə, düzbucaqlı və üçbucağın sahə və perimetrini hesabla.

**Requirements:**

**Circle**
- Radius qəbul et.
- Sahəni hesabla.
- Çevrə uzunluğunu hesabla.

**Rectangle**
- En və uzunluq qəbul et.
- Sahəni hesabla.
- Perimetri hesabla.
- Diaqonalı hesabla.

**Triangle**
- Üç tərəf qəbul et.
- Perimetri hesabla.
- Heron düsturu ilə sahəni hesabla.
- Üçbucağın mövcud olub-olmadığını yoxla.

**Example:**
```javascript
calculateGeometry("circle", 5);

calculateGeometry("rectangle", 10, 5);

calculateGeometry("triangle", 3, 4, 5);
```

### TASK 04 — Distance Calculator

**Goal:** İki koordinat nöqtəsi arasındakı məsafəni hesabla.

**Requirements:**
- X1, Y1, X2, Y2 koordinatlarını qəbul et.
- Evklid məsafəsini hesabla.
- Nəticəni 2 rəqəmə qədər yuvarlaqlaşdır.
- Hər iki nöqtənin başlanğıc nöqtəsindən məsafəsini də hesabla.

**Formula:**

`distance = Math.sqrt((x2 - x1)² + (y2 - y1)²)`

**Example:**
```javascript
calculateDistance(2, 3, 8, 11);

// distance: 10
// roundedDistance: 10
```

### TASK 05 — Advanced Random Dice Simulator

**Goal:** İki zərdən ibarət random simulyasiya sistemi yarat.

**Requirements:**
- 2 ədəd zər at.
- Hər zərin nəticəsi 1–6 arasında olsun.
- 1000 dəfə simulyasiya et.
- Hər mümkün cəmin neçə dəfə gəldiyini hesabla.
- Ən çox gələn nəticəni tap.
- İki zərin cəminin 7 olduğu halları hesabla.
- Nəticələrin faizini hesabla.

**Example:**
```javascript
simulateDice(1000);

// {
//   totalRolls: 1000,
//   sum7Count: 165,
//   sum7Percentage: 16.5,
//   mostFrequentSum: 8
// }
```

### Math Toolkit

İstifadə edə biləcəyin əsas metodlar:

| Method | Description |
|:---|:---|
| `Math.random()` | Random number |
| `Math.floor()` | Round down |
| `Math.ceil()` | Round up |
| `Math.round()` | Nearest integer |
| `Math.sqrt()` | Square root |
| `Math.pow()` | Power |
| `Math.PI` | Pi constant |
| `Math.abs()` | Absolute value |
| `Math.max()` | Maximum |
| `Math.min()` | Minimum |
| `Math.trunc()` | Remove decimal part |
| `Math.sign()` | Number sign |
| `Math.hypot()` | Euclidean distance |

---

# 📦 PART 02 — ARRAY CHALLENGES

<sub>7 TASKS · VERY HARD LEVEL · ALGORITHMIC THINKING</sub>

Bu bölmənin əsas məqsədi hazır JavaScript metodlarından asılı olmadan öz alqoritmlərini qurmaqdır.

### TASK 06 — Custom Sorting Algorithm

**Goal:** Array elementlərini artan sıra ilə düz.

**Requirements:**
- `sort()` istifadə etmək olmaz.
- Bubble Sort və ya Selection Sort istifadə et.
- Təkrar elementləri düzgün yerləşdir.
- Orijinal array üzərində işləməyə çalış.

**Example:**
```javascript
customSort([8, 3, 1, 9, 4, 2]);

// [1, 2, 3, 4, 8, 9]
```

### TASK 07 — Second Largest & Second Smallest

**Goal:** Array daxilində ikinci ən böyük və ikinci ən kiçik unikal ədədi tap.

**Requirements:**
- `sort()` istifadə etmək olmaz.
- Təkrar elementləri nəzərə al.
- Kifayət qədər unikal element yoxdursa, uyğun nəticə qaytar.

**Example:**
```javascript
findSecond([10, 5, 20, 20, 2, 1, 1]);

// secondLargest: 10
// secondSmallest: 2
```

### TASK 08 — Frequency Counter

**Goal:** Array daxilində elementlərin təkrarlanma sayını hesabla.

**Requirements:**
- Hər elementin sayını tap.
- Ən çox təkrarlanan elementi müəyyən et.
- Ən az təkrarlanan elementi müəyyən et.
- Bərabərlik olduqda bütün uyğun elementləri göstər.

**Example:**
```javascript
frequencyCounter([1, 2, 2, 3, 3, 3, 4, 4]);

// {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 2
// }

// mostFrequent: [3]
// leastFrequent: [1]
```

### TASK 09 — Array Intersection & Union

**Goal:** İki array arasında müqayisə apar.

**Requirements:**
- Intersection: hər iki array-də olan unikal elementlər.
- Union: hər iki array-də olan bütün unikal elementlər.
- Difference: yalnız birinci array-də olan elementlər.
- Təkrar elementləri düzgün idarə et.

**Example:**
```javascript
analyzeArrays(
    [1, 2, 2, 3, 4],
    [3, 4, 4, 5, 6]
);

// intersection: [3, 4]
// union: [1, 2, 3, 4, 5, 6]
// difference: [1, 2]
```

### TASK 10 — Rotate Array

**Goal:** Array-i verilmiş K qədər sağa və ya sola döndər.

**Requirements:**
- Mənfi K dəyərlərini dəstəklə.
- K array uzunluğundan böyük ola bilər.
- `reverse()` və `shift()` istifadə etmək olmaz.
- Orijinal array-in dəyişib-dəyişməyəcəyini özün müəyyən et.

**Example:**
```javascript
rotateArray([1, 2, 3, 4, 5], 2);

// [4, 5, 1, 2, 3]
```

### TASK 11 — Find Missing Numbers

**Goal:** 1-dən N-ə qədər olan ədədlərdən çatışmayanları tap.

**Requirements:**
- Bütün çatışmayan ədədləri tap.
- Təkrar elementlər ola bilər.
- Array sıralanmamış ola bilər.
- `includes()` və `indexOf()` istifadə etmə.

**Example:**
```javascript
findMissing([1, 3, 3, 6, 7], 8);

// [2, 4, 5, 8]
```

### TASK 12 — Maximum Subarray Sum

**Goal:** Ardıcıl elementlərdən ibarət ən böyük cəmi tap.

**Requirements:**
- Yalnız ardıcıl elementlər nəzərə alınmalıdır.
- Mənfi ədədlər ola bilər.
- Boş array üçün düzgün nəticə qaytar.
- Mümkün qədər effektiv alqoritm yaz.
- Ən böyük cəmi yaradan alt-array-i də qaytar.

**Example:**
```javascript
maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// sum: 6
// subArray: [4, -1, 2, 1]
```

### Array Coding Restrictions

<badge color="danger">Challenge Rules</badge>

Aşağıdakı metodlardan istifadə etmədən həll etməyə çalış:

```javascript
sort()
filter()
map()
reduce()
Set
Math.max()
Math.min()
includes()
indexOf()
```

**Allowed:**
- `for`
- `while`
- `if / else`
- Əlavə dəyişənlər
- Nested loops
- Öz yazdığın köməkçi funksiyalar

**Focus:** Time Complexity, Space Complexity və Algorithm Design.

---

# 📅 PART 03 — DATE CHALLENGES

<sub>4 TASKS · MEDIUM–HARD LEVEL · DATE MANIPULATION</sub>

JavaScript `Date` obyektindən istifadə edərək tarixlərlə bağlı praktiki problemləri həll et.

### TASK 13 — Age Calculator

**Goal:** Doğum tarixinə əsasən dəqiq yaş hesabla.

**Requirements:**
- Yaşı il, ay və gün olaraq hesabla.
- Ad günü bu il keçməyibsə, yaşı düzgün hesabla.
- Gələcək tarixləri qəbul etmə.
- Ayların fərqli gün sayını nəzərə al.

**Example:**
```javascript
calculateAge("2005-08-15");

// {
//   years: ...,
//   months: ...,
//   days: ...
// }
```

### TASK 14 — Working Days Calculator

**Goal:** İki tarix arasında iş günlərinin sayını hesabla.

**Requirements:**
- Şənbə və bazarı sayma.
- Başlanğıc və son tarix daxil edilməlidir.
- Tarixlər tərsinə verilərsə, düzgün işləməlidir.
- Sərhəd tarixlərinin hesablanmasını düzgün idarə et.

**Example:**
```javascript
calculateWorkingDays("2026-11-16", "2026-11-30");
```

### TASK 15 — Countdown Calculator

**Goal:** Gələcək tarixə qədər qalan vaxtı hesabla.

**Requirements:**
- Gün
- Saat
- Dəqiqə
- Saniyə
- Tarix keçibsə, `"Expired"` qaytar.

**Example:**
```javascript
countdown("2027-01-01T00:00:00");
```

### TASK 16 — Date Validator

**Goal:** Verilmiş tarixin həqiqətən mövcud olub-olmadığını yoxla.

**Requirements:**
- 31 fevral kimi yanlış tarixləri aşkar et.
- Leap Year qaydasını düzgün yoxla.
- Ay 1–12 aralığında olmalıdır.
- Gün həmin ayın real gün sayından böyük olmamalıdır.

**Example:**
```javascript
validateDate("2024-02-29"); // true
validateDate("2025-02-29"); // false
validateDate("2025-13-10"); // false
```

---

# 🌐 PART 04 — DOM CHALLENGES

<sub>4 TASKS · BEGINNER LEVEL · INTERACTIVE WEB DEVELOPMENT</sub>

Bu bölmədə HTML, CSS və JavaScript istifadə edərək interaktiv mini layihələr hazırlayacaqsan.

### TASK 17 — Input Text Counter

**Goal:** İstifadəçinin yazdığı simvolların sayını real vaxtda göstər.

**HTML Elements:**
- `input`
- `p` — Character Count
- `p` — Entered Text

**Requirements:**
- Input-a yazılan mətn real vaxtda göstərilsin.
- Simvolların sayı hesablansın.
- Input boş olduqda `"No text entered"` göstərilsin.
- Maksimum 50 simvol qəbul edilsin.

**DOM Methods:**
```javascript
getElementById()
addEventListener()
input
value
textContent
```

### TASK 18 — Simple Calculator

**Goal:** İki ədəd üzərində sadə riyazi əməliyyatlar apar.

**HTML Elements:**
- Birinci `input`
- İkinci `input`
- 4 button (+, -, *, /)
- Bir `h2` — Result

**Requirements:**
- İki input-dan ədədləri götür.
- Düyməyə klik etdikdə uyğun əməliyyatı yerinə yetir.
- Nəticəni ekranda göstər.
- Input-lar boş olduqda xəbərdarlıq göstər.
- Sıfıra bölməni yoxla.

**DOM Methods:**
```javascript
value
Number()
addEventListener()
textContent
```

### TASK 19 — Background Color Changer

**Goal:** İstifadəçinin seçdiyi rəngə əsasən səhifənin fonunu dəyiş.

**HTML Elements:**
- `input` — color
- `button` — Change Color
- `button` — Reset
- `p` — Selected Color

**Requirements:**
- Color input-dan rəng seç.
- Change Color düyməsinə klik etdikdə fon dəyişsin.
- Seçilmiş rəngin HEX kodunu göstər.
- Reset düyməsinə klik etdikdə əvvəlki rəngə qayıt.

**DOM Methods:**
```javascript
querySelector()
value
style.backgroundColor
addEventListener()
```

### TASK 20 — Password Validator

**Goal:** Password-un təhlükəsizlik tələblərinə uyğunluğunu yoxlayan sistem hazırla.

**HTML Elements:**
- `input` — password
- `button` — Check Password
- `button` — Show / Hide Password
- `p` — Result

**Requirements:**
- Minimum 8 simvol olmalıdır.
- Ən azı bir böyük hərf olmalıdır.
- Ən azı bir kiçik hərf olmalıdır.
- Ən azı bir rəqəm olmalıdır.
- Bütün şərtlər ödənildikdə `"Strong Password"` göstər.
- Çatışmayan tələbləri ayrıca göstər.
- Show / Hide düyməsinə klik etdikdə password görünən və gizli vəziyyətə keçsin.

**DOM Methods:**
```javascript
value
length
test()
addEventListener()
textContent
input.type
```


