export type Lang = "uz" | "ru" | "en";

export const translations = {
  uz: {
    nav: {
      products: "Mahsulotlar",
      features: "Imkoniyatlar",
      solutions: "Yechimlar",
      team: "Jamoa",
      pricing: "Narxlar",
      about: "Haqimizda",
      blog: "Blog",
      help: "Yordam",
      contact: "Aloqa",
      getStarted: "Boshlash",
    },
    hero: {
      badge: "280,000+ foydalanuvchi ishonadi · O'zbekiston #1",
      title1: "Prezentatsiya, hujjat, insho —",
      title2: "30 soniyada tayyor",
      subtitle:
        "Mavzu yozing → AI professional kontent yaratadi → PPTX, PDF, DOCX yuklab oling. O'zbek, Rus, Ingliz tillarida.",
      cta1: "Bepul Sinab Ko'rish",
      cta2: "Mahsulotlarni Ko'rish",
      trustedBy: "foydalanuvchi ishonadi",
      trustA: "Kredit karta kerak emas",
      trustB: "30 soniyada natija",
      trustC: "60+ shablon",
    },
    stats: {
      users: "Faol Foydalanuvchi",
      subscribers: "Telegram Obunachi",
      products: "AI Mahsulot",
      templates: "Tayyor Shablon",
    },
    problem: {
      badge: "Tanish holat?",
      title: "Kontent yaratish vaqt oladi. Juda ko'p vaqt.",
      items: [
        { icon: "⏱", text: "Bitta prezentatsiya — 3-5 soat. Har safar." },
        { icon: "😓", text: "Google Slides, PowerPoint, Word — turli dasturlar, turli urinishlar." },
        { icon: "🌐", text: "O'zbek tilida professional AI vosita yo'q edi. Hozirgacha." },
        { icon: "💸", text: "Xorijiy AI xizmatlar qimmat. Dollar evaziga." },
      ],
      solution: "Glowledge buni hal qildi →",
    },
    products: {
      title: "5 ta kuchli mahsulot",
      subtitle:
        "Har bir vazifa uchun to'g'ri vosita — bitta platformada barcha kontent ehtiyojlaringiz yopiladi.",
    },
    features: {
      title: "Boshqa AI vositalardan farqi — aniq va o'lchangan",
      subtitle:
        "Faqat qulay emas — tezroq, arzonroq va o'zbek tiliga chinakam moslashgan.",
      items: [
        {
          title: "Soatlar emas — soniyalar",
          desc: "O'rtacha prezentatsiya yaratish vaqti: ilgari 3-5 soat, Glowledge bilan 30 soniya. Vaqtingiz — eng qimmat resursingiz.",
        },
        {
          title: "O'zbek tili — birinchi o'rinda",
          desc: "Boshqa AI vositalar o'zbek tilini ikkinchi darajali qo'llab-quvvatlaydi. Biz uchun O'zbek tili — asosiy. Grammatika, uslub, kontekst to'g'ri.",
        },
        {
          title: "30 slayd = 3,000 so'm",
          desc: "ChatGPT Plus — $20/oy (260,000+ so'm). Glowledge Pro — 3,000 so'm/30 slayd. Sifat xalqaro, narx mahalliy.",
        },
        {
          title: "PPTX · PDF · DOCX — bir yerda",
          desc: "Alohida dasturlar o'rnatish shart emas. Istalgan formatda, darhol yuklab oling.",
        },
        {
          title: "Gemini + GPT-4 + Claude",
          desc: "Dunyoning 3 ta eng yaxshi AI modeli bilan ishlaydi. Eng aniq, eng professional natija uchun.",
        },
        {
          title: "60+ professional shablon",
          desc: "Talaba uchun akademik, biznes uchun korporativ, dizayner uchun kreativ — har soha uchun tayyor shablonlar.",
        },
      ],
    },
    howItWorks: {
      title: "3 qadam. 30 soniya. Tayyor fayl.",
      subtitle: "Hech qanday maxsus bilim yoki ko'nikma talab qilinmaydi.",
      steps: [
        {
          step: "01",
          title: "Mavzu yozing",
          desc: "Kurs ishi mavzusi, taqdimot sarlavhasi yoki faqat kalit so'z — AI qolganini tushunadi. Til tanlang: UZ, RU yoki EN.",
          label: "⏱ 5 soniya",
        },
        {
          step: "02",
          title: "AI ishlaydi",
          desc: "Gemini, GPT-4 yoki Claude mavzuni tahlil qiladi, tuzilma yaratadi, kontent yozadi va professional dizayn qo'llaydi.",
          label: "🧠 10-25 soniya",
        },
        {
          step: "03",
          title: "Yuklab oling",
          desc: "PPTX, PDF yoki DOCX. Tayyor. Tahrirlash imkoni bor. Telegram yoki brauzerda ishlaydi.",
          label: "✅ Darhol tayyor",
        },
      ],
    },
    pricing: {
      title: "Sodda va oshkora narx siyosati",
      subtitle: "Yashirin to'lovlar yo'q. Istalgan vaqt bekor qilish mumkin.",
      popular: "Mashhur",
      plans: [
        {
          name: "Bepul",
          price: "0",
          period: "so'm",
          desc: "Har oy bepul sinab ko'ring",
          features: [
            "5 ta prezentatsiya/oy",
            "10 ta hujjat/oy",
            "Asosiy shablonlar",
            "PDF eksport",
          ],
          cta: "Bepul Boshlash",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "3,000",
          period: "30 slayd",
          desc: "Professional kontent uchun",
          features: [
            "Cheksiz yaratish",
            "60+ premium shablon",
            "PPTX + PDF eksport",
            "Rasmlar va grafiklar",
            "Telegram bot orqali",
            "Ustuvor yordam",
          ],
          cta: "Hoziroq Boshlash →",
          highlighted: true,
          note: "≈ 1 ta choy narxi — 30 ta professional slayd",
        },
        {
          name: "Enterprise",
          price: "Aloqa",
          period: "qiling",
          desc: "Katta tashkilotlar uchun",
          features: [
            "Hamma Pro imkoniyatlar",
            "API integratsiya",
            "Maxsus shablonlar",
            "Dedicated server",
            "24/7 qo'llab-quvvatlash",
          ],
          cta: "Biz bilan Bog'laning",
          highlighted: false,
        },
      ],
    },
    team: {
      title: "Jamoa",
      subtitle: "Glowledge'ni yaratuvchi iste'dodli mutaxassislar",
    },
    testimonials: {
      title: "Foydalanuvchilar Nima Deydi?",
      subtitle: "Minglab foydalanuvchilarning ishonchini qozonganmiz",
    },
    cta: {
      title: "Bugun birinchi prezentatsiyangizni yarating",
      subtitle:
        "Ro'yxatdan o'tish — 30 soniya. Birinchi 5 ta prezentatsiya — bepul. Kredit karta talab qilinmaydi.",
      button: "Bepul Boshlash — hoziroq →",
      secondary: "AI Slide Bot'ni sinab ko'rish",
      note: "280,000+ foydalanuvchiga qo'shiling",
    },
    footer: {
      tagline: "O'zbekistonning eng aqlli AI platforma ekotizimi.",
      products: "Mahsulotlar",
      company: "Kompaniya",
      social: "Ijtimoiy Tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    nav: {
      products: "Продукты",
      features: "Возможности",
      solutions: "Решения",
      team: "Команда",
      pricing: "Цены",
      about: "О нас",
      blog: "Блог",
      help: "Помощь",
      contact: "Контакт",
      getStarted: "Начать",
    },
    hero: {
      badge: "280 000+ пользователей доверяют · №1 в Узбекистане",
      title1: "Презентация, документ, эссе —",
      title2: "готово за 30 секунд",
      subtitle:
        "Введите тему → ИИ создаёт профессиональный контент → Скачайте PPTX, PDF или DOCX. На узбекском, русском, английском.",
      cta1: "Попробовать Бесплатно",
      cta2: "Смотреть Продукты",
      trustedBy: "пользователей доверяют",
      trustA: "Без кредитной карты",
      trustB: "Результат за 30 секунд",
      trustC: "60+ шаблонов",
    },
    stats: {
      users: "Активных Пользователей",
      subscribers: "Подписчиков Telegram",
      products: "AI Продуктов",
      templates: "Готовых Шаблонов",
    },
    problem: {
      badge: "Узнаёте себя?",
      title: "Создание контента отнимает время. Слишком много.",
      items: [
        { icon: "⏱", text: "Одна презентация — 3-5 часов. Каждый раз." },
        { icon: "😓", text: "Google Slides, PowerPoint, Word — разные программы, разные попытки." },
        { icon: "🌐", text: "Профессионального AI на узбекском не было. До сих пор." },
        { icon: "💸", text: "Зарубежные AI сервисы дорогие. В долларах." },
      ],
      solution: "Glowledge решил это →",
    },
    products: {
      title: "5 мощных продуктов",
      subtitle:
        "Правильный инструмент для каждой задачи — все потребности в контенте закрыты в одной платформе.",
    },
    features: {
      title: "Отличие от других AI — измеримое и конкретное",
      subtitle:
        "Не просто удобно — быстрее, дешевле и по-настоящему адаптировано для узбекоязычных.",
      items: [
        {
          title: "Не часы — секунды",
          desc: "Среднее время создания презентации: раньше 3-5 часов, с Glowledge — 30 секунд. Ваше время — самый ценный ресурс.",
        },
        {
          title: "Узбекский язык — на первом месте",
          desc: "Другие AI инструменты поддерживают узбекский формально. Для нас узбекский — основной. Грамматика, стиль, контекст — верные.",
        },
        {
          title: "30 слайдов = 3 000 сум",
          desc: "ChatGPT Plus — $20/мес (260 000+ сум). Glowledge Pro — 3 000 сум/30 слайдов. Качество мировое, цена местная.",
        },
        {
          title: "PPTX · PDF · DOCX — в одном месте",
          desc: "Не нужно устанавливать разные программы. Скачайте в любом формате сразу.",
        },
        {
          title: "Gemini + GPT-4 + Claude",
          desc: "Работает на 3 лучших AI моделях мира. Для самого точного и профессионального результата.",
        },
        {
          title: "60+ профессиональных шаблонов",
          desc: "Академические для студентов, корпоративные для бизнеса, креативные для дизайнеров — шаблоны для каждой сферы.",
        },
      ],
    },
    howItWorks: {
      title: "3 шага. 30 секунд. Готовый файл.",
      subtitle: "Специальных знаний или навыков не требуется.",
      steps: [
        {
          step: "01",
          title: "Введите тему",
          desc: "Тема курсовой, заголовок презентации или просто ключевое слово — ИИ поймёт остальное. Выберите язык: UZ, RU или EN.",
          label: "⏱ 5 секунд",
        },
        {
          step: "02",
          title: "ИИ работает",
          desc: "Gemini, GPT-4 или Claude анализирует тему, создаёт структуру, пишет контент и применяет профессиональный дизайн.",
          label: "🧠 10-25 секунд",
        },
        {
          step: "03",
          title: "Скачайте",
          desc: "PPTX, PDF или DOCX. Готово. Можно редактировать. Работает в Telegram или браузере.",
          label: "✅ Сразу готово",
        },
      ],
    },
    pricing: {
      title: "Прозрачная и простая ценовая политика",
      subtitle: "Никаких скрытых платежей. Отмена в любой момент.",
      popular: "Популярный",
      plans: [
        {
          name: "Бесплатно",
          price: "0",
          period: "сум",
          desc: "Попробуйте бесплатно каждый месяц",
          features: [
            "5 презентаций/мес",
            "10 документов/мес",
            "Базовые шаблоны",
            "PDF экспорт",
          ],
          cta: "Начать Бесплатно",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "3,000",
          period: "30 слайдов",
          desc: "Для профессионального контента",
          features: [
            "Неограниченное создание",
            "60+ премиум шаблонов",
            "PPTX + PDF экспорт",
            "Изображения и диаграммы",
            "Через Telegram бот",
            "Приоритетная поддержка",
          ],
          cta: "Начать сейчас →",
          highlighted: true,
          note: "≈ Стоимость 1 чашки чая — 30 профессиональных слайдов",
        },
        {
          name: "Enterprise",
          price: "Свяжитесь",
          period: "с нами",
          desc: "Для крупных организаций",
          features: [
            "Все функции Pro",
            "API интеграция",
            "Кастомные шаблоны",
            "Выделенный сервер",
            "24/7 поддержка",
          ],
          cta: "Связаться с нами",
          highlighted: false,
        },
      ],
    },
    team: {
      title: "Команда",
      subtitle: "Талантливые специалисты, создающие Glowledge",
    },
    testimonials: {
      title: "Что Говорят Пользователи?",
      subtitle: "Завоевали доверие тысяч пользователей",
    },
    cta: {
      title: "Создайте первую презентацию уже сегодня",
      subtitle:
        "Регистрация — 30 секунд. Первые 5 презентаций — бесплатно. Кредитная карта не нужна.",
      button: "Начать Бесплатно — прямо сейчас →",
      secondary: "Попробовать AI Slide Bot",
      note: "Присоединитесь к 280 000+ пользователей",
    },
    footer: {
      tagline: "Умнейшая AI экосистема платформ Узбекистана.",
      products: "Продукты",
      company: "Компания",
      social: "Соцсети",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: {
      products: "Products",
      features: "Features",
      solutions: "Solutions",
      team: "Team",
      pricing: "Pricing",
      about: "About",
      blog: "Blog",
      help: "Help",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "280,000+ users trust us · Uzbekistan's #1",
      title1: "Presentations, documents, essays —",
      title2: "ready in 30 seconds",
      subtitle:
        "Enter a topic → AI creates professional content → Download PPTX, PDF or DOCX. In Uzbek, Russian, English.",
      cta1: "Try for Free",
      cta2: "View Products",
      trustedBy: "users trust us",
      trustA: "No credit card",
      trustB: "Result in 30 seconds",
      trustC: "60+ templates",
    },
    stats: {
      users: "Active Users",
      subscribers: "Telegram Subscribers",
      products: "AI Products",
      templates: "Ready Templates",
    },
    problem: {
      badge: "Sound familiar?",
      title: "Content creation takes time. Way too much time.",
      items: [
        { icon: "⏱", text: "One presentation — 3-5 hours. Every single time." },
        { icon: "😓", text: "Google Slides, PowerPoint, Word — different tools, multiple attempts." },
        { icon: "🌐", text: "No professional AI in Uzbek language. Until now." },
        { icon: "💸", text: "Foreign AI services are expensive. In dollars." },
      ],
      solution: "Glowledge solved this →",
    },
    products: {
      title: "5 powerful products",
      subtitle:
        "The right tool for every task — all your content needs covered in one platform.",
    },
    features: {
      title: "The difference from other AI tools — measured and concrete",
      subtitle:
        "Not just convenient — faster, cheaper and truly built for Uzbek speakers.",
      items: [
        {
          title: "Hours → Seconds",
          desc: "Average presentation creation time: before 3-5 hours, with Glowledge 30 seconds. Your time is your most valuable resource.",
        },
        {
          title: "Uzbek first, not as an afterthought",
          desc: "Other AI tools support Uzbek as a secondary language. For us it's primary. Grammar, style, context — all correct.",
        },
        {
          title: "30 slides = 3,000 UZS",
          desc: "ChatGPT Plus — $20/mo. Glowledge Pro — 3,000 UZS per 30 slides. World-class quality, local pricing.",
        },
        {
          title: "PPTX · PDF · DOCX — one place",
          desc: "No need to install different software. Download in any format, instantly.",
        },
        {
          title: "Gemini + GPT-4 + Claude",
          desc: "Powered by the world's 3 best AI models. For the most accurate, professional results.",
        },
        {
          title: "60+ professional templates",
          desc: "Academic for students, corporate for business, creative for designers — ready templates for every industry.",
        },
      ],
    },
    howItWorks: {
      title: "3 steps. 30 seconds. Ready file.",
      subtitle: "No special knowledge or skills required.",
      steps: [
        {
          step: "01",
          title: "Enter your topic",
          desc: "Coursework title, presentation headline or just a keyword — AI understands the rest. Choose language: UZ, RU or EN.",
          label: "⏱ 5 seconds",
        },
        {
          step: "02",
          title: "AI works",
          desc: "Gemini, GPT-4 or Claude analyzes the topic, builds the structure, writes content and applies professional design.",
          label: "🧠 10-25 seconds",
        },
        {
          step: "03",
          title: "Download",
          desc: "PPTX, PDF or DOCX. Done. Editable. Works in Telegram or browser.",
          label: "✅ Instantly ready",
        },
      ],
    },
    pricing: {
      title: "Transparent and simple pricing",
      subtitle: "No hidden fees. Cancel anytime.",
      popular: "Popular",
      plans: [
        {
          name: "Free",
          price: "0",
          period: "UZS",
          desc: "Try for free every month",
          features: [
            "5 presentations/month",
            "10 documents/month",
            "Basic templates",
            "PDF export",
          ],
          cta: "Start for Free",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "3,000",
          period: "30 slides",
          desc: "For professional content",
          features: [
            "Unlimited creation",
            "60+ premium templates",
            "PPTX + PDF export",
            "Images & diagrams",
            "Via Telegram bot",
            "Priority support",
          ],
          cta: "Start now →",
          highlighted: true,
          note: "≈ Price of 1 cup of tea — 30 professional slides",
        },
        {
          name: "Enterprise",
          price: "Contact",
          period: "us",
          desc: "For large organizations",
          features: [
            "All Pro features",
            "API integration",
            "Custom templates",
            "Dedicated server",
            "24/7 support",
          ],
          cta: "Contact Us",
          highlighted: false,
        },
      ],
    },
    team: {
      title: "Our Team",
      subtitle: "Talented specialists building Glowledge",
    },
    testimonials: {
      title: "What Users Say?",
      subtitle: "Trusted by thousands of users",
    },
    cta: {
      title: "Create your first presentation today",
      subtitle:
        "Sign up in 30 seconds. First 5 presentations free. No credit card required.",
      button: "Start for Free — right now →",
      secondary: "Try AI Slide Bot",
      note: "Join 280,000+ users",
    },
    footer: {
      tagline: "Uzbekistan's smartest AI platform ecosystem.",
      products: "Products",
      company: "Company",
      social: "Social",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.uz;
