$('images > img:nth-child(1)').addClass('current')
$('images > img:nth-child(2)').addClass('wait')
$('images > img:nth-child(3)').addClass('wait')
var n = 1
setInterval(function () {
    $(`images > img:nth-child(${x(n)})`).addClass('leave').removeClass('current wait')
        .one('transtionend', function (e) {
            $(e.currentTarget).addClass('wait').removeClass('current leave')
        })
    $(`images > img:nth-child(${x(n + 1)})`).addClass('current').removeClass('leave wait')
    //下一个循环开始
    n += 1
}, 3000)
function x() {
    if (n >= 3) {
        n = n - 2
    }
    return n
}
