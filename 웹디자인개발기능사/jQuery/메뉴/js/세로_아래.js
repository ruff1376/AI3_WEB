$(function() {
    const mainMenu = $('.main-menu > .menu-item')

    // on() 사용
    // mainMenu.on('mouseover', function() {
    //     $(this).find('.submenu').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function() {
    //     $(this).find('.submenu').stop().slideUp()
    // })

    // hover() 사용
    mainMenu.hover(
        function() {
            $(this).find('.submenu').stop().slideDown()
        },
        function() {
            $(this).find('.submenu').stop().slideUp()
        }
    )
})