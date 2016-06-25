(function(global) {

global.async = {
    run : function(f, scope, delay) {
        return setTimeout(function() { f.apply(scope, Array.prototype.slice.apply(arguments, 3)); }), delay);
    }
}

})(this)