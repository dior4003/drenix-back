const express = require("express");
const path = require("path");
const app = express();
app.use("/static", express.static(path.join(__dirname, "public")));

const uzb = {
  logo: "logo.jpg",
  header: [
    {
      id: 0,
      title: "Bosh sahifa",
      links: "/",
      icon: "bi bi-chevron-down",
    },
    {
      id: 1,
      title: "Biz haqimizda",
      link: "#about",
      icon: "bi bi-chevron-down",
    },
    {
      id: 2,
      title: "Sahifalar",
      link: "#pages",
      icon: "bi bi-chevron-down",
    },
    {
      id: 3,
      title: "Biz bilan aloqa",
      link: "#contact",
      icon: "bi bi-chevron-down",
    },
  ],
  section1: {
    title1: "Kreativlik qobiliyatiga ega zamonaviy IT mutaxassislar jamoasi",
    title2: "BIZ BILAN ORZULAR RO'YOBGA CHIQADI!",
    title3:
      "SIZNING MUVAFFAQIYATINGIZNI TA'MINLOVCHI HAQIQIYT IT DARSLARINI VA XIZMATLARIMIZNI TAQDIM ETAMIZ",
    button: "Ko'proq o'qing",
  },
  section2: [
    {
      img: "icon@15x.png",
      title: "Standart",
      sub_title:
        "Odatdagi, ko'pchilikka ma'qul bo'ladigan ta'lim  turi. Bunda darslar kunora  haftada 3 kun 2 soatdan bo'ladi",
    },
    {
      img: "kTfOtgQDzjre.png",
      title: "Intensiv",
      sub_title:
        " Marraga tezda yetib borishni xohlovchilar uchun. Bu ta'lim turida darslar haftada 6 kun 4 soatdan bo'ladi. Bundan tashqari, siz darslar tezligi va o'quv kunlarini o'zingiz belgilashingiz mumkin bo'ladi",
    },
    {
      img: "2img@15x.png",
      title: "Online",
      sub_title:
        "Tig'iz ish va o'qish garfigiga eg bo'lgan, qatnash noqulay bo'lgan o'quvchilar uchun istalgan vaqtda istalgan joydan turib bizning darslarimizga ishtirok etishlari va IT ni o'rganishlari uchun imkon beradigan ta'lim shakli. Bunda siz o'zingiz xohlagan  standart yoki intensiv ta'lim turidan birini tanlashingiz mumkin bo'ladi",
    },
    {
      img: "4icon@15x.png",
      title: "Offline",
      sub_title:
        "Ushbu ta'lim shakli bizning quvnoq kayfiyat muhitimizda biz bilan birga bo'lishingiz, ko'proq vaqtingizni ustozlar va mentorlar bilan yuzma-yuz o'tkazishingiz va ta'limning har qanday standart yoki intensiv turini Drenix academy o'quv markazida o'qishingiz imkonini beradi",
    },
  ],
  section3: {
    title1: "BIZ KIMMIZ?",
    title2:
      "Biz dasturlash va dizaynga qiziqadigan har qanday kishini ushbu sohalar bo'yicha o'qitamiz ",
    title3:
      "Bizning bitiruvchilarimiz o'zlarini ish bilan ta'minlashlariga ko'maklashamiz. Shuningdek, biz turli yo'nalishdagi bizneslarni raqamlashtirishda, marketingni yanada rivojlantirishda yordam berishga ixtisoslashganmiz.",
    derektor: {
      name: "Durbek Rixsiboyev",
      job: "Bosh direktor",
      company: "Drenix",
      img: "derektor.jpg",
    },
    adjus: [
      { title: "Yangicha va zamonaviy ta'lim" },
      { title: "Nufuzli tashkilotlarda ishlash" },
      { title: "Biznesdagi muammolar yechimi" },
      { title: "Ishonchli servis kafolati" },
    ],
  },
  section4: {
    year: 25,
    title1: "Yillik tajriba",
    title2:
      "Biz sizning muvaffaqiyatingizga va'da beradigan IT darslarini va xizmatlarni olib boramiz",
    title3:
      "Bizning markaz bitiruvchilari to'laqonli o'z kasbining mutaxassisi sifatida ushbu ko'nikmalarni egallashadi",
    skills: [
      { text: "Frontend", value: 90 },
      { text: "Backend", value: 90 },
      { text: "Javascript", value: 90 },
      { text: "Grafik dizayn", value: 90 },
      { text: "Web dizayn", value: 90 },
      { text: "React.js", value: 90 },
      { text: "React Native", value: 90 },
      { text: "Kompyuter savodxonligi", value: 90 },
    ],
    courses: [
      {
        text: "Frontend",
        img: "x0LELqjTK6FC.jpg",
      },
      {
        text: "Backend",
        img: "2AMRb2Ws4zIY.jpeg",
      },
      {
        text: "JavaScript",
        img: "OfgD7rh4ZvN2.jpeg",
      },
      {
        text: "Grafik Dizayn",
        img: "x9bZh1JVxPOe.jpeg",
      },
    ],
    fullSection: [
      {
        value: 10,
        icon: "+",
        title: "Tugallagan loyihalar",
        img: "bnLecUweEITo.png",
      },
      {
        value: 30,
        icon: "+",
        title: "Mijozlar",
        img: "uQWkoarAw2Ap.png",
      },
      {
        value: 99,
        icon: "%",
        title: "Web sayt tahlili",
        img: "X2HOAP5USAjF.png",
      },
      {
        value: 50,
        icon: "+",
        title: "Mijozlar fikri",
        img: "RydMvaGPfTrW.png",
      },
    ],
  },
  sectoin5: {
    title1: "Dars jarayonidan lavhalar",
    title2: "Bizda real loyihalarga asoslangan praktikum darslar o'tiladi",
    button: "Darslar haqida ko'proq",
    corusel: [
      {
        title: "Analytic Solutions",
        img: "lavha1.jpg",
        btn: "Servises",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
      {
        title: "Product Design",
        img: "lavha2.jpg",
        btn: "Technology",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
      {
        title: "Aeroland Protocol",
        img: "lavha3",
        btn: "Cyber Secuti",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
    ],
  },
  seaction6: {
    title1: "NEGA AYNAN BIZ",
    title2:
      "SIZNING MUVAFFAQIYATINGIZNI TA'MINLOVCHI HAQIQIYT IT DARSLARINI VA XIZMATLARIMIZNI TAQDIM ETAMIZ",
    items: [
      {
        title: "Ekspertlar jamoasi",
        decr: "Kreativlik qobiliyatiga ega zamonaviy IT mutaxassislar",
        icon: "gRzLx7vhLY9k.png",
      },
      {
        title: "Sifat nazorati",
        decr: "Darslar o'z vaqtida va mukammal darajada o'tishi ta'minlanadi.",
        icon: "faTD9UvvWOUP.png",
      },
      {
        title: "Integratsiya",
        decr: "Bizning o'quv markazimiz o'quvchilari o'qish vaqti davomida bizning hamkor tashkilotlar xizmatidan imtiyozli tarzda foydalana olish imkoniyatiga ega bo'ladi",
        icon: "qVn78YuXyXDo.png",
      },
      {
        title: "Kafolatli bandlik",
        decr: "O'quvchilar ayni bir kursni tamomlaganlaridan keyin ularni O'zbekistondagi korxonalarga ishga joylashtirishga ko'maklashish",
        icon: "RydMvaGPfTrW.png",
      },
    ],
  },
  sectoin7: {
    title1: "Bizning jamoamiz",
    title2:
      "IT texnologiyalari va texnik sohalari bo'yicha professional xodimlar",
    team: [
      {
        name: "Durbek Rixsiboyev",
        spes: "Bosh Derektor",
        img: "derektor.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "Mirali Norqulov",
        spes: "",
        img: "mirali.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "Akmal Yuldashev",
        spes: "CEO & Founder",
        img: "akmal.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      // {
      //   name: "Firdavs Sharopov",
      //   spes: "CEO & Founder",
      //   img: "fir",
      //   facebook: {
      //     link: "#f",
      //     icon: "fa-brands fa-facebook",
      //   },
      //   twitter: {
      //     link: "",
      //     icon: "fa-brands fa-twitter",
      //   },
      //   youtube: {
      //     link: "",
      //     icon: "fa-brands fa-youtube",
      //   },
      // },
      {
        name: "Diyorbek Yuldashov",
        spes: "Full Stack Dasturchi",
        img: "",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "Bobur Obidjonov",
        spes: "CEO & Founder",
        img: "bobur.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
    ],
  },
  section8: {
    title1: "Nega aynan biz",
    title2:
      "30+ ortiq mijozlar bizning xizmatimiz va IT bilan bog'liq yechimimizdan minnatdor",
    corusel: [
      {
        first_title: "Right Agency",
        icon: "img1",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img2",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img3",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img1",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img2",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img3",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
    ],
  },
  section10: {
    title1: "Bizning omadli mijozlarimizdan biriga aylaning",
    corusel: [
      { img: "hamhor1.jpg" },
      { img: "hamhor2.jpg" },
      { img: "hamhor3.jpg" },
      { img: "hamhor4.jpg" },
      { img: "hamhor5.jpg" },
    ],
    contact: {
      title1: "Biz bilan tezkor aloqa",
      phone: "+998999999999",
      intName: ["Telefon raqamingiz", "Telegram foydalanuvchi nomi"],
      label: "Sizning kantaktingiz",
      place1: "F.I.O",
      place2: "Takliflar va talablar",
      btn: "Jo'natish",
    },
  },
  footer: {
    useLink: [
      {
        logo: {
          url: logo,
          type: "logo.jpg",
        },
        links: [
          {
            icon: "fa-regular fa-phone",
            title: "+91 458 654 528",
          },
          {
            icon: "fa-regular fa-envelope-open",
            title: "info@example.com",
          },
          {
            icon: "fa-regular fa-location-dot",
            title: "60 East 65th Street, NY",
          },
        ],
      },
      {
        logo: {
          url: "Foydali havolalar",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Foydalanish shartlari",
          },
          {
            url: "",
            title: "Biz haqimizda",
          },
          {
            url: "",
            title: "To'lov usullari",
          },
          {
            url: "",
            title: "Maxfiylik siyosati",
          },
        ],
      },
      {
        logo: {
          url: "Bizning xizmatlarimiz",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Raqamli boshqaruv",
          },
          {
            url: "",
            title: "Dasturlash kurslari",
          },
          {
            url: "",
            title: "SMM kurslari",
          },
          {
            url: "",
            title: "Marketing xizmatlari",
          },
        ],
      },
      {
        logo: {
          url: "Qo'llab-quvvatlash",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Hujjatlar",
          },
          {
            url: "",
            title: "Qo'llab-quvatlash",
          },
          {
            url: "",
            title: "Ko'p so'raladigan savollar",
          },
          {
            url: "",
            title: "Yuklab olish",
          },
        ],
      },
    ],
  },
};
const ru = {
  logo: "logo.jpg",
  header: [
    {
      id: 0,
      title: "Главный",
      links: "/",
      icon: "bi bi-chevron-down",
    },
    {
      id: 1,
      title: "О нас",
      link: "#about",
      icon: "bi bi-chevron-down",
    },
    {
      id: 2,
      title: "Страницы",
      link: "#pages",
      icon: "bi bi-chevron-down",
    },
    {
      id: 3,
      title: "Контакты",
      link: "#contact",
      icon: "bi bi-chevron-down",
    },
  ],
  section1: {
    title1: "Команда современных ИТ-специалистов с творческими способностями",
    title2: "МЕЧТЫ СБЫВАЮТСЯ С НАМИ!",
    title3:
      "МЫ ПРЕДОСТАВЛЯЕМ РЕАЛЬНЫЕ УРОКИ И УСЛУГИ ДЛЯ ПОДДЕРЖКИ ВАШЕГО УСПЕХА",
    button: "УЗНАТЬ БОЛЬШЕ",
  },
  section2: [
    {
      img: "icon@15x.png",
      title: "Стандарт",
      sub_title:
        "обычный тип обучения, приемлемый для большинства. При этом занятия внеклассные – 3 дня в неделю по 2 часа",
    },
    {
      img: "kTfOtgQDzjre.png",
      title: "Интенсивный",
      sub_title:
        "для тех, кто хочет быстро добиться результата. В данном виде обучения занятия проходят 6 дней в неделю по 4 часа. Кроме того, вы сможете самостоятельно устанавливать интенсивность уроков и учебных дней",
    },
    {
      img: "2img@15x.png",
      title: "Онлайн",
      sub_title:
        "это форма обучения, которая позволяет учащимся с плотным графиком работы и учебы, которым неудобно посещать занятия, участвовать в наших занятиях и изучать IT в любом месте и в любое время. В этом случае вы сможете выбрать один из желаемых видов обучения – стандартное или интенсивное",
    },
    {
      img: "4icon@15x.png",
      title: "Оффлайн",
      sub_title:
        "эта форма обучения позволяет оставаться с нами в нашей веселой атмосфере, проводить больше времени лицом к лицу с преподавателями и наставниками, а также пройти любой вид обучения - стандартный или интенсивный - в учебном центре Drenix academy",
    },
  ],
  section3: {
    title1: "КТО МЫ?",
    title2:
      "Мы обучаем всех, кто интересуется такими областями, как программирование и дизайн и….",
    title3:
      "Также мы специализируемся на цифровизации бизнеса в различных направлениях и помогаем им в дальнейшем развитии маркетинга.",
    derektor: {
      name: "Дурбек Рихсибоев",
      job: "Главный директор",
      company: "Drenix",
      img: "derektor.jpg",
    },
    adjus: [
      { title: " Новое и современное образование" },
      { title: " Работа в авторитетных организациях" },
      { title: "Решение бизнес-задач" },
      { title: "Гарантия надежного обслуживания" },
    ],
  },
  section4: {
    year: 25,
    title1: "Опыт лет",
    title2: "Мы предлагаем IT-курсы и услуги, которые гарантируют вам успех",
    title3:
      "Выпускники нашего центра приобретают перечисленные навыки как полноценные специалисты своей профессии",
    skills: [
      { text: "Frontend", value: 90 },
      { text: "Backend", value: 90 },
      { text: "Javascript", value: 90 },
      { text: "Графический дизайн", value: 90 },
      { text: "Веб-дизайн", value: 90 },
      { text: "React.js", value: 90 },
      { text: "React Native", value: 90 },
      { text: "Компьютерная грамотность", value: 90 },
    ],
    courses: [
      {
        text: "Frontend",
        img: "x0LELqjTK6FC.jpg",
      },
      {
        text: "Backend",
        img: "2AMRb2Ws4zIY.jpeg",
      },
      {
        text: "JavaScript",
        img: "OfgD7rh4ZvN2.jpeg",
      },
      {
        text: "Графический дизайн",
        img: "x9bZh1JVxPOe.jpeg",
      },
    ],
    fullSection: [
      {
        value: 10,
        icon: "+",
        title: "реализованных проектов",
        img: "bnLecUweEITo.png",
      },
      {
        value: 30,
        icon: "+",
        title: "клиентов",
        img: "uQWkoarAw2Ap.png",
      },
      {
        value: 99,
        icon: "%",
        title: "анализ сайта",
        img: "X2HOAP5USAjF.png",
      },
      {
        value: 50,
        icon: "+",
        title: "отзывов клиентов",
        img: "RydMvaGPfTrW.png",
      },
    ],
  },
  sectoin5: {
    title1: "Dars jarayonidan lavhalar",
    title2: "Bizda real loyihalarga asoslangan praktikum darslar o'tiladi",
    button: "Darslar haqida ko'proq",
    corusel: [
      {
        title: "Analytic Solutions",
        img: "lavha1.jpg",
        btn: "Servises",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
      {
        title: "Product Design",
        img: "lavha2.jpg",
        btn: "Technology",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
      {
        title: "Aeroland Protocol",
        img: "lavha3",
        btn: "Cyber Secuti",
        decr: `Accelerate innovation with world-class
                    tech teams We'll match you to an entire remote
                    team of incredible freelance
                    talent for all your software development needs..`,
      },
    ],
  },
  seaction6: {
    title1: "ПОЧЕМУ МЫ?",
    title2:
      "МЫ ПРЕДОСТАВЛЯЕМ КАЧЕСТВЕННЫЕ УРОКИ И УСЛУГИ, КОТОРЫЕ ГАРАНТИРУЮТ ВАМ УСПЕХ",
    items: [
      {
        title: "Команда экспертов",
        decr: "Современные творческие IT-специалисты",
        icon: "gRzLx7vhLY9k.png",
      },
      {
        title: "Контроль качества",
        decr: "Гарантируется, что уроки будут проводиться вовремя и на идеальном уровне.",
        icon: "faTD9UvvWOUP.png",
      },
      {
        title: "Интеграция",
        decr: "Студенты нашего образовательного центра будут иметь возможность пользоваться услугами наших организаций-партнеров на льготных условиях во время обучения. Например, клиника «Себзор Мед Даво», маркетинговая команда « Drenix Marketing»",
        icon: "qVn78YuXyXDo.png",
      },
      {
        title: "Гарантированное трудоустройство",
        decr: "Образовательный центр «Drenix academy» берет на себя ответственность за трудоустройство студентов на предприятия Узбекистана, предоставление им работы в качестве фрилансеров и даже найм их в собственную маркетинговую компанию после прохождения курса.",
        icon: "RydMvaGPfTrW.png",
      },
    ],
  },
  sectoin7: {
    title1: "Наша команда",
    title2:
      "Профессиональный персонал в области ИТ-технологий и технических областей",
    team: [
      {
        name: "Дурбек Риксибоев",
        spes: "Главный директор",
        img: "derektor.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "Мирали Норкулов",
        spes: "",
        img: "mirali.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "Акмаль Юлдашев",
        spes: "CEO & Founder",
        img: "akmal.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      // {
      //   name: "Firdavs Sharopov",
      //   spes: "CEO & Founder",
      //   img: "fir",
      //   facebook: {
      //     link: "#f",
      //     icon: "fa-brands fa-facebook",
      //   },
      //   twitter: {
      //     link: "",
      //     icon: "fa-brands fa-twitter",
      //   },
      //   youtube: {
      //     link: "",
      //     icon: "fa-brands fa-youtube",
      //   },
      // },
      {
        name: "Диёрбек Юлдашов",
        spes: "Full Stack Dasturchi",
        img: "",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
      {
        name: "МирзоБабур Обиджонов",
        spes: "CEO & Founder",
        img: "bobur.jpg",
        facebook: {
          link: "#f",
          icon: "fa-brands fa-facebook",
        },
        twitter: {
          link: "",
          icon: "fa-brands fa-twitter",
        },
        youtube: {
          link: "",
          icon: "fa-brands fa-youtube",
        },
      },
    ],
  },
  section8: {
    title1: "ПОЧЕМУ МЫ?",
    title2: "Более 30+ клиентов довольны нашим сервисом и ИТ-решениями",
    corusel: [
      {
        first_title: "Right Agency",
        icon: "img1",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img2",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img3",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img1",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img2",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
      {
        first_title: "Right Agency",
        icon: "img3",
        title:
          "I believe in lifelong learning and they are a great place to learn from experts.I have learned a lot and recommend it",
        name: "John Dowson",
        spec: "Developer",
      },
    ],
  },
  section10: {
    title1: "Станьте одним из наших счастливых клиентов",
    corusel: [
      { img: "hamhor1.jpg" },
      { img: "hamhor2.jpg" },
      { img: "hamhor3.jpg" },
      { img: "hamhor4.jpg" },
      { img: "hamhor5.jpg" },
    ],
    contact: {
      title1: "Быстрый контакт с нами",
      phone: "+998999999999",
      intName: ["Ваш номер телефона", "Имя пользователя Telegram"],
      label: "Ваш контакт",
      place1: "Ф.И.О.",
      place2: "Предложения и требования",
      btn: "Отправить",
    },
  },
  footer: {
    useLink: [
      {
        logo: {
          url: logo,
          type: "logo.jpg",
        },
        links: [
          {
            icon: "fa-regular fa-phone",
            title: "+91 458 654 528",
          },
          {
            icon: "fa-regular fa-envelope-open",
            title: "info@example.com",
          },
          {
            icon: "fa-regular fa-location-dot",
            title: "60 East 65th Street, NY",
          },
        ],
      },
      {
        logo: {
          url: "Полезные ссылки",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Условия",
          },
          {
            url: "",
            title: "О компании",
          },
          {
            url: "",
            title: "Платежный шлюз",
          },
          {
            url: "",
            title: "Политика конфиденциальности",
          },
        ],
      },
      {
        logo: {
          url: "Наши услуги",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Безопасность данных",
          },
          {
            url: "",
            title: "Управление ИТ",
          },
          {
            url: "",
            title: "SMM курсы",
          },
          {
            url: "",
            title: "Маркетинговые услуги",
          },
        ],
      },
      {
        logo: {
          url: "Поддерживать",
          type: "text",
        },
        links: [
          {
            url: "",
            title: "Документация",
          },
          {
            url: "",
            title: "Поддерживать",
          },
          {
            url: "",
            title: "Часто задаваемые вопросы",
          },
          {
            url: "",
            title: "Скачать",
          },
        ],
      },
    ],
  },
};
module.exports = { uzb ,ru };
