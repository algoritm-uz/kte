let search = [
    {
        title: "Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?     raqamli mantiqiy sath",
    },
    {
        title: "Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?    mikroarxitektura sathi",
    },
    {
        title: "Olti sathli kompyuterlarning ikkinchi sathi qanday nomlanadi?     buyruqlar to‘plami arxitekturasi sathi",
    },
    {
        title: "Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?   operatsion tizim sathi",
    },
    {
        title: "Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?   assembler sathi",
    },
    {
        title: "Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?   amaliy tillar dasturchilari sathi",
    },
    {
        title: "Raqamli mantiqiy sathning obyektlari qanday nomlanadi?    ventillar",
    },
    {
        title: "Bir bitli xotira elementi deganda nima tushuniladi?    trigger",
    },
    {
        title: "Guruhga birlashtirilgan triggerlar yordamida nima hosil qilinadi?   registr",
    },
    {
        title: "Inkorlash elementining kirishi nechta bo‘lishi mumkin?  1",
    },
    {
        title: "NOT, NOT-AND, NOT-OR kabi elementlarning kirish signallari, ulardagi tranzistorlarning qaysi oyoqchasiga ulangan?    baza",
    },
    {
        title: "NOT, NOT-AND, NOT-OR kabi elementlarning chiqish signallari, ulardagi tranzistorlarning qaysi oyoqchasidan olinadi?      kollektor",
    },
    {
        title: "Mantiqiy funktsiya o‘zgaruvchilarining soni n-ga teng bo‘lsa, ushbu funktsiyaning xaqiqat jadvali necha qatordan iborat bo‘lishi kerak?   2^n",
    },
    {
        title: "Uchta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?   8",
    },
    {
        title: "To‘rtta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?  16",
    },
    {
        title: "Beshta o‘zgaruvchili mantiqiy funtsiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?   32",
    },
    {
        title: "64 Kbaytli asosiy xotira adresining maksimal qiymati nechaga teng?    FFFF",
    },
    {
        title: "1 Mbaytli asosiy xotira adresining maksimal qiymati nechaga teng?     FFFFF",
    },
    {
        title: "4 Gbaytli asosiy xotira adresining maksimal qiymati nechaga teng?    FFFF FFFF",
    },
    {
        title: "Pentium oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi?     teskari tartibda",
    },
    {
        title: "SPARC oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi?     to‘g‘ri tartibda",
    },
    {
        title: "Asosiy xotirasida, baytlar to‘g‘ri tartibda joylashtirilgan kompyuter protsessori ko‘rsating.     UltraSPARC III",
    },
    {
        title: "Asosiy xotirasida, baytlar teskari tartibda joylashtirilgan kompyuter protsessori ko‘rsating.     Pentium 4",
    },
    {
        title: "Xozirgi shaxsiy  kompyuterlarda xotiraga murojaat qilishning necha xil rejimi mavjud?    2",
    },
    {
        title: "Asosiy xotiraga murojaat qilishning real rejimida bitta segmentning xajmi nechaga teng?      64 Kbayt",
    },
    {
        title: "Asosiy otiraga murojaat qilishning himoyalangan rejimida bitta sahifaning xajmi nechaga teng?      4 Kbayt",
    },
    {
        title: "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda birinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?    64 Kbayt",
    },
    {
        title: "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda ikkinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?     1 Mbayt",
    },
    {
        title: "Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda uchinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin?    bir necha megabaytga",
    },
    {
        title: "Ulanish nuqtalari bir tomonda joylashgan xotira modullari qanday nomlanadi?    SIMM",
    },
    {
        title: "Ulanish nuqtalari ikki tomonda joylashgan xotira modullari qanday nomlanadi?    DIMM",
    },
    {
        title: "D-triggerlar asosida qurilgan tezkor xotira qurilmasini ko‘rsating.     statik tezkor xotira qurilmasi (SRAM)",
    },
    {
        title: "Axborotni o‘chirish va qayta yozish mumkin bo‘lgan programmalanadigan doimiy xotira qurilmasini ko‘rsating.     EPROM",
    },
    {
        title: "Ko‘chirib yozish buyruqlarini ko‘rsating.       MOV, PUSH",
    },
    {
        title: "Arifmetik buyruqlarni ko‘rsating.     ADD, SUB",
    },
    {
        title: "Ikkita operandalar ustida amallar bajarish buyruqlarini ko‘rsating.      ADD, SUB",
    },
    {
        title: "Bitta operanda ustida amallar bajarish buyruqlarini ko‘rsating.      INC, DEC",
    },
    {
        title: "Boshqarishni uzatish buyruqlarini ko‘rsating.       JMP, CALL",
    },
    {
        title: "Ma’lumotlarni kiritish-chiqarish buyruqlarini ko‘rsating.   IN, OUT",
    },
    {
        title: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning eng yuqori qismida joylashgan xotirani ko‘rsating.       ichki registrlar",
    },
    {
        title: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning ikkinchi qatorida joylashgan xotirani ko‘rsating.     kesh xotira",
    },
    {
        title: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning uchinchi qatorida joylashgan xotirani ko‘rsating.      asosiy xotira",
    },
    {
        title: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning to‘rtinchi qatorida joylashgan xotirani ko‘rsating.     magnitli disk",
    },
    {
        title: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning beshinchi qatorida joylashgan xotirani ko‘rsating.     optik disk",
    },
    {
        title: "Magnitli disk yo‘lkasini tashkil yetuvchi sektorlari qanday uzunlikka ega?     512 bayt",
    },
    {
        title: "Kichik hisoblash tizimlarining interfeyslariga ega disklar deganda qanday disklar tushuniladi?     SCSI disklar",
    },
    {
        title: "Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi qanday nomlanadi?       RAID disklar",
    },
    {
        title: "4 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi?      32",
    },
    {
        title: "8 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi?      33",
    },
    {
        title: "Sanoatdagi standart arxitekturali shinani ko‘rsating.     ISA",
    },
    {
        title: "Sanoatdagi kengaytirilgan standart arxitekturali shinani ko‘rsating.     EISA",
    },
    {
        title: "Kompyuterning tashqi tashkil etuvchi qurilmalarni o‘zaro birgalikda ishlashini ta’minlovchi shinani ko‘rsating.      PCI",
    },
    {
        title: "Tez ishlaydigan grafik port shinasini ko‘rsating.      AGP",
    },
    {
        title: "Ma’lumotlarni ketma-ket uzatuvchi universal shinani ko‘rsating.      USB",
    },
    {
        title: "Tarmoq interfeysi qurilmasini ko‘rsating.       NID",
    },
    {
        title: "ASCII kodi qanday uzunliklarga ega bo‘lishi mumkin?        7 yoki 8 bit",
    },
    {
        title: "IS 10646 xalqaro standarti deb e’lon qilingan UNICODE-kodining uzunligi nechaga teng?     16 bit",
    },
    {
        title: "IS 10646 xalqaro standarti deb e’lon qilingan kodni ko‘rsating.      UNICODE",
    },
    {
        title: "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali qaysi boshqarish signallari bilan xotiraga murojaat qiladi?      MREQ, RD",
    },
    {
        title: "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali xotiraga murojaat qilish signalini ko‘rsating.         MREQ",
    },
    {
        title: "Monitorda rang hosil qilishda qanday ranglardan foydalaniladi?        qizil, ko‘k, yashil",
    },
    {
        title: "PCI Express shinasi, kompyuter tarkibiga kirgan qurilmalarni bog‘lashda, qanday rolni bajaradi?        universal kommutator",
    },
    {
        title: "Protsessor tarkibidagi muhim registrlardan biri bo‘lgan buyruqlar sanagichi registrini ko‘rsating.     PC",
    },
    {
        title: "Protsessorning IP yoki EIP registri deganda qanday registr tushuniladi?      buyruqlarni ko‘rsatuvchi registr",
    },
    {
        title: "Asosiy xotiraning dasturning buyruqlari  yoziladigan qismi nima deb ataladi?    kodlar yoziladigan segment",
    },
    {
        title: "AX yoki EAX registri deganda nima tushuniladi?       akkumulyator",
    },
    {
        title: "SF yoki EFLAGS registri deganda qaysi registr tushuniladi?      bayroqlar registri",
    },
    {
        title: "CS registri deganda qaysi registr tushuniladi?      kodlar yoziladigan segment registri",
    },
    {
        title: "Umumiy maqsadlar uchun mo‘ljallangan registrlarni ko‘rsating.        AX, EAX",
    },
    {
        title: "Pentium 4 protsessori tarkibida nechta tranzistor bor?        42 000 000",
    },
    {
        title: "Pentium 4 protsessorida «qatorining kengligi» qanday qiymatga ega?       0,18 mkm",
    },
    {
        title: "UltraSPARC III protsessori tarkibida nechta tranzistor bor?        29 000 000",
    },
    {
        title: "Pentium 4 protsessori mikroarxitekturasi qanday nomlanadi?        NetBurst",
    },
    {
        title: "Pentium 4 protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?      478",
    },
    {
        title: "UltraSPARC III protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?    1368",
    },
    {
        title: "Pentium 4 protsessori mikrosxemasida axborot signallari uchun nechta ulanish nuqtalari ajratilgan?        198",
    },
    {
        title: "Besh sathli konveyerning birinchi bosqichida (C1) nima amalga oshiriladi?    bajarilishi kerak bo‘lgan buyruqni tanlash",
    },
    {
        title: "Besh sathli konveyerning ikkinchi bosqichida (C2) nima amalga oshiriladi?      buyruqni dekodlash",
    },
    {
        title: "Besh sathli konveyerning uchinchi bosqichida (C3) nima amalga oshiriladi?       operandalarni tanlash",
    },
    {
        title: "Besh sathli konveyerning to‘rtinchi bosqichida (C4) nima amalga oshiriladi?    buyruqni bajarish",
    },
    {
        title: "Besh sathli konveyerning beshinchi bosqichida (C5) nima amalga oshiriladi?      natijalarni xotiraga yoki registrlarga yozish",
    },
    {
        title: "Bajariladigan buyruqni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?      S1",
    },
    {
        title: "Bajariladigan buyruqni dekodlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?       S2",
    },
    {
        title: "Operandalarni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?        S3",
    },
    {
        title: "Buyruqni bajarish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?    S4",
    },
    {
        title: "Natijani xotiraga yoki registrlarga yozish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?      S5",
    },
    {
        title: "To‘liq buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?        CISC",
    },
    {
        title: "Qisqartirilgan buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?       RISC",
    },
    {
        title: "Protsessor siklining birinchi bosqichida nima amalga oshiriladi?       RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi",
    },
    {
        title: "Protsessor siklining ikkinchi bosqichida nima amalga oshiriladi?      RS-ning qiymati orttiriladi",
    },
    {
        title: "Protsessor siklining uchinchi bosqichida nima amalga oshiriladi?      buyruq dekodlanadi",
    },
    {
        title: "Protsessor siklining to‘rtinchi bosqichida nima amalga oshiriladi?     buyruqni bajarish uchun kerak bo‘ladigan ma’lumotlar xotiradan yoki registrlardan tanlab olinadi",
    },
    {
        title: "Protsessor siklining beshinchi bosqichida nima amalga oshiriladi?      buyruq bajariladi",
    },
    {
        title: "Protsessor siklining oltinchi bosqichida nima amalga oshiriladi?     natijalarni xotiraga yoki registrlarga yozish",
    },
    {
        title: "Protsessor siklining yettinchi bosqichida nima amalga oshiriladi?    keyingi buyruqni bajarish tsikliga o‘tish",
    },
    {
        title: "Protsessor sikli nechta bosqichidan iborat?      7",
    },
    {
        title: "Protsessor siklining qaysi bosqichida buyruqni bajarish amalga oshiriladi?       5",
    },
    {
        title: "Protsessor siklining qaysi bosqichida buyruqni tanlab olish amalga oshiriladi?           1",
    },
    {
        title: "Protsessor siklining qaysi bosqichida buyruqni dekodlash amalga oshiriladi?        3",
    },
    {
        title: "Protsessor siklining qaysi bosqichida natijalarini xotiraga yoki registrlarga yozish amalga oshiriladi?        6",
    },
    {
        title: "Core i7 protsessori tarkibida nechtagacha tranzistor bor?      1,16  mld. gacha",
    },
    {
        title: "Antiviruslar dasturlarning qaysi turiga kiradi?       Tizimli dasturlar",
    },
    {
        title: "Drayverlar dasturlarning qaysi turiga kiradi?         Tizimli dasturlar",
    },
    {
        title: "Tezkor tizim dasturlarning qaysi turiga kiradi?        Tizimli dasturlar turiga",
    },
    {
        title: "Core i7 protsessorida necha sathli kesh qo‘llaniladi?        3 sathli kesh",
    },
    {
        title: "Core i7 protsessorlaridagi yadrolar sonini ko‘rsating        ko‘p",
    },
    {
        title: "ADM  protsessorlaridagi yadrolar sonini ko‘rsating.         2",
    },
    {
        title: "ATmega168  protsessoridagi yadrolar sonini ko‘rsating.          1",
    },
    {
        title: "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?        ikkilik sanoq sistemasini qo‘llash",
    },
    {
        title: "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?       dastur yordamida boshqarish",
    },
    {
        title: "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?            hotirani ham ma’lumotlarni, ham dasturlarni saqlashda qo‘llash",
    },
    {
        title: "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?    hotira yacheykalari ketma-ket keluvchi adreslarga ega”",
    },
    {
        title: "Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?         dasturni bajarishda shartli o‘tish imkoniyati",
    },
    {
        title: "Keltirilganlarning qaysi biri Mur qonunini ifodalaydi?      bir mikrosxemadagi tranzistorlar soni har yili 60% ga ortib boradi",
    },
    {
        title: "Protsessorning qaysi registrida, keyingi bajariladigan buyruqning adresi yozib turiladi?       PC",
    },
    {
        title: "Raqamli mantiqiy sath, olti sathli kompyuterlarning qaysi sathiga tegishli?    0 sathiga",
    },
    {
        title: "Mikroarxitektura sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?      1 sathiga",
    },
    {
        title: "Buyruqlar to‘plami arxitekturasi sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?       2 sathiga",
    },
    {
        title: "Operatsion tizim sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?       3 sathiga",
    },
    {
        title: "Assembler sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?         4 sathiga",
    },
    {
        title: "Amaliy tillar dasturchilari sath, olti sathli kompyuterlarning qaysi sathiga tegishli?         5 sathiga",
    },
    {
        title: "16 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?       64 Kbayt",
    },
    {
        title: "20 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?       1 Mbayt",
    },
    {
        title: "32 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?          4 Gbayt",
    },
    {
        title: "33 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?          8 Gbayt",
    },
    {
        title: "Qaysi protsessor tarkibida 42 000 000 tranzistor mavjud?          Pentium 4",
    },
    {
        title: "Qaysi protsessor tarkibida 29 000 000 tranzistor mavjud?          UltraSPARC III",
    },
    {
        title: "Qaysi protsessor NetBurst mikroarxitekturasiga ega?            Pentium 4",
    },
    {
        title: "Qaysi protsessor Version 9 SPARC mikroarxitekturasiga ega?          UltraSPARC III",
    },
    {
        title: "Qaysi protsessor «qatorining kengligi» 0,18 mkm ga teng?           Pentium 4",
    },
    {
        title: "Qaysi protsessor «qatorining kengligi» 0,13 mkm ga teng?        UltraSPARC III",
    },
    {
        title: "SIMM qisqartmasi nimani anglatadi?         Ulanish nuqtalari bir tomonda joylashgan xotira moduli",
    },
    {
        title: "DIMM qisqartmasi nimani anglatadi?           Ulanish nuqtalari ikki tomonda joylashgan xotira moduli",
    },
    {
        title: "PCI qisqartmasi nimani anglatadi?     Kompyuterning tashqi tashkil etuvchi qurilmalarni o‘zaro birgalikda ishlashini ta’minlovchi shina",
    },
    {
        title: "AGP qisqartmasi nimani anglatadi?      Tez ishlaydigan grafik port shinasini",
    },
    {
        title: "USB qisqartmasi nimani anglatadi?         Ma’lumotlarni ketma-ket uzatuvchi universal shina",
    },
    {
        title: "RAID qisqartmasi nimani anglatadi?          Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi",
    },
    {
        title: "EISA qisqartmasi nimani anglatadi?        Sanoatdagi kengaytirilgan standart arxitekturali shina",
    },
    {
        title: "ISA qisqartmasi nimani anglatadi?      Sanoatdagi standart arxitekturali shina",
    },
    {
        title: "RISC qisqartmasi nimani anglatadi?      Qisqartirilgan buyruqlar to‘plamiga ega kompyuter",
    },
    {
        title: "CISC qisqartmasi nimani anglatadi?        To‘lik buyruqlar to‘plamiga ega kompyuter",
    },
    {
        title: "Dasturchilarga, dasturlardagi xatolarni topish uchun yordam beradigan tizimli dastur nima ataladi?          Otladchik",
    },
    {
        title: "Dasturning xar bir qatorini taxlil qilib, o‘sha zahoti bajaradigan tizimli dastur nima deb ataladi?             Interpretator",
    },
    {
        title: "Dasturni to‘liq taxlil qilib, keyin bajarish uchun kompyuter xotirasiga yozadigan tizimli dastur nima deb ataladi?           Translyator",
    },
    {
        title: "Fizik adreslar to‘plamini qanday nomlash mumkin?          Adreslar fazosi",
    },
    {
        title: "SHina orqali ma’lumotlarni uzatishga ruxsat beradigan qurilma nima deb ataladi?           SHina ustasi",
    },
    {
        title: "Registrga yangi ma’lumotni yozish jarayoni qanday nomlanishi mumkin?           YUklash",
    },
    {
        title: "Qaysi xotiraga murojaat qilish tezligi eng katta?             registrli xotiraga",
    },
    {
        title: "Hardware deganda nima tushiniladi?             kompyuterning apparat qismi",
    },
    {
        title: "«Kompyuter» so‘zini inglizchadan qilingan  dastlabki tarjimasi nimani anglatgan?                buyruqlarni bajarish uchun mo‘ljallangan elektron qurilma",
    },
    {
        title: "Software deganda nima tushiniladi?               kompyuterning dasturiy ta’minoti",
    },
    {
        title: "Kompyuterning minimal tarkibiga nimalar kiradi?          monitor, tizimli blok, klaviatura",
    },
    {
        title: "Kompyuterning ma’lumotlar shinasining razryadlar soni nimaga bog‘liq?             foydalanilgan protsessorning adreslashi mumkin bo‘lgan xotirasiga",
    },
    {
        title: "Printirlarning qanday xillarini bilasiz?          matritsali, sepuvchi va lazerli",
    },
    {
        title: "Boshqarish shinasi nima uchun mo‘ljallangan?           boshqarish signallarini uzatish uchun",
    },
    {
        title: "Plotter nima uchun mo‘ljallangan?           grafik axborotni qog‘ozga chiqarish uchun",
    },
    {
        title: "SHaxsiy kompyuterlar uchun mo‘ljallangan qoplamalarning qanday xillarini bilasiz?         gorizontal (desktop) va vertikal (tower) xillari",
    },
    {
        title: "Ma’lumotlar shinasi nima uchun mo‘ljallangan?            ishlanayotgan axborotni uzatish uchun",
    },
    {
        title: "Djoystikdan nima uchun foydalaniladi?          kompyuter o‘yinlari o‘ynash uchun",
    },
    {
        title: "Modemlarning qanday xillarini bilasiz?                  ichki va tashqi",
    },
    {
        title: "Kontroller nima uchun mo‘ljallangan?              protsessordan kelayotgan axborotlarni, qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun",
    },
    {
        title: "Videoadapterning ko‘rsata olish imkoniyati deganda nima tushiniladi?           gorizantal va vertikal bo‘ylab chiqarib bera olishi mumkin bo‘lgan nuqtalarining soni",
    },
    {
        title: "Modem nima uchun mo‘ljallangan?          telefon tarmog‘i orqali bir kompyuterdan, boshqa bir kompyuterga ma’lumotni uzatish uchun",
    },
    {
        title: "Telefon tarmog‘i orqali kompyuterlarni o‘zaro bog‘laydigan qurilma qanday nomlanadi?      modem",
    },
    {
        title: "Qaysi qurilma odatdagi telefon aloqa chiziqlari orqali ma’lumotlar almashinishni ta’minlab bera oladi?       modem",
    },
    {
        title: "Skaner nima uchun mo‘ljallangan?       qog‘oz bo‘lagidagi grafik tasvirlarni kompyuterga kiritish uchun",
    },
    {
        title: "Quyidagilardan qaysi biri dasturiy vositalarga tegishli emas?         protsessor",
    },
    {
        title: "Qaysi qurilma yordamida tashqi qurilma bilan shina o‘rtasidagi aloqa amalga oshiriladi?          kontroller",
    },
    {
        title: "Strimmer nima uchun mo‘ljallangan?            katta xajmdagi axborotni magnit tasmasiga yozish uchun",
    },
    {
        title: "Vinchester nima uchun mo‘ljallangan?               Ma’lumotlarni doimiy saqlash uchun",
    },
    {
        title: "Modem qanday vazifani bajaradi?             Analogli signalni raqamli signalga va raqamli signalni analogli signalga  aylantirish uchunuzgartiradi.",
    },
    {
        title: "Kompyuterning ish samaradorligi nimaga bog‘liq?             Protsessor chastotasiga",
    },
    {
        title: "Monitorning harakteristikasini tanlang           Ruxsat etish imkoniyati",
    },
    {
        title: "Personal kompyuterning shinalari nimani ta’minlab beradi?       Element va qurilmalarning o‘zaro   bog‘lanishini",
    },
    {
        title: "Takt chastotasining o‘lchov birligi nima?            MGts",
    },
    {
        title: "Ma’lumotni protssessor qanday qayta ishlaydi?          ikkilik sanoq tizimida",
    },
    {
        title: "Asosiy plataga nima o‘rnatiladi?            Protsessor",
    },
    {
        title: "CD-disklarning hajmi qanchagacha bo‘lishi mumkin?            700 Mbayt",
    },
    {
        title: "Tarmoq kabellarining qaysi biri eng kata uzatish tezligiga va sifatga ega?        Optik tolali",
    },
    {
        title: "Diskovod – bu ...?         Tashqi qurilmadagi ma’lumotni o‘qish/ yozish qurilmasi",
    },
    {
        title: "Kompyuter yoqilishini testlash dasturi qaerda yozilgan?           BIOS mikrosxemasida",
    },
    {
        title: "Doimiy saqlovchi qurilma qanday hotira turiga kiradi?       Manbaga bog‘liq bo‘lmagan qurilma",
    },
    {
        title: "SHisha tolali kabelda signal qanday yo‘nalishda uzatiladi?          Bir yo‘nalishda",
    },
    {
        title: "Magnit diskni sektorlarga bo‘lish nimani amalga oshiradi?          Ma’lumotlarga murojat qilish vaqtini kamaytiradi",
    },
    {
        title: "SHaxsiy kompyuterda ma’lumotni qayta ishlash qaysi qurilmada amalaga oshiriladi?          Protsessorda",
    },
    {
        title: "XX asrning 40 yillarida hisoblash mashinalarining ishlash printsiplari kim tomonidan tavsiflangan?        Jon Fon Neyman tomonidan",
    },
    {
        title: "Kompyuter o‘chirilganida kompyuterning kayerida ma’lumot ham o‘chib ketadi?     operativ hotirada",
    },
    {
        title: "Multimedia- kompyuterning tarkibida qanday qurilma bo‘lishi shart?        CD-ROM diskovod va tovush kartasi",
    },
    {
        title: "«Sichqoncha» manipulyatori – bu ...        ma’lumotni kiritish qurilmasidir",
    },
    {
        title: "Tashqi qurilmalarni boshqarish dasturi nima deb nomlanadi?          drayver",
    },
    {
        title: "Qaysi qurilma o‘chirilganida kompyuter ishlamaydi?        Operativ hotira",
    },
    {
        title: "Kompyuterda ma’lumot  qanday ko‘rinishda qayta ishlanadi?        Ikkilik ko‘rinishida",
    },
    {
        title: "Ma’lumotlar –bu ...?           Kompyuter kodiga o‘tkazilgan axborotdir",
    },
    {
        title: "Dastur – bu ... ?       Kompyuterning  ma’lumotni qayta ishlash jarayonida bajaradigan buyruqlar ketma-ketligidir",
    },
    {
        title: "Berilgan dastur bo‘yicha ma’lumotlarni qayta ishlash qurilmasi bu?    Protsessor",
    },
    {
        title: "Dastur va ma’lumotlar qayta ishlash vaqtida qayerga joylashtiriladi?     Tezkor hotiraga",
    },
    {
        title: "Mikroprotsessor tomonidan qabul qilinadigan bitlarning yaxlit soni nima deyiladi?          Protsessor razryadligi",
    },
    {
        title: "Bir sekunddagi taktlar soni nima debataladi?        Takt chastotasi",
    },
    {
        title: "Tezkor tizimni dasturi qayerda joylashgan?      Doimiy hotirada",
    },
    {
        title: "Uchta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?        8",
    },






    {
        title: "Mikroprotsessor bu: A. Dasturiy taminotga asoslangan axborotni qayta ishlash qurilmasi",
    },
    {
        title: "Asosiy kiritish/chiqarish tizimi (BIOS) …. uchun moljallangan: A. Ona plata va unga ulangan qurilmalarning oz-ozini diagnostika qilish va testlash",
    },
    {
        title: "Markaziy protsessorni ornatish uchun moljallangan ulagich nima deb ataladi? A. Soket",
    },
    {
        title: "Kompyuter protsessori qaysi funksional blokni oz ichiga olmaydi? A. Flesh xotira",
    },
    {
        title: "Kesh xotirani qaysi darajasi eng tez hisoblanadi? A. Birinchi daraja",
    },
    {
        title: "Kompyuterdagi eng tezkor xotira turi bu … A. Protsessor registri",
    },
    {
        title: "Protsessorning tezkorligi nima? A. Vaqt birligida protsessor tomonidan bajariladigan elementar operatsiyalar soni",
    },
    {
        title: "Qaysi biri asosiy (operativ) xotira xususiyati hisoblanmaydi? A. Narxi",
    },
    {
        title: "Asosiy (operativ) xotira  …..  uchun moljallangan: A. Unga bajariladigan dasturlar va malumotlarni kiritish",
    },
    {
        title: "Dinamik RAM statik RAMga nisbatan quyidagi afzalliklarga ega: A. Nisbatan past narx",
    },
    {
        title: "Statik RAM  …… sifatida ishlatiladi? A. Kesh xotira",
    },
    {
        title: "Mikroprotsessor toplamidagi katta integral sxemalar (KIS) soniga kora mikroprotsessorlar ajratiladi: A. Bir kristalli, kop kristalli va kop kristall qismli",
    },
    {
        title: "Buyruqlar tizimi, qayta ishlanadigan malumotlar turlari, manzillash usullari va mikroprotsessorning ishlash tamoyillari quyidagilardir: A. Makroarxitektura",
    },
    {
        title: "Mikroprotsessor nima yordamida raqamli tizimning barcha qurilmalari ishini muvofiqlashtiradi? A. Boshqaruv shinasi yordamida",
    },
    {
        title: "Har qanday buyruq formati elementining tuzilishi bu: A. Operatsiya kodi",
    },
    {
        title: "Qaysi shina turida faqat mikroprotsessorning chiqish signallari uzatiladi? A. Manzil shinasida",
    },
    {
        title: "Buyruqning muhim xususiyati nima? A. Format",
    },
    {
        title: "Mikroprotsessorning xususiyatlari bu: A. Takt chastotasi, razryadlilik",
    },
    {
        title: "Har qanday buyruq formatining eng muhim tarkibiy qismi qaysi? A. Operatsiya kodi",
    },
    {
        title: "Mikroprotsessorning operatsion imkoniyatlarini qanday kengaytirish mumkin? A. Registrlar sonini kopaytirish orqali",
    },
    {
        title: "Konveyer – bu  …… A. Buyruqning bajarilishini bir necha bosqichlarga ajratuvchi maxsus qurilma;",
    },
    {
        title: "Tez-tez ishlatib turiladigan malumotlar va kodlarni keshga saqlash orqali tizimning ish faoliyatini oshirish usuli ….. deyiladi A. Keshlash",
    },
    {
        title: "KP580 mikroprotsessorida nechta umumiy vazifali registrlar mavjud? A. 6 ",
    },
    {
        title: "Umumiy vazifali registrlar nima maqsadda ishlatiladi? A. Arifmetik-mantiqiy buyruqlarning operandlarini, shuningdek, xotira yacheykalarining manzillarini yoki alohida komponentlarini saqlash uchun moljallangan",
    },
    {
        title: "KP580 mikroprotsessorida qaysi registrlar umumiy vazifali registrlar hisoblanadi? A. B, C, D, E, H, L",
    },
    {
        title: "Assembler tili bu …… A. Mashina tilining belgili korinishi",
    },
    {
        title: "8086 mikroprotsessorida nechta umumiy vazifali registrlar mavjud? A. 8 ta",
    },
    {
        title: "Tizimli dasturlar bu … A. bu kompyuterning texnik vositalari va amaliy dasturlarini boshqarish uchun moljallangan kompyuter dasturlarining bir turi",
    },
    {
        title: "Amaliy dasturlar bu …. A. bu oxirgi foydalanuvchilar uchun moljallangan dastur yoki dasturlar guruhi",
    },
    {
        title: "Yordamchi dasturlar bu …. A. bu kompyuterni tahlil qilish, sozlash, optimallashtirish yoki texnik xizmat korsatishda yordam beradigan dasturlar",
    },
    {
        title: "Takt chastotasi bu …. A. Sekundiga protsessor bajaradigan amallar sonini bildiradi",
    },
    {
        title: "Ikkilik sanoq tizimida qanday raqamlar ishlatilishini aniqlang. A. 0 va 1",
    },
    {
        title: "Soprotsessor funksiyasini korsating. A. Suzuvchi nuqtali malumotlarni qayta ishlaydi",
    },
    {
        title: "Protsessorda razryadlilik – bu …. A. Protsessor 1 taktda ishlov beradigan ikkilik bitlar soni",
    },
    {
        title: "Mikroprotsessor kesh xotirasi bu …. A. Protsessor va asosiy xotira ortasidagi bufer",
},
{
    title: "Mikroprotsessorda malumotlarning qaysi turi 8 bitni tashkil qiladi? A. Bayt",
},
{
    title: "Fon-Neyman arxitekturasi quyidagilarni oz ichiga oladi: A. Dasturlar va malumotlarni saqlash uchun yagona xotira qurilmasi, CPU, k/ch qurilmalari va shina tizimi",
},
{
    title: "Garvard arxitekturasi quyidagilarni oz ichiga oladi: A. Dasturlar va malumotlarni saqlash uchun alohida xotira qurilmasi, CPU, k/ch qurilmasi, shina tizimi",
},
{
    title: "Intel 8086 protsessorida qaysi registrlar umumiy vazifali registrlar hisoblanadi. A. AX, BX, CX, DX",
},
{
    title: "Intel 8086 mikroprotsessorida AX, BX, CX, DX registrlari qaysi guruhga kiradi?  A. Umumiy vazifali registrlar",
},
{
    title: "Intel 8086 mikroprotsessorida mavjud bolgan buyruqlar turlari nechta? A. 5 ta",
},
{
    title: "Protsessor turlari togri keltirilgan qatorni aniqlang. A. CISC, RISC, MISC, VLIW",
},
{
    title: "RISC – bu …. A. Qisqartirilgan buyruqlar toplamiga ega kompyuter",
},
{
    title: "Qisqartirilgan buyruqlar toplami bilan ishlaydigan protsessor: A. RISC",
},
{
    title: "Toliq buyruqlar toplami bilan ishlaydigan protsessor: A. CISC",
},
{
    title: "Protsessorda buyruqlarni bajaruvchi asosiy qurilma nima? A. Yadro",
},
{
    title: "Kop yadroli mikroprotsessor – bu …. A. Ikki yoki undan kop yadrolarga ega bolgan protsessor",
},
{
    title: "Bir nechta buyruqlar oqimi va bitta malumot oqimi – bu …. A. MISD",
},
{
    title: "Bitta buyruqlar oqimi va bitta malumotlar oqimi – bu …. A. SISD",
},
{
    title: "Bir nechta buyruqlar oqimi va bir nechta malumotlar oqimi – bu …. A. MIMD",
},
{
    title: "Bitta buyruqlar oqimi va bir nechta malumotlar oqimi – bu … A. SIMD",
},
{
    title: "Elementar operatsiyalarni bajarishda eng yuqori korsatkichga ega bolgan protsessorlar? A. Qisqartirilgan buyruqlar toplamiga ega bolgan protsessorlar",
},
{
    title: "1-avlod kompyuterlarida qanday elementlar bazasi ishlatilgan? A. Elektron vakuumli lampalar",
},
{
    title: "2-avlod kompyuterlarida qanday elementlar bazasi ishlatilgan? A. Tranzistorlar",
},
{
    title: "3-avlod kompyuterlarida qanday elementlar bazasi ishlatilgan? A. Integral mikrosxemalar",
},
{
    title: "4-avlod kompyuterlarida qanday elementlar bazasi ishlatilgan? A. Katta integral mikrosxemalar",
},
{
    title: "Stek bu …. A. Mikroprotsessorning asosiy xotirasi",
},
{
    title: "Registr – bu tugun …. moljallangan. A. Ikkilik raqamlarni saqlash va ozgartirish uchun",
},
{
    title: "Malumotlarni togridan-togri manzillashning afzalligi: A. Malumotlar uzatish uchun vaqt xarajatlarini kamaytirish",
},
{
    title: "Operandning qiymati protsessor registrlaridan birida oldindan saqlanadigan adreslash turi? A. Registrli adreslash",
},
{
    title: "Operandning qiymati buyruqlar tarkibida joylashgan adreslash turi? A. Togridan-togri adreslash",
},
{
    title: "Bitta dastur oqimi va bir nechta malumotlar oqimlari bolgan tizimlar: A. SPMD",
},
{
    title: "Bir nechta dasturlar oqimi va bir nechta malumotlar oqimi bolgan tizimlar: A. MPMD",
},
{
    title: "Flinn turlanishida nechta arxitektura turlari mavjud A. 4 ta",
},
{
    title: "Axborotni uzatishni va qayta ishlashni tashkil etish uslubiga kora protsessorlar quyidagilarga ajratiladi: A. Ketma-ket, parallel va parallel - ketma-ket harakat",
},
{
    title: "Axborot almashish uchun standart kod bu .…  A. ASCII kod",
},
{
    title: "Amaliy dastur bajarilayotgan vaqtda …. saqlanadi. A. Asosiy (operativ) xotirada",
},
{
    title: "Mikroprotsessorli tizimlarning kop protsessorli arxitekturasi nimani anglatadi? A. Tizim bir nechta protsessorlardan tashkil topadi",
},
{
    title: "Qaysi konveyerli protsessorda buyruqlar quyidagi bosqichlarda bajariladi: qabul qilish (fetch), dekoderlash (decode), bajarish (execute), natijani yozish (write-back)? A. Tort bosqichli umumiy konveyer",
},
{
    title: "Qanday qayta ishlash prinsipi protsessorlarga bir vaqtning ozida bir nechta buyruqlarni qayta ishlashga imkon beradi? A. Konveyerli qayta ishlash prinsipi",
},
{
    title: "AMQ da arifmetik amallarni bosqichma-bosqich bajarilishini real sonlar boyicha amalga oshirishning nomi nima?   A. Arifmetik konveyer",
},
{
    title: "Qaysi konveyer ziddiyatida bitta buyruqning bajarilishi oldingi buyruq natijasiga bogliq? A. Malumotlardagi ziddiyat",
},
{
    title: "Protsessor, lokal xotira banki, aloqa protsessorlari yoki tarmoq adapterlari, bazida qattiq disklar va boshqa kiritish-chiqarish qurilmalarini oz ichiga olgan, alohida tugunlardan qurilgan hisoblash tizimi arxitekturasi qaysi? A. Simmetrik kop protsessorlar",
},
{
    title: "Parallellik deb ataladigan, buyruq darajasidagi qaysi protsessor (yani, bir vaqtning ozida bir nechta buyruqlarni bajarilishini) bir nechta bir xil funksional bloklarni oz hisoblash yadrosiga qoshilishi sababli qollab-quvvatlaydi? A. Superskalyar protsessor",
},
{
    title: "Simmetrik kop protsessorli ishlov berish arxitekturasi qaysi qatorda togri keltirilgan? A. SMP",
},
{
    title: "Massiv parallel ishlov berish bu …. A. MPP",
},
{
    title: "Qaysi arxitekturada xotira fizik ajratilgan boladi? A. MPP",
},
{
    title: "Qaysi arxitekturada xotira umumiy boladi? A. SMP",
},
{
    title: "Topshiriq tuzilmasidan foydalanadigan va bitta katta masalaning yechimini ozaro bogliq bolsa ham, ammo sodda bolgan kichik masalalar yechimi bilan almashtirishga imkon beradigan usul qanday nomlanadi? A. Dekompozitsiya",
},
{
    title: "Matritsaning qanday bolinishi har bir oqimga matritsaning satrlari yoki ustunlarining malum bir toplamini ajratadi? A. Chiziqli ajratish",
},
{
    title: "Bitta protsessor chipida yoki korpusida ikki yoki undan kop hisoblash yadrosini oz ichiga olgan protsessor qanday nomlanadi? A. Kop yadroli protsessor",
},
{
    title: "Parallellash turlari togri keltirilgan qatorni aniqlang. A. Malumotlar darajasidagi parallellik, buyruqlar darajasidagi parallellik, oqimlar darajasidagi parallellik",
},
{
    title: "Bir vaqtda kop oqimlilik bu …  A. SMT",
},
{
    title: "Hyper-threading bu … A. Giper oqimlilik",
},
{
    title: "Dual-core protsessorida nechta hisoblash yadrosi mavjud? A. 2",
},
{
    title: "Quad-core protsessorida nechta hisoblash yadrosi mavjud? A. 4",
},
{
    title: "Kop yadroli protsessorlarning qaysi arxitekturasida barcha protsessor yadrolari bir xil va bir xil vazifalarni bajaradi? A. Gomogen (bir xil) arxitektura",
},
{
    title: "Kop yadroli protsessorlarning qaysi arxitekturasida protsessor yadrosi turli xil vazifalarni bajaradi? A. Geterogen arxitektura",
},
{
    title: "Kop protsessorli va kop yadroli umumiy xotira tizimlarida kop oqimli ilovalarni dasturlash uchun moljallangan dasturlash interfeysi qanday nomlanadi? A. OpenMP",
},
{
    title: "OpenMP dasturlarida parallel bolimlar qaysi korsatmadan (direktivadan) boshlanadi? A. pragma omp",
},
{
    title: "for tsikl uchun hisoblashlarni parallellashtirishda OpenMP da qaysi korsatma qollaniladi? A. pragma omp for",
},
{
    title: "Parallel oqimlarni yaratish va hisoblashlarni parallellashtirish uchun OpenMP qaysi korsatmadan foydalaniladi? A. pragma omp parallel",
},
{
    title: "OpenMP barcha parallel oqimlar uchun bir xil kod ishlatadigan qanday parallel dasturlash modelini taklif qiladi? A. SPMD-model (Single Program Multiple Data)",
},
{
    title: "OpenMP asosida yaratilgan parallel dasturlarda faqat bitta oqimga korinadigan xotira maydoni nima deyiladi? A. Private",
},
{
    title: "OpenMP asosida yaratilgan parallel dasturlarda barcha oqimlarga korinadigan xotira maydoni qanday nomlanadi? A. Shared",
},
{
    title: "Qaysi OpenMP korsatmasi parallel blok uchun oqimlar sonini belgilaydi? A. omp_set_num_threads()",
},
{
    title: "Quyidagilardan qaysi biri geterogen hisoblash platformalarini (grafik protsessorlar) parallel dasturlash uchun standart dasturiy API-interfeys hisoblanadi? A. OpenCL",
},
{
    title: "Foydalanuvchi nuqtai nazaridan bitta hisoblash resursini ifodalaydigan, tezkor aloqa kanallari bilan birlashtirilgan taqsimlangan hisoblash tugunlari toplami qanday nomlanadi? A. Hisoblash klasteri",
},
{
    title: "Quyidagi texnologiyalarning qaysi biri har bir jarayon boyicha qoshma operatsiyalar orqali malumotlar bir jarayonning manzil maydonidan ikkinchi jarayon manzil maydoniga kochiriladigan xabarlarni uzatuvchi parallel dasturlash modeliga asoslangan?  A. MPI",
},
{
    title: "MPI dasturini ishga tushirish uchun qanday atribut ishlatiladi? A. MPI_Init",
},
{
    title: "MPI dasturlarida jarayonning darajasini (identifikatorini) olish uchun qanday atribut ishlatiladi?  A. MPI_Comm_rank",
},
{
    title: "Aloqa hajmini (sonini), yani MPI dasturlaridagi jarayonlar sonini olish uchun qanday atributdan foydalaniladi?  A. MPI_Comm_size",
},
{
    title: "MPI dasturlarida xabarlarni uzatish uchun qanday atribut ishlatiladi? A. MPI_Send",
},
{
    title: "MPI dasturlarida xabarlarni qabul qilish uchun qanday atribut ishlatiladi? A. MPI_Recv",
},
{
    title: "Jarayonlardan malumotlarni yigish uchun qaysi MPI buyrugi ishlatiladi? A. MPI_GATHER",
},










{
    title: "Kompyuter arxitekturasi bu ...     kompyuterning ishlash tamoyillari va buyruqlar tizimini tushunish uchun yetarli darajadagi  Kompyuter vazifalari va Kompyuterning tuzilishi tavsifi",
},
{
    title: "Kompyuter nima:     Berilganlarni aniq belgilangan ketma-ketlikda bajara oladigan qurilma yoki tizim. Unga kiritish va chiqaris qurilmalari ham talluqli. ",
},
{
    title: "RAM - bu qanday xotira?     Doimiy ravishda qollanilgan malumotlar avtomatik tarzda saqlanib qolinadi.",
},
{
    title: "KESH xotira bu ...         tezkor xotiraning tez-tez foydalaniladigan maydonlarini saqlaydigan juda tezkor xotira.",
},
{
    title: "Periferik qurilmaning vazifasi:       axborotni kiritish va chiqarish.",
},
{
    title: "Modemning vazifasi.        ma'lum bir vaqtda ma'lumotlarni qayta ishlash.",
},
{
    title: "Tashqi xotira quyidagilar uchun xizmat qiladi.          kompyuterning ishlashidan yoki ishlamasligidan qat'i nazar, ma'lumotni uzoq muddatli saqlash. ",
},
{
    title: "Protsessorning vazifasi qanday?       . hisoblash jarayonining borishini boshqaradi va arifmetik- mantiqiy amallarni bajaradi.",
},
{
    title: "Kuler nima?   Markaziy protsessorni sovutish uchun moslama",
},{
    title: "Ikkilik hisoblash tizimidan birinchi bo'lib foydalangan:    Konrad Zuse ",
},
{
    title: "Printer quyidagicha bo'lishi mumkin:     matritsali; lazerli; ignali; sublimatsiyali; qora siyohli. ",
},
{
    title: "Tezkor xotira bu:     protsessor ishlashi jarayonida talab qilinadigan ma'lumotlar va buyruqlarni vaqtincha saqlaydigan  xotira",
},
{
    title: "Markaziy protsessor tarkibiga quyidagi komponentlar talluqli:    boshqaruv bloki, arifmetik mantiqiy qurilma, registrlar, kesh xotirasi. ",
},
{
    title: "Dastlabki operatsion tizimlar qaysi mashina avlodida paydo bo'lgan?      Uchinchisida ",
},
{
    title: "Raqamli hisoblashning asosiy tamoyillarini kim ishlab chiqqan?     Jon fon Neyman",
},
{
    title: "Qaysi avlod mashinasi bir nechta foydalanuvchiga bitta kompyuter bilan ishlash imkonini beradi?    Uchinchisi",
},
{
    title: "Birinchi avlod mashinalari qanday  elektron asosdan  yaratilgan?     elektron vakuum lampalari",
},
{
    title: "Birinchi kompyuter nechanchi yilda paydo bo'ldi?     1946 yil ",
},
{
    title: "Inglizcha 'kompyuter' so'zining asl ma'nosi nima?        hisob-kitoblarni amalga oshiruvchi mashinasi ",
},
{
    title: "Tizim dasturlari     apparat qurilmalarining ishlashini nazorat qiladi, bizga va ilovalarimizga hizmat korsatadi. ",
},
{
    title: "Ilova dasturlari:      aniq muammolarni hal qilishga mo'ljallangan dasturlar. ",
},
{
    title: "Dastur bu ...      Magnit diskda fayl sifatida saqlanadigan va foydalanuvchi buyrug'i bilan bajarish uchun kompyuterga yuklanadigan mashina tilidagi ko'rsatmalar to'plami. ",
},
{
    title: "Axborot texnologiyalari bu ...       ma'lum (texnik) vositalar yordamida ma'lumotlarni to'plash, qayta ishlash va uzatish texnologiyasi. ",
},
{
    title: "Mikroprotsessor nima?      Integral mikrosxema, uning kiritilishida keladigan buyruqlarni bajaradi (masalan, hisoblash) va mashinaning ishlashini boshqaradi; ",
},
{
    title: "Kompyuterning alohida periferik qurilmalarini magistralga jismoniy darajada ulash mumkin:     kontroller yordamida; ",
},
{
    title: "Tashqi xotira nimaga kerak?     kompyuterni o'chirib qo'ygandan keyin uzoq muddat ma'lumotlarni saqlash uchun;",
},
{
    title: "Keltirilganlardan qaysi biri dasturiy vositalarga kirmaydi     protsessor",
},
{
    title: "Fayl deb    EHM lardagi yoki disklardagi oz nomiga ega maydon;",
},
{
    title: "Komputer bu      malumotlar bilan ishlashga moljallangan kop funktsiyali elektron qurilma;",
},
{
    title: "komputer tarkibidagi qaysi qurilma malumotlarni qayta ishlash uchun hizmat qiladi?         Protsessor;",
},
{
    title: "kompyuterning ishlash tezligi quyidagiga bogliq         Protsessorning takt chastotasiga;",
},
{
    title: "protsessorning takt chastotasi bu          Bir sekundda bajariladigan amallar soni;",
},
{
    title: "Tezkor xotira hajmi quyidagini aniqlaydi:          Qattiq diskka murojaat qilmasdan qancha malumotni qayta ishlash mumkinligini;",
},
{
    title: "kompyuterning asosiy qurilmalari ketma-ketligini toliq korsating.         Markaziy protsessor, tezkor xotira, kiritish/chiqarish qurilmalari;",
},
{
    title: "protsessor tarkibiga kiradigan qurilmalarni korsating.      Arifmetik mantiqiy qurilma, boshqaruv qurilmasi;",
},
{
    title: "protsessor malumotlarni  qayta ishlaydi.          Ikkilik kodida;",
},
{
    title: "Doimiy xotira qanday hizmat korsatadi.         Kompyuterni ishga tushiruvchi dasturlarni saqlaydi va uning qurilmalarini sinovdan okazadi;",
},
{
    title: "Qanday qurilma  ochganda Shaxsiy kompyuter oz  funksiyalarini  bajara olmaydi?          Tezkor xotira;",
},
{
    title: "Qanday qurilma malumotni uzoq vaqt saqlashga hizmat qiladi?         Tashqi xotira;",
},
{
    title: "Harvard universiteti tomonidan ishlab chiqilgan protsessor arxitekturasini toping.         Harvard;",
},
{
    title: "Bir xil xotiraga kirish arxitekturasi qanday nomlanadi?          UMA (Uniform Memory Access);",
},
{
    title: "Bir xil bo`lmagan xotiraga kirish arxitekturasi qanday nomlanadi?         NUMA (Non-Uniform Memory Access);",
},
{
    title: "Qisqartirilgan buyruqlar to`plamiga ega kompyuter arxitekturasi nomini korsating.        RISC - Reduced Instruction Set Computer;",
},
{
    title: "Murakkab (to`liq) buyruqlar to`plamiga ega kompyuter arxitekturasi nomini korsating.          CISC - Complex Instruction Set Computer;",
},
{
    title: "komputer arxitekturasi Flinn tasnifi boyicha necha turga bolinadi?       4 ;",
},
{
    title: "Flinn tasnifida keltirilgan EHM arxitekturalarini aniqlang.          SISD, MISD, SIMD, MIMD;",
},
{
    title: "qaysi javobda protsessor avlodlari togri korsatilgan?       Core i3, Core i5, Core i7, Core i9;",
},
{
    title: "zamonamizning protsessor ishlab chiqaruvchi yirik kompaniyalari nomini korsating.      Intel, AMD;",
},
{
    title: "Konveyer qayta ishlash tamoyili qanday ishlaydi?        Vazifalarni bloklarga taqsimlab qayta ishlashni tezlashtiradi;",
},
{
    title: "Protsessor yadrolari soni qanday aniqlanadi?         Qurilmalar dispetcheri orqali protsessor uyasiga kirib aniqlanadi;",
},
{
    title: "Kompyuterni  o'chirib qo'yganingizda ma'lumotlar:       Tezkor xotirada yo'qoladi;",
},
{
    title: " Diskovod bu- ..... qurilma       tashqi axborot vositalaridan ma'lumotlarni o'qish / yozish;",
},
{
    title: "Qaysi qurilma ma'lumot almashishda eng katta tezlikda ega?            Qaysi qurilma ma'lumot almashishda eng katta tezlikda ega? ",
},
{
    title: " Qaysi qurilma ma'lumot kiritish uchun o'ljallangan:            klaviatura; ",
},
{
    title: "'Sichqoncha'  bu ..... uchun qurilma:  ma'lumot kiritish; ",
},
{
    title: "Kompyuterni telefon tarmog'iga ulash uchun quyidagilardan foydalaniladi:           modem;",
},
{
    title: "Qaysi qurilmalar ro'yxatidan ishlaydigan shaxsiy kompyuterni yaratish mumkin?          protsessor, operativ xotira, monitor, klaviatura;",
},
{
    title: " Tashqi xotiraga quyidagilar kirmaydi:          Qattiq disk;",
},
{
    title: "Monitorni  ..... boshqaruvi ostida ishlaydi:       videokartalar;",
},
{
    title: "Dastur  bu ....             ma'lumotlarni qayta ishlash vazifasini bajarish uchun kompyuter bajarishi kerak bo'lgan harakatlar ketma-ketligining tavsifi;",
},
{
    title: "Yangi ma'lumotni ko'p marta yozib olish uchun mo'ljallangan kompakt disk ... deb nomlanadi:        CD-RW;",
},
{
    title: "Kompyuterning struktursi - bu:           tarkibiga riruvchi qismlarining tarkibini, tartibini va o'zaro munosabatlarining tamoyillarini belgilaydigan model;",
},
{
    title: "",
},
{
    title: "Mikroprotsessor ..... uchun  mo'ljallangan.          Kompyuterni boshqarish va ma'lumotlarni qayta ishlash;",
},
{
    title: "Muayyan boshqaruv signallarini ishlab chiqaradi va barcha bloklarga yuboradi  bu.....              boshqarish qurilmasi;",
},
{
    title: "DXQ quyidagilar uchun xizmat qiladi         doimiy dasturiy ma'lumotlarni saqlash uchun;",
},
{
    title: "Klaviatura qanday tugmalar guruhiga ega?          alfavit - raqamli, funktsional va boshqaruv;",
},
{
    title: "Siz qaysi turdagi printerlarni bilasiz?      matritsali, siyohli, lazerli;",
},
{
    title: "ShKning asosiy texnik vositalari:                tizimli blok, monitor, klaviatura, sichqoncha;",
},
{
    title: "Tizim blogiga nimalar kiradi?         qattiq va yumshoq magnit disklar, ona plata, CD-ROM;",
},
{
    title: "Mikroprotsessorga nimalar kiradi:         ALQ, MPP, BQ;",
},
{
    title: "Dasturiy ta'minot qanday uchta asosiy sinflarga bo'linadi?        tizimli, amaliy, dasturlash tizimlari;",
},
{
    title: "Operatsion tizim qayerda saqlanadi?            diskdagi tashqi xotirada;",
},
{
    title: "Tizim dasturiy ta'minoti quyidagilarga mo'ljallangan:         kompyuterni ishlatish va texnik xizmat ko'rsatish, hisoblash jarayonini boshqarish va tashkil etish uchun;",
},
{
    title: "Drayvlar nima uchun kerak?         yangi qurilmalarni kompyuterga ulash yoki mavjudlaridan nostandart foydalanish;",
},
{
    title: "Arxivlovchilar quyidagilarga ruxsat berishadi:           ma'lumotni zichroq yozish, shuningdek bir nechta fayllarning nusxalarini bitta arxiv fayliga birlashtirish;",
},
{
    title: "Hisoblash va axborot muammolarini hal qilish jarayonida axborotni avtomatik ravishda qayta ishlashga mo'ljallangan texnik vositalar majmui  bu......                     Elektron - hisoblash mashinasi;",
},
{
    title: "EHMning asosiy xarakteristikalariga ... kiradi:             Barcha variantlar to'g'ri;",
},
{
    title: "Kompyuterning ichki xotirasi ... ga bo'linadi:             tezkor va doimiy;",
},
{
    title: "To'g'ri  tarif (lar) ni ko'rsating:           Kirish qurilmasi - ma'lumotni odamdan mashinaga uzatish uchun mo'ljallangan;",
},
{
    title: "Mashina kodida qayd etilgan arifmetik, mantiqiy operatsiyalar va boshqarish operatsiyalarini bajarishga mas'ul bo'lgan qurilma ...              Protsessor;",
},
{
    title: "EHM ning apparat vositalari arxitekturasiga ... kiradi             Tizim tuzilishi, xotirani tashkil qilish, kiritish/chiqarishni tashkil etish, boshqarish tamoyillari;",
},
{
    title: "Axborotni qayta ishlashda bevosita ishtirok etadigan qurilmalar (protsessor, tezkor xotira qurilmasi) qolgan qurilmalarga bitta magistral - shina orqali ulanadi. Soz  nima haqida ?              Ochiq arhitektura  tamoyili;",
},
{
    title: "Mikroprotsessorning asosiy xarakteristikalariga ... kiradi?         Mikroprotsessor turi, mikroprotsessorning tezligi, mikroprotsessorning takt chastotasi, protsessorning  razryadliligi",
},
{
    title: "Operandalarda mantiqiy operatsiyalarni bajaradi, masalan, mantiqiy HAM, mantiqiy  YOKI,  tozalash, inversiya, turli siljishlar (o'ng, chap, arifmetik siljish, tsiklik siljish) ...? Soz nima haqida?      Mantiqiy buyruqlar;",
},
{
    title: "Registrlar maqsadi jihatidan quyidagilarga bolinadi ...?           Barcha variantlar to'g'ri;",
},
{
    title: "Turli xil ma'lumotlar to'plamlari bo'yicha bir xil ko'rsatmalar ketma-ketligini bajaradigan juda ko'p sonli o'xshash protsessorlardan iborat. Soz nima haqida?           Matritsali protsessor;",
},
{
    title: "Ma'lumotlar uchun mo'ljallangan shinalar bu .             Kompyuter protsessori va tashqi qurilmalar o'rtasida ma'lumotlarni uzatish uchun ishlatiladigan barcha shinalar ;",
},
{
    title: "Axborot bilan ishlashga qodir bo'lgan va bitta foydalanuvchining mustaqil ishlashi uchun mo'ljallangan o'zaro bog'liq bo'lgan apparatning murakkab tizimi bu ...?                 Shaxsiy kompyuter",
},
{
    title: "Kompyuter tizim blogining ichki qurilmalari...?            Barcha variantlar to'g'ri;",
},
{
    title: "Kompyuterning tashqi xotirasi ... ga bo'linadi?          Tashqi xotira qurilmalari va ularning tashuvchilari;",
},
{
    title: "EHM arxitekturasi dasturiy taminotiga ... kiradi:               Operatsion tizimlar, dasturlash tizimlari, dasturiy ta'minot;",
},
{
    title: "Summator ....             kirish impulslari sonini hisoblaydigan qurilma;",
},
{
    title: "Buyruqlarning ketma-ket bajarilishining odatiy tartibini o'zgartirish uchun mo'ljallangan.            O'tish buyruqlari",
},
{
    title: "? mantiqiy elementi .... operatsiyani bajaradi:                   mantiqiy ko'paytirish;  ",
},
{
    title: "Axborotni qabul qilish va berish turiga ko'ra registrlar  qanday turlarga ajratiladi?          Siljish registrlari, parallel registrlar;",
},
{
    title: "Vektorli protsessor ...?                 Ma'lumotlar massivi ustida operatsiyalarni parallel bajarilishini ta'minlaydi;",
},
{
    title: "Kompyuterning asosiy elektron qismlarini o'z ichiga olgan eng muhim qismi...?              Tizim platasi;",
},
{
    title: "Kiritish / chiqaris shinasi:            Protsessorga periferik qurilmalar bilan aloqa o'rnatishga imkon beradi",
},
{
    title: "Qisqartirilgan ko'rsatmalar to'plami bilan ishlaydigan protsessor:              RISC",
},
{
    title: "600 onlik soni Ikkilik sanoq sistemasida:                1001011000;",
},

]