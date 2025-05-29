
import { Language } from '../hooks/useLanguage';

export interface Translations {
  // Navigation
  features: string;
  interface: string;
  gallery: string;
  faq: string;
  getEarlyAccess: string;
  download: string;
  backToTop: string;

  // Hero Section
  theFutureOfVideo: string;
  startsHere: string;
  heroDescription: string;
  enterYourEmail: string;
  getAccess: string;
  downloadNow: string;
  watchPreview: string;
  alreadyHaveAccess: string;
  privacyNotice: string;

  // Features Section
  revolutionaryFeatures: string;
  featuresDescription: string;
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

  // Stats Section
  statsTitle: string;
  statsDescription: string;
  videosGenerated: string;
  activeUsers: string;
  satisfactionRate: string;

  // Interface Section
  interfaceTitle: string;
  interfaceDescription: string;
  textToVideo: string;
  textToVideoOption: string;
  aspectRatio: string;
  outputsPerPrompt: string;
  quality: string;
  enhancePrompt: string;
  standardQuality: string;
  highQuality: string;
  enterPromptHere: string;
  promptSuggestions: string[];

  // Audio Video Section
  audioVideoTitle: string;
  audioVideoDescription: string;

  // Gallery Section
  galleryTitle: string;
  galleryDescription: string;
  promptGallery: string;

  // FAQ Section
  faqTitle: string;
  faqDescription: string;
  faqQuestions: Array<{
    question: string;
    answer: string;
  }>;

  // Footer CTA
  readyToCreate: string;
  amazingVideos: string;
  footerCtaDescription: string;
  downloadVeoNow: string;
  videosGeneratedStat: string;
  uptimeStat: string;
  availabilityStat: string;

  // Footer
  footerDescription: string;
  quickLinks: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  contact: string;
  support: string;
  allRightsReserved: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    features: 'Features',
    interface: 'Interface',
    gallery: 'Gallery',
    faq: 'FAQ',
    getEarlyAccess: 'Get Early Access',
    download: 'Download',
    backToTop: 'Back to Top',

    // Hero Section
    theFutureOfVideo: 'The Future of Video',
    startsHere: 'Starts Here',
    heroDescription: 'Create stunning, photorealistic videos from simple text descriptions using Google\'s most advanced AI video generation technology.',
    enterYourEmail: 'Enter your email address',
    getAccess: 'Get Access',
    downloadNow: 'Download Now',
    watchPreview: 'Watch Preview',
    alreadyHaveAccess: 'Already have access?',
    privacyNotice: 'Your email is safe with us. No spam, ever.',

    // Features Section
    revolutionaryFeatures: 'Revolutionary Features',
    featuresDescription: 'Experience the next generation of AI video creation with cutting-edge technology and intuitive design',
    advancedAI: 'Advanced AI Technology',
    advancedAIDesc: 'Powered by cutting-edge artificial intelligence that understands context, style, and narrative flow to create compelling video content.',
    lightningFast: 'Lightning-Fast Generation',
    lightningFastDesc: 'Generate high-quality videos in minutes, not hours. Our optimized algorithms ensure rapid processing without compromising quality.',
    stunningVisual: 'Stunning Visual Quality',
    stunningVisualDesc: 'Experience cinema-grade video generation with realistic lighting, textures, and motion that bring your ideas to life.',
    globalAccessibility: 'Global Accessibility',
    globalAccessibilityDesc: 'Available worldwide with multi-language support, making AI video creation accessible to creators everywhere.',
    securePrivate: 'Secure & Private',
    securePrivateDesc: 'Your content and data are protected with enterprise-grade security. Create with confidence knowing your privacy is our priority.',
    continuousInnovation: 'Continuous Innovation',
    continuousInnovationDesc: 'Regular updates and new features ensure you always have access to the latest in AI video generation technology.',

    // Stats Section
    statsTitle: 'Trusted by Creators Worldwide',
    statsDescription: 'Join millions of content creators who are already transforming their ideas into stunning visual stories',
    videosGenerated: 'Videos Generated',
    activeUsers: 'Active Users',
    satisfactionRate: 'Satisfaction Rate',

    // Interface Section
    interfaceTitle: 'Veo 3 Interface Preview',
    interfaceDescription: 'Experience the intuitive interface that makes AI video creation accessible to everyone',
    textToVideo: 'Text to Video',
    textToVideoOption: 'Text to Video',
    aspectRatio: 'Aspect Ratio',
    outputsPerPrompt: 'Outputs per prompt',
    quality: 'Quality',
    enhancePrompt: 'Enhance prompt',
    standardQuality: 'Standard',
    highQuality: 'High',
    enterPromptHere: 'Enter your prompt here...',
    promptSuggestions: [
      'A cat playing with a ball of yarn',
      'Sunset over mountain landscape',
      'Person walking through city at night',
      'Ocean waves crashing on beach',
      'Children playing in the park',
      'Raindrops falling on window'
    ],

    // Audio Video Section
    audioVideoTitle: 'Audio & Video Generation',
    audioVideoDescription: 'Veo 3 lets you add sound effects, ambient noise, and even dialogue to your creations – generating all audio natively. It also delivers best in class quality, excelling in physics, realism and prompt adherence.',

    // Gallery Section
    galleryTitle: 'Prompt Gallery',
    galleryDescription: 'Explore amazing videos created by our community using simple text prompts',
    promptGallery: 'Prompt Gallery',

    // FAQ Section
    faqTitle: 'Frequently Asked',
    faqDescription: 'Everything you need to know about Google Veo 3',
    faqQuestions: [
      {
        question: 'What is Google Veo 3?',
        answer: 'Google Veo 3 is an advanced AI-powered video generation tool that creates high-quality, photorealistic videos from simple text descriptions. It represents the latest breakthrough in generative AI technology.'
      },
      {
        question: 'Is Veo 3 really free to use?',
        answer: 'Yes! Veo 3 is completely free during the early access period. We believe in democratizing AI video creation and making this powerful technology accessible to everyone.'
      },
      {
        question: 'What video formats and resolutions are supported?',
        answer: 'Veo 3 supports multiple output formats including MP4, WebM, and MOV. You can generate videos in resolutions up to 4K, with typical generation times of 10-30 seconds depending on complexity.'
      },
      {
        question: 'How long can the generated videos be?',
        answer: 'Currently, Veo 3 can generate videos up to 60 seconds in length. This duration is perfect for social media content, marketing materials, and creative projects.'
      },
      {
        question: 'Do I need any technical knowledge to use Veo 3?',
        answer: 'Not at all! Veo 3 is designed to be user-friendly. Simply describe what you want to see in natural language, and our AI will create the video for you. No video editing experience required.'
      },
      {
        question: 'Can I use generated videos commercially?',
        answer: 'Yes, videos generated with Veo 3 can be used for commercial purposes. You retain full rights to the content you create, making it perfect for business and creative projects.'
      },
      {
        question: 'What makes Veo 3 different from other AI video tools?',
        answer: 'Veo 3 offers superior video quality, faster generation times, and more accurate interpretation of text prompts. Our advanced neural networks create more realistic motion, lighting, and detail than previous generations.'
      },
      {
        question: 'How do I get access to the full version?',
        answer: 'Download the Veo 3 app using the provided link and use the archive password to unlock all features. The full version includes additional generation modes and advanced customization options.'
      }
    ],

    // Footer CTA
    readyToCreate: 'Ready to Create',
    amazingVideos: 'Amazing Videos?',
    footerCtaDescription: 'Join thousands of creators who are already transforming their ideas into stunning visual content',
    downloadVeoNow: 'Download Veo 3 Now',
    videosGeneratedStat: 'Videos Generated',
    uptimeStat: 'Uptime',
    availabilityStat: 'Availability',

    // Footer
    footerDescription: 'Revolutionary AI video generation technology that transforms your ideas into stunning visual content.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contact: 'Contact',
    support: 'Support',
    allRightsReserved: 'All rights reserved.',
  },

  zh: {
    // Navigation
    features: '功能',
    interface: '界面',
    gallery: '画廊',
    faq: '常见问题',
    getEarlyAccess: '获取抢先体验',
    download: '下载',
    backToTop: '返回顶部',

    // Hero Section
    theFutureOfVideo: '视频的未来',
    startsHere: '从这里开始',
    heroDescription: '使用谷歌最先进的AI视频生成技术，通过简单的文本描述创建令人惊叹的逼真视频。',
    enterYourEmail: '输入您的邮箱地址',
    getAccess: '获取访问权限',
    downloadNow: '立即下载',
    watchPreview: '观看预览',
    alreadyHaveAccess: '已有访问权限？',
    privacyNotice: '您的邮箱是安全的。绝不发送垃圾邮件。',

    // Features Section
    revolutionaryFeatures: '革命性功能',
    featuresDescription: '体验下一代AI视频创作，采用尖端技术和直观设计',
    advancedAI: '先进AI技术',
    advancedAIDesc: '由尖端人工智能驱动，理解上下文、风格和叙事流程，创造引人入胜的视频内容。',
    lightningFast: '闪电般快速生成',
    lightningFastDesc: '在几分钟内生成高质量视频，而不是几小时。我们的优化算法确保快速处理而不影响质量。',
    stunningVisual: '惊艳的视觉质量',
    stunningVisualDesc: '体验电影级视频生成，具有逼真的光影、纹理和动作，将您的想法变为现实。',
    globalAccessibility: '全球可访问性',
    globalAccessibilityDesc: '全球可用，支持多种语言，让世界各地的创作者都能使用AI视频创作。',
    securePrivate: '安全私密',
    securePrivateDesc: '您的内容和数据受到企业级安全保护。安心创作，我们将隐私作为首要任务。',
    continuousInnovation: '持续创新',
    continuousInnovationDesc: '定期更新和新功能确保您始终能够使用最新的AI视频生成技术。',

    // Stats Section
    statsTitle: '受到全球创作者信赖',
    statsDescription: '加入数百万已经将想法转化为令人惊叹视觉故事的内容创作者',
    videosGenerated: '生成视频数',
    activeUsers: '活跃用户',
    satisfactionRate: '满意度',

    // Interface Section
    interfaceTitle: 'Veo 3 界面预览',
    interfaceDescription: '体验直观的界面，让每个人都能轻松使用AI视频创作',
    textToVideo: '文本转视频',
    textToVideoOption: '文本转视频',
    aspectRatio: '宽高比',
    outputsPerPrompt: '每个提示的输出数',
    quality: '质量',
    enhancePrompt: '增强提示',
    standardQuality: '标准',
    highQuality: '高质量',
    enterPromptHere: '在此输入您的提示...',
    promptSuggestions: [
      '猫咪玩毛线球',
      '山景日落',
      '夜晚城市中行走的人',
      '海浪拍打海滩',
      '孩子们在公园里玩耍',
      '雨滴落在窗户上'
    ],

    // Audio Video Section
    audioVideoTitle: '音频和视频生成',
    audioVideoDescription: 'Veo 3 让您为创作添加音效、环境音，甚至对话 - 本地生成所有音频。它还提供一流的质量，在物理、真实感和提示遵循方面表现出色。',

    // Gallery Section
    galleryTitle: '提示画廊',
    galleryDescription: '探索我们社区使用简单文本提示创建的精彩视频',
    promptGallery: '提示画廊',

    // FAQ Section
    faqTitle: '常见问题',
    faqDescription: '关于Google Veo 3您需要了解的一切',
    faqQuestions: [
      {
        question: '什么是Google Veo 3？',
        answer: 'Google Veo 3是一个先进的AI驱动视频生成工具，可以从简单的文本描述创建高质量、逼真的视频。它代表了生成式AI技术的最新突破。'
      },
      {
        question: 'Veo 3真的免费使用吗？',
        answer: '是的！Veo 3在抢先体验期间完全免费。我们相信AI视频创作的民主化，让每个人都能使用这项强大的技术。'
      },
      {
        question: '支持哪些视频格式和分辨率？',
        answer: 'Veo 3支持多种输出格式，包括MP4、WebM和MOV。您可以生成高达4K分辨率的视频，典型生成时间为10-30秒，具体取决于复杂程度。'
      },
      {
        question: '生成的视频可以多长？',
        answer: '目前，Veo 3可以生成长达60秒的视频。这个时长非常适合社交媒体内容、营销材料和创意项目。'
      },
      {
        question: '使用Veo 3需要技术知识吗？',
        answer: '完全不需要！Veo 3设计得非常用户友好。只需用自然语言描述您想要看到的内容，我们的AI就会为您创建视频。不需要视频编辑经验。'
      },
      {
        question: '生成的视频可以商业使用吗？',
        answer: '是的，使用Veo 3生成的视频可以用于商业目的。您拥有所创建内容的完整权利，非常适合商业和创意项目。'
      },
      {
        question: 'Veo 3与其他AI视频工具有什么不同？',
        answer: 'Veo 3提供卓越的视频质量、更快的生成时间和更准确的文本提示解释。我们的先进神经网络创造比以往更逼真的动作、光影和细节。'
      },
      {
        question: '如何获得完整版本的访问权限？',
        answer: '使用提供的链接下载Veo 3应用程序，并使用存档密码解锁所有功能。完整版本包括额外的生成模式和高级自定义选项。'
      }
    ],

    // Footer CTA
    readyToCreate: '准备创作',
    amazingVideos: '精彩视频？',
    footerCtaDescription: '加入数千名已经将想法转化为令人惊叹视觉内容的创作者',
    downloadVeoNow: '立即下载Veo 3',
    videosGeneratedStat: '生成视频数',
    uptimeStat: '运行时间',
    availabilityStat: '可用性',

    // Footer
    footerDescription: '革命性的AI视频生成技术，将您的想法转化为令人惊叹的视觉内容。',
    quickLinks: '快速链接',
    legal: '法律',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    contact: '联系我们',
    support: '支持',
    allRightsReserved: '版权所有。',
  },

  hi: {
    // Navigation
    features: 'विशेषताएं',
    interface: 'इंटरफेस',
    gallery: 'गैलरी',
    faq: 'सामान्य प्रश्न',
    getEarlyAccess: 'जल्दी पहुंच पाएं',
    download: 'डाउनलोड',
    backToTop: 'टॉप पर वापस',

    // Hero Section
    theFutureOfVideo: 'वीडियो का भविष्य',
    startsHere: 'यहां शुरू होता है',
    heroDescription: 'Google की सबसे उन्नत AI वीडियो जेनरेशन तकनीक का उपयोग करके सरल टेक्स्ट विवरण से आश्चर्यजनक, फोटोरियलिस्टिक वीडियो बनाएं।',
    enterYourEmail: 'अपना ईमेल पता दर्ज करें',
    getAccess: 'पहुंच प्राप्त करें',
    downloadNow: 'अभी डाउनलोड करें',
    watchPreview: 'पूर्वावलोकन देखें',
    alreadyHaveAccess: 'पहले से ही पहुंच है?',
    privacyNotice: 'आपका ईमेल हमारे साथ सुरक्षित है। कोई स्पैम नहीं, कभी नहीं।',

    // Features Section
    revolutionaryFeatures: 'क्रांतिकारी विशेषताएं',
    featuresDescription: 'अत्याधुनिक तकनीक और सहज डिज़ाइन के साथ AI वीडियो निर्माण की अगली पीढ़ी का अनुभव करें',
    advancedAI: 'उन्नत AI तकनीक',
    advancedAIDesc: 'अत्याधुनिक कृत्रिम बुद्धिमत्ता द्वारा संचालित जो संदर्भ, शैली और कथा प्रवाह को समझकर आकर्षक वीडियो सामग्री बनाती है।',
    lightningFast: 'बिजली की तरह तेज़ जेनरेशन',
    lightningFastDesc: 'घंटों नहीं, मिनटों में उच्च गुणवत्ता वाले वीडियो जेनरेट करें। हमारे ऑप्टिमाइज़्ड एल्गोरिदम गुणवत्ता से समझौता किए बिना तेज़ प्रोसेसिंग सुनिश्चित करते हैं।',
    stunningVisual: 'शानदार विज़ुअल गुणवत्ता',
    stunningVisualDesc: 'सिनेमा-ग्रेड वीडियो जेनरेशन का अनुभव करें जिसमें यथार्थवादी प्रकाश, बनावट और गति है जो आपके विचारों को जीवंत बनाती है।',
    globalAccessibility: 'वैश्विक पहुंच',
    globalAccessibilityDesc: 'बहुभाषी समर्थन के साथ विश्वव्यापी रूप से उपलब्ध, हर जगह के रचनाकारों के लिए AI वीडियो निर्माण को सुलभ बनाता है।',
    securePrivate: 'सुरक्षित और निजी',
    securePrivateDesc: 'आपकी सामग्री और डेटा एंटरप्राइज़-ग्रेड सुरक्षा से सुरक्षित हैं। विश्वास के साथ बनाएं क्योंकि आपकी गोपनीयता हमारी प्राथमिकता है।',
    continuousInnovation: 'निरंतर नवाचार',
    continuousInnovationDesc: 'नियमित अपडेट और नई सुविधाएं सुनिश्चित करती हैं कि आपके पास हमेशा AI वीडियो जेनरेशन तकनीक की नवीनतम पहुंच हो।',

    // Stats Section
    statsTitle: 'दुनिया भर के रचनाकारों द्वारा भरोसा',
    statsDescription: 'लाखों सामग्री निर्माताओं में शामिल हों जो पहले से ही अपने विचारों को आश्चर्यजनक दृश्य कहानियों में बदल रहे हैं',
    videosGenerated: 'जेनरेटेड वीडियो',
    activeUsers: 'सक्रिय उपयोगकर्ता',
    satisfactionRate: 'संतुष्टि दर',

    // Interface Section
    interfaceTitle: 'Veo 3 इंटरफेस पूर्वावलोकन',
    interfaceDescription: 'सहज इंटरफेस का अनुभव करें जो सभी के लिए AI वीडियो निर्माण को सुलभ बनाता है',
    textToVideo: 'टेक्स्ट से वीडियो',
    textToVideoOption: 'टेक्स्ट से वीडियो',
    aspectRatio: 'पहलू अनुपात',
    outputsPerPrompt: 'प्रति प्रॉम्प्ट आउटपुट',
    quality: 'गुणवत्ता',
    enhancePrompt: 'प्रॉम्प्ट बढ़ाएं',
    standardQuality: 'मानक',
    highQuality: 'उच्च',
    enterPromptHere: 'यहां अपना प्रॉम्प्ट दर्ज करें...',
    promptSuggestions: [
      'धागे की गेंद से खेलती बिल्ली',
      'पहाड़ी परिदृश्य पर सूर्यास्त',
      'रात में शहर में चलता व्यक्ति',
      'समुद्र तट पर टकराती लहरें',
      'पार्क में खेलते बच्चे',
      'खिड़की पर गिरती बारिश की बूंदें'
    ],

    // Audio Video Section
    audioVideoTitle: 'ऑडियो और वीडियो जेनरेशन',
    audioVideoDescription: 'Veo 3 आपको अपनी रचनाओं में ध्वनि प्रभाव, परिवेशी शोर, और यहां तक कि संवाद जोड़ने देता है - सभी ऑडियो को मूल रूप से जेनरेट करता है। यह भौतिकी, यथार्थवाद और प्रॉम्प्ट पालन में उत्कृष्टता के साथ सर्वोत्तम गुणवत्ता भी प्रदान करता है।',

    // Gallery Section
    galleryTitle: 'प्रॉम्प्ट गैलरी',
    galleryDescription: 'सरल टेक्स्ट प्रॉम्प्ट का उपयोग करके हमारे समुदाय द्वारा बनाए गए अद्भुत वीडियो देखें',
    promptGallery: 'प्रॉम्प्ट गैलरी',

    // FAQ Section
    faqTitle: 'अक्सर पूछे जाने वाले',
    faqDescription: 'Google Veo 3 के बारे में जो कुछ भी आपको जानना चाहिए',
    faqQuestions: [
      {
        question: 'Google Veo 3 क्या है?',
        answer: 'Google Veo 3 एक उन्नत AI-संचालित वीडियो जेनरेशन टूल है जो सरल टेक्स्ट विवरण से उच्च गुणवत्ता, फोटोरियलिस्टिक वीडियो बनाता है। यह जेनरेटिव AI तकनीक में नवीनतम सफलता का प्रतिनिधित्व करता है।'
      },
      {
        question: 'क्या Veo 3 वास्तव में उपयोग के लिए मुफ़्त है?',
        answer: 'हां! जल्दी पहुंच अवधि के दौरान Veo 3 पूरी तरह से मुफ़्त है। हम AI वीडियो निर्माण के लोकतंत्रीकरण में विश्वास करते हैं और इस शक्तिशाली तकनीक को सभी के लिए सुलभ बनाते हैं।'
      },
      {
        question: 'कौन से वीडियो फॉर्मेट और रिज़ॉल्यूशन समर्थित हैं?',
        answer: 'Veo 3 MP4, WebM, और MOV सहित कई आउटपुट फॉर्मेट का समर्थन करता है। आप 4K तक के रिज़ॉल्यूशन में वीडियो जेनरेट कर सकते हैं, जटिलता के आधार पर सामान्य जेनरेशन समय 10-30 सेकंड है।'
      },
      {
        question: 'जेनरेटेड वीडियो कितने लंबे हो सकते हैं?',
        answer: 'वर्तमान में, Veo 3 60 सेकंड तक लंबे वीडियो जेनरेट कर सकता है। यह अवधि सोशल मीडिया सामग्री, मार्केटिंग सामग्री, और रचनात्मक परियोजनाओं के लिए एकदम सही है।'
      },
      {
        question: 'क्या मुझे Veo 3 का उपयोग करने के लिए तकनीकी ज्ञान की आवश्यकता है?',
        answer: 'बिल्कुल नहीं! Veo 3 को उपयोगकर्ता-अनुकूल बनाया गया है। बस प्राकृतिक भाषा में वर्णन करें कि आप क्या देखना चाहते हैं, और हमारा AI आपके लिए वीडियो बनाएगा। कोई वीडियो एडिटिंग अनुभव की आवश्यकता नहीं।'
      },
      {
        question: 'क्या मैं जेनरेटेड वीडियो का व्यावसायिक उपयोग कर सकता हूं?',
        answer: 'हां, Veo 3 से जेनरेटेड वीडियो का व्यावसायिक उद्देश्यों के लिए उपयोग किया जा सकता है। आप जो सामग्री बनाते हैं उसके पूर्ण अधिकार आप रखते हैं, जो इसे व्यावसायिक और रचनात्मक परियोजनाओं के लिए एकदम सही बनाता है।'
      },
      {
        question: 'Veo 3 को अन्य AI वीडियो टूल से क्या अलग बनाता है?',
        answer: 'Veo 3 बेहतर वीडियो गुणवत्ता, तेज़ जेनरेशन समय, और टेक्स्ट प्रॉम्प्ट की अधिक सटीक व्याख्या प्रदान करता है। हमारे उन्नत न्यूरल नेटवर्क पिछली पीढ़ियों की तुलना में अधिक यथार्थवादी गति, प्रकाश और विवरण बनाते हैं।'
      },
      {
        question: 'मुझे पूर्ण संस्करण की पहुंच कैसे मिलती है?',
        answer: 'प्रदान किए गए लिंक का उपयोग करके Veo 3 ऐप डाउनलोड करें और सभी सुविधाओं को अनलॉक करने के लिए आर्काइव पासवर्ड का उपयोग करें। पूर्ण संस्करण में अतिरिक्त जेनरेशन मोड और उन्नत कस्टमाइज़ेशन विकल्प शामिल हैं।'
      }
    ],

    // Footer CTA
    readyToCreate: 'बनाने के लिए तैयार',
    amazingVideos: 'अद्भुत वीडियो?',
    footerCtaDescription: 'हजारों रचनाकारों में शामिल हों जो पहले से ही अपने विचारों को आश्चर्यजनक दृश्य सामग्री में बदल रहे हैं',
    downloadVeoNow: 'अभी Veo 3 डाउनलोड करें',
    videosGeneratedStat: 'जेनरेटेड वीडियो',
    uptimeStat: 'अपटाइम',
    availabilityStat: 'उपलब्धता',

    // Footer
    footerDescription: 'क्रांतिकारी AI वीडियो जेनरेशन तकनीक जो आपके विचारों को आश्चर्यजनक दृश्य सामग्री में बदलती है।',
    quickLinks: 'त्वरित लिंक',
    legal: 'कानूनी',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    contact: 'संपर्क',
    support: 'समर्थन',
    allRightsReserved: 'सभी अधिकार सुरक्षित।',
  },

  es: {
    // Navigation
    features: 'Características',
    interface: 'Interfaz',
    gallery: 'Galería',
    faq: 'Preguntas frecuentes',
    getEarlyAccess: 'Obtener acceso anticipado',
    download: 'Descargar',
    backToTop: 'Volver arriba',

    // Hero Section
    theFutureOfVideo: 'El futuro del video',
    startsHere: 'Comienza aquí',
    heroDescription: 'Crea videos impresionantes y fotorrealistas a partir de descripciones de texto simples usando la tecnología de generación de video AI más avanzada de Google.',
    enterYourEmail: 'Ingresa tu dirección de correo electrónico',
    getAccess: 'Obtener acceso',
    downloadNow: 'Descargar ahora',
    watchPreview: 'Ver vista previa',
    alreadyHaveAccess: '¿Ya tienes acceso?',
    privacyNotice: 'Tu correo está seguro con nosotros. Sin spam, nunca.',

    // Features Section
    revolutionaryFeatures: 'Características revolucionarias',
    featuresDescription: 'Experimenta la próxima generación de creación de video AI con tecnología de vanguardia y diseño intuitivo',
    advancedAI: 'Tecnología AI avanzada',
    advancedAIDesc: 'Impulsado por inteligencia artificial de vanguardia que entiende el contexto, estilo y flujo narrativo para crear contenido de video convincente.',
    lightningFast: 'Generación ultrarrápida',
    lightningFastDesc: 'Genera videos de alta calidad en minutos, no horas. Nuestros algoritmos optimizados aseguran procesamiento rápido sin comprometer la calidad.',
    stunningVisual: 'Calidad visual impresionante',
    stunningVisualDesc: 'Experimenta generación de video de grado cinematográfico con iluminación, texturas y movimiento realistas que dan vida a tus ideas.',
    globalAccessibility: 'Accesibilidad global',
    globalAccessibilityDesc: 'Disponible en todo el mundo con soporte multiidioma, haciendo la creación de video AI accesible para creadores en todas partes.',
    securePrivate: 'Seguro y privado',
    securePrivateDesc: 'Tu contenido y datos están protegidos con seguridad de nivel empresarial. Crea con confianza sabiendo que tu privacidad es nuestra prioridad.',
    continuousInnovation: 'Innovación continua',
    continuousInnovationDesc: 'Actualizaciones regulares y nuevas características aseguran que siempre tengas acceso a lo último en tecnología de generación de video AI.',

    // Stats Section
    statsTitle: 'Confiado por creadores en todo el mundo',
    statsDescription: 'Únete a millones de creadores de contenido que ya están transformando sus ideas en historias visuales impresionantes',
    videosGenerated: 'Videos generados',
    activeUsers: 'Usuarios activos',
    satisfactionRate: 'Tasa de satisfacción',

    // Interface Section
    interfaceTitle: 'Vista previa de la interfaz Veo 3',
    interfaceDescription: 'Experimenta la interfaz intuitiva que hace la creación de video AI accesible para todos',
    textToVideo: 'Texto a video',
    textToVideoOption: 'Texto a video',
    aspectRatio: 'Relación de aspecto',
    outputsPerPrompt: 'Salidas por prompt',
    quality: 'Calidad',
    enhancePrompt: 'Mejorar prompt',
    standardQuality: 'Estándar',
    highQuality: 'Alta',
    enterPromptHere: 'Ingresa tu prompt aquí...',
    promptSuggestions: [
      'Un gato jugando con un ovillo de lana',
      'Atardecer sobre paisaje montañoso',
      'Persona caminando por la ciudad de noche',
      'Olas del océano rompiendo en la playa',
      'Niños jugando en el parque',
      'Gotas de lluvia cayendo en la ventana'
    ],

    // Audio Video Section
    audioVideoTitle: 'Generación de audio y video',
    audioVideoDescription: 'Veo 3 te permite agregar efectos de sonido, ruido ambiental e incluso diálogo a tus creaciones, generando todo el audio de forma nativa. También ofrece la mejor calidad de su clase, sobresaliendo en física, realismo y adherencia al prompt.',

    // Gallery Section
    galleryTitle: 'Galería de prompts',
    galleryDescription: 'Explora videos increíbles creados por nuestra comunidad usando prompts de texto simples',
    promptGallery: 'Galería de prompts',

    // FAQ Section
    faqTitle: 'Preguntas frecuentes',
    faqDescription: 'Todo lo que necesitas saber sobre Google Veo 3',
    faqQuestions: [
      {
        question: '¿Qué es Google Veo 3?',
        answer: 'Google Veo 3 es una herramienta avanzada de generación de video impulsada por AI que crea videos de alta calidad y fotorrealistas a partir de descripciones de texto simples. Representa el último avance en tecnología de AI generativa.'
      },
      {
        question: '¿Es Veo 3 realmente gratis de usar?',
        answer: '¡Sí! Veo 3 es completamente gratis durante el período de acceso anticipado. Creemos en democratizar la creación de video AI y hacer esta poderosa tecnología accesible para todos.'
      },
      {
        question: '¿Qué formatos de video y resoluciones son compatibles?',
        answer: 'Veo 3 soporta múltiples formatos de salida incluyendo MP4, WebM y MOV. Puedes generar videos en resoluciones de hasta 4K, con tiempos de generación típicos de 10-30 segundos dependiendo de la complejidad.'
      },
      {
        question: '¿Qué tan largos pueden ser los videos generados?',
        answer: 'Actualmente, Veo 3 puede generar videos de hasta 60 segundos de duración. Esta duración es perfecta para contenido de redes sociales, materiales de marketing y proyectos creativos.'
      },
      {
        question: '¿Necesito conocimiento técnico para usar Veo 3?',
        answer: '¡Para nada! Veo 3 está diseñado para ser fácil de usar. Simplemente describe lo que quieres ver en lenguaje natural, y nuestra AI creará el video para ti. No se requiere experiencia en edición de video.'
      },
      {
        question: '¿Puedo usar los videos generados comercialmente?',
        answer: 'Sí, los videos generados con Veo 3 pueden usarse para fines comerciales. Retienes todos los derechos del contenido que creas, haciéndolo perfecto para proyectos comerciales y creativos.'
      },
      {
        question: '¿Qué hace diferente a Veo 3 de otras herramientas de video AI?',
        answer: 'Veo 3 ofrece calidad de video superior, tiempos de generación más rápidos y interpretación más precisa de prompts de texto. Nuestras redes neuronales avanzadas crean movimiento, iluminación y detalles más realistas que las generaciones anteriores.'
      },
      {
        question: '¿Cómo obtengo acceso a la versión completa?',
        answer: 'Descarga la app Veo 3 usando el enlace proporcionado y usa la contraseña del archivo para desbloquear todas las características. La versión completa incluye modos de generación adicionales y opciones de personalización avanzadas.'
      }
    ],

    // Footer CTA
    readyToCreate: 'Listo para crear',
    amazingVideos: '¿videos increíbles?',
    footerCtaDescription: 'Únete a miles de creadores que ya están transformando sus ideas en contenido visual impresionante',
    downloadVeoNow: 'Descargar Veo 3 ahora',
    videosGeneratedStat: 'Videos generados',
    uptimeStat: 'Tiempo de actividad',
    availabilityStat: 'Disponibilidad',

    // Footer
    footerDescription: 'Tecnología revolucionaria de generación de video AI que transforma tus ideas en contenido visual impresionante.',
    quickLinks: 'Enlaces rápidos',
    legal: 'Legal',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    contact: 'Contacto',
    support: 'Soporte',
    allRightsReserved: 'Todos los derechos reservados.',
  },

  fr: {
    // Navigation
    features: 'Fonctionnalités',
    interface: 'Interface',
    gallery: 'Galerie',
    faq: 'FAQ',
    getEarlyAccess: 'Obtenir un accès anticipé',
    download: 'Télécharger',
    backToTop: 'Retour en haut',

    // Hero Section
    theFutureOfVideo: 'L\'avenir de la vidéo',
    startsHere: 'Commence ici',
    heroDescription: 'Créez des vidéos époustouflantes et photoréalistes à partir de simples descriptions textuelles en utilisant la technologie de génération vidéo IA la plus avancée de Google.',
    enterYourEmail: 'Entrez votre adresse e-mail',
    getAccess: 'Obtenir l\'accès',
    downloadNow: 'Télécharger maintenant',
    watchPreview: 'Voir l\'aperçu',
    alreadyHaveAccess: 'Vous avez déjà accès ?',
    privacyNotice: 'Votre e-mail est en sécurité avec nous. Pas de spam, jamais.',

    // Features Section
    revolutionaryFeatures: 'Fonctionnalités révolutionnaires',
    featuresDescription: 'Découvrez la nouvelle génération de création vidéo IA avec une technologie de pointe et un design intuitif',
    advancedAI: 'Technologie IA avancée',
    advancedAIDesc: 'Alimenté par une intelligence artificielle de pointe qui comprend le contexte, le style et le flux narratif pour créer du contenu vidéo convaincant.',
    lightningFast: 'Génération ultra-rapide',
    lightningFastDesc: 'Générez des vidéos de haute qualité en minutes, pas en heures. Nos algorithmes optimisés assurent un traitement rapide sans compromettre la qualité.',
    stunningVisual: 'Qualité visuelle époustouflante',
    stunningVisualDesc: 'Découvrez la génération vidéo de qualité cinématographique avec un éclairage, des textures et un mouvement réalistes qui donnent vie à vos idées.',
    globalAccessibility: 'Accessibilité mondiale',
    globalAccessibilityDesc: 'Disponible dans le monde entier avec un support multilingue, rendant la création vidéo IA accessible aux créateurs partout.',
    securePrivate: 'Sécurisé et privé',
    securePrivateDesc: 'Votre contenu et vos données sont protégés par une sécurité de niveau entreprise. Créez en toute confiance en sachant que votre vie privée est notre priorité.',
    continuousInnovation: 'Innovation continue',
    continuousInnovationDesc: 'Des mises à jour régulières et de nouvelles fonctionnalités garantissent que vous avez toujours accès aux dernières technologies de génération vidéo IA.',

    // Stats Section
    statsTitle: 'Approuvé par les créateurs du monde entier',
    statsDescription: 'Rejoignez des millions de créateurs de contenu qui transforment déjà leurs idées en histoires visuelles époustouflantes',
    videosGenerated: 'Vidéos générées',
    activeUsers: 'Utilisateurs actifs',
    satisfactionRate: 'Taux de satisfaction',

    // Interface Section
    interfaceTitle: 'Aperçu de l\'interface Veo 3',
    interfaceDescription: 'Découvrez l\'interface intuitive qui rend la création vidéo IA accessible à tous',
    textToVideo: 'Texte vers vidéo',
    textToVideoOption: 'Texte vers vidéo',
    aspectRatio: 'Ratio d\'aspect',
    outputsPerPrompt: 'Sorties par prompt',
    quality: 'Qualité',
    enhancePrompt: 'Améliorer le prompt',
    standardQuality: 'Standard',
    highQuality: 'Haute',
    enterPromptHere: 'Entrez votre prompt ici...',
    promptSuggestions: [
      'Un chat jouant avec une pelote de laine',
      'Coucher de soleil sur un paysage montagneux',
      'Personne marchant dans la ville la nuit',
      'Vagues de l\'océan s\'écrasant sur la plage',
      'Enfants jouant dans le parc',
      'Gouttes de pluie tombant sur la fenêtre'
    ],

    // Audio Video Section
    audioVideoTitle: 'Génération audio et vidéo',
    audioVideoDescription: 'Veo 3 vous permet d\'ajouter des effets sonores, du bruit ambiant et même des dialogues à vos créations - générant tout l\'audio nativement. Il offre également une qualité de classe mondiale, excellant en physique, réalisme et adhésion aux prompts.',

    // Gallery Section
    galleryTitle: 'Galerie de prompts',
    galleryDescription: 'Explorez des vidéos incroyables créées par notre communauté en utilisant de simples prompts textuels',
    promptGallery: 'Galerie de prompts',

    // FAQ Section
    faqTitle: 'Questions fréquemment posées',
    faqDescription: 'Tout ce que vous devez savoir sur Google Veo 3',
    faqQuestions: [
      {
        question: 'Qu\'est-ce que Google Veo 3 ?',
        answer: 'Google Veo 3 est un outil avancé de génération vidéo alimenté par IA qui crée des vidéos de haute qualité et photoréalistes à partir de simples descriptions textuelles. Il représente la dernière percée en technologie IA générative.'
      },
      {
        question: 'Veo 3 est-il vraiment gratuit à utiliser ?',
        answer: 'Oui ! Veo 3 est complètement gratuit pendant la période d\'accès anticipé. Nous croyons en la démocratisation de la création vidéo IA et en rendant cette technologie puissante accessible à tous.'
      },
      {
        question: 'Quels formats vidéo et résolutions sont supportés ?',
        answer: 'Veo 3 supporte plusieurs formats de sortie incluant MP4, WebM et MOV. Vous pouvez générer des vidéos en résolutions jusqu\'à 4K, avec des temps de génération typiques de 10-30 secondes selon la complexité.'
      },
      {
        question: 'Quelle peut être la durée des vidéos générées ?',
        answer: 'Actuellement, Veo 3 peut générer des vidéos jusqu\'à 60 secondes de durée. Cette durée est parfaite pour le contenu des réseaux sociaux, les matériaux marketing et les projets créatifs.'
      },
      {
        question: 'Ai-je besoin de connaissances techniques pour utiliser Veo 3 ?',
        answer: 'Pas du tout ! Veo 3 est conçu pour être convivial. Décrivez simplement ce que vous voulez voir en langage naturel, et notre IA créera la vidéo pour vous. Aucune expérience en montage vidéo requise.'
      },
      {
        question: 'Puis-je utiliser les vidéos générées commercialement ?',
        answer: 'Oui, les vidéos générées avec Veo 3 peuvent être utilisées à des fins commerciales. Vous conservez tous les droits sur le contenu que vous créez, le rendant parfait pour les projets commerciaux et créatifs.'
      },
      {
        question: 'Qu\'est-ce qui rend Veo 3 différent des autres outils vidéo IA ?',
        answer: 'Veo 3 offre une qualité vidéo supérieure, des temps de génération plus rapides et une interprétation plus précise des prompts textuels. Nos réseaux neuronaux avancés créent un mouvement, un éclairage et des détails plus réalistes que les générations précédentes.'
      },
      {
        question: 'Comment puis-je accéder à la version complète ?',
        answer: 'Téléchargez l\'application Veo 3 en utilisant le lien fourni et utilisez le mot de passe d\'archive pour débloquer toutes les fonctionnalités. La version complète inclut des modes de génération supplémentaires et des options de personnalisation avancées.'
      }
    ],

    // Footer CTA
    readyToCreate: 'Prêt à créer',
    amazingVideos: 'des vidéos incroyables ?',
    footerCtaDescription: 'Rejoignez des milliers de créateurs qui transforment déjà leurs idées en contenu visuel époustouflant',
    downloadVeoNow: 'Télécharger Veo 3 maintenant',
    videosGeneratedStat: 'Vidéos générées',
    uptimeStat: 'Temps de fonctionnement',
    availabilityStat: 'Disponibilité',

    // Footer
    footerDescription: 'Technologie révolutionnaire de génération vidéo IA qui transforme vos idées en contenu visuel époustouflant.',
    quickLinks: 'Liens rapides',
    legal: 'Légal',
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions de service',
    contact: 'Contact',
    support: 'Support',
    allRightsReserved: 'Tous droits réservés.',
  },

  ar: {
    // Navigation
    features: 'الميزات',
    interface: 'الواجهة',
    gallery: 'المعرض',
    faq: 'الأسئلة الشائعة',
    getEarlyAccess: 'احصل على الوصول المبكر',
    download: 'تحميل',
    backToTop: 'العودة إلى الأعلى',

    // Hero Section
    theFutureOfVideo: 'مستقبل الفيديو',
    startsHere: 'يبدأ هنا',
    heroDescription: 'أنشئ مقاطع فيديو مذهلة وواقعية من أوصاف نصية بسيطة باستخدام أحدث تقنيات توليد الفيديو بالذكاء الاصطناعي من Google.',
    enterYourEmail: 'أدخل عنوان بريدك الإلكتروني',
    getAccess: 'احصل على الوصول',
    downloadNow: 'تحميل الآن',
    watchPreview: 'مشاهدة المعاينة',
    alreadyHaveAccess: 'لديك وصول بالفعل؟',
    privacyNotice: 'بريدك الإلكتروني آمن معنا. لا رسائل مزعجة، أبداً.',

    // Features Section
    revolutionaryFeatures: 'ميزات ثورية',
    featuresDescription: 'اختبر الجيل القادم من إنشاء الفيديو بالذكاء الاصطناعي مع التكنولوجيا المتطورة والتصميم البديهي',
    advancedAI: 'تقنية الذكاء الاصطناعي المتقدمة',
    advancedAIDesc: 'مدعوم بذكاء اصطناعي متطور يفهم السياق والأسلوب وتدفق السرد لإنشاء محتوى فيديو مقنع.',
    lightningFast: 'توليد سريع البرق',
    lightningFastDesc: 'توليد مقاطع فيديو عالية الجودة في دقائق، وليس ساعات. خوارزمياتنا المحسنة تضمن معالجة سريعة دون التنازل عن الجودة.',
    stunningVisual: 'جودة بصرية مذهلة',
    stunningVisualDesc: 'اختبر توليد فيديو بجودة السينما مع إضاءة وأنسجة وحركة واقعية تجعل أفكارك تنبض بالحياة.',
    globalAccessibility: 'إمكانية الوصول العالمية',
    globalAccessibilityDesc: 'متاح في جميع أنحاء العالم مع دعم متعدد اللغات، مما يجعل إنشاء الفيديو بالذكاء الاصطناعي متاحاً للمبدعين في كل مكان.',
    securePrivate: 'آمن وخاص',
    securePrivateDesc: 'محتواك وبياناتك محمية بأمان على مستوى المؤسسات. أنشئ بثقة مع العلم أن خصوصيتك هي أولويتنا.',
    continuousInnovation: 'الابتكار المستمر',
    continuousInnovationDesc: 'التحديثات المنتظمة والميزات الجديدة تضمن أن لديك دائماً الوصول إلى أحدث تقنيات توليد الفيديو بالذكاء الاصطناعي.',

    // Stats Section
    statsTitle: 'موثوق به من قبل المبدعين حول العالم',
    statsDescription: 'انضم إلى ملايين منشئي المحتوى الذين يحولون بالفعل أفكارهم إلى قصص بصرية مذهلة',
    videosGenerated: 'مقاطع الفيديو المولدة',
    activeUsers: 'المستخدمون النشطون',
    satisfactionRate: 'معدل الرضا',

    // Interface Section
    interfaceTitle: 'معاينة واجهة Veo 3',
    interfaceDescription: 'اختبر الواجهة البديهية التي تجعل إنشاء الفيديو بالذكاء الاصطناعي متاحاً للجميع',
    textToVideo: 'نص إلى فيديو',
    textToVideoOption: 'نص إلى فيديو',
    aspectRatio: 'نسبة العرض إلى الارتفاع',
    outputsPerPrompt: 'المخرجات لكل موجه',
    quality: 'الجودة',
    enhancePrompt: 'تحسين الموجه',
    standardQuality: 'قياسي',
    highQuality: 'عالي',
    enterPromptHere: 'أدخل موجهك هنا...',
    promptSuggestions: [
      'قطة تلعب بكرة خيط',
      'غروب الشمس فوق المناظر الطبيعية الجبلية',
      'شخص يمشي في المدينة ليلاً',
      'أمواج المحيط تتكسر على الشاطئ',
      'أطفال يلعبون في الحديقة',
      'قطرات المطر تسقط على النافذة'
    ],

    // Audio Video Section
    audioVideoTitle: 'توليد الصوت والفيديو',
    audioVideoDescription: 'يتيح لك Veo 3 إضافة المؤثرات الصوتية والضوضاء المحيطة وحتى الحوار إلى إبداعاتك - يولد كل الصوت محلياً. كما يقدم جودة من الدرجة الأولى، متفوقاً في الفيزياء والواقعية والالتزام بالموجهات.',

    // Gallery Section
    galleryTitle: 'معرض الموجهات',
    galleryDescription: 'استكشف مقاطع فيديو مذهلة أنشأتها مجتمعنا باستخدام موجهات نصية بسيطة',
    promptGallery: 'معرض الموجهات',

    // FAQ Section
    faqTitle: 'الأسئلة المتكررة',
    faqDescription: 'كل ما تحتاج لمعرفته حول Google Veo 3',
    faqQuestions: [
      {
        question: 'ما هو Google Veo 3؟',
        answer: 'Google Veo 3 هو أداة متقدمة لتوليد الفيديو مدعومة بالذكاء الاصطناعي تنشئ مقاطع فيديو عالية الجودة وواقعية من أوصاف نصية بسيطة. يمثل أحدث اختراق في تقنية الذكاء الاصطناعي التوليدي.'
      },
      {
        question: 'هل Veo 3 مجاني حقاً للاستخدام؟',
        answer: 'نعم! Veo 3 مجاني تماماً خلال فترة الوصول المبكر. نؤمن بديمقراطية إنشاء الفيديو بالذكاء الاصطناعي وجعل هذه التقنية القوية متاحة للجميع.'
      },
      {
        question: 'ما تنسيقات الفيديو والدقة المدعومة؟',
        answer: 'يدعم Veo 3 تنسيقات إخراج متعددة بما في ذلك MP4 و WebM و MOV. يمكنك توليد مقاطع فيديو بدقة تصل إلى 4K، مع أوقات توليد نموذجية 10-30 ثانية حسب التعقيد.'
      },
      {
        question: 'كم يمكن أن تكون مدة مقاطع الفيديو المولدة؟',
        answer: 'حالياً، يمكن لـ Veo 3 توليد مقاطع فيديو تصل مدتها إلى 60 ثانية. هذه المدة مثالية لمحتوى وسائل التواصل الاجتماعي والمواد التسويقية والمشاريع الإبداعية.'
      },
      {
        question: 'هل أحتاج إلى معرفة تقنية لاستخدام Veo 3؟',
        answer: 'إطلاقاً! تم تصميم Veo 3 ليكون سهل الاستخدام. ببساطة صف ما تريد رؤيته بلغة طبيعية، وسيقوم الذكاء الاصطناعي لدينا بإنشاء الفيديو لك. لا تحتاج خبرة في تحرير الفيديو.'
      },
      {
        question: 'هل يمكنني استخدام مقاطع الفيديو المولدة تجارياً؟',
        answer: 'نعم، يمكن استخدام مقاطع الفيديو المولدة بـ Veo 3 لأغراض تجارية. تحتفظ بكامل الحقوق للمحتوى الذي تنشئه، مما يجعله مثالياً للمشاريع التجارية والإبداعية.'
      },
      {
        question: 'ما الذي يميز Veo 3 عن أدوات الفيديو الأخرى بالذكاء الاصطناعي؟',
        answer: 'يقدم Veo 3 جودة فيديو متفوقة وأوقات توليد أسرع وتفسير أكثر دقة للموجهات النصية. شبكاتنا العصبية المتقدمة تنشئ حركة وإضاءة وتفاصيل أكثر واقعية من الأجيال السابقة.'
      },
      {
        question: 'كيف أحصل على الوصول للنسخة الكاملة؟',
        answer: 'حمل تطبيق Veo 3 باستخدام الرابط المقدم واستخدم كلمة مرور الأرشيف لإلغاء قفل جميع الميزات. النسخة الكاملة تتضمن أوضاع توليد إضافية وخيارات تخصيص متقدمة.'
      }
    ],

    // Footer CTA
    readyToCreate: 'جاهز لإنشاء',
    amazingVideos: 'مقاطع فيديو مذهلة؟',
    footerCtaDescription: 'انضم إلى آلاف المبدعين الذين يحولون بالفعل أفكارهم إلى محتوى بصري مذهل',
    downloadVeoNow: 'حمل Veo 3 الآن',
    videosGeneratedStat: 'مقاطع الفيديو المولدة',
    uptimeStat: 'وقت التشغيل',
    availabilityStat: 'الإتاحة',

    // Footer
    footerDescription: 'تقنية ثورية لتوليد الفيديو بالذكاء الاصطناعي تحول أفكارك إلى محتوى بصري مذهل.',
    quickLinks: 'روابط سريعة',
    legal: 'قانوني',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    contact: 'اتصل بنا',
    support: 'الدعم',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  },

  pt: {
    // Navigation
    features: 'Recursos',
    interface: 'Interface',
    gallery: 'Galeria',
    faq: 'Perguntas frequentes',
    getEarlyAccess: 'Obter acesso antecipado',
    download: 'Baixar',
    backToTop: 'Voltar ao topo',

    // Hero Section
    theFutureOfVideo: 'O futuro do vídeo',
    startsHere: 'Começa aqui',
    heroDescription: 'Crie vídeos impressionantes e fotorrealistas a partir de descrições de texto simples usando a tecnologia de geração de vídeo IA mais avançada do Google.',
    enterYourEmail: 'Digite seu endereço de e-mail',
    getAccess: 'Obter acesso',
    downloadNow: 'Baixar agora',
    watchPreview: 'Assistir prévia',
    alreadyHaveAccess: 'Já tem acesso?',
    privacyNotice: 'Seu e-mail está seguro conosco. Sem spam, nunca.',

    // Features Section
    revolutionaryFeatures: 'Recursos revolucionários',
    featuresDescription: 'Experimente a próxima geração de criação de vídeo IA com tecnologia de ponta e design intuitivo',
    advancedAI: 'Tecnologia IA avançada',
    advancedAIDesc: 'Alimentado por inteligência artificial de ponta que entende contexto, estilo e fluxo narrativo para criar conteúdo de vídeo convincente.',
    lightningFast: 'Geração ultrarrápida',
    lightningFastDesc: 'Gere vídeos de alta qualidade em minutos, não horas. Nossos algoritmos otimizados garantem processamento rápido sem comprometer a qualidade.',
    stunningVisual: 'Qualidade visual impressionante',
    stunningVisualDesc: 'Experimente geração de vídeo com qualidade cinematográfica com iluminação, texturas e movimento realistas que dão vida às suas ideias.',
    globalAccessibility: 'Acessibilidade global',
    globalAccessibilityDesc: 'Disponível mundialmente com suporte multilíngue, tornando a criação de vídeo IA acessível para criadores em todos os lugares.',
    securePrivate: 'Seguro e privado',
    securePrivateDesc: 'Seu conteúdo e dados estão protegidos com segurança de nível empresarial. Crie com confiança sabendo que sua privacidade é nossa prioridade.',
    continuousInnovation: 'Inovação contínua',
    continuousInnovationDesc: 'Atualizações regulares e novos recursos garantem que você sempre tenha acesso ao que há de mais recente em tecnologia de geração de vídeo IA.',

    // Stats Section
    statsTitle: 'Confiável por criadores no mundo todo',
    statsDescription: 'Junte-se a milhões de criadores de conteúdo que já estão transformando suas ideias em histórias visuais impressionantes',
    videosGenerated: 'Vídeos gerados',
    activeUsers: 'Usuários ativos',
    satisfactionRate: 'Taxa de satisfação',

    // Interface Section
    interfaceTitle: 'Prévia da interface Veo 3',
    interfaceDescription: 'Experimente a interface intuitiva que torna a criação de vídeo IA acessível para todos',
    textToVideo: 'Texto para vídeo',
    textToVideoOption: 'Texto para vídeo',
    aspectRatio: 'Proporção de aspecto',
    outputsPerPrompt: 'Saídas por prompt',
    quality: 'Qualidade',
    enhancePrompt: 'Melhorar prompt',
    standardQuality: 'Padrão',
    highQuality: 'Alta',
    enterPromptHere: 'Digite seu prompt aqui...',
    promptSuggestions: [
      'Um gato brincando com novelo de lã',
      'Pôr do sol sobre paisagem montanhosa',
      'Pessoa caminhando pela cidade à noite',
      'Ondas do oceano quebrando na praia',
      'Crianças brincando no parque',
      'Gotas de chuva caindo na janela'
    ],

    // Audio Video Section
    audioVideoTitle: 'Geração de áudio e vídeo',
    audioVideoDescription: 'O Veo 3 permite adicionar efeitos sonoros, ruído ambiente e até diálogo às suas criações - gerando todo o áudio nativamente. Também oferece qualidade de primeira classe, se destacando em física, realismo e aderência ao prompt.',

    // Gallery Section
    galleryTitle: 'Galeria de prompts',
    galleryDescription: 'Explore vídeos incríveis criados por nossa comunidade usando prompts de texto simples',
    promptGallery: 'Galeria de prompts',

    // FAQ Section
    faqTitle: 'Perguntas frequentes',
    faqDescription: 'Tudo que você precisa saber sobre o Google Veo 3',
    faqQuestions: [
      {
        question: 'O que é o Google Veo 3?',
        answer: 'O Google Veo 3 é uma ferramenta avançada de geração de vídeo alimentada por IA que cria vídeos de alta qualidade e fotorrealistas a partir de descrições de texto simples. Representa o mais recente avanço em tecnologia de IA generativa.'
      },
      {
        question: 'O Veo 3 é realmente gratuito para usar?',
        answer: 'Sim! O Veo 3 é completamente gratuito durante o período de acesso antecipado. Acreditamos na democratização da criação de vídeo IA e em tornar esta tecnologia poderosa acessível para todos.'
      },
      {
        question: 'Quais formatos de vídeo e resoluções são suportados?',
        answer: 'O Veo 3 suporta múltiplos formatos de saída incluindo MP4, WebM e MOV. Você pode gerar vídeos em resoluções de até 4K, com tempos de geração típicos de 10-30 segundos dependendo da complexidade.'
      },
      {
        question: 'Qual pode ser a duração dos vídeos gerados?',
        answer: 'Atualmente, o Veo 3 pode gerar vídeos de até 60 segundos de duração. Esta duração é perfeita para conteúdo de redes sociais, materiais de marketing e projetos criativos.'
      },
      {
        question: 'Preciso de conhecimento técnico para usar o Veo 3?',
        answer: 'De forma alguma! O Veo 3 foi projetado para ser fácil de usar. Simplesmente descreva o que você quer ver em linguagem natural, e nossa IA criará o vídeo para você. Não é necessária experiência em edição de vídeo.'
      },
      {
        question: 'Posso usar os vídeos gerados comercialmente?',
        answer: 'Sim, vídeos gerados com o Veo 3 podem ser usados para fins comerciais. Você mantém todos os direitos sobre o conteúdo que cria, tornando-o perfeito para projetos comerciais e criativos.'
      },
      {
        question: 'O que torna o Veo 3 diferente de outras ferramentas de vídeo IA?',
        answer: 'O Veo 3 oferece qualidade de vídeo superior, tempos de geração mais rápidos e interpretação mais precisa de prompts de texto. Nossas redes neurais avançadas criam movimento, iluminação e detalhes mais realistas que gerações anteriores.'
      },
      {
        question: 'Como obtenho acesso à versão completa?',
        answer: 'Baixe o aplicativo Veo 3 usando o link fornecido e use a senha do arquivo para desbloquear todos os recursos. A versão completa inclui modos de geração adicionais e opções de personalização avançadas.'
      }
    ],

    // Footer CTA
    readyToCreate: 'Pronto para criar',
    amazingVideos: 'vídeos incríveis?',
    footerCtaDescription: 'Junte-se a milhares de criadores que já estão transformando suas ideias em conteúdo visual impressionante',
    downloadVeoNow: 'Baixar Veo 3 agora',
    videosGeneratedStat: 'Vídeos gerados',
    uptimeStat: 'Tempo de atividade',
    availabilityStat: 'Disponibilidade',

    // Footer
    footerDescription: 'Tecnologia revolucionária de geração de vídeo IA que transforma suas ideias em conteúdo visual impressionante.',
    quickLinks: 'Links rápidos',
    legal: 'Legal',
    privacyPolicy: 'Política de privacidade',
    termsOfService: 'Termos de serviço',
    contact: 'Contato',
    support: 'Suporte',
    allRightsReserved: 'Todos os direitos reservados.',
  },

  de: {
    // Navigation
    features: 'Funktionen',
    interface: 'Benutzeroberfläche',
    gallery: 'Galerie',
    faq: 'FAQ',
    getEarlyAccess: 'Frühen Zugang erhalten',
    download: 'Herunterladen',
    backToTop: 'Nach oben',

    // Hero Section
    theFutureOfVideo: 'Die Zukunft des Videos',
    startsHere: 'Beginnt hier',
    heroDescription: 'Erstellen Sie atemberaubende, fotorealistische Videos aus einfachen Textbeschreibungen mit Googles fortschrittlichster KI-Videogenerierungstechnologie.',
    enterYourEmail: 'Geben Sie Ihre E-Mail-Adresse ein',
    getAccess: 'Zugang erhalten',
    downloadNow: 'Jetzt herunterladen',
    watchPreview: 'Vorschau ansehen',
    alreadyHaveAccess: 'Haben Sie bereits Zugang?',
    privacyNotice: 'Ihre E-Mail ist bei uns sicher. Kein Spam, niemals.',

    // Features Section
    revolutionaryFeatures: 'Revolutionäre Funktionen',
    featuresDescription: 'Erleben Sie die nächste Generation der KI-Videoerstellung mit modernster Technologie und intuitivem Design',
    advancedAI: 'Fortschrittliche KI-Technologie',
    advancedAIDesc: 'Angetrieben von modernster künstlicher Intelligenz, die Kontext, Stil und Erzählfluss versteht, um überzeugende Videoinhalte zu erstellen.',
    lightningFast: 'Blitzschnelle Generierung',
    lightningFastDesc: 'Generieren Sie hochwertige Videos in Minuten, nicht Stunden. Unsere optimierten Algorithmen gewährleisten schnelle Verarbeitung ohne Qualitätsverlust.',
    stunningVisual: 'Atemberaubende visuelle Qualität',
    stunningVisualDesc: 'Erleben Sie Videogenerierung in Kinoqualität mit realistischer Beleuchtung, Texturen und Bewegung, die Ihre Ideen zum Leben erwecken.',
    globalAccessibility: 'Globale Zugänglichkeit',
    globalAccessibilityDesc: 'Weltweit verfügbar mit mehrsprachiger Unterstützung, wodurch KI-Videoerstellung für Kreative überall zugänglich wird.',
    securePrivate: 'Sicher und privat',
    securePrivateDesc: 'Ihre Inhalte und Daten sind mit Unternehmenssicherheit geschützt. Erstellen Sie mit Vertrauen, da Ihre Privatsphäre unsere Priorität ist.',
    continuousInnovation: 'Kontinuierliche Innovation',
    continuousInnovationDesc: 'Regelmäßige Updates und neue Funktionen stellen sicher, dass Sie immer Zugang zu den neuesten KI-Videogenerierungstechnologien haben.',

    // Stats Section
    statsTitle: 'Vertraut von Kreativen weltweit',
    statsDescription: 'Schließen Sie sich Millionen von Content-Erstellern an, die bereits ihre Ideen in atemberaubende visuelle Geschichten verwandeln',
    videosGenerated: 'Generierte Videos',
    activeUsers: 'Aktive Benutzer',
    satisfactionRate: 'Zufriedenheitsrate',

    // Interface Section
    interfaceTitle: 'Veo 3 Benutzeroberflächen-Vorschau',
    interfaceDescription: 'Erleben Sie die intuitive Benutzeroberfläche, die KI-Videoerstellung für alle zugänglich macht',
    textToVideo: 'Text zu Video',
    textToVideoOption: 'Text zu Video',
    aspectRatio: 'Seitenverhältnis',
    outputsPerPrompt: 'Ausgaben pro Eingabeaufforderung',
    quality: 'Qualität',
    enhancePrompt: 'Eingabeaufforderung verbessern',
    standardQuality: 'Standard',
    highQuality: 'Hoch',
    enterPromptHere: 'Geben Sie hier Ihre Eingabeaufforderung ein...',
    promptSuggestions: [
      'Eine Katze, die mit einem Wollknäuel spielt',
      'Sonnenuntergang über Berglandschaft',
      'Person, die nachts durch die Stadt geht',
      'Meereswellen, die am Strand brechen',
      'Kinder, die im Park spielen',
      'Regentropfen, die auf das Fenster fallen'
    ],

    // Audio Video Section
    audioVideoTitle: 'Audio- und Videogenerierung',
    audioVideoDescription: 'Veo 3 ermöglicht es Ihnen, Soundeffekte, Umgebungsgeräusche und sogar Dialoge zu Ihren Kreationen hinzuzufügen - alle Audioinhalte werden nativ generiert. Es liefert auch erstklassige Qualität und zeichnet sich in Physik, Realismus und Eingabeaufforderungstreue aus.',

    // Gallery Section
    galleryTitle: 'Eingabeaufforderungs-Galerie',
    galleryDescription: 'Entdecken Sie erstaunliche Videos, die von unserer Community mit einfachen Texteingabeaufforderungen erstellt wurden',
    promptGallery: 'Eingabeaufforderungs-Galerie',

    // FAQ Section
    faqTitle: 'Häufig gestellte Fragen',
    faqDescription: 'Alles, was Sie über Google Veo 3 wissen müssen',
    faqQuestions: [
      {
        question: 'Was ist Google Veo 3?',
        answer: 'Google Veo 3 ist ein fortschrittliches KI-gestütztes Videogenerierungstool, das hochwertige, fotorealistische Videos aus einfachen Textbeschreibungen erstellt. Es stellt den neuesten Durchbruch in der generativen KI-Technologie dar.'
      },
      {
        question: 'Ist Veo 3 wirklich kostenlos zu verwenden?',
        answer: 'Ja! Veo 3 ist während der Frühzugangsphase völlig kostenlos. Wir glauben an die Demokratisierung der KI-Videoerstellung und machen diese leistungsstarke Technologie für alle zugänglich.'
      },
      {
        question: 'Welche Videoformate und Auflösungen werden unterstützt?',
        answer: 'Veo 3 unterstützt mehrere Ausgabeformate einschließlich MP4, WebM und MOV. Sie können Videos in Auflösungen bis zu 4K generieren, mit typischen Generierungszeiten von 10-30 Sekunden je nach Komplexität.'
      },
      {
        question: 'Wie lang können die generierten Videos sein?',
        answer: 'Derzeit kann Veo 3 Videos mit einer Länge von bis zu 60 Sekunden generieren. Diese Dauer ist perfekt für Social-Media-Inhalte, Marketingmaterialien und kreative Projekte.'
      },
      {
        question: 'Benötige ich technisches Wissen, um Veo 3 zu verwenden?',
        answer: 'Überhaupt nicht! Veo 3 ist benutzerfreundlich gestaltet. Beschreiben Sie einfach, was Sie in natürlicher Sprache sehen möchten, und unsere KI erstellt das Video für Sie. Keine Videobearbeitungserfahrung erforderlich.'
      },
      {
        question: 'Kann ich die generierten Videos kommerziell nutzen?',
        answer: 'Ja, mit Veo 3 generierte Videos können für kommerzielle Zwecke verwendet werden. Sie behalten alle Rechte an den Inhalten, die Sie erstellen, was es perfekt für geschäftliche und kreative Projekte macht.'
      },
      {
        question: 'Was macht Veo 3 anders als andere KI-Video-Tools?',
        answer: 'Veo 3 bietet überlegene Videoqualität, schnellere Generierungszeiten und genauere Interpretation von Texteingabeaufforderungen. Unsere fortschrittlichen neuronalen Netzwerke erstellen realistischere Bewegung, Beleuchtung und Details als frühere Generationen.'
      },
      {
        question: 'Wie erhalte ich Zugang zur Vollversion?',
        answer: 'Laden Sie die Veo 3-App über den bereitgestellten Link herunter und verwenden Sie das Archivpasswort, um alle Funktionen freizuschalten. Die Vollversion umfasst zusätzliche Generierungsmodi und erweiterte Anpassungsoptionen.'
      }
    ],

    // Footer CTA
    readyToCreate: 'Bereit zu erstellen',
    amazingVideos: 'erstaunliche Videos?',
    footerCtaDescription: 'Schließen Sie sich Tausenden von Kreativen an, die bereits ihre Ideen in atemberaubende visuelle Inhalte verwandeln',
    downloadVeoNow: 'Veo 3 jetzt herunterladen',
    videosGeneratedStat: 'Generierte Videos',
    uptimeStat: 'Betriebszeit',
    availabilityStat: 'Verfügbarkeit',

    // Footer
    footerDescription: 'Revolutionäre KI-Videogenerierungstechnologie, die Ihre Ideen in atemberaubende visuelle Inhalte verwandelt.',
    quickLinks: 'Schnelllinks',
    legal: 'Rechtliches',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    contact: 'Kontakt',
    support: 'Support',
    allRightsReserved: 'Alle Rechte vorbehalten.',
  },
};

export const useTranslation = (language: Language): Translations => {
  return translations[language] || translations.en;
};
