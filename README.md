
---

## Task 1 — Live Character Counter

**Difficulty:** Easy

Bir `textarea` və character counter yarat.

**Requirements:**
- Maksimum 200 simvol qəbul edilməlidir.
- İstifadəçi yazdıqca simvolların sayı yenilənməlidir.
- Qalan simvol sayı göstərilməlidir.
- 180 simvoldan sonra xəbərdarlıq göstərilməlidir.
- Limit dolduqda əlavə yazı qəbul edilməməlidir.

**Events:** `input`

## Task 2 — Password Strength Checker

**Difficulty:** Easy

İstifadəçinin daxil etdiyi password-un gücünü yoxlayan sistem yarat.

**Requirements:**
- Minimum 8 simvol olmalıdır.
- Ən azı bir böyük hərf olmalıdır.
- Ən azı bir kiçik hərf olmalıdır.
- Ən azı bir rəqəm olmalıdır.
- Ən azı bir xüsusi simvol olmalıdır.
- Password gücünü Weak, Medium və Strong olaraq göstər.

**Events:** `input`, `focus`, `blur`

## Task 3 — Select Event Handler

**Difficulty:** Easy

İstifadəçinin seçdiyi ölkəyə əsasən şəhərləri göstərən sistem yarat.

**Requirements:**
- Country select elementi yarat.
- Azerbaijan, Turkey və Germany seçimləri olsun.
- Ölkə seçildikdə ikinci select-də uyğun şəhərlər göstərilsin.
- Ölkə seçilmədikdə şəhər select-i deaktiv olsun.
- Hər iki seçim ekranda göstərilsin.

**Events:** `change`

## Task 4 — Email Validation

**Difficulty:** Medium

Email ünvanını real-time yoxlayan sistem yarat.

**Requirements:**
- Email input yarat.
- Email formatını yoxla.
- Yanlış formatda error mesajı göstər.
- Düzgün formatda success mesajı göstər.
- Input boş olduqda validation mesajını təmizlə.
- Email yoxlaması üçün Regular Expression istifadə et.

**Events:** `input`, `blur`

## Task 5 — Registration Form

**Difficulty:** Medium

Sadə qeydiyyat formu yarat.

**Inputs:**
- Full Name
- Email
- Password
- Confirm Password

**Requirements:**
- Bütün sahələr doldurulmalıdır.
- Full Name minimum 3 simvol olmalıdır.
- Email düzgün formatda olmalıdır.
- Password minimum 8 simvol olmalıdır.
- Password və Confirm Password eyni olmalıdır.
- Submit zamanı səhifə yenilənməməlidir.
- Uğurlu qeydiyyatda məlumatları ekranda göstər.

**Events:** `submit`, `input`

## Task 6 — Keyboard Event Tracker

**Difficulty:** Medium

Klaviatura fəaliyyətini izləyən sistem yarat.

**Requirements:**
- Bir textarea yarat.
- Son basılan düymənin adını göstər.
- Ümumi basılan düymələrin sayını hesabla.
- Enter basıldıqda xüsusi mesaj göstər.
- Escape basıldıqda textarea-nı təmizlə.
- Ctrl + Enter basıldıqda mesajın göndərildiyini göstər.

**Events:** `keydown`, `keyup`

## Task 7 — Dynamic Price Calculator

**Difficulty:** Medium

Məhsul qiymətini və sayını hesablayan sistem yarat.

**Inputs:**
- Product Price
- Quantity
- Discount (%)

**Requirements:**
- Total Price avtomatik hesablanmalıdır.
- Discount tətbiq edilməlidir.
- Discount 0–100 arasında olmalıdır.
- Qiymət və quantity mənfi ola bilməz.
- Quantity yalnız tam ədəd olmalıdır.
- Final Price göstərilməlidir.

**Formula:**

Final Price = (Price × Quantity) × (1 - Discount / 100)

**Events:** `input`, `change`

## Task 8 — Multi-Field Form Validator

**Difficulty:** Hard

Çoxsaylı input-ları yoxlayan validation sistemi yarat.

**Inputs:**
- Username
- Email
- Phone Number
- Password
- Confirm Password

**Requirements:**
- Username 5–15 simvol arasında olmalıdır.
- Username yalnız hərf, rəqəm və underscore qəbul etməlidir.
- Email düzgün formatda olmalıdır.
- Phone Number yalnız rəqəmlərdən ibarət olmalıdır və 10 rəqəm olmalıdır.
- Password minimum 8 simvol olmalıdır.
- Password ən azı bir böyük hərf, bir rəqəm və bir xüsusi simvol saxlamalıdır.
- Hər input üçün ayrıca error mesajı göstərilməlidir.
- Bütün validation-lar uğurlu olduqda Submit aktivləşdirilməlidir.

**Events:** `input`, `blur`, `submit`

## Task 9 — Dynamic Form Generator

**Difficulty:** Hard

İstifadəçinin seçiminə əsasən dinamik form yaradan sistem qur.

**Requirements:**
- Select vasitəsilə form növü seçilsin.
- Seçimlər: Login, Registration, Contact.
- Login seçildikdə Email və Password input-ları yaradılsın.
- Registration seçildikdə Full Name, Email, Password və Confirm Password yaradılsın.
- Contact seçildikdə Name, Email və Message yaradılsın.
- Form dəyişdikdə əvvəlki input-lar silinsin.
- Submit zamanı seçilmiş formun məlumatları göstərilsin.
- Yaradılan input-lar üçün validation tətbiq edilsin.

**Events:** `change`, `submit`, `input`

## Task 10 — Complete Registration System

**Difficulty:** Very Hard

Real qeydiyyat sisteminə bənzər interaktiv form yarat.

**Inputs:**
- First Name
- Last Name
- Email
- Phone Number
- Date of Birth
- Gender
- Password
- Confirm Password
- Terms & Conditions Checkbox

**Requirements:**
- Bütün məcburi sahələr yoxlanılmalıdır.
- First Name və Last Name minimum 2 simvol olmalıdır.
- Email unikal olmalıdır (mövcud istifadəçilər massivində yoxla).
- Phone Number düzgün formatda olmalıdır.
- Date of Birth əsasında istifadəçinin yaşı hesablanmalıdır.
- İstifadəçi minimum 18 yaşında olmalıdır.
- Gender seçimi məcburi olmalıdır.
- Password bütün təhlükəsizlik şərtlərinə cavab verməlidir.
- Confirm Password uyğun olmalıdır.
- Terms & Conditions qəbul edilməlidir.
- Bütün validation-lar uğurlu olmadıqda Submit işləməməlidir.
- Qeydiyyat uğurlu olduqda istifadəçi məlumatlarını ekranda göstər.
- Form uğurla göndərildikdən sonra bütün input-ları təmizlə.
- Eyni email ilə ikinci dəfə qeydiyyata icazə vermə.

**Events:** `input`, `change`, `blur`, `focus`, `submit`

---
# Task 11 — Live Username Availability

**Difficulty:** Medium

Username daxil edilərkən onun uyğunluğunu və mövcud olub-olmadığını yoxlayan sistem yarat.

**Requirements:**
- Username input yarat.
- Minimum 5, maksimum 15 simvol qəbul etsin.
- Yalnız hərf, rəqəm və `_` qəbul edilsin.
- Username hər dəfə dəyişdikdə validation işləsin.
- Mövcud username-lər massivdə saxlanılsın.
- Username massivdə varsa `Username already taken` mesajı göstərilsin.
- Mövcud deyilsə `Username available` mesajı göstərilsin.
- Boş input olduqda mesaj təmizlənsin.

**Events:** `input`, `focus`, `blur`

---

# Task 12 — Password & Confirm Password

**Difficulty:** Medium

Password və Confirm Password sahələrinin uyğunluğunu yoxlayan sistem yarat.

**Inputs:**
- Password
- Confirm Password

**Requirements:**
- Password minimum 8 simvol olmalıdır.
- Confirm Password daxil edilərkən iki password müqayisə edilməlidir.
- Eyni olduqda success mesajı göstər.
- Fərqli olduqda error mesajı göstər.
- Password boş olduqda validation mesajı göstərilməsin.
- Password visibility üçün checkbox yarat.
- Checkbox aktiv olduqda hər iki password görünən olsun.
- Checkbox deaktiv olduqda password-lar gizlənsin.

**Events:** `input`, `change`, `focus`, `blur`

---

# Task 13 — Dynamic Character Limit

**Difficulty:** Medium

İstifadəçinin seçdiyi limitə əsasən textarea üçün character counter yarat.

**Requirements:**
- Bir textarea yarat.
- Select daxilində aşağıdakı limitlər olsun:
  - 50
  - 100
  - 200
  - 500
- Select dəyişdikdə character limit dəyişsin.
- İstifadəçinin yazdığı simvolların sayı göstərilsin.
- Qalan simvol sayı göstərilsin.
- Limitdən artıq yazmağa icazə verilməsin.
- Limitə yaxınlaşdıqda warning göstərilsin.
- Limit dəyişdirildikdə mövcud mətn yeni limitə uyğun yoxlanılsın.

**Events:** `input`, `change`

---

# Task 14 — Shopping Cart Quantity Controller

**Difficulty:** Hard

Məhsulun sayını artırıb-azaldan və ümumi qiyməti hesablayan sistem yarat.

**Requirements:**
- Product Price göstər.
- Quantity input yarat.
- `+` və `-` button-ları yarat.
- `+` klikləndikdə quantity 1 artsın.
- `-` klikləndikdə quantity 1 azalsın.
- Quantity 1-dən aşağı düşməsin.
- Quantity input-a birbaşa yazıla bilsin.
- Mənfi və yanlış qiymətlər qəbul edilməsin.
- Total Price avtomatik hesablansın.

**Formula:**

```text
Total Price = Product Price × Quantity
```

**Events:** `click`, `input`

---

# Task 15 — Search & Filter Products

**Difficulty:** Hard

Axtarış input-u və category select istifadə edərək məhsulları filter edən sistem yarat.

**Requirements:**
- JavaScript array daxilində ən azı 10 məhsul saxla.
- Hər məhsulun:
  - id
  - name
  - category
  - price
  məlumatları olsun.
- Search input yarat.
- Category select yarat.
- Search yazıldıqca məhsullar filterlənsin.
- Category dəyişdikdə məhsullar filterlənsin.
- Search + category birlikdə işləməlidir.
- Nəticə olmadıqda `No products found` göstər.
- Məhsul sayı ekranda göstərilsin.
- Filter nəticələri DOM-a dinamik əlavə edilsin.

**Events:** `input`, `change`

---

# Task 16 — Form Progress Indicator

**Difficulty:** Hard

Qeydiyyat formunda istifadəçinin neçə sahəni tamamladığını göstərən progress sistemi yarat.

**Inputs:**
- Full Name
- Email
- Phone
- Password
- Confirm Password

**Requirements:**
- Hər input ayrıca yoxlanılsın.
- Düzgün doldurulmuş hər input üçün progress artsın.
- Məsələn:
  - 1/5
  - 2/5
  - 3/5
  - 4/5
  - 5/5
- Progress bar yarat.
- Bütün sahələr düzgün olduqda progress `100%` olsun.
- Password və Confirm Password uyğunluğu yoxlanılsın.
- Error olan sahələr istifadəçiyə bildirilsin.
- Submit yalnız bütün validation-lar uğurlu olduqda işləsin.

**Events:** `input`, `blur`, `submit`

---

# Task 17 — Auto Save Form

**Difficulty:** Very Hard

Form məlumatlarını istifadəçi yazdıqca avtomatik yadda saxlayan sistem yarat.

**Inputs:**
- Full Name
- Email
- Phone
- Message

**Requirements:**
- İstifadəçi input-lara məlumat daxil etdikcə məlumatları `localStorage`-a yaz.
- Səhifə refresh olduqda əvvəlki məlumatlar geri yüklənsin.
- `Clear Form` button yarat.
- Clear Form klikləndikdə:
  - input-lar təmizlənsin;
  - localStorage məlumatları silinsin.
- `Saved` status mesajı göstər.
- Son save vaxtını ekranda göstər.
- Form submit edildikdə məlumatlar göstərilsin.
- Submit-dən sonra localStorage təmizlənsin.

**Events:** `input`, `click`, `submit`

---

# Task 18 — Multi-Step Registration Form

**Difficulty:** Very Hard

Qeydiyyat prosesini bir neçə mərhələyə bölən form yarat.

**Step 1 — Personal Information**
- First Name
- Last Name
- Date of Birth

**Step 2 — Account Information**
- Email
- Username
- Password

**Step 3 — Confirmation**
- Terms & Conditions
- Registration Summary

**Requirements:**
- İlk açılışda yalnız Step 1 göstərilsin.
- `Next` button ilə növbəti mərhələyə keçilsin.
- `Back` button ilə əvvəlki mərhələyə qayıtmaq mümkün olsun.
- Növbəti mərhələyə keçməzdən əvvəl mövcud step validation edilsin.
- Validation uğursuzdursa keçid edilməsin.
- Son step-də bütün məlumatların summary-si göstərilsin.
- `Register` button olsun.
- Registration uğurlu olduqda success mesajı göstərilsin.
- Form tamamlandıqdan sonra bütün sahələr təmizlənsin.

**Events:** `click`, `input`, `change`, `submit`

---

# Task 19 — Dynamic Invoice Generator

**Difficulty:** Very Hard

İstifadəçinin məhsul əlavə edə bildiyi dinamik invoice sistemi yarat.

**Requirements:**
- Product Name input yarat.
- Product Price input yarat.
- Quantity input yarat.
- `Add Product` button yarat.
- Button klikləndikdə məhsul invoice-a əlavə edilsin.
- Hər məhsul üçün göstər:
  - Product Name
  - Price
  - Quantity
  - Total
  - Remove button
- `Remove` klikləndikdə məhsul silinsin.
- Məhsulların ümumi qiyməti hesablansın.
- Discount input yarat.
- Discount tətbiq edilsin.
- Final Total göstərilsin.
- Invoice boş olduqda `No products added` göstərilsin.
- Məhsul əlavə edildikdən sonra input-lar təmizlənsin.

**Formula:**

```text
Product Total = Price × Quantity

Subtotal = bütün Product Total-ların cəmi

Final Total = Subtotal - Discount
```

**Events:** `click`, `input`, `change`

---

# Task 20 — Complete Interactive Form Dashboard

**Difficulty:** Extreme

Bütün əvvəlki tapşırıqlarda öyrəndiyin event-ləri bir sistemdə birləşdirən mini form dashboard yarat.

**Inputs:**
- First Name
- Last Name
- Username
- Email
- Phone
- Date of Birth
- Gender
- Password
- Confirm Password
- Country
- City
- Bio
- Terms & Conditions

**Requirements:**

### Personal Information
- First Name minimum 2 simvol olmalıdır.
- Last Name minimum 2 simvol olmalıdır.
- Date of Birth əsasında yaş hesablanmalıdır.
- Yaş minimum 18 olmalıdır.
- Gender seçimi məcburi olsun.

### Account Information
- Username 5–15 simvol arasında olmalıdır.
- Username yalnız hərf, rəqəm və `_` qəbul etsin.
- Username mövcud username-lərlə müqayisə edilsin.
- Email Regular Expression ilə yoxlanılsın.
- Password minimum 8 simvol olsun.
- Password ən azı:
  - böyük hərf;
  - kiçik hərf;
  - rəqəm;
  - xüsusi simvol
  saxlasın.
- Confirm Password Password ilə eyni olsun.

### Location
- Country select yarat.
- Country seçimindən asılı olaraq City select dinamik dəyişsin.
- Country seçilməyibsə City deaktiv olsun.

### Bio
- Textarea yarat.
- Maksimum 300 simvol qəbul etsin.
- Character counter göstər.
- 250 simvoldan sonra warning göstər.

### Terms
- Terms & Conditions checkbox məcburi olsun.

### Validation
- Hər input üçün ayrıca error mesajı göstər.
- Düzgün input üçün success vəziyyəti göstər.
- Bütün validation-lar uğurlu olduqda Submit aktivləşsin.
- Validation uğursuzdursa Submit işləməsin.

### Dashboard
Formun yanında və ya altında real-time statistikalar göstər:

```text
Completed Fields: 8/12
Password Strength: Strong
Age: 21
Username: Available
Email: Valid
Characters: 125/300
Form Completion: 75%
```

### Submit
- Submit zamanı səhifə yenilənməsin.
- Bütün məlumatları Registration Summary formasında göstər.
- Success mesajı göstər.
- Form məlumatlarını `localStorage`-a yadda saxla.
- Refresh etdikdə məlumatları geri yüklə.
- `Reset` button yarat.
- Reset klikləndikdə:
  - bütün input-lar təmizlənsin;
  - validation mesajları silinsin;
  - localStorage təmizlənsin;
  - dashboard sıfırlansın.

**Events:** `input`, `change`, `blur`, `focus`, `click`, `keydown`, `submit`

---
