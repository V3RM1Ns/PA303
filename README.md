
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
