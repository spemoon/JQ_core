var $ = jQuery = function(selector, context) {
    return new jQuery.fn.init(selector, context);
}
jQuery.fn = jQuery.prototype = {
    init : function(selector, context) {
        selector = selector || document;
        context = context || document;
        if( selector.nodeType ){
            this[0] = selector;
            this.length = 1;
            this.context = selector;
            return this;
        }
        if( typeof selector === "string" ){
            var e = context.getElementsByTagName(selector);
            for(var i = 0 ; i < e.length ; i++){
                this[i] = e[i];
            }
            this.length = e.length;
            this.context = context;
            return this;
        } else {
            this.length = 0;
            this.context = context;
            return this;
        }
    },
    html : function(val) {
        return val === undefined ?
                (this[0] ?
                    this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):
                    null):
                this.empty().append(value);
    },
    jquery : "1.3.2",
    length : 1,
    size : function() {
        return this.length;
    }
}
jQuery.fn.init.prototype = jQuery.fn;

jQuery.each = function( object , callback , args) {
    var name , i = 0 , length = object.length ;
    if ( args ){
        if ( args === undefined ){
            for( name in object ){
                if( callback.apply( object[name] , args ) === false ){
                    break;
                }
            }
        } else {
            for ( ; i < length ; ){
                if( callback.apply( object[i++] , args ) === false ){
                    break;
                }
            }
        }
    } else {
        if( args === undefined ){
            for( name in object ){
                if( callback.call( object[name] , name , object[name] ) === false ){
                    break;
                }
            }
        } else {
            for( var value = object[0] ; i < length && callback.call( value , i , value ) != false ; value = object[++i] ){}
        }
    }
    return object;
}


console.log($().jquery);
console.log($().size());
