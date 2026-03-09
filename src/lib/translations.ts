export type Language = "en" | "mn" | "ja";

export const translations = {
  en: {
    // Navbar
    nav: {
      region: "asia/mongolia",
      projects: "Projects",
      stack: "Stack",
      growth: "Growth",
      contact: "Contact",
      home: "Back to top",
      langLabel: "Language",
    },
    // Hero
    hero: {
      badge1: "Available for work",
      badge2: "Web App development",
      headline1: "Solving problem",
      headline2: "is my passion",
      description:
        "I am a final-year Computer Science student passionate about building modern web applications. Trilingual in English, Mongolian, and Japanese (N2).",
      cta1: "View My Work",
      cta2: "Get in Touch",
      availableLabel: "Available",
      availableValue: "Now",
    },
    // Projects
    projects: {
      heading: "Projects",
      otherHeading: "Other Projects",
      projects: [
        {
          title: "School Management Production System",
          description:
            "A comprehensive school management system with file upload capabilities, PDF-to-image conversion, and CI/CD pipeline integration. Deployed on AWS EC2 with Docker containerization.",
        },
        {
          title: "Gantt Chart Project Management",
          description:
            "Interactive project management tool with Gantt chart visualization. Built with React and TypeScript, featuring task grouping, real-time updates, and backend integration.",
        },
        {
          title: "Documentation & Planning Tool",
          description:
            "Collaborative documentation and planning application with Gantt functionality.",
        },
      ],
    },
    // TechStack
    techStack: {
      heading: "Tech Stack",
      frontend: "Frontend",
      devops: "DevOps",
      ctaTitle: "Always learning new technologies",
      ctaDesc: "I stay current with the latest frameworks and tools to deliver cutting-edge solutions.",
      ctaButton: "Let's Collaborate",
    },
    // Timeline
    timeline: {
      heading: "My Growth Journey",
      subtitle: "A timeline of my learning and professional development in tech.",
      ctaTitle: "What's Next?",
      ctaDesc: "I'm continuously learning and staying updated with the latest technologies. Always open to new challenges and opportunities to grow.",
      ctaButton: "Let's Work Together",
      items: [
        {
          date: "2021",
          title: "Started My Tech Journey",
          description:
            "Embarked on my programming journey by learning algorithms and C++ basics.",
        },
        {
          date: "2022",
          title: "Sharpened My Skills",
          description:
            "Deepened my technical expertise by developing multiple academic projects using Java and MySQL, focusing on database management and OOP principles.",
        },
        {
          date: "2023",
          title: "Turning Point",
          description:
            "Participated in NAPROCK (Procon) 2023. While the project faced challenges, the experience was a pivotal turning point that accelerated my growth in collaborative development.",
        },
        {
          date: "2024",
          title: "Found My Passion",
          description:
            "Started learning web development and instantly fell in love with turning ideas into real, working websites.",
        },
        {
          date: "2025",
          title: "Cloud and DevOps Focus",
          description:
            "Driven to understand systems beyond the frontend & backend, I started learning scalable architectures with AWS, implementing CI/CD pipelines using GitHub Actions, and deploying containerized applications for real-world, production environments.",
        },
        {
          date: "Future Goal",
          title: "Continuous Growth",
          description:
            "Committed to staying at the forefront of technology by exploring AI/ML. My focus is on leveraging modern tools with intention — understanding their capabilities, guiding them strategically, and using them to amplify productivity rather than replace critical thinking.",
        },
      ],
    },
    // Contact
    contact: {
      heading: "Let's Connect",
      subheading: "Get in Touch",
      description:
        "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Ulaanbaatar, Mongolia",
      socialLabel: "Social",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailInputLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      sentButton: "Message Sent!",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      github: "GitHub",
      email: "Email",
    },
  },

  mn: {
    // Navbar
    nav: {
      region: "ази/монгол",
      projects: "Төслүүд",
      stack: "Технологи",
      growth: "Өсөлт",
      contact: "Холбоо барих",
      home: "Дээш буцах",
      langLabel: "Хэл",
    },
    // Hero
    hero: {
      badge1: "Ажилд бэлэн",
      badge2: "Вэб апп хөгжүүлэлт",
      headline1: "Асуудал шийдвэрлэх",
      headline2: "бол миний хүсэл тэмүүлэл",
      description:
        "Би компьютерийн шинжлэх ухааны сүүлийн жилийн оюутан бөгөөд орчин үеийн вэб аппликейшн бүтээхэд их дуртай. Англи, Монгол, Япон хэлтэй (N2 түвшин).",
      cta1: "Миний ажлыг үзэх",
      cta2: "Холбогдох",
      availableLabel: "Бэлэн",
      availableValue: "Одоо",
    },
    // Projects
    projects: {
      heading: "Төслүүд",
      otherHeading: "Бусад Төслүүд",
      projects: [
        {
          title: "Сургуулийн Удирдлагын Систем",
          description:
            "Файл байршуулах, PDF-ийг зурагт хөрвүүлэх болон CI/CD pipeline-тай цогц сургуулийн удирдлагын систем. AWS EC2 дээр Docker ашиглан байрлуулсан.",
        },
        {
          title: "Гантт Диаграмтай Төсөл Удирдах Систем",
          description:
            "React болон TypeScript ашиглан бүтээсэн интерактив төсөл удирдах хэрэгсэл. Даалгавар бүлэглэх, цаг хугацааны шинэчлэлт болон бэкэнд холболттой.",
        },
        {
          title: "Баримт Бичиг & Төлөвлөлтийн Хэрэгсэл",
          description:
            "Гантт функционалтай хамтарсан баримт бичиг болон төлөвлөлтийн аппликейшн.",
        },
      ],
    },
    // TechStack
    techStack: {
      heading: "Технологийн Стек",
      frontend: "Фронтэнд",
      devops: "DevOps",
      ctaTitle: "Үргэлж шинэ технологи судалдаг",
      ctaDesc: "Орчин үеийн шийдлүүдийг санал болгохын тулд хамгийн сүүлийн үеийн фреймворк болон хэрэгслүүдийг байнга судалдаг.",
      ctaButton: "Хамтран ажиллацгааная",
    },
    // Timeline
    timeline: {
      heading: "Миний Хөгжлийн Замнал",
      subtitle: "Технологийн салбарт суралцах болон мэргэжлийн хөгжлийнхөө он дараалал.",
      ctaTitle: "Цаашид юу хийх вэ?",
      ctaDesc: "Би тасралтгүй суралцаж, хамгийн сүүлийн үеийн технологиудыг дагаж байдаг. Шинэ сорилт болон өсөх боломжуудад үргэлж нээлттэй.",
      ctaButton: "Хамтран ажиллацгааная",
      items: [
        {
          date: "2021",
          title: "Технологийн Аялал Эхлэв",
          description:
            "Алгоритм болон C++ үндэс суурийг судалснаар програмчлалын замналаа эхлүүлсэн.",
        },
        {
          date: "2022",
          title: "Ур Чадвараа Сайжруулав",
          description:
            "Java болон MySQL ашиглан олон сургалтын төсөл хийснээр мэдээллийн сан болон ООП зарчмуудад анхаарлаа хандуулан техникийн мэдлэгээ гүнзгийрүүлсэн.",
        },
        {
          date: "2023",
          title: "Эргэлтийн Цэг",
          description:
            "NAPROCK (Procon) 2023-д оролцсон. Төсөл бэрхшээлтэй тулгарсан ч энэ туршлага хамтарсан хөгжүүлэлтэд өсөлтийг хурдасгасан чухал эргэлтийн цэг болсон.",
        },
        {
          date: "2024",
          title: "Хүсэл Тэмүүллээ Олов",
          description:
            "Вэб хөгжүүлэлт сурч эхлэн санааг бодит, ажиллагаатай вэбсайт болгон хувиргахдаа дуртай болсон.",
        },
        {
          date: "2025",
          title: "Клауд ба DevOps-д Анхаарав",
          description:
            "Фронтэнд болон бэкэндээс давж системийг ойлгохыг хүсч AWS-тэй хэмжигдэхүйц архитектур судалж, GitHub Actions ашиглан CI/CD pipeline хэрэгжүүлж, бодит үйлдвэрлэлийн орчинд контейнержуулсан аппликейшн байрлуулсан.",
        },
        {
          date: "Ирээдүйн Зорилго",
          title: "Тасралтгүй Өсөлт",
          description:
            "AI/ML-ийг судалснаар технологийн тэргүүн эгнээнд байхыг эрмэлзэж байна. Миний зорилго бол орчин үеийн хэрэгслийг ухаалгаар ашиглах — тэдгээрийн боломжийг ойлгож, стратегийн хувьд удирдаж, бүтээмжийг нэмэгдүүлэхэд ашиглах явдал.",
        },
      ],
    },
    // Contact
    contact: {
      heading: "Холбогдоцгооё",
      subheading: "Холбоо барих",
      description:
        "Би үргэлж шинэ төсөл, боломжийн тухай сонсоход сонирхдог. Чөлөөтэй холбогдоорой!",
      emailLabel: "И-мэйл",
      locationLabel: "Байршил",
      locationValue: "Улаанбаатар, Монгол",
      socialLabel: "Сошиал",
      nameLabel: "Нэр",
      namePlaceholder: "Таны нэр",
      emailInputLabel: "И-мэйл",
      emailPlaceholder: "tani@email.com",
      messageLabel: "Мессеж",
      messagePlaceholder: "Төслийнхөө тухай хэлээрэй...",
      sendButton: "Мессеж илгээх",
      sentButton: "Мессеж илгээгдлээ!",
    },
    // Footer
    footer: {
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      github: "GitHub",
      email: "И-мэйл",
    },
  },

  ja: {
    // Navbar
    nav: {
      region: "アジア/モンゴル",
      projects: "プロジェクト",
      stack: "技術",
      growth: "成長",
      contact: "連絡",
      home: "トップへ戻る",
      langLabel: "言語",
    },
    // Hero
    hero: {
      badge1: "お仕事募集中",
      badge2: "ウェブアプリ開発",
      headline1: "問題解決が",
      headline2: "私の情熱",
      description:
        "コンピューターサイエンス最終学年の学生として、モダンなウェブアプリケーション開発に情熱を注いでいます。英語・モンゴル語・日本語（N2）のトリリンガルです。",
      cta1: "作品を見る",
      cta2: "お問い合わせ",
      availableLabel: "状態",
      availableValue: "募集中",
    },
    // Projects
    projects: {
      heading: "プロジェクト",
      otherHeading: "その他のプロジェクト",
      projects: [
        {
          title: "学校管理本番システム",
          description:
            "ファイルアップロード機能、PDF→画像変換、CI/CDパイプライン統合を備えた包括的な学校管理システム。DockerコンテナでAWS EC2にデプロイ済み。",
        },
        {
          title: "ガントチャート プロジェクト管理",
          description:
            "ReactとTypeScriptで構築したインタラクティブなプロジェクト管理ツール。タスクグルーピング、リアルタイム更新、バックエンド連携機能付き。",
        },
        {
          title: "ドキュメント & 計画ツール",
          description:
            "ガント機能を備えた共同ドキュメント作成・計画アプリケーション。",
        },
      ],
    },
    // TechStack
    techStack: {
      heading: "技術スタック",
      frontend: "フロントエンド",
      devops: "DevOps",
      ctaTitle: "常に新しい技術を学んでいます",
      ctaDesc: "最新のフレームワークとツールを常に把握し、最先端のソリューションを提供します。",
      ctaButton: "コラボしましょう",
    },
    // Timeline
    timeline: {
      heading: "私の成長の歩み",
      subtitle: "テクノロジー分野での学習とキャリア発展の年表です。",
      ctaTitle: "次のステップは？",
      ctaDesc: "継続的に学習し、最新技術をキャッチアップしています。新しい挑戦と成長の機会をいつでも歓迎します。",
      ctaButton: "一緒に働きましょう",
      items: [
        {
          date: "2021",
          title: "テック旅の始まり",
          description:
            "アルゴリズムとC++の基礎を学び、プログラミングの旅をスタートしました。",
        },
        {
          date: "2022",
          title: "スキルを磨く",
          description:
            "JavaとMySQLを使った複数の学術プロジェクトを開発し、データベース管理とOOP原則に注力して技術力を深めました。",
        },
        {
          date: "2023",
          title: "転機",
          description:
            "NAPROCK（プロコン）2023に参加。プロジェクトは困難に直面しましたが、この経験が協同開発における成長を加速させる重要な転機となりました。",
        },
        {
          date: "2024",
          title: "情熱を見つける",
          description:
            "ウェブ開発を学び始め、アイデアを実際に動くウェブサイトに変える魅力に瞬時に惹かれました。",
        },
        {
          date: "2025",
          title: "クラウドとDevOpsへの注力",
          description:
            "フロントエンド・バックエンドを超えてシステムを理解したいという思いから、AWSでスケーラブルなアーキテクチャを学び、GitHub ActionsでCI/CDパイプラインを実装し、本番環境向けコンテナアプリをデプロイするようになりました。",
        },
        {
          date: "将来の目標",
          title: "継続的な成長",
          description:
            "AI/MLを探求しながら、テクノロジーの最前線に立ち続けることを目指しています。現代のツールを意図を持って活用すること——その能力を理解し、戦略的に導き、批判的思考に代わるのではなく生産性を高めるために使うことに集中しています。",
        },
      ],
    },
    // Contact
    contact: {
      heading: "つながりましょう",
      subheading: "お問い合わせ",
      description:
        "新しいプロジェクトや機会についてのお話をいつでも歓迎しています。お気軽にご連絡ください！",
      emailLabel: "メール",
      locationLabel: "所在地",
      locationValue: "ウランバートル、モンゴル",
      socialLabel: "SNS",
      nameLabel: "お名前",
      namePlaceholder: "お名前を入力",
      emailInputLabel: "メール",
      emailPlaceholder: "your@email.com",
      messageLabel: "メッセージ",
      messagePlaceholder: "プロジェクトについて教えてください...",
      sendButton: "送信する",
      sentButton: "送信しました！",
    },
    // Footer
    footer: {
      rights: "全著作権所有。",
      github: "GitHub",
      email: "メール",
    },
  },
};

export type Translations = typeof translations.en;
