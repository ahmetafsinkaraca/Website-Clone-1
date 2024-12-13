var menuData = [
        {
            text: 'RANDOM',
            href: '/'
        },
        {
            text: 'RANDOM',
            children: [
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                {
                    text: 'RANDOM ',
                    children: [
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' }
                    ]
                },
                {
                    text: 'RANDOM',
                    children: [
                        { text: 'RANDOM ', href: '#' },
                        {
                            text: 'RANDOM',
                            children: [
                                { text: 'RANDOM', href: '#' },
                                { text: 'RANDOM', href: '#' },
                                {
                                    text: 'RANDOM',
                                    children: [
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' }
                                    ]
                                },
                                {
                                    text: 'RANDOM',
                                    children: [
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' },
                                        { text: 'RANDOM', href: '#' }
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'RANDOM ',
                            children: [
                                { text: 'RANDOM', href: '#' },
                                { text: 'RANDOM', href: '#' }
                            ]
                        },
                        {
                            text: 'RANDOM ',
                            children: [
                                { text: 'RANDOM', href: '#' },
                                { text: 'RANDOM', href: '#' }
                            ]
                        },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' }
                    ]
                },
                {
                    text: 'RANDOM',
                    children: [
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'Usul ve Esaslar', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM ', href: '#' }
                    ]
                },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                {
                    text: 'RANDOM ',
                    children: [
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' }
                    ]
                },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                {
                    text: 'RANDOM',
                    children: [
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        { text: 'RANDOM ', href: '#' },
                        {
                            text: 'RANDOM',
                            children: [
                                { text: 'RANDOM ', href: '#' },
                                { text: 'RANDOM ', href: '#' },
                                { text: 'RANDOM ', href: '#' }
                            ]
                        }
                    ]
                },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' }
            ]
        },
        {
            text: 'RANDOM',
            children: [
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' }
            ]
        },
        {
            text: 'RANDOM',
            children: [
                { text: 'TRANDOM', href: '#' },
                { text: 'RANDOM', href: '#' }
            ]
        },
        { text: 'RANDOM', href: '#' },
        {
            text: 'RANDOM',
            children: [
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' },
                { text: 'RANDOM', href: '#' }
            ]
        },
        {
            text: 'RANDOM',
            children: [
                { text: 'RANDOM', href: '#' }
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