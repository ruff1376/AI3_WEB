$(function() {
    const mainMenu = $('.main-menu > .menu-item, #back')

    // on() 사용
    // mainMenu.on('mouseover', function() {
    //     $('.submenu, #back').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function() {
    //     $('.submenu, #back').stop().slideUp()
    // })

    // hover() 사용
    mainMenu.hover(
        function() {
            $('.submenu, #back').stop().slideDown()
        },
        function() {
            $('.submenu, #back').stop().slideUp()
        }
    )
})