$(function() {
    const mainMenu = $('.main-menu > .menu-item')

    // on() 사용
    // mainMenu.on('mouseover', function() {
    //     $('.submenu').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function() {
    //     $('.submenu').stop().slideUp()
    // })

    // hover() 사용
    mainMenu.hover(
        function() {
            $('.submenu').stop().slideDown()
        },
        function() {
            $('.submenu').stop().slideUp()
        }
    )
})