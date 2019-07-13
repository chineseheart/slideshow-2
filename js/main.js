var n
begin.call()
setInterval(function () {

    makeLeave.call(undefined, getImage(n))
        .one('transitionend', function (e) {
            makeWait.call(undefined, $(e.currentTarget))
        })
    console.log(x(n))
    makeCurrent.call(undefined, getImage(n + 1))
    //下一个循环开始
    n = n + 1
    n = x(n)
}, 3000)
function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function makeWait($node) {
    return $node.removeClass('current leave').addClass('wait')
}
function makeCurrent($node) {
    return $node.removeClass('leave wait').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current wait').addClass('leave')
}
function x(n) {
    if (n > 3) {
        n = n - 3
    }
    return n
}
function begin() {
    $('.images > img:nth-child(1)').addClass('current')
    $('.images > img:nth-child(2)').addClass('wait')
    $('.images > img:nth-child(3)').addClass('wait')
    n = 1
}
