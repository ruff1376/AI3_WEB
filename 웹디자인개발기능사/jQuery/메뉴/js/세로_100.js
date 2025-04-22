$(function() {
    const menu = $('.menu')
    const sub = $('.sub .inner')

    // on() 사용
    // menu.on('mouseover', function() {
    //     sub.stop().fadeIn()
    // })
    // menu.on('mouseout', function() {
    //     sub.stop().fadeOut()
    // })

    // hover() 사용
    menu.hover(
        function() {
            sub.stop().fadeIn()
        },
        function() {
            sub.stop().fadeOut()
        }
    )
})