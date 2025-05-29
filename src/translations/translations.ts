export interface Translation {
  // Navigation
  features: string;
  interface: string;
  gallery: string;
  faq: string;
  download: string;
  getEarlyAccess: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  watchDemo: string;
  getAccess: string;
  theFutureOfVideo: string;
  startsHere: string;
  heroMainDescription: string;
  enterInviteCode: string;
  yourInviteCode: string;
  verifyAccess: string;
  downloadVeoApp: string;
  copyArchivePassword: string;
  copied: string;
  invalidAccessCode: string;

  // Features Section
  featuresTitle: string;
  featuresDescription: string;
  revolutionaryFeatures: string;
  advancedAI: string;
  advancedAIDesc: string;
  lightningFast: string;
  lightningFastDesc: string;
  stunningVisual: string;
  stunningVisualDesc: string;
  globalAccessibility: string;
  globalAccessibilityDesc: string;
  securePrivate: string;
  securePrivateDesc: string;
  continuousInnovation: string;
  continuousInnovationDesc: string;

  // Audio Video Section
  audioVideoDescription: string;

  // Footer CTA Section
  readyToCreate: string;
  amazingVideos: string;
  footerCtaDescription: string;
  downloadVeoNow: string;
  backToTop: string;
  videosGeneratedStat: string;
  uptimeStat: string;
  availabilityStat: string;

  // FAQ Section
  faqTitle: string;
  faqDescription: string;
  faqQuestions: Array<{
    question: string;
    answer: string;
  }>;

  // Footer
  footerDescription: string;
  followUs: string;
  product: string;
  models: string;
  modelsDescription: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
  googleProducts: string;
  privacy: string;
  terms: string;

  // Common
  close: string;
  loading: string;
  error: string;
}

export const translations: Record<string, Translation> = {
  en: {
    features: "Features",
    interface: "Interface", 
    gallery: "Gallery",
    faq: "FAQ",
    download: "Download",
    getEarlyAccess: "Get Early Access",
    
    heroTitle: "Next Generation AI Video Creation",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Transform your ideas into stunning videos with cutting-edge AI technology. Create professional content in minutes, not hours.",
    watchDemo: "Watch Demo",
    getAccess: "Get Access",
    theFutureOfVideo: "The Future of Video",
    startsHere: "Starts Here",
    heroMainDescription: "Create photorealistic, cinematic videos from simple text prompts using Google Veo 3 — for free.",
    enterInviteCode: "Enter invite code",
    yourInviteCode: "Your invite code",
    verifyAccess: "Verify Access",
    downloadVeoApp: "Download Veo 3 App",
    copyArchivePassword: "Copy Archive Password",
    copied: "Copied!",
    invalidAccessCode: "Invalid access code. Please try again.",
    
    featuresTitle: "Revolutionary",
    featuresDescription: "Experience the future of video creation with advanced AI capabilities.",
    revolutionaryFeatures: "Revolutionary Features",
    advancedAI: "Advanced AI",
    advancedAIDesc: "Powered by cutting-edge artificial intelligence for unparalleled video generation quality.",
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Generate professional videos in minutes, not hours. Experience unprecedented speed.",
    stunningVisual: "Stunning Visuals",
    stunningVisualDesc: "Create breathtaking videos with photorealistic quality and cinematic effects.",
    globalAccessibility: "Global Accessibility",
    globalAccessibilityDesc: "Available worldwide with multi-language support and cloud-based processing.",
    securePrivate: "Secure & Private",
    securePrivateDesc: "Your content is protected with enterprise-grade security and privacy standards.",
    continuousInnovation: "Continuous Innovation",
    continuousInnovationDesc: "Regular updates with new features and improvements to keep you ahead.",

    audioVideoDescription: "Veo 3 lets you add sound effects, ambient noise, and even dialogue to your creations – generating all audio natively. It also delivers best in class quality, excelling in physics, realism and prompt adherence.",

    readyToCreate: "Ready to Create",
    amazingVideos: "Amazing Videos?",
    footerCtaDescription: "Join thousands of creators who are already transforming their ideas into stunning videos with Google Veo 3.",
    downloadVeoNow: "Download Veo Now",
    backToTop: "Back to Top",
    videosGeneratedStat: "Videos Generated",
    uptimeStat: "Uptime",
    availabilityStat: "Availability",
    
    faqTitle: "Frequently Asked",
    faqDescription: "Get answers to common questions about Google Veo 3.",
    faqQuestions: [
      {
        question: "What is Google Veo 3?",
        answer: "Google Veo 3 is an advanced AI video generation model that creates high-quality videos from text descriptions."
      },
      {
        question: "How do I get access?",
        answer: "You can request early access through our platform. We're gradually rolling out access to users."
      },
      {
        question: "What video formats are supported?",
        answer: "Veo 3 supports various video formats including MP4, WebM, and MOV with different resolutions up to 4K."
      },
      {
        question: "Is there a free trial?",
        answer: "Yes, we offer a limited free trial for new users to experience the capabilities of Veo 3."
      }
    ],
    
    footerDescription: "The future of AI-powered video generation. Create stunning, photorealistic videos from simple text descriptions.",
    followUs: "Follow us",
    product: "Product",
    models: "Models",
    modelsDescription: "Build with our next generation AI systems",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    googleProducts: "Google Products",
    privacy: "Privacy",
    terms: "Terms",
    
    close: "Close",
    loading: "Loading...",
    error: "Error occurred"
  },
  
  ru: {
    features: "Возможности",
    interface: "Интерфейс",
    gallery: "Галерея", 
    faq: "FAQ",
    download: "Скачать",
    getEarlyAccess: "Получить ранний доступ",
    
    heroTitle: "ИИ создание видео нового поколения",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Превратите свои идеи в потрясающие видео с помощью передовых технологий ИИ. Создавайте профессиональный контент за минуты, а не часы.",
    watchDemo: "Смотреть демо",
    getAccess: "Получить доступ",
    theFutureOfVideo: "Будущее видео",
    startsHere: "начинается здесь",
    heroMainDescription: "Создавайте фотореалистичные, кинематографические видео из простых текстовых запросов с помощью Google Veo 3 — бесплатно.",
    enterInviteCode: "Введите код приглашения",
    yourInviteCode: "Ваш код приглашения",
    verifyAccess: "Проверить доступ",
    downloadVeoApp: "Скачать приложение Veo 3",
    copyArchivePassword: "Скопировать пароль архива",
    copied: "Скопировано!",
    invalidAccessCode: "Неверный код доступа. Попробуйте снова.",
    
    featuresTitle: "Революционные",
    featuresDescription: "Познайте будущее создания видео с передовыми возможностями ИИ.",
    revolutionaryFeatures: "Революционные возможности",
    advancedAI: "Продвинутый ИИ",
    advancedAIDesc: "Работает на основе передового искусственного интеллекта для непревзойденного качества генерации видео.",
    lightningFast: "Молниеносная скорость",
    lightningFastDesc: "Создавайте профессиональные видео за минуты, а не часы. Испытайте беспрецедентную скорость.",
    stunningVisual: "Потрясающие визуальные эффекты",
    stunningVisualDesc: "Создавайте захватывающие видео с фотореалистичным качеством и кинематографическими эффектами.",
    globalAccessibility: "Глобальная доступность",
    globalAccessibilityDesc: "Доступно по всему миру с поддержкой нескольких языков и облачной обработкой.",
    securePrivate: "Безопасность и конфиденциальность",
    securePrivateDesc: "Ваш контент защищен корпоративными стандартами безопасности и конфиденциальности.",
    continuousInnovation: "Непрерывные инновации",
    continuousInnovationDesc: "Регулярные обновления с новыми функциями и улучшениями, чтобы держать вас впереди.",

    audioVideoDescription: "Veo 3 позволяет добавлять звуковые эффекты, окружающие звуки и даже диалоги к вашим творениям - генерируя все аудио нативно. Также обеспечивает лучшее в классе качество, превосходя в физике, реализме и соответствии промптам.",

    readyToCreate: "Готовы создавать",
    amazingVideos: "потрясающие видео?",
    footerCtaDescription: "Присоединяйтесь к тысячам создателей, которые уже превращают свои идеи в потрясающие видео с Google Veo 3.",
    downloadVeoNow: "Скачать Veo сейчас",
    backToTop: "Наверх",
    videosGeneratedStat: "Видео создано",
    uptimeStat: "Время работы",
    availabilityStat: "Доступность",
    
    faqTitle: "Часто задаваемые",
    faqDescription: "Получите ответы на распространенные вопросы о Google Veo 3.",
    faqQuestions: [
      {
        question: "Что такое Google Veo 3?",
        answer: "Google Veo 3 — это продвинутая модель ИИ для генерации видео, которая создает высококачественные видео из текстовых описаний."
      },
      {
        question: "Как получить доступ?",
        answer: "Вы можете запросить ранний доступ через нашу платформу. Мы постепенно предоставляем доступ пользователям."
      },
      {
        question: "Какие форматы видео поддерживаются?",
        answer: "Veo 3 поддерживает различные форматы видео, включая MP4, WebM и MOV с разным разрешением до 4K."
      },
      {
        question: "Есть ли бесплатная пробная версия?",
        answer: "Да, мы предлагаем ограниченную бесплатную пробную версию для новых пользователей, чтобы они могли оценить возможности Veo 3."
      }
    ],
    
    footerDescription: "Будущее генерации видео с помощью ИИ. Создавайте потрясающие, фотореалистичные видео из простых текстовых описаний.",
    followUs: "Следите за нами",
    product: "Продукт",
    models: "Модели",
    modelsDescription: "Создавайте с нашими системами ИИ нового поколения",
    legal: "Правовая информация",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
    allRightsReserved: "Все права защищены.",
    googleProducts: "Продукты Google",
    privacy: "Конфиденциальность",
    terms: "Условия",
    
    close: "Закрыть",
    loading: "Загрузка...",
    error: "Произошла ошибка"
  },
  
  zh: {
    features: "功能",
    interface: "界面",
    gallery: "画廊",
    faq: "常见问题",
    download: "下载",
    getEarlyAccess: "获得早期访问",
    
    heroTitle: "下一代AI视频创作",
    heroSubtitle: "Google Veo 3",
    heroDescription: "使用尖端AI技术将您的想法转化为令人惊叹的视频。几分钟内创建专业内容，而不是几小时。",
    watchDemo: "观看演示",
    getAccess: "获得访问",
    theFutureOfVideo: "视频的未来",
    startsHere: "从这里开始",
    heroMainDescription: "使用Google Veo 3从简单的文本提示创建逼真的电影级视频——免费。",
    enterInviteCode: "输入邀请码",
    yourInviteCode: "您的邀请码",
    verifyAccess: "验证访问",
    downloadVeoApp: "下载Veo 3应用",
    copyArchivePassword: "复制存档密码",
    copied: "已复制！",
    invalidAccessCode: "无效的访问码。请重试。",
    
    featuresTitle: "革命性",
    featuresDescription: "体验具有先进AI功能的视频创作的未来。",
    revolutionaryFeatures: "革命性功能",
    advancedAI: "先进AI",
    advancedAIDesc: "由尖端人工智能驱动，提供无与伦比的视频生成质量。",
    lightningFast: "闪电般快速",
    lightningFastDesc: "几分钟内生成专业视频，而不是几小时。体验前所未有的速度。",
    stunningVisual: "令人惊叹的视觉效果",
    stunningVisualDesc: "创建具有逼真质量和电影效果的精彩视频。",
    globalAccessibility: "全球可访问性",
    globalAccessibilityDesc: "全球可用，支持多语言和基于云的处理。",
    securePrivate: "安全私密",
    securePrivateDesc: "您的内容受到企业级安全和隐私标准的保护。",
    continuousInnovation: "持续创新",
    continuousInnovationDesc: "定期更新新功能和改进，让您保持领先。",

    audioVideoDescription: "Veo 3让您可以为您的创作添加声音效果、环境噪音甚至对话 - 原生生成所有音频。它还提供同类最佳质量，在物理学、现实主义和提示遵循方面表现出色。",

    readyToCreate: "准备创建",
    amazingVideos: "令人惊叹的视频？",
    footerCtaDescription: "加入已经使用Google Veo 3将想法转化为令人惊叹视频的数千名创作者。",
    downloadVeoNow: "立即下载Veo",
    backToTop: "返回顶部",
    videosGeneratedStat: "生成的视频",
    uptimeStat: "正常运行时间",
    availabilityStat: "可用性",
    
    faqTitle: "常见",
    faqDescription: "获得关于Google Veo 3常见问题的答案。",
    faqQuestions: [
      {
        question: "什么是Google Veo 3？",
        answer: "Google Veo 3是一个先进的AI视频生成模型，可以从文本描述创建高质量视频。"
      },
      {
        question: "如何获得访问权限？",
        answer: "您可以通过我们的平台请求早期访问。我们正在逐步向用户推出访问权限。"
      },
      {
        question: "支持哪些视频格式？",
        answer: "Veo 3支持各种视频格式，包括MP4、WebM和MOV，分辨率可达4K。"
      },
      {
        question: "有免费试用吗？",
        answer: "是的，我们为新用户提供有限的免费试用，以体验Veo 3的功能。"
      }
    ],
    
    footerDescription: "AI驱动视频生成的未来。从简单的文本描述创建令人惊叹的、逼真的视频。",
    followUs: "关注我们",
    product: "产品",
    models: "模型",
    modelsDescription: "使用我们的下一代AI系统构建",
    legal: "法律",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    allRightsReserved: "版权所有。",
    googleProducts: "Google产品",
    privacy: "隐私",
    terms: "条款",
    
    close: "关闭",
    loading: "加载中...",
    error: "发生错误"
  },
  
  hi: {
    features: "विशेषताएं",
    interface: "इंटरफेस",
    gallery: "गैलरी",
    faq: "FAQ",
    download: "डाउनलोड",
    getEarlyAccess: "जल्दी पहुंच प्राप्त करें",
    
    heroTitle: "अगली पीढ़ी का AI वीडियो निर्माण",
    heroSubtitle: "Google Veo 3",
    heroDescription: "अत्याधुनिक AI तकनीक के साथ अपने विचारों को शानदार वीडियो में बदलें। घंटों नहीं, मिनटों में पेशेवर सामग्री बनाएं।",
    watchDemo: "डेमो देखें",
    getAccess: "पहुंच प्राप्त करें",
    theFutureOfVideo: "वीडियो का भविष्य",
    startsHere: "यहां शुरू होता है",
    heroMainDescription: "Google Veo 3 का उपयोग करके सरल टेक्स्ट प्रॉम्प्ट से फोटो-रियलिस्टिक, सिनेमैटिक वीडियो बनाएं — मुफ्त में।",
    enterInviteCode: "निमंत्रण कोड दर्ज करें",
    yourInviteCode: "आपका निमंत्रण कोड",
    verifyAccess: "पहुंच सत्यापित करें",
    downloadVeoApp: "Veo 3 ऐप डाउनलोड करें",
    copyArchivePassword: "संग्रह पासवर्ड कॉपी करें",
    copied: "कॉपी किया गया!",
    invalidAccessCode: "अमान्य पहुंच कोड। कृपया फिर से प्रयास करें।",
    
    featuresTitle: "क्रांतिकारी",
    featuresDescription: "उन्नत AI क्षमताओं के साथ वीडियो निर्माण के भविष्य का अनुभव करें।",
    revolutionaryFeatures: "क्रांतिकारी विशेषताएं",
    advancedAI: "उन्नत AI",
    advancedAIDesc: "अद्वितीय वीडियो जेनरेशन गुणवत्ता के लिए अत्याधुनिक कृत्रिम बुद्धिमत्ता द्वारा संचालित।",
    lightningFast: "बिजली की तेजी",
    lightningFastDesc: "घंटों नहीं, मिनटों में पेशेवर वीडियो बनाएं। अभूतपूर्व गति का अनुभव करें।",
    stunningVisual: "शानदार दृश्य",
    stunningVisualDesc: "फोटो-रियलिस्टिक गुणवत्ता और सिनेमैटिक प्रभावों के साथ लुभावने वीडियो बनाएं।",
    globalAccessibility: "वैश्विक पहुंच",
    globalAccessibilityDesc: "बहु-भाषा समर्थन और क्लाउड-आधारित प्रसंस्करण के साथ दुनिया भर में उपलब्ध।",
    securePrivate: "सुरक्षित और निजी",
    securePrivateDesc: "आपकी सामग्री एंटरप्राइज़-ग्रेड सुरक्षा और गोपनीयता मानकों के साथ सुरक्षित है।",
    continuousInnovation: "निरंतर नवाचार",
    continuousInnovationDesc: "आपको आगे रखने के लिए नई सुविधाओं और सुधारों के साथ नियमित अपडेट।",

    audioVideoDescription: "Veo 3 आपको अपनी रचनाओं में ध्वनि प्रभाव, परिवेशी शोर और यहां तक कि संवाद जोड़ने की सुविधा देता है - सभी ऑडियो को मूल रूप से उत्पन्न करता है। यह भौतिकी, यथार्थवाद और प्रॉम्प्ट पालन में उत्कृष्टता के साथ सर्वोत्तम गुणवत्ता भी प्रदान करता है।",

    readyToCreate: "बनाने के लिए तैयार",
    amazingVideos: "अद्भुत वीडियो?",
    footerCtaDescription: "हजारों रचनाकारों में शामिल हों जो पहले से ही Google Veo 3 के साथ अपने विचारों को शानदार वीडियो में बदल रहे हैं।",
    downloadVeoNow: "अभी Veo डाउनलोड करें",
    backToTop: "शीर्ष पर वापस जाएं",
    videosGeneratedStat: "वीडियो बनाए गए",
    uptimeStat: "अपटाइम",
    availabilityStat: "उपलब्धता",
    
    faqTitle: "अक्सर पूछे जाने वाले",
    faqDescription: "Google Veo 3 के बारे में सामान्य प्रश्नों के उत्तर प्राप्त करें।",
    faqQuestions: [
      {
        question: "Google Veo 3 क्या है?",
        answer: "Google Veo 3 एक उन्नत AI वीडियो जेनरेशन मॉडल है जो टेक्स्ट विवरण से उच्च गुणवत्ता वाले वीडियो बनाता है।"
      },
      {
        question: "मुझे पहुंच कैसे मिलेगी?",
        answer: "आप हमारे प्लेटफॉर्म के माध्यम से जल्दी पहुंच का अनुरोध कर सकते हैं। हम धीरे-धीरे उपयोगकर्ताओं को पहुंच प्रदान कर रहे हैं।"
      },
      {
        question: "कौन से वीडियो फॉर्मेट समर्थित हैं?",
        answer: "Veo 3 4K तक के विभिन्न रिज़ॉल्यूशन के साथ MP4, WebM, और MOV सहित विभिन्न वीडियो फॉर्मेट का समर्थन करता है।"
      },
      {
        question: "क्या कोई निःशुल्क परीक्षण है?",
        answer: "हां, हम नए उपयोगकर्ताओं के लिए Veo 3 की क्षमताओं का अनुभव करने के लिए सीमित निःशुल्क परीक्षण प्रदान करते हैं।"
      }
    ],
    
    footerDescription: "AI-संचालित वीडियो जेनरेशन का भविष्य। साधारण पाठ विवरण से शानदार, फोटो-रियलिस्टिक वीडियो बनाएं।",
    followUs: "हमें फॉलो करें",
    product: "उत्पाद",
    models: "मॉडल",
    modelsDescription: "हमारी अगली पीढ़ी की AI प्रणालियों के साथ निर्माण करें",
    legal: "कानूनी",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    allRightsReserved: "सभी अधिकार सुरक्षित।",
    googleProducts: "Google उत्पाद",
    privacy: "गोपनीयता",
    terms: "शर्तें",
    
    close: "बंद करें",
    loading: "लोड हो रहा है...",
    error: "त्रुटि हुई"
  },
  
  es: {
    features: "Características",
    interface: "Interfaz",
    gallery: "Galería",
    faq: "FAQ",
    download: "Descargar",
    getEarlyAccess: "Obtener acceso anticipado",
    
    heroTitle: "Creación de video con IA de próxima generación",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Transforma tus ideas en videos impresionantes con tecnología de IA de vanguardia. Crea contenido profesional en minutos, no horas.",
    watchDemo: "Ver demo",
    getAccess: "Obtener acceso",
    theFutureOfVideo: "El futuro del video",
    startsHere: "comienza aquí",
    heroMainDescription: "Crea videos cinematográficos y fotorrealistas a partir de simples indicaciones de texto usando Google Veo 3 — gratis.",
    enterInviteCode: "Ingresa código de invitación",
    yourInviteCode: "Tu código de invitación",
    verifyAccess: "Verificar acceso",
    downloadVeoApp: "Descargar app Veo 3",
    copyArchivePassword: "Copiar contraseña del archivo",
    copied: "¡Copiado!",
    invalidAccessCode: "Código de acceso inválido. Inténtalo de nuevo.",
    
    featuresTitle: "Revolucionario",
    featuresDescription: "Experimenta el futuro de la creación de videos con capacidades avanzadas de IA.",
    revolutionaryFeatures: "Características revolucionarias",
    advancedAI: "IA Avanzada",
    advancedAIDesc: "Impulsado por inteligencia artificial de vanguardia para una calidad de generación de video sin igual.",
    lightningFast: "Rapidez Extrema",
    lightningFastDesc: "Genera videos profesionales en minutos, no horas. Experimenta una velocidad sin precedentes.",
    stunningVisual: "Visuales Impresionantes",
    stunningVisualDesc: "Crea videos impresionantes con calidad fotorrealista y efectos cinematográficos.",
    globalAccessibility: "Accesibilidad Global",
    globalAccessibilityDesc: "Disponible en todo el mundo con soporte multiidioma y procesamiento basado en la nube.",
    securePrivate: "Seguro y Privado",
    securePrivateDesc: "Tu contenido está protegido con estándares de seguridad y privacidad de nivel empresarial.",
    continuousInnovation: "Innovación Continua",
    continuousInnovationDesc: "Actualizaciones regulares con nuevas características y mejoras para mantenerte a la vanguardia.",

    audioVideoDescription: "Veo 3 te permite agregar efectos de sonido, ruido ambiental e incluso diálogos a tus creaciones, generando todo el audio de manera nativa. También ofrece la mejor calidad de su clase, sobresaliendo en física, realismo y adherencia a las indicaciones.",

    readyToCreate: "¿Listo para crear",
    amazingVideos: "videos increíbles?",
    footerCtaDescription: "Únete a miles de creadores que ya están transformando sus ideas en videos impresionantes con Google Veo 3.",
    downloadVeoNow: "Descargar Veo ahora",
    backToTop: "Volver arriba",
    videosGeneratedStat: "Videos generados",
    uptimeStat: "Tiempo de actividad",
    availabilityStat: "Disponibilidad",
    
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Obtén respuestas a preguntas comunes sobre Google Veo 3.",
    faqQuestions: [
      {
        question: "¿Qué es Google Veo 3?",
        answer: "Google Veo 3 es un modelo avanzado de generación de video con IA que crea videos de alta calidad a partir de descripciones de texto."
      },
      {
        question: "¿Cómo obtengo acceso?",
        answer: "Puedes solicitar acceso anticipado a través de nuestra plataforma. Estamos otorgando acceso gradualmente a los usuarios."
      },
      {
        question: "¿Qué formatos de video son compatibles?",
        answer: "Veo 3 admite varios formatos de video incluyendo MP4, WebM y MOV con diferentes resoluciones hasta 4K."
      },
      {
        question: "¿Hay una prueba gratuita?",
        answer: "Sí, ofrecemos una prueba gratuita limitada para nuevos usuarios para experimentar las capacidades de Veo 3."
      }
    ],
    
    footerDescription: "El futuro de la generación de video con IA. Crea videos impresionantes y fotorrealistas a partir de simples descripciones de texto.",
    followUs: "Síguenos",
    product: "Producto",
    models: "Modelos",
    modelsDescription: "Construye con nuestros sistemas de IA de próxima generación",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    allRightsReserved: "Todos los derechos reservados.",
    googleProducts: "Productos de Google",
    privacy: "Privacidad",
    terms: "Términos",
    
    close: "Cerrar",
    loading: "Cargando...",
    error: "Error ocurrido"
  },
  
  fr: {
    features: "Fonctionnalités",
    interface: "Interface",
    gallery: "Galerie",
    faq: "FAQ",
    download: "Télécharger",
    getEarlyAccess: "Obtenir l'accès anticipé",
    
    heroTitle: "Création vidéo IA de nouvelle génération",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Transformez vos idées en vidéos époustouflantes avec une technologie IA de pointe. Créez du contenu professionnel en minutes, pas en heures.",
    watchDemo: "Voir la démo",
    getAccess: "Obtenir l'accès",
    theFutureOfVideo: "L'avenir de la vidéo",
    startsHere: "commence ici",
    heroMainDescription: "Créez des vidéos cinématographiques et photoréalistes à partir de simples descriptions textuelles en utilisant Google Veo 3 — gratuitement.",
    enterInviteCode: "Entrez le code d'invitation",
    yourInviteCode: "Votre code d'invitation",
    verifyAccess: "Vérifier l'accès",
    downloadVeoApp: "Télécharger l'app Veo 3",
    copyArchivePassword: "Copier le mot de passe de l'archive",
    copied: "Copié !",
    invalidAccessCode: "Code d'accès invalide. Veuillez réessayer.",
    
    featuresTitle: "Révolutionnaire",
    featuresDescription: "Découvrez l'avenir de la création vidéo avec des capacités IA avancées.",
    revolutionaryFeatures: "Fonctionnalités révolutionnaires",
    advancedAI: "IA Avancée",
    advancedAIDesc: "Alimenté par une intelligence artificielle de pointe pour une qualité de génération vidéo inégalée.",
    lightningFast: "Rapidité Fulgurante",
    lightningFastDesc: "Générez des vidéos professionnelles en minutes, pas en heures. Découvrez une vitesse sans précédent.",
    stunningVisual: "Visuels Époustouflants",
    stunningVisualDesc: "Créez des vidéos à couper le souffle avec une qualité photoréaliste et des effets cinématographiques.",
    globalAccessibility: "Accessibilité Mondiale",
    globalAccessibilityDesc: "Disponible dans le monde entier avec support multilingue et traitement basé sur le cloud.",
    securePrivate: "Sécurisé et Privé",
    securePrivateDesc: "Votre contenu est protégé par des normes de sécurité et de confidentialité de niveau entreprise.",
    continuousInnovation: "Innovation Continue",
    continuousInnovationDesc: "Mises à jour régulières avec de nouvelles fonctionnalités et améliorations pour vous garder en avance.",

    audioVideoDescription: "Veo 3 vous permet d'ajouter des effets sonores, du bruit ambiant et même des dialogues à vos créations - générant tout l'audio de manière native. Il offre également une qualité de premier plan, excellant en physique, réalisme et adhérence aux prompts.",

    readyToCreate: "Prêt à créer des",
    amazingVideos: "vidéos incroyables ?",
    footerCtaDescription: "Rejoignez des milliers de créateurs qui transforment déjà leurs idées en vidéos époustouflantes avec Google Veo 3.",
    downloadVeoNow: "Télécharger Veo maintenant",
    backToTop: "Retour en haut",
    videosGeneratedStat: "Vidéos générées",
    uptimeStat: "Temps de fonctionnement",
    availabilityStat: "Disponibilité",
    
    faqTitle: "Questions fréquemment",
    faqDescription: "Obtenez des réponses aux questions courantes sur Google Veo 3.",
    faqQuestions: [
      {
        question: "Qu'est-ce que Google Veo 3 ?",
        answer: "Google Veo 3 est un modèle avancé de génération vidéo IA qui crée des vidéos de haute qualité à partir de descriptions textuelles."
      },
      {
        question: "Comment obtenir l'accès ?",
        answer: "Vous pouvez demander l'accès anticipé via notre plateforme. Nous accordons progressivement l'accès aux utilisateurs."
      },
      {
        question: "Quels formats vidéo sont pris en charge ?",
        answer: "Veo 3 prend en charge divers formats vidéo incluant MP4, WebM et MOV avec différentes résolutions jusqu'à 4K."
      },
      {
        question: "Y a-t-il un essai gratuit ?",
        answer: "Oui, nous offrons un essai gratuit limité pour les nouveaux utilisateurs pour découvrir les capacités de Veo 3."
      }
    ],
    
    footerDescription: "L'avenir de la génération vidéo alimentée par l'IA. Créez des vidéos époustouflantes et photoréalistes à partir de simples descriptions de texte.",
    followUs: "Suivez-nous",
    product: "Produit",
    models: "Modèles",
    modelsDescription: "Construisez avec nos systèmes IA de nouvelle génération",
    legal: "Légal",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    allRightsReserved: "Tous droits réservés.",
    googleProducts: "Produits Google",
    privacy: "Confidentialité",
    terms: "Conditions",
    
    close: "Fermer",
    loading: "Chargement...",
    error: "Erreur survenue"
  },
  
  ar: {
    features: "المميزات",
    interface: "الواجهة",
    gallery: "المعرض",
    faq: "الأسئلة الشائعة",
    download: "تحميل",
    getEarlyAccess: "الحصول على وصول مبكر",
    
    heroTitle: "إنشاء فيديو بالذكاء الاصطناعي من الجيل القادم",
    heroSubtitle: "Google Veo 3",
    heroDescription: "حول أفكارك إلى مقاطع فيديو مذهلة باستخدام تقنية الذكاء الاصطناعي المتطورة. أنشئ محتوى احترافي في دقائق وليس ساعات.",
    watchDemo: "مشاهدة العرض التوضيحي",
    getAccess: "الحصول على الوصول",
    theFutureOfVideo: "مستقبل الفيديو",
    startsHere: "يبدأ هنا",
    heroMainDescription: "أنشئ مقاطع فيديو سينمائية وواقعية من نصوص بسيطة باستخدام Google Veo 3 — مجاناً.",
    enterInviteCode: "أدخل رمز الدعوة",
    yourInviteCode: "رمز الدعوة الخاص بك",
    verifyAccess: "تحقق من الوصول",
    downloadVeoApp: "تحميل تطبيق Veo 3",
    copyArchivePassword: "نسخ كلمة مرور الأرشيف",
    copied: "تم النسخ!",
    invalidAccessCode: "رمز وصول غير صحيح. يرجى المحاولة مرة أخرى.",
    
    featuresTitle: "ثوري",
    featuresDescription: "اختبر مستقبل إنشاء الفيديو مع قدرات الذكاء الاصطناعي المتقدمة.",
    revolutionaryFeatures: "ميزات ثورية",
    advancedAI: "ذكاء اصطناعي متقدم",
    advancedAIDesc: "مدعوم بذكاء اصطناعي متطور لجودة توليد فيديو لا مثيل لها.",
    lightningFast: "سرعة البرق",
    lightningFastDesc: "أنشئ مقاطع فيديو احترافية في دقائق وليس ساعات. اختبر سرعة لا مثيل لها.",
    stunningVisual: "مرئيات مذهلة",
    stunningVisualDesc: "أنشئ مقاطع فيديو مذهلة بجودة واقعية وتأثيرات سينمائية.",
    globalAccessibility: "إمكانية الوصول العالمية",
    globalAccessibilityDesc: "متاح في جميع أنحاء العالم مع دعم متعدد اللغات ومعالجة قائمة على السحابة.",
    securePrivate: "آمن وخاص",
    securePrivateDesc: "محتواك محمي بمعايير أمان وخصوصية على مستوى المؤسسة.",
    continuousInnovation: "ابتكار مستمر",
    continuousInnovationDesc: "تحديثات منتظمة بميزات وتحسينات جديدة لإبقائك في المقدمة.",

    audioVideoDescription: "يتيح لك Veo 3 إضافة مؤثرات صوتية وضوضاء محيطة وحتى حوارات إلى إبداعاتك - ينتج كل الصوت بشكل أصلي. كما يقدم أفضل جودة في فئته، متفوقاً في الفيزياء والواقعية والالتزام بالمطالبات.",

    readyToCreate: "جاهز لإنشاء",
    amazingVideos: "مقاطع فيديو مذهلة؟",
    footerCtaDescription: "انضم إلى آلاف المبدعين الذين يحولون أفكارهم بالفعل إلى مقاطع فيديو مذهلة مع Google Veo 3.",
    downloadVeoNow: "تحميل Veo الآن",
    backToTop: "العودة للأعلى",
    videosGeneratedStat: "مقاطع الفيديو المُنتجة",
    uptimeStat: "وقت التشغيل",
    availabilityStat: "التوفر",
    
    faqTitle: "الأسئلة المتكررة",
    faqDescription: "احصل على إجابات للأسئلة الشائعة حول Google Veo 3.",
    faqQuestions: [
      {
        question: "ما هو Google Veo 3؟",
        answer: "Google Veo 3 هو نموذج متقدم لتوليد الفيديو بالذكاء الاصطناعي ينشئ مقاطع فيديو عالية الجودة من الأوصاف النصية."
      },
      {
        question: "كيف أحصل على الوصول؟",
        answer: "يمكنك طلب الوصول المبكر من خلال منصتنا. نحن نقدم الوصول تدريجياً للمستخدمين."
      },
      {
        question: "ما تنسيقات الفيديو المدعومة؟",
        answer: "يدعم Veo 3 تنسيقات فيديو مختلفة بما في ذلك MP4 و WebM و MOV بدقة مختلفة تصل إلى 4K."
      },
      {
        question: "هل توجد نسخة تجريبية مجانية؟",
        answer: "نعم، نقدم نسخة تجريبية مجانية محدودة للمستخدمين الجدد لتجربة قدرات Veo 3."
      }
    ],
    
    footerDescription: "مستقبل إنتاج الفيديو المدعوم بالذكاء الاصطناعي. أنشئ مقاطع فيديو مذهلة وواقعية من أوصاف نصية بسيطة.",
    followUs: "تابعنا",
    product: "المنتج",
    models: "النماذج",
    modelsDescription: "ابنِ مع أنظمة الذكاء الاصطناعي من الجيل القادم",
    legal: "قانوني",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    allRightsReserved: "جميع الحقوق محفوظة.",
    googleProducts: "منتجات Google",
    privacy: "الخصوصية",
    terms: "الشروط",
    
    close: "إغلاق",
    loading: "جاري التحميل...",
    error: "حدث خطأ"
  },
  
  pt: {
    features: "Recursos",
    interface: "Interface",
    gallery: "Galeria",
    faq: "FAQ",
    download: "Baixar",
    getEarlyAccess: "Obter acesso antecipado",
    
    heroTitle: "Criação de vídeo com IA de próxima geração",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Transforme suas ideias em vídeos impressionantes com tecnologia de IA de ponta. Crie conteúdo profissional em minutos, não horas.",
    watchDemo: "Ver demonstração",
    getAccess: "Obter acesso",
    theFutureOfVideo: "O futuro do vídeo",
    startsHere: "começa aqui",
    heroMainDescription: "Crie vídeos cinematográficos e fotorrealistas a partir de simples prompts de texto usando Google Veo 3 — grátis.",
    enterInviteCode: "Digite o código de convite",
    yourInviteCode: "Seu código de convite",
    verifyAccess: "Verificar acesso",
    downloadVeoApp: "Baixar app Veo 3",
    copyArchivePassword: "Copiar senha do arquivo",
    copied: "Copiado!",
    invalidAccessCode: "Código de acesso inválido. Tente novamente.",
    
    featuresTitle: "Revolucionário",
    featuresDescription: "Experimente o futuro da criação de vídeo com recursos avançados de IA.",
    revolutionaryFeatures: "Recursos revolucionários",
    advancedAI: "IA Avançada",
    advancedAIDesc: "Alimentado por inteligência artificial de ponta para qualidade incomparável de geração de vídeo.",
    lightningFast: "Rapidez Relâmpago",
    lightningFastDesc: "Gere vídeos profissionais em minutos, não horas. Experimente velocidade sem precedentes.",
    stunningVisual: "Visuais Deslumbrantes",
    stunningVisualDesc: "Crie vídeos de tirar o fôlego com qualidade fotorrealista e efeitos cinematográficos.",
    globalAccessibility: "Acessibilidade Global",
    globalAccessibilityDesc: "Disponível mundialmente com suporte multi-idioma e processamento baseado em nuvem.",
    securePrivate: "Seguro e Privado",
    securePrivateDesc: "Seu conteúdo é protegido com padrões de segurança e privacidade de nível empresarial.",
    continuousInnovation: "Inovação Contínua",
    continuousInnovationDesc: "Atualizações regulares com novos recursos e melhorias para mantê-lo à frente.",

    audioVideoDescription: "Veo 3 permite adicionar efeitos sonoros, ruído ambiente e até diálogos às suas criações - gerando todo o áudio nativamente. Também oferece qualidade de primeira classe, excelindo em física, realismo e aderência aos prompts.",

    readyToCreate: "Pronto para criar",
    amazingVideos: "vídeos incríveis?",
    footerCtaDescription: "Junte-se a milhares de criadores que já estão transformando suas ideias em vídeos impressionantes com Google Veo 3.",
    downloadVeoNow: "Baixar Veo agora",
    backToTop: "Voltar ao topo",
    videosGeneratedStat: "Vídeos gerados",
    uptimeStat: "Tempo de atividade",
    availabilityStat: "Disponibilidade",
    
    faqTitle: "Perguntas frequentes",
    faqDescription: "Obtenha respostas para perguntas comuns sobre o Google Veo 3.",
    faqQuestions: [
      {
        question: "O que é o Google Veo 3?",
        answer: "Google Veo 3 é um modelo avançado de geração de vídeo com IA que cria vídeos de alta qualidade a partir de descrições de texto."
      },
      {
        question: "Como obtenho acesso?",
        answer: "Você pode solicitar acesso antecipado através da nossa plataforma. Estamos liberando acesso gradualmente para os usuários."
      },
      {
        question: "Quais formatos de vídeo são suportados?",
        answer: "Veo 3 suporta vários formatos de vídeo incluindo MP4, WebM e MOV com diferentes resoluções até 4K."
      },
      {
        question: "Existe um teste gratuito?",
        answer: "Sim, oferecemos um teste gratuito limitado para novos usuários experimentarem as capacidades do Veo 3."
      }
    ],
    
    footerDescription: "O futuro da geração de vídeo alimentada por IA. Crie vídeos impressionantes e fotorrealistas a partir de simples descrições de texto.",
    followUs: "Siga-nos",
    product: "Produto",
    models: "Modelos",
    modelsDescription: "Construa com nossos sistemas de IA de próxima geração",
    legal: "Legal",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    allRightsReserved: "Todos os direitos reservados.",
    googleProducts: "Produtos Google",
    privacy: "Privacidade",
    terms: "Termos",
    
    close: "Fechar",
    loading: "Carregando...",
    error: "Erro ocorrido"
  },
  
  de: {
    features: "Funktionen",
    interface: "Benutzeroberfläche",
    gallery: "Galerie",
    faq: "FAQ",
    download: "Herunterladen",
    getEarlyAccess: "Frühzugang erhalten",
    
    heroTitle: "KI-Videoerstellung der nächsten Generation",
    heroSubtitle: "Google Veo 3",
    heroDescription: "Verwandeln Sie Ihre Ideen mit modernster KI-Technologie in beeindruckende Videos. Erstellen Sie professionelle Inhalte in Minuten, nicht Stunden.",
    watchDemo: "Demo ansehen",
    getAccess: "Zugang erhalten",
    theFutureOfVideo: "Die Zukunft des Videos",
    startsHere: "beginnt hier",
    heroMainDescription: "Erstellen Sie fotorealistische, kinematografische Videos aus einfachen Textaufforderungen mit Google Veo 3 — kostenlos.",
    enterInviteCode: "Einladungscode eingeben",
    yourInviteCode: "Ihr Einladungscode",
    verifyAccess: "Zugang überprüfen",
    downloadVeoApp: "Veo 3 App herunterladen",
    copyArchivePassword: "Archiv-Passwort kopieren",
    copied: "Kopiert!",
    invalidAccessCode: "Ungültiger Zugangscode. Bitte versuchen Sie es erneut.",
    
    featuresTitle: "Revolutionär",
    featuresDescription: "Erleben Sie die Zukunft der Videoerstellung mit fortschrittlichen KI-Fähigkeiten.",
    revolutionaryFeatures: "Revolutionäre Funktionen",
    advancedAI: "Fortschrittliche KI",
    advancedAIDesc: "Angetrieben von modernster künstlicher Intelligenz für unvergleichliche Videogenerierungsqualität.",
    lightningFast: "Blitzschnell",
    lightningFastDesc: "Erstellen Sie professionelle Videos in Minuten, nicht Stunden. Erleben Sie beispiellose Geschwindigkeit.",
    stunningVisual: "Atemberaubende Visuals",
    stunningVisualDesc: "Erstellen Sie atemberaubende Videos mit fotorealistischer Qualität und kinematografischen Effekten.",
    globalAccessibility: "Globale Zugänglichkeit",
    globalAccessibilityDesc: "Weltweit verfügbar mit mehrsprachiger Unterstützung und cloudbasierter Verarbeitung.",
    securePrivate: "Sicher und Privat",
    securePrivateDesc: "Ihr Inhalt ist durch Sicherheits- und Datenschutzstandards auf Unternehmensebene geschützt.",
    continuousInnovation: "Kontinuierliche Innovation",
    continuousInnovationDesc: "Regelmäßige Updates mit neuen Funktionen und Verbesserungen, um Sie an der Spitze zu halten.",

    audioVideoDescription: "Veo 3 ermöglicht es Ihnen, Soundeffekte, Umgebungsgeräusche und sogar Dialoge zu Ihren Kreationen hinzuzufügen - alle Audio nativ zu generieren. Es liefert auch erstklassige Qualität und zeichnet sich in Physik, Realismus und Prompt-Einhaltung aus.",

    readyToCreate: "Bereit, erstaunliche",
    amazingVideos: "Videos zu erstellen?",
    footerCtaDescription: "Schließen Sie sich Tausenden von Erstellern an, die bereits ihre Ideen mit Google Veo 3 in atemberaubende Videos verwandeln.",
    downloadVeoNow: "Veo jetzt herunterladen",
    backToTop: "Nach oben",
    videosGeneratedStat: "Generierte Videos",
    uptimeStat: "Betriebszeit",
    availabilityStat: "Verfügbarkeit",
    
    faqTitle: "Häufig gestellte",
    faqDescription: "Erhalten Sie Antworten auf häufige Fragen zu Google Veo 3.",
    faqQuestions: [
      {
        question: "Was ist Google Veo 3?",
        answer: "Google Veo 3 ist ein fortschrittliches KI-Videogenerierungsmodell, das hochwertige Videos aus Textbeschreibungen erstellt."
      },
      {
        question: "Wie erhalte ich Zugang?",
        answer: "Sie können über unsere Plattform frühzeitigen Zugang beantragen. Wir gewähren Benutzern schrittweise Zugang."
      },
      {
        question: "Welche Videoformate werden unterstützt?",
        answer: "Veo 3 unterstützt verschiedene Videoformate einschließlich MP4, WebM und MOV mit verschiedenen Auflösungen bis zu 4K."
      },
      {
        question: "Gibt es eine kostenlose Testversion?",
        answer: "Ja, wir bieten eine begrenzte kostenlose Testversion für neue Benutzer an, um die Fähigkeiten von Veo 3 zu erleben."
      }
    ],
    
    footerDescription: "Die Zukunft der KI-gestützten Videogenerierung. Erstellen Sie atemberaubende, fotorealistische Videos aus einfachen Textbeschreibungen.",
    followUs: "Folgen Sie uns",
    product: "Produkt",
    models: "Modelle",
    modelsDescription: "Bauen Sie mit unseren KI-Systemen der nächsten Generation",
    legal: "Rechtliches",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    allRightsReserved: "Alle Rechte vorbehalten.",
    googleProducts: "Google-Produkte",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    
    close: "Schließen",
    loading: "Laden...",
    error: "Fehler aufgetreten"
  }
};
