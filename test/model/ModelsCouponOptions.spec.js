/*
 * SendVerify API
 * Improve deliverability of your email list by automatically cleaning all emails before sending to them. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendVerifyApi);
  }
}(this, function(expect, SendVerifyApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsCouponOptions', function() {
      beforeEach(function() {
        instance = new SendVerifyApi.ModelsCouponOptions();
      });

      it('should create an instance of ModelsCouponOptions', function() {
        // TODO: update the code to test ModelsCouponOptions
        expect(instance).to.be.a(SendVerifyApi.ModelsCouponOptions);
      });

      it('should have the property couponCode (base name: "couponCode")', function() {
        // TODO: update the code to test the property couponCode
        expect(instance).to.have.property('couponCode');
        // expect(instance.couponCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
