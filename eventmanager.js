function addEvent(e, n, t) {
    function r(e) {
        var n = t.apply(this, arguments);
        return n === !1 && (e.stopPropagation(), e.preventDefault()), n
    }

    function v() {
        var n = t.call(e, window.event);
        return n === !1 && (window.event.returnValue = !1, window.event.cancelBubble = !0), n
    }
    return e.addEventListener ? (e.addEventListener(n, r, !1), {
        elem: e,
        handler: r,
        event: n
    }) : (e.attachEvent("on" + n, v), {
        elem: e,
        handler: v, 
        event: n
    })
}

function removeEvent(element, event) {
    element.removeEventListener ? element.removeEventListener(element, event) : element.detachEvent("on" + event, element)
}
