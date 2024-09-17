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

  beforeEach(function() {
    instance = new SendVerifyApi.XauthApi();
  });

  describe('(package)', function() {
    describe('XauthApi', function() {
      describe('xAuthRouterAccedptSendpostValidationWebhookResult', function() {
        it('should call xAuthRouterAccedptSendpostValidationWebhookResult successfully', function(done) {
          // TODO: uncomment, update parameter values for xAuthRouterAccedptSendpostValidationWebhookResult call and complete the assertions
          /*
          var sendpostApiKey = 789;
          var body = new SendVerifyApi.ModelsEAccount();
          body.creditLimit = "0";
          body.email = "";
          body.jwtToken = "";
          body.signupMode = "";
          body.token = "";
          body.uid = "";

          instance.xAuthRouterAccedptSendpostValidationWebhookResult(sendpostApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.creditsRemaining).to.be.a('number');
            expect(data.creditsRemaining).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isAdmin).to.be.a('boolean');
            expect(data.isAdmin).to.be(false);
            expect(data.isCanceled).to.be.a('boolean');
            expect(data.isCanceled).to.be(false);
            expect(data.isUpgraded).to.be.a('boolean');
            expect(data.isUpgraded).to.be(false);
            expect(data.locked).to.be.a('boolean');
            expect(data.locked).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.sendpostSubaccountApiKey).to.be.a('string');
            expect(data.sendpostSubaccountApiKey).to.be("");
            expect(data.sendpostSubaccountId).to.be.a('number');
            expect(data.sendpostSubaccountId).to.be("0");
            expect(data.stripeBasePriceId).to.be.a('string');
            expect(data.stripeBasePriceId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('xAuthRouterCreateAccountViaAPI', function() {
        it('should call xAuthRouterCreateAccountViaAPI successfully', function(done) {
          // TODO: uncomment, update parameter values for xAuthRouterCreateAccountViaAPI call and complete the assertions
          /*
          var body = new SendVerifyApi.ModelsEAccount();
          body.creditLimit = "0";
          body.email = "";
          body.jwtToken = "";
          body.signupMode = "";
          body.token = "";
          body.uid = "";
          var xMasterAccountApiKey = "xMasterAccountApiKey_example";

          instance.xAuthRouterCreateAccountViaAPI(body, xMasterAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsAccount);
            expect(data.apiKey).to.be.a('string');
            expect(data.apiKey).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.creditsRemaining).to.be.a('number');
            expect(data.creditsRemaining).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.isAdmin).to.be.a('boolean');
            expect(data.isAdmin).to.be(false);
            expect(data.isCanceled).to.be.a('boolean');
            expect(data.isCanceled).to.be(false);
            expect(data.isUpgraded).to.be.a('boolean');
            expect(data.isUpgraded).to.be(false);
            expect(data.locked).to.be.a('boolean');
            expect(data.locked).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.sendpostSubaccountApiKey).to.be.a('string');
            expect(data.sendpostSubaccountApiKey).to.be("");
            expect(data.sendpostSubaccountId).to.be.a('number');
            expect(data.sendpostSubaccountId).to.be("0");
            expect(data.stripeBasePriceId).to.be.a('string');
            expect(data.stripeBasePriceId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
