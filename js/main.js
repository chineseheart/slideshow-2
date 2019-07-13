$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('wait')
$('.images > img:nth-child(3)').addClass('wait')
var n = 1
setInterval(function () {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current wait').addClass('leave')
        .one('transitionend', function (e) {
            $(e.currentTarget).removeClass('current leave').addClass('wait')
        })
    console.log(x(n))
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('leave wait').addClass('current')
    //下一个循环开始
    n = n + 1
    n = x(n)
}, 3000)
function x(n) {
    if (n > 3) {
        n = n - 3
    }
    return n
}
