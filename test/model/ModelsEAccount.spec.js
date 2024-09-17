/*
 * SendVerify API
 * Improve deliverability of your email list by automatically cleaning all emails before sending to them. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('ModelsEAccount', function() {
      beforeEach(function() {
        instance = new SendVerifyApi.ModelsEAccount();
      });

      it('should create an instance of ModelsEAccount', function() {
        // TODO: update the code to test ModelsEAccount
        expect(instance).to.be.a(SendVerifyApi.ModelsEAccount);
      });

      it('should have the property creditLimit (base name: "creditLimit")', function() {
        // TODO: update the code to test the property creditLimit
        expect(instance).to.have.property('creditLimit');
        // expect(instance.creditLimit).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property jwtToken (base name: "jwtToken")', function() {
        // TODO: update the code to test the property jwtToken
        expect(instance).to.have.property('jwtToken');
        // expect(instance.jwtToken).to.be(expectedValueLiteral);
      });

      it('should have the property signupMode (base name: "signupMode")', function() {
        // TODO: update the code to test the property signupMode
        expect(instance).to.have.property('signupMode');
        // expect(instance.signupMode).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

    });
  });

}));
