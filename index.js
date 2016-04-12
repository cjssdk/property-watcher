/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';


// public
module.exports = function ( obj, name, callback ) {
    var oldValue;

    // save old value before redefinition
    oldValue = obj[name];

    // wrap the given property
    Object.defineProperty(obj, name, {
        get: function () {
            return oldValue;
        },

        set: function ( newValue ) {
            // notify
            callback(name, oldValue, newValue);
            // apply
            oldValue = newValue;
        }
    });
};
