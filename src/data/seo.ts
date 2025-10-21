export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: 'Cami Avizesi | Cami Avize Modelleri ve Fiyatları | Tavcam',
    description: '38 yıllık tecrübesiyle Türkiye\'nin önde gelen cami avizesi üreticisi. Cami avize modelleri, özel tasarım cami avizeleri ve uygun fiyatlarla kaliteli hizmet. Ücretsiz keşif ve montaj.',
    keywords: ['cami avizesi', 'cami avize', 'cami avizeleri', 'cami avize modelleri', 'cami avize fiyatları', 'cami aydınlatma', 'tavcam'],
    ogImage: '/images/og-home.jpg'
  },
  about: {
    title: 'Hakkımızda | Cami Avizesi Üreticisi | 38 Yıllık Tecrübe | Tavcam',
    description: 'Tavcam olarak 38 yıldır cami avizesi ve cami aydınlatma sistemleri üretiyoruz. El işçiliği cam sanatı ve özel tasarım cami avizeleri ile 40\'tan fazla ülkeye ihracat yapıyoruz.',
    keywords: ['cami avizesi üreticisi', 'cami avize firması', 'tavcam hakkında', 'cami avizesi istanbul', 'el işçiliği cam'],
    ogImage: '/images/og-about.jpg'
  },
  contact: {
    title: 'İletişim | Cami Avizesi Teklif Al | Ücretsiz Keşif | Tavcam',
    description: 'Cami avizesi için teklif almak ve ücretsiz keşif hizmeti için bizimle iletişime geçin. Cami avize projeniz için profesyonel danışmanlık ve uygun fiyat garantisi.',
    keywords: ['cami avizesi teklif', 'cami avize fiyat', 'cami avizesi iletişim', 'ücretsiz keşif', 'tavcam iletişim'],
    ogImage: '/images/og-contact.jpg'
  },
  references: {
    title: 'Referanslarımız | Cami Avizesi Projeleri | Tamamlanan İşler | Tavcam',
    description: 'Türkiye genelinde tamamladığımız cami avizesi projeleri ve referanslarımız. İstanbul, İzmit ve birçok ilde başarıyla tamamlanmış cami avize işlerimizi inceleyin.',
    keywords: ['cami avizesi referansları', 'cami avize projeleri', 'tamamlanan projeler', 'cami aydınlatma işleri', 'tavcam referanslar'],
    ogImage: '/images/og-references.jpg'
  }
};

export const defaultSEO: SEOData = {
  title: 'Cami Avizesi | Tavcam',
  description: 'Türkiye\'nin önde gelen cami avizesi üreticisi',
  keywords: ['cami avizesi', 'cami avize', 'tavcam'],
};
