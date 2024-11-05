var menuData = [
        {
            text: 'Anasayfa',
            href: '/'
        },
        {
            text: 'Kurumsal',
            children: [
                { text: 'Hakkımızda', href: '#' },
                { text: 'Yönetim Kurulu', href: '#' },
                { text: 'Üst Yönetim', href: '#' },
                {
                    text: 'Tüseb Başkanı',
                    children: [
                        { text: 'Özgeçmiş', href: '#' },
                        { text: 'Akademik ve Bilimsel Etkinlikler', href: '#' },
                        { text: 'Röportaj ve Yayınlar', href: '#' },
                        { text: 'Başkan Fotoğrafları', href: '#' }
                    ]
                },
                {
                    text: 'Teşkilat Yapısı',
                    children: [
                        { text: 'Özel Kalem Müdürlüğü', href: '#' },
                        {
                            text: 'Genel Sekreterlik',
                            children: [
                                { text: 'Dış İlişkiler Daire Başkanlığı', href: '#' },
                                { text: 'Hukuk Hizmetleri Daire Başkanlığı', href: '#' },
                                {
                                    text: 'Strateji Geliştirme Daire Başkanlığı',
                                    children: [
                                        { text: 'Muhasebe ve Kesin Hesap Birimi', href: '#' },
                                        { text: 'İç Kontrol Birimi', href: '#' },
                                        { text: 'Bütçe ve Performans Birimi', href: '#' },
                                        { text: 'Strateji Yönetim ve Planlama Birimi', href: '#' }
                                    ]
                                },
                                {
                                    text: 'Yönetim Hizmetleri Daire Başkanlığı',
                                    children: [
                                        { text: 'Bilgi İşlem Birimi', href: '#' },
                                        { text: 'İnsan Kaynakları Birimi', href: '#' },
                                        { text: 'Destek Hizmetleri Birimi', href: '#' },
                                        { text: 'İdari ve Mali İşler Birimi', href: '#' }
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'Başkan Yardımcısı 1',
                            children: [
                                { text: 'Sağlık Endüstrileri Yerlileşme ve Proje Geliştirme Daire Başkanlığı', href: '#' },
                                { text: 'Teknoloji Transfer Ofisi', href: '#' }
                            ]
                        },
                        {
                            text: 'Başkan Yardımcısı 2',
                            children: [
                                { text: 'Proje Yönetimi ve Destek Daire Başkanlığı', href: '#' },
                                { text: 'Proje Destek Politikaları Birimi', href: '#' }
                            ]
                        },
                        { text: 'Başkan Yardımcısı 3', href: '#' },
                        { text: 'Enstitü Başkanlıkları', href: '#' }
                    ]
                },
                {
                    text: 'Mevzuat',
                    children: [
                        { text: 'Kanunlar', href: '#' },
                        { text: 'Cumhurbaskanlığı Kararnameleri', href: '#' },
                        { text: 'Yönetmelikler', href: '#' },
                        { text: 'Usul ve Esaslar', href: '#' },
                        { text: 'Genelgeler', href: '#' },
                        { text: 'Yönergeler', href: '#' },
                        { text: 'Kamu Etik Davranış Kuralları', href: '#' }
                    ]
                },
                { text: 'Mali Duyurular', href: '#' },
                { text: 'Faliyet Raporları', href: '#' },
                { text: 'Stratejik Planlar', href: '#' },
                {
                    text: 'İç Kontrol',
                    children: [
                        { text: 'İç Kontrol Hakkında', href: '#' },
                        { text: 'Eylem Planları', href: '#' },
                        { text: 'Değerlendirme Raporları', href: '#' },
                        { text: 'İç Kontrol Dökümanları', href: '#' }
                    ]
                },
                { text: 'Performans Programları', href: '#' },
                { text: 'Arabuluculuk Komisyonu', href: '#' },
                { text: 'İnsan Kaynakları', href: '#' },
                {
                    text: 'Yayınlar',
                    children: [
                        { text: 'TÜSEB Dergisi', href: '#' },
                        { text: 'TÜSEB 2040 Strateji ve Vizyon Çalıştayı Raporu', href: '#' },
                        { text: 'Klinik Araştırmalar Mevcut Durum ve Öneriler Çalıştay Raporu', href: '#' },
                        { text: 'Türk Devletleri Teşkilatı 8. Türk Tıp Dünyası Kurultayı Çalıştay Sonuç Raporu', href: '#' },
                        { text: 'Analizler ve Raporlar', href: '#' },
                        { text: 'Kitaplar ve Kitap Bölümleri', href: '#' },
                        { text: 'Rehberler', href: '#' },
                        { text: 'Röportajlar', href: '#' },
                        { text: 'TÜSEB Geleceğin Pandemileri Sempozyumu Raporu', href: '#' },
                        { text: '9. Türk Tıp Dünyası Kurultayı Raporu', href: '#' },
                        {
                            text: 'Makaleler',
                            children: [
                                { text: 'Sağlıkta Çözüm Teknolojide', href: '#' },
                                { text: 'COVID-19’da ‘fikirden ürüne’ etkin güç: TÜSEB', href: '#' },
                                { text: 'TÜSEB’in Biyoteknoloji Alanındaki AR-GE Faaliyet ve Destekleri', href: '#' }
                            ]
                        }
                    ]
                },
                { text: 'Teşkilat Şeması', href: '#' },
                { text: 'Yerleşkelerimiz', href: '#' }
            ]
        },
        {
            text: 'Enstitüler',
            children: [
                { text: 'Türkiye Anne Çocuk ve Ergen Sağlığı Enstitüsü', href: '#' },
                { text: 'Türkiye Biyoteknoloji Enstitüsü', href: '#' },
                { text: 'Türkiye Kanser Enstitüsü', href: '#' },
                { text: 'Türkiye Halk Sağlığı ve Kronik Hastalıklar Enstitüsü', href: '#' },
                { text: 'Türkiye Sağlık Hizmetleri Kalite ve Akreditasyon Enstitüsü', href: '#' },
                { text: 'Türkiye Sağlık Politikaları Enstitüsü', href: '#' },
                { text: 'Türkiye Aşı Enstitüsü', href: '#' },
                { text: 'Türkiye Sağlık Veri Araştırmaları ve Yapay Zeka Uygulamaları Enstitüsü', href: '#' }
            ]
        },
        {
            text: 'Merkezler',
            children: [
                { text: 'Türkiye Ulusal Genom Merkezi (TUGEM)', href: '#' },
                { text: 'BİYAŞAM', href: '#' }
            ]
        },
        { text: 'Proje Destekleri', href: '#' },
        {
            text: 'TÜSEB TTO',
            children: [
                { text: 'Girişimcilik ve İnovasyon Birimi', href: '#' },
                { text: 'Yerlileştirme ve Ticarileştirme Birimi', href: '#' },
                { text: 'Fikri ve Sınai Mülkiyet Hakları Birimi', href: '#' },
                { text: 'Klinik Araştırmalar Koordinasyon Birimi', href: '#' },
                { text: 'Teknoloji Dönüşümü Eğitim Birimi', href: '#' },
                { text: 'Ekibimiz', href: '#' },
                { text: 'TTO İletişim', href: '#' }
            ]
        },
        {
            text: 'Basın',
            children: [
                { text: 'Basında TÜSEB', href: '#' }
            ]
        }
    ];


    $(document).ready(function(){
        function buildMenu(data, parent){
            var ul = $("<ul>").appendTo(parent);
            $.each(data, function(){
                var li = $("<li>").appendTo(ul).addClass("closed"); // Kapalı sınıfı eklenir
                var a = $("<a>").text(this.text).attr("href", this.href).appendTo(li);
                if(this.children){
                    li.addClass("has-children child-menu"); // child-menu sınıfı eklendi
                    buildMenu(this.children, li);
                    // Alt menü varsa, yazının yanına ok işareti eklenir
                    var arrow = $("<i>").addClass("arrow fas fa-chevron-down").appendTo(a);
                }
            });
        }
    
        buildMenu(menuData, $("#menu"));
    
   $(".has-children > a").click(function(e){
        e.preventDefault();
        var $parentLi = $(this).parent();
        var $siblingsLi = $parentLi.siblings(".has-children");

        // Diğer alt menüleri kapat
        $siblingsLi.removeClass("opened").addClass("closed").find("ul").slideUp();

        // Seçilen alt menüyü aç/kapat
        $parentLi.toggleClass("closed opened").children("ul");
    });
});