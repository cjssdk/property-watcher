/**
 * Mocha tests.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

/* eslint-env mocha */

var should = require('should'),
    watch  = require('../index');


describe('main', function () {

    it('should pass: modify fld value', function ( done ) {
        var obj = {
            fld: 128
        };

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            name.should.equal('fld');
            oldValue.should.equal(128);
            newValue.should.equal(256);
            done();
        });

        obj.fld.should.equal(128);
        obj.fld = 256;
        obj.fld.should.equal(256);
    });

});
