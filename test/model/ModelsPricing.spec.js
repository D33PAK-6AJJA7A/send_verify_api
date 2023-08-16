/*
 * SendVerify API
 * Improve deliverability of your email list by automatically cleaning all emails before sending to them. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    describe('ModelsPricing', function() {
      beforeEach(function() {
        instance = new SendVerifyApi.ModelsPricing();
      });

      it('should create an instance of ModelsPricing', function() {
        // TODO: update the code to test ModelsPricing
        expect(instance).to.be.a(SendVerifyApi.ModelsPricing);
      });

      it('should have the property invoiceProductId (base name: "InvoiceProductId")', function() {
        // TODO: update the code to test the property invoiceProductId
        expect(instance).to.have.property('invoiceProductId');
        // expect(instance.invoiceProductId).to.be(expectedValueLiteral);
      });

      it('should have the property baseLimit (base name: "baseLimit")', function() {
        // TODO: update the code to test the property baseLimit
        expect(instance).to.have.property('baseLimit');
        // expect(instance.baseLimit).to.be(expectedValueLiteral);
      });

      it('should have the property basePrice (base name: "basePrice")', function() {
        // TODO: update the code to test the property basePrice
        expect(instance).to.have.property('basePrice');
        // expect(instance.basePrice).to.be(expectedValueLiteral);
      });

      it('should have the property basePriceId (base name: "basePriceId")', function() {
        // TODO: update the code to test the property basePriceId
        expect(instance).to.have.property('basePriceId');
        // expect(instance.basePriceId).to.be(expectedValueLiteral);
      });

      it('should have the property planName (base name: "planName")', function() {
        // TODO: update the code to test the property planName
        expect(instance).to.have.property('planName');
        // expect(instance.planName).to.be(expectedValueLiteral);
      });

    });
  });

}));
