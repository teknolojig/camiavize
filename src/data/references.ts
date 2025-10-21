export interface ReferenceSpec {
  quantity?: number;
  diameter?: string;
  type?: string;
}

export interface Reference {
  id: string;
  title: string;
  location?: string;
  category: string;
  image: string;
  images: string[]; // Gallery images
  description: string;
  slug: string;
  fullDescription?: string;
  specifications?: {
    mainChandeliers?: ReferenceSpec[];
    wallSconces?: {
      quantity?: number;
      material?: string;
    };
    capacity?: string;
    style?: string;
    colors?: string[];
    materials?: string[];
  };
  features?: string[];
  year?: string;
}

export const references: Reference[] = [
  {
    id: '1',
    title: 'Emin Sinan Camii',
    location: 'İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/emin-sinan-01.jpg',
    images: [
      '/images/projects/emin-sinan-01.jpg',
      '/images/projects/emin-sinan-02.jpg',
      '/images/projects/emin-sinan-03.jpg',
    ],
    description: 'Emin Sinan Camii için özel tasarlanmış Osmanlı serisi cami avizesi ve aydınlatma sistemleri',
    fullDescription: 'Emin Sinan Camii projesi, caminin duvarlarıyla uyumlu aydınlatma çözümleri yaratmayı hedeflemiştir. Transparan ve bordo renkli Osmanlı avize serileri üretilerek, mekanın ilahi atmosferine katkı sağlayan, duvar aplikler ve dekoratif panellerle desteklenen yaratıcı aydınlatma çözümleri geliştirilmiştir.',
    slug: 'emin-sinan-camii',
    specifications: {
      style: 'Osmanlı Serisi',
      colors: ['Transparan', 'Bordo'],
      materials: ['Cam', 'Metal aplikler', 'Duvar panoları']
    },
    features: [
      'Mevcut duvar mimarisiyle koordineli özel tasarım',
      'Çoklu aydınlatma elemanlarının entegrasyonu',
      'Manevi atmosferi vurgulayan yaratıcı aydınlatma yaklaşımı',
      'Duvar aplikler ve panellerle zenginleştirilmiş tasarım'
    ],
    year: '2023'
  },
  {
    id: '2',
    title: 'Üsküdar Barbaros Camii',
    location: 'Üsküdar, İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/uskudar-barbaros-01.png',
    images: [
      '/images/projects/uskudar-barbaros-01.png',
      '/images/projects/uskudar-barbaros-02.png',
    ],
    description: 'Üsküdar Barbaros Camii için bordo renkli Osmanlı tarzı cami avizesi ve aydınlatma çözümleri',
    fullDescription: 'Bu cami projesi, bordo renkli Osmanlı tarzı avizeleri ile ana aydınlatma kurulumu olarak öne çıkmaktadır. Tasarım, kutsal mekan boyunca tam ihtişamıyla dikkatleri üzerine çekmektedir.',
    slug: 'uskudar-barbaros-camii',
    specifications: {
      style: 'Osmanlı Avize Serisi',
      colors: ['Bordo/Kızıl']
    },
    features: [
      'Osmanlı avize ürün hattı',
      'Cami ortamları için özel tasarlanmış',
      'Geleneksel estetik çekicilik'
    ],
    year: '2023'
  },
  {
    id: '3',
    title: 'Bakırköy Basınköy Camii',
    location: 'Bakırköy, İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/basinkoy-01.png',
    images: [
      '/images/projects/basinkoy-01.png',
      '/images/projects/basinkoy-02.png',
    ],
    description: 'Bakırköy Basınköy Camii için özel tasarım bordo Osmanlı avize serisi ve aydınlatma ürünleri',
    fullDescription: 'Proje, caminin iç mekanıyla olağanüstü uyum sağlayan bordo Osmanlı avize serisini içermektedir. Tasarım, renk koordinasyonu ve mimari uyumluluk yoluyla çarpıcı bir görsel etki yaratmaktadır.',
    slug: 'bakirkoy-basinkoy-camii',
    specifications: {
      style: 'Osmanlı Serisi',
      colors: ['Bordo/Kızıl']
    },
    features: [
      'Olağanüstü mekansal uyum',
      'Entegre tasarım yoluyla göz alıcı etki',
      'Caminin mimarisiyle estetik entegrasyon'
    ],
    year: '2023'
  },
  {
    id: '4',
    title: 'Fatih Kadırga Bostan-ı Ali Camii',
    location: 'Kadırga, Fatih, İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/bostan-i-ali-01.png',
    images: [
      '/images/projects/bostan-i-ali-01.png',
      '/images/projects/bostan-i-ali-02.png',
    ],
    description: 'Fatih Kadırga Bostan-ı Ali Camii için turkuaz tonlarında Osmanlı Serisi cami avizeleri',
    fullDescription: 'Caminin aydınlatması, yapının kültürel kimliğiyle uyumlu Osmanlı Serisi avizeleri içermektedir. Turkuaz renklerle üretilen Osmanlı Serisi, mekana ilahi bir atmosfer kazandırmaktadır.',
    slug: 'fatih-kadirga-bostani-ali-camii',
    specifications: {
      style: 'Osmanlı Serisi Avizeler',
      colors: ['Turkuaz tonları']
    },
    features: [
      'Osmanlı estetik prensiplerini yansıtır',
      'Binanın geleneksel karakteriyle renk koordinasyonu',
      'Tasarım yoluyla manevi olarak yükseltilmiş atmosfer'
    ],
    year: '2023'
  },
  {
    id: '5',
    title: 'İzmit Hacı Fatma Karaman Camii',
    location: 'Gölcük, İzmit',
    category: 'Cami Avizeleri',
    image: '/images/projects/haci-fatma-karaman-01.png',
    images: [
      '/images/projects/haci-fatma-karaman-01.png',
      '/images/projects/haci-fatma-karaman-02.png',
    ],
    description: 'İzmit Hacı Fatma Karaman Camii için Selçuklu tarzı el işçiliği transparan cam avizeler',
    fullDescription: 'Bu cami, Selçuklu mimari tarzını yansıtacak şekilde yenilenmiştir. Tesis, berraklık ve sadeliği vurgulayan bir atmosfer yaratan, tamamen el işçiliği transparan cam avizeler içermektedir. Aydınlatma tasarımı, kültürel mirası aydınlatırken caminin mimari yapısını ortaya çıkarmaktadır.',
    slug: 'izmit-haci-fatma-karaman-camii',
    specifications: {
      capacity: '500 kişilik',
      style: 'Selçuklu mimari tarzı',
      materials: ['El yapımı transparan cam'],
    },
    features: [
      'Tüm avizeler el yapımı transparan camdan üretilmiştir',
      'Özel mekan için özel aydınlatma tasarımı',
      'Aydınlatma mimari elemanları ve kültürel önemi ortaya çıkarır',
      'Berraklık ve estetik sadeliğe vurgu'
    ],
    year: '2023'
  },
  {
    id: '6',
    title: 'Davutpaşa Yıldız Teknik Üniversitesi Camii',
    location: 'Davutpaşa Kampüsü, İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/ytu-01.png',
    images: [
      '/images/projects/ytu-01.png',
      '/images/projects/ytu-02.png',
    ],
    description: 'Yıldız Teknik Üniversitesi Camii için Osmanlı ve çağdaş estetik birleşimi ile tasarlanmış 99 kollu sembolik avize',
    fullDescription: 'Tasarım, Osmanlı tarzı işçiliği çağdaş estetikle birleştirmektedir. Avize, transparan cam kollar ve yıldız formasyonları içererek geleneksel ve modern tasarım arasında görsel bir köprü oluşturmaktadır. Proje, duvar apliklerinde hat yazısı ile "Allah" kelimesini yıldız motifi üzerinde yükselten tasarım içermektedir. Ana kubbe avizesi, her birinde entegre aydınlatma bulunan 99 cam kol göstermekte olup, Allah\'ın 99 ismini (Esma-ül Hüsna) temsil etmektedir.',
    slug: 'davutpasa-yildiz-teknik-universitesi',
    specifications: {
      style: 'Osmanlı esintili çağdaş geçiş',
      mainChandeliers: [
        {
          quantity: 1,
          type: 'Ana kubbe avizesi - 99 cam kol'
        }
      ],
      materials: ['Transparan cam kollar', 'Hat yazısı detayları', 'Yıldız formasyonu elemanları']
    },
    features: [
      'Geleneksel Osmanlı ve çağdaş tasarımı birleştirir',
      '99 cam kol ile İslami teolojik sembolizm',
      'Hat yazısı detaylı transparan cam kollar',
      'Yıldız formasyonu tasarım elemanı',
      'Kubbe mimarisi ile özel entegrasyon',
      'Her kolda entegre aydınlatma ile Esma-ül Hüsna temsili'
    ],
    year: '2023'
  },
  {
    id: '7',
    title: 'Ali Bahadır Köyü Camii',
    location: 'Ali Bahadır Köyü',
    category: 'Cami Avizeleri',
    image: '/images/projects/ali-bahadir-01.jpg',
    images: [
      '/images/projects/ali-bahadir-01.jpg',
      '/images/projects/ali-bahadir-02.jpg',
    ],
    description: 'Ali Bahadır Köyü Camii için özel tasarım geleneksel cami avizesi ve aydınlatma çözümleri',
    fullDescription: 'Cami, özel avize tasarımları almıştır. Firma, özel tasarımlarıyla bu camiye katkıda bulunmuş ve camiye yakışır bir proje ortaya çıkarmıştır.',
    slug: 'ali-bahadir-koyu-camii',
    specifications: {
      style: 'Özel tasarım avize',
    },
    features: [
      'Özel tasarım çalışması',
      'Özelleştirilmiş cami aydınlatma armatürleri',
      'Geleneksel ustalık teknikleri'
    ],
    year: '2023'
  },
  {
    id: '8',
    title: 'Barbaros Hayrettin Paşa Camii',
    location: 'İstanbul',
    category: 'Cami Avizeleri',
    image: '/images/projects/barbaros-hayrettin-pasa-01.jpg',
    images: [
      '/images/projects/barbaros-hayrettin-pasa-01.jpg',
      '/images/projects/barbaros-hayrettin-pasa-02.jpg',
      '/images/projects/barbaros-hayrettin-pasa-03.jpg',
      '/images/projects/barbaros-hayrettin-pasa-04.jpg',
    ],
    description: 'Barbaros Hayrettin Paşa Camii için özel tasarlanmış cami avizesi ve aydınlatma sistemleri. Mimar Sinan\'ın Süleymaniye Camii eserinden ilham alınarak üretilmiştir.',
    fullDescription: 'Barbaros Hayrettin Paşa Camii\'nin avize ve aydınlatma armatürleri Cami Avize tarafından üretilip monte edilmiştir. Caminin tasarımı, Mimar Sinan\'ın kalfalık dönemi eseri olan Süleymaniye Camii\'nden esinlenilerek yapılmıştır. Özel el şekilli serbest biçimli ve üflemeli cam sanatı kullanılarak geleneksel ustalık yöntemleriyle üretilen camlar kullanılmıştır.',
    slug: 'barbaros-hayrettin-pasa-camii',
    specifications: {
      mainChandeliers: [
        { quantity: 4, diameter: '240 cm' },
        { quantity: 46, diameter: '200 cm' },
        { quantity: 12, diameter: '90 cm', type: 'tavan armatürü' },
        { quantity: 4, diameter: '70 cm', type: 'tavan armatürü' },
      ],
      wallSconces: {
        quantity: 70,
        material: 'avizelerle aynı cam'
      },
      style: 'Osmanlı - Süleymaniye esintili',
      materials: ['El işçiliği üflemeli cam', 'Paslanmaz çelik', 'Selçuk motifli özel tasarım']
    },
    features: [
      'El şekilli serbest biçimli ve üflemeli cam sanatı',
      'Geleneksel ustalık yöntemleriyle özel cam üretimi',
      'Süleymaniye Camii\'nden esinlenen tasarım',
      'Galeri bölümlerinde özel paslanmaz çelik armatürler',
      'Merdiven bölümlerinde Selçuk modeli armatürler'
    ],
    year: '2023'
  }
];
