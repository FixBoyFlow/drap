/**
 * Created by xuzek on 2017/9/6.
 */
var myTools = {
    isEmpty:function(value){
        if ( value === null || value === undefined ){
            return true;
        }else if ( typeof value === 'string' ) {
            if ( value.length === 0 ) {
                return true;
            }
            return false;
        } else if ( this.isArray( value ) ) {
            if ( value.length === 0 ) {
                return true;
            }
            return false;
        } else if ( this.isObject( value ) ) {
            for ( var key in value) {
                return false;
            }
            return true;
        }
        return false;
    },
    isArray:function(value){
        if ( Object.prototype.toString.call( value ) === '[object Array]' ) {
            return true;
        }
        return false;
    },
    isObject:function( value ) {
        if( Object.prototype.toString.call( value ) === '[object Object]' ){
            return true;
        }
        return false;
    }
};
