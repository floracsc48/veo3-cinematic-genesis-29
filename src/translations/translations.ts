
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

  // Features Section
  featuresTitle: string;
  featuresDescription: string;

  // FAQ Section
  faqTitle: string;
  faqDescription: string;
  faqQuestions: Array<{
    question: string;
    answer: string;
  }>;

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
    
    featuresTitle: "Revolutionary",
    featuresDescription: "Experience the future of video creation with advanced AI capabilities.",
    
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
    
    featuresTitle: "Революционные",
    featuresDescription: "Познайте будущее создания видео с передовыми возможностями ИИ.",
    
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
    
    featuresTitle: "革命性",
    featuresDescription: "体验具有先进AI功能的视频创作的未来。",
    
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
    
    featuresTitle: "क्रांतिकारी",
    featuresDescription: "उन्नत AI क्षमताओं के साथ वीडियो निर्माण के भविष्य का अनुभव करें।",
    
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
    
    featuresTitle: "Revolucionario",
    featuresDescription: "Experimenta el futuro de la creación de videos con capacidades avanzadas de IA.",
    
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
    
    featuresTitle: "Révolutionnaire",
    featuresDescription: "Découvrez l'avenir de la création vidéo avec des capacités IA avancées.",
    
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
    
    featuresTitle: "ثوري",
    featuresDescription: "اختبر مستقبل إنشاء الفيديو مع قدرات الذكاء الاصطناعي المتقدمة.",
    
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
    
    featuresTitle: "Revolucionário",
    featuresDescription: "Experimente o futuro da criação de vídeo com recursos avançados de IA.",
    
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
    
    featuresTitle: "Revolutionär",
    featuresDescription: "Erleben Sie die Zukunft der Videoerstellung mit fortschrittlichen KI-Fähigkeiten.",
    
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
    
    close: "Schließen",
    loading: "Laden...",
    error: "Fehler aufgetreten"
  }
};
