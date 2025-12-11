import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        roadmaps: "Roadmaps",
        dashboard: "Dashboard",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",
        langBtn: "العربية"
      },
      home: {
        heroTitle: "Master",
        heroTitleSpan: "Computer Science",
        heroSub: "Navigate your learning journey with expertly crafted roadmaps. From beginner fundamentals to expert mastery—find your path to success.",
        getStarted: "Get Started",
        contactUs: "Contact Us",
        readyHeader: "Ready to start your journey?",
        readyP: "Choose your skill level and begin mastering computer science concepts today.",
        exploreBtn: "Explore All Roadmaps",
        cards: {
          structHeader: "Structured Learning Paths",
          structP: "Follow carefully designed roadmaps that break down complex topics into manageable steps.",
          levelsHeader: "Three Difficulty Levels",
          levelsP: "Choose your path: Beginner, Intermediate, or Expert. Progress at your own pace.",
          goalHeader: "Goal-Oriented Learning",
          goalP: "Track your progress and achieve your learning objectives with detailed guidance."
        }
      },
      aboutPage: {
        title: "About",
        subtitle: "Empowering learners worldwide with personalized learning paths and comprehensive roadmaps to achieve their goals.",
        missionTitle: "Our Mission",
        missionP1: "At Dalilak, we believe that everyone deserves access to quality education and clear learning paths. Our mission is to democratize learning by providing structured roadmaps that guide you from beginner to expert in your chosen field.",
        missionP2: "We combine expert knowledge with modern technology to create personalized learning experiences that adapt to your pace and style, helping you achieve your goals faster and more effectively.",
        valuesTitle: "Our Core Values",
        val1: { title: "Accessible Learning", desc: "We believe education should be accessible to everyone, regardless of background or resources. Our platform is designed to be free and inclusive." },
        val2: { title: "Goal-Oriented", desc: "Every roadmap is designed with clear milestones and objectives, helping you stay focused and motivated throughout your learning journey." },
        val3: { title: "Community-Driven", desc: "Our roadmaps are created and refined by experts and learners alike, ensuring they reflect real-world needs and best practices." },
        val4: { title: "Quality Content", desc: "We curate and verify all learning resources to ensure you’re getting the most up-to-date and effective educational content available." },
        stats: { roadmaps: "Learning Roadmaps", learners: "Active Learners", experts: "Expert Contributors", satisfaction: "Satisfaction Rate" }
      },
      contact: {
        title: "Get in",
        titleSpan: "Touch",
        sub: "Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        formTitle: "Send us a Message",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendBtn: "Send Message",
        infoTitle: "Contact Information",
        officeTitle: "Office Hours",
        days: "Monday - Friday: 9:00 AM - 6:00 PM",
        sat: "Saturday: 10:00 AM - 4:00 PM",
        sun: "Sunday: Closed",
        phName: "Your Name",
        phSubject: "How can we help?",
        phMessage: "Your message..."
      },
      dashboard: {
        welcome: "Welcome back,",
        sub: "Track your progress and continue your learning journey",
        explore: "Explore More Roadmaps",
        started: "Roadmaps Started",
        progress: "In Progress",
        completed: "Completed",
        yourProgress: "Your Progress",
        keepGoing: "Keep the momentum going",
        keepGoingSub: "Continue with your next milestone or explore a new roadmap",
        continueBtn: "Continue Learning"
      },
      footer: {
        desc: "Master computer science with expertly crafted roadmaps.",
        product: "Product",
        resources: "Resources",
        legal: "Legal",
        pricing: "Pricing",
        blog: "Blog",
        docs: "Documentation",
        community: "Community",
        privacy: "Privacy Policy",
        terms: "Terms of service",
        rights: "© 2025 Dalilak. All rights reserved.",
        roadmaps:"Roadmaps",
        dashboard:"Dashboard"
      },
      auth: {
        loginTitle: "Welcome Back",
        loginSub: "Log in to your Dalilak account",
        signupTitle: "Create Account",
        signupSub: "Join thousands learning computer science",
        email: "Email Address",
        password: "Password",
        confirmPass: "Confirm Password",
        fullName: "Full Name",
        forgot: "Forgot password",
        loginBtn: "Log In",
        signupBtn: "Sign Up",
        orContinue: "Or continue with",
        orSignup: "Or sign up with",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?"
      },
      roadmapsPage: {
        title: "Computer Science",
        titleSpan: "Roadmaps",
        desc: "Select your skill level and dive into a structured learning path designed to take you from beginner to expert.",
        searchPh: "Search roadmaps by title or topic...",
        showing: "Showing",
        of: "of",
        items: "roadmaps",
        view: "View Roadmap",
        levels: {
            all: "All Roadmaps",
            beg: "Beginner",
            int: "Intermediate",
            exp: "Expert"
        }
      },
      brandName: "dalilak"
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        roadmaps: "المسارات",
        dashboard: "لوحة التحكم",
        contact: "تواصل معنا",
        login: "دخول",
        signup: "إنشاء حساب",
        langBtn: "English"
      },
      home: {
        heroTitle: "أتقن",
        heroTitleSpan: "علوم الحاسب",
        heroSub: "تصفح رحلتك التعليمية مع خرائط طريق مصممة بدقة. من أساسيات المبتدئين إلى احتراف الخبراء - ابحث عن طريقك للنجاح.",
        getStarted: "ابدأ الآن",
        contactUs: "تواصل معنا",
        readyHeader: "جاهز لبدء رحلتك؟",
        readyP: "اختر مستواك وابدأ في إتقان مفاهيم علوم الكمبيوتر اليوم.",
        exploreBtn: "استكشف كل المسارات",
        cards: {
          structHeader: "مسارات تعلم منظمة",
          structP: "اتبع خرائط طريق مصممة بعناية تقسم المواضيع المعقدة إلى خطوات يمكن إدارتها.",
          levelsHeader: "ثلاثة مستويات للصعوبة",
          levelsP: "اختر مسارك: مبتدئ، متوسط، أو خبير. تقدم بالسرعة التي تناسبك.",
          goalHeader: "تعلم موجه بالأهداف",
          goalP: "تتبع تقدمك وحقق أهدافك التعليمية بتوجيه مفصل."
        }
      },
      aboutPage: {
        title: "عن",
        subtitle: "تمكين المتعلمين حول العالم بمسارات تعليمية مخصصة وخرائط طريق شاملة لتحقيق أهدافهم.",
        missionTitle: "مهمتنا",
        missionP1: "في دليلك، نؤمن بأن الجميع يستحق الوصول إلى تعليم عالي الجودة ومسارات تعلم واضحة. مهمتنا هي إتاحة التعلم للجميع من خلال توفير خرائط طريق منظمة ترشدك من المبتدئ إلى الخبير.",
        missionP2: "نجمع بين معرفة الخبراء والتكنولوجيا الحديثة لإنشاء تجارب تعليمية مخصصة تتكيف مع وتيرتك وأسلوبك، مما يساعدك على تحقيق أهدافك بشكل أسرع وأكثر فعالية.",
        valuesTitle: "قيمنا الجوهرية",
        val1: { title: "تعليم متاح للجميع", desc: "نؤمن بأن التعليم يجب أن يكون متاحاً للجميع. تم تصميم منصتنا لتكون مجانية وشاملة." },
        val2: { title: "موجه نحو الأهداف", desc: "تم تصميم كل خارطة طريق بمعالم وأهداف واضحة، مما يساعدك على البقاء مركزاً ومحفزاً طوال رحلتك." },
        val3: { title: "بقيادة المجتمع", desc: "يتم إنشاء وتحسين خرائطنا بواسطة الخبراء والمتعلمين لضمان أنها تعكس احتياجات الواقع." },
        val4: { title: "محتوى عالي الجودة", desc: "نحن ندقق ونتحقق من جميع مصادر التعلم لضمان حصولك على أحدث المحتويات التعليمية." },
        stats: { roadmaps: "مسار تعليمي", learners: "متعلم نشط", experts: "خبير مساهم", satisfaction: "نسبة رضا" }
      },
      contact: {
        title: "ابقى على",
        titleSpan: "تواصل",
        sub: "لديك أسئلة أو ملاحظات؟ نود أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
        formTitle: "أرسل لنا رسالة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        sendBtn: "إرسال الرسالة",
        infoTitle: "معلومات الاتصال",
        officeTitle: "ساعات العمل",
        days: "الإثنين - الجمعة: 9:00 ص - 6:00 م",
        sat: "السبت: 10:00 ص - 4:00 م",
        sun: "الأحد: مغلق",
        phName: "اسمك الكريم",
        phSubject: "كيف يمكننا مساعدتك؟",
        phMessage: "اكتب رسالتك هنا..."
      },
      dashboard: {
        welcome: "مرحباً بعودتك، ",
        sub: "تتبع تقدمك واستمر في رحلتك التعليمية",
        explore: "استكشف المزيد من المسارات",
        started: "مسارات بدأت",
        progress: "قيد التقدم",
        completed: "مكتملة",
        yourProgress: "تقدمك الحالي",
        keepGoing: "حافظ على الزخم",
        keepGoingSub: "استمر مع معلمك التالي أو استكشف خريطة طريق جديدة",
        continueBtn: "استمر في التعلم"
      },
      footer: {
        desc: "أتقن علوم الكمبيوتر بخرائط طريق مصممة بخبرة.",
        product: "المنتج",
        resources: "الموارد",
        legal: "قانوني",
        pricing: "الأسعار",
        blog: "المدونة",
        docs: "التوثيق",
        community: "المجتمع",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        rights: "© 2025 دليلك. جميع الحقوق محفوظة.",
        roadmaps:"المسارات",
        dashboard:"لوحة التحكم"
      },
      auth: {
        loginTitle: "مرحباً بعودتك",
        loginSub: "سجل الدخول إلى حسابك في دليلك",
        signupTitle: "إنشاء حساب",
        signupSub: "انضم لآلاف المتعلمين لعلوم الحاسب",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPass: "تأكيد كلمة المرور",
        fullName: "الاسم الكامل",
        forgot: "نسيت كلمة المرور؟",
        loginBtn: "تسجيل الدخول",
        signupBtn: "إنشاء الحساب",
        orContinue: "أو استمر باستخدام",
        orSignup: "أو سجل باستخدام",
        noAccount: "ليس لديك حساب؟",
        haveAccount: "لديك حساب بالفعل؟"
      },
      roadmapsPage: {
        title: "خرائط طريق",
        titleSpan: "علوم الحاسب",
        desc: "اختر مستوى مهارتك وانغمس في مسار تعليمي منظم مصمم لينقلك من مبتدئ إلى خبير.",
        searchPh: "ابحث عن المسارات بالعنوان...",
        showing: "عرض",
        of: "من",
        items: "مسارات",
        view: "عرض المسار",
        levels: {
            all: "كل المسارات",
            beg: "مبتدئ",
            int: "متوسط",
            exp: "خبير"
        }
      },
      brandName: "دليلك"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;