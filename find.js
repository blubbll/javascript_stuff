var find = {
    byId: function(e) {
        return q = document.getElementById(e.slice(1)), null == q ? document.documentElement : q
    },
    byClass: function(e) {
        return q = document.getElementsByClassName(e.slice(1))[0], null == q ? document.documentElement : q
    },
    byDataId: function(e) {
        return q = document.querySelector("[data-id='" + e + "']"), null == q ? document.documentElement : q
    },
    byData: function(e) {
        return q = document.querySelector("[data-" + e + "]"), null == q ? document.documentElement : q
    },
    allByDataId: function(e) {
        return q = document.querySelectorAll("[data-id='" + e + "']"), null == q ? document.documentElement : q
    },
    allByClass: function(e) {
        return q = document.getElementsByClassName(e.slice(1)), null == q ? document.documentElement : q
    },
    byTagName: function(e) {
        return q = document.getElementsByTagName(e)[0], null == q ? document.documentElement : q
    }
};
