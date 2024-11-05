$(document).ready(function () {
    $('.owl-carousel-main').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    });
});

$(document).ready(function () {
    $('.owl-carousel-haberler').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        loop: true,
        margin:20,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            },
            1500: {
                items:3
            }
        },
    });
});


/* Burada yukarı taşıma işlemi yapılmakta */
let goTopBtn = document.getElementById("goTopBtn");

window.onload = scrollFunction;
window.onscroll = scrollFunction;

function scrollFunction() {
    if (window.pageYOffset > 500) {
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }
}



/* Burada card pagination ayarları yapılmakta */
function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rigthWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 2 - rigthWidth) {
        return range(1, maxLength - 4, sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth  - rigthWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigthWidth - leftWidth +2, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rigthWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

function initPagination(limitPerPage) {
    var numberOfItems = $(".card-content .card").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination-basic li").slice(2, -2).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

         $(".first-page").toggleClass("disable", currentPage === 1);
         $(".previous-page").toggleClass("disable", currentPage === 1);
         $(".next-page").toggleClass("disable", currentPage === totalPages);
         $(".last-page").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".pagination-basic").append(
        $("<li>").addClass("page-item").addClass("first-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("last-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".card-content").show();
    showPage(1);

    $(document).on("click", ".pagination-basic li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".first-page").on("click", function () {
        return showPage(1);
    });

    $(".last-page").on("click", function () {
        return showPage(totalPages);
    }); 

};
/* Burada küçük sayfa için pagination yapılmakta  */
function initPaginations(limitPerPage) {
    var numberOfItems = $(".card-content .card").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination-basic-small li").slice(2, -2).remove();

         $(".first-page-small").toggleClass("disable", currentPage === 1);
         $(".previous-page-small").toggleClass("disable", currentPage === 1);
         $(".next-page-small").toggleClass("disable", currentPage === totalPages);
         $(".last-page-small").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".pagination-basic-small").append(
        $("<li>").addClass("page-item").addClass("first-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("previous-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("next-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("last-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".card-content").show();
    showPage(1);

    $(document).on("click", ".pagination-basic-small li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page-small").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".previous-page-small").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".first-page-small").on("click", function () {
        return showPage(1);
    });

    $(".last-page-small").on("click", function () {
        return showPage(totalPages);
    }); 

}; 


/* Burada list pagination ayarları yapılmakta */
function getPageListGroup(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rigthWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 2 - rigthWidth) {
        return range(1, maxLength - 4, sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth  - rigthWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigthWidth - leftWidth +2, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rigthWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

function initPaginationList(limitPerPage) {
    var numberOfItems = $(".list-group .list-group-item").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".list-group .list-group-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination-basic li").slice(2, -2).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

         $(".first-page").toggleClass("disable", currentPage === 1);
         $(".previous-page").toggleClass("disable", currentPage === 1);
         $(".next-page").toggleClass("disable", currentPage === totalPages);
         $(".last-page").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".pagination-basic").append(
        $("<li>").addClass("page-item").addClass("first-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("last-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".list-group").show();
    showPage(1);

    $(document).on("click", ".pagination-basic li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".first-page").on("click", function () {
        return showPage(1);
    });

    $(".last-page").on("click", function () {
        return showPage(totalPages);
    }); 

};
/* Burada küçük sayfa için pagination yapılmakta  */
function initPaginationsList(limitPerPage) {
    var numberOfItems = $(".list-group .list-group-item").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".list-group .list-group-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination-basic-small li").slice(2, -2).remove();

         $(".first-page-small").toggleClass("disable", currentPage === 1);
         $(".previous-page-small").toggleClass("disable", currentPage === 1);
         $(".next-page-small").toggleClass("disable", currentPage === totalPages);
         $(".last-page-small").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".pagination-basic-small").append(
        $("<li>").addClass("page-item").addClass("first-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("previous-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("next-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("last-page-small").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".list-group").show();
    showPage(1);

    $(document).on("click", ".pagination-basic-small li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page-small").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".previous-page-small").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".first-page-small").on("click", function () {
        return showPage(1);
    });

    $(".last-page-small").on("click", function () {
        return showPage(totalPages);
    }); 

}; 



/* Burada kurumsal listesi aktif kontrolü yapılmakta */
document.addEventListener('DOMContentLoaded', function () {
    // URL'nin son kısmını alın
    const currentPath = window.location.pathname;

    // Belirli accordion'ları açmak için yolun son kısmına göre kontrol edin
    switch (true) {
        case currentPath.includes('ozgecmis'):
        case currentPath.includes('akademik-ve-bilimsel-etkinlikler'):
        case currentPath.includes('roportaj-ve-yayinlar'):
        case currentPath.includes('baskan-fotograflari'):
            openAccordion('flush-collapseTusebBaskani');
            break;
        case currentPath.includes('ozel-kalem-mudurlugu'):
        case currentPath.includes('genel-sekreterlik'):
        case currentPath.includes('baskan-yardimcisi-1'):
        case currentPath.includes('baskan-yardimcisi-2'):
        case currentPath.includes('baskan-yardimcisi-3'):
        case currentPath.includes('baskan-yardimcisi-3'):
            openAccordion('flush-collapseTeskilatYapisi');
            break;
        case currentPath.includes('kanunlar'):
        case currentPath.includes('cumhurbaskanligi-kararnameleri'):
        case currentPath.includes('yonetmelikler'):
        case currentPath.includes('usul-ve-esaslar'):
        case currentPath.includes('genelgeler'):
        case currentPath.includes('yonergeler'):
            openAccordion('flush-collapseMevzuat');
            break;
        case currentPath.includes('kanunlar'):
        case currentPath.includes('cumhurbaskanligi-kararnameleri'):
        case currentPath.includes('yonetmelikler'):
        case currentPath.includes('usul-ve-esaslar'):
            openAccordion('flush-collapseMevzuat');
            break;
        case currentPath.includes('tuseb-dergisi'):
        case currentPath.includes('analizler-ve-raporlar'):
        case currentPath.includes('kitaplar-ve-kitap-bolumleri'):
        case currentPath.includes('rehberler'):
        case currentPath.includes('roportajlar'):
            openAccordion('flush-collapseYayinlar');
            break;
        default:
            // İlgili accordion bulunamazsa bir şey yapmayın
            break;
    }

    function openAccordion(accordionId) {
        const targetAccordion = document.getElementById(accordionId);
        const targetButton = document.querySelector(`.accordion-button[aria-controls="${accordionId}"]`);

        if (targetAccordion && targetButton) {
            targetButton.classList.remove('collapsed');
            targetButton.setAttribute('aria-expanded', 'true');
            targetAccordion.classList.add('show');
        }
    }

    const accordionLinks = document.querySelectorAll('.accordion-content a');

    accordionLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Bağlantının href değerine gitmek yerine, sayfanın yeniden yüklenmesini önleyin
            e.preventDefault();
    
            // Bağlantının href değerine gitmek yerine, bağlantının target özelliğine göre açılmasını sağlayın
            if (e.currentTarget.classList.contains('open-in-new-tab')) {
                window.open(e.currentTarget.href, '_blank'); // Doğrudan e.currentTarget.href kullanın
            }
            else {
                window.location.href = e.target.closest('a').href;
            }
        });
    });
});

/* Burada search yazı silme işlemi yapılmakta */
document.addEventListener('DOMContentLoaded', function() {
    // Kodunuz buraya gelecek
    document.addEventListener('click', function(event) {
        var input = document.getElementById('dropdown-menu-search');
        var targetElement = event.target;
    
        // Eğer tıklanan hedef element input alanı değilse ve input alanının içeriği de boş değilse
        if (targetElement !== input && input.value !== '') {
            // Input alanının içeriğini temizle
            input.value = '';
        }
    });
});

/* Burada seçilen accordion da hangi öğenin seçildiğini gösterir */
document.addEventListener('DOMContentLoaded', function () {
    // URL'nin son kısmını alın
    const currentPath = window.location.pathname;
    const lastPart = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Belirli accordion'ları açmak için yolun son kısmına göre kontrol edin
    switch (true) {
        case currentPath.includes('ozgecmis'):
        case currentPath.includes('akademik-ve-bilimsel-etkinlikler'):
        case currentPath.includes('roportaj-ve-yayinlar'):
        case currentPath.includes('baskan-fotograflari'):
            highlightSelectedItem(lastPart);
            break;
        
        case currentPath.includes('ozel-kalem-mudurlugu'):
        case currentPath.includes('genel-sekreterlik'):
        case currentPath.includes('baskan-yardimcisi-1'):
        case currentPath.includes('baskan-yardimcisi-2'):
        case currentPath.includes('baskan-yardimcisi-3'):
            highlightSelectedItem(lastPart);
            break;
        
        case currentPath.includes('kanunlar'):
        case currentPath.includes('cumhurbaskanligi-kararnameleri'):
        case currentPath.includes('yonetmelikler'):
        case currentPath.includes('usul-ve-esaslar'):
        case currentPath.includes('genelgeler'):
        case currentPath.includes('yonergeler'):
            highlightSelectedItem(lastPart);
            break;

        case currentPath.includes('kanunlar'):
        case currentPath.includes('cumhurbaskanligi-kararnameleri'):
        case currentPath.includes('yonetmelikler'):
        case currentPath.includes('usul-ve-esaslar'):
            highlightSelectedItem(lastPart);
            break;

        case currentPath.includes('tuseb-dergisi'):
        case currentPath.includes('analizler-ve-raporlar'):
        case currentPath.includes('kitaplar-ve-kitap-bolumleri'):
        case currentPath.includes('rehberler'):
        case currentPath.includes('roportajlar'):
            highlightSelectedItem(lastPart);
            break;
        
        default:
            // İlgili accordion bulunamazsa bir şey yapmayın
            break;
    }

    function highlightSelectedItem(lastPart) {
        const allItems = document.querySelectorAll('.accordion-flush a');
        allItems.forEach(item => {
            if (item.getAttribute('href').includes(lastPart)) {
                item.classList.add('selected-item');
            } else {
                item.classList.remove('selected-item');
            }
        });
    }
});

/* Burada seçilen accordion da hangi öğenin seçildiğini gösterir */
document.addEventListener('DOMContentLoaded', function () {

    const currentPath = window.location.pathname;

    // Belirli accordion'ları açmak için son parçaya göre kontrol edin
    switch (true) {
        case currentPath.includes('hakkimizda'):
            highlightSelectedItem('hakkimizda');
            break;

        case currentPath.includes('yonetim-kurulu'):
            highlightSelectedItem('yonetim-kurulu');
            break;

        case currentPath.includes('ust-yonetim'):
            highlightSelectedItem('ust-yonetim');
            break;

        case currentPath.includes('mali-duyurular'):
            highlightSelectedItem('mali-duyurular');
            break;

        case currentPath.includes('faaliyet-raporleri'):
            highlightSelectedItem('faaliyet-raporleri');
            break;

        case currentPath.includes('stratejik-planlar'):
            highlightSelectedItem('stratejik-planlar');
            break;

        case currentPath.includes('performans-programlari'):
            highlightSelectedItem('performans-programlari');
            break;

        case currentPath.includes('arabuluculuk-komisyonu'):
            highlightSelectedItem('arabuluculuk-komisyonu');
            break;

        case currentPath.includes('insan-kaynaklari'):
            highlightSelectedItem('insan-kaynaklari');
            break;

        case currentPath.includes('teskilat-semasi'):
            highlightSelectedItem('teskilat-semasi');
            break;

        case currentPath.includes('yerleskelerimiz'):
            highlightSelectedItem('yerleskelerimiz');
            break;

        default:
            // İlgili accordion bulunamazsa bir şey yapmayın
            break;
    }

    function highlightSelectedItem(lastPart) {
        const allItems = document.querySelectorAll('.accordion-flush a');
        allItems.forEach(item => {
            if (item.getAttribute('href').includes(lastPart)) {
                item.classList.add('selected-item');
            } else {
                item.classList.remove('selected-item');
            }
        });
    }
});



/* Burada lightbox2 yapılmakta */
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "%1 / %2",
    'disableScrolling': false,
    'fadeDuration': 600,
    'fitImagesInViewport': true,
    'imageFadeDuration': 600,
  /*'maxWidth': 800,
    'maxHeight': 600,*/
    'positionFromTop': 50,
    'showImageNumberLabel': true
  });

document.querySelectorAll('p[data-lightbox]').forEach(function(paragraph, index) {
    paragraph.addEventListener('click', function(event) {
        event.preventDefault(); // Varsayılan davranışı engelle
        event.stopPropagation(); // Olayın diğer elemanlara ulaşmasını engelle

        var gallery = this.getAttribute('data-lightbox');
        var images = document.querySelectorAll('p[data-lightbox="' + gallery + '"] img');

        // Tüm resim href ve title'larını topla
        var items = Array.from(images).map(function(img) {
            var parent = img.parentNode;
            return {
                href: parent.getAttribute('href'),
                title: parent.getAttribute('data-title')
            };
        });

        // Özel bir olay oluştur ve gerekli bilgileri ekle
        var customEvent = new CustomEvent('lightbox-gallery-trigger', {
            detail: {
                items: items,
                gallery: gallery,
                startIndex: index // Başlangıç indeksini ekle
            }
        });

        // Özel olayı tetikle
        document.dispatchEvent(customEvent);
    });
});

document.addEventListener('lightbox-gallery-trigger', function(event) {
    var items = event.detail.items;
    var gallery = event.detail.gallery;
    var startIndex = event.detail.startIndex;

    // Geçici a etiketleri oluştur ve body'ye ekle
    items.forEach(function(item, i) {
        var lightboxLink = document.createElement('a');
        lightboxLink.href = item.href;
        lightboxLink.setAttribute('data-lightbox', gallery);
        lightboxLink.setAttribute('data-title', item.title);
        if (i === startIndex) {
            lightboxLink.setAttribute('data-start', 'true'); // Başlangıç resmini işaretle
        }
        document.body.appendChild(lightboxLink);
    });

    // İşaretli resmi tıklatarak lightbox galerisini başlat
    var startLightboxLink = document.querySelector('a[data-lightbox="' + gallery + '"][data-start="true"]');
    if (startLightboxLink) {
        startLightboxLink.click();
    }

    // Tüm geçici a etiketlerini kaldır
    items.forEach(function(item) {
        var lightboxLink = document.querySelector('a[href="' + item.href + '"]');
        if (lightboxLink) {
            document.body.removeChild(lightboxLink);
        }
    });
});
