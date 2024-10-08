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
    instance = new SendVerifyApi.AccountpaymentApi();
  });

  describe('(package)', function() {
    describe('AccountpaymentApi', function() {
      describe('paymentRouterApplyCouponToStripeCustomer', function() {
        it('should call paymentRouterApplyCouponToStripeCustomer successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterApplyCouponToStripeCustomer call
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendVerifyApi.ModelsCouponOptions();
          body.couponCode = "";

          instance.paymentRouterApplyCouponToStripeCustomer(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterCreateCustomerPortal', function() {
        it('should call paymentRouterCreateCustomerPortal successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterCreateCustomerPortal call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.paymentRouterCreateCustomerPortal(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsBillingPortalSession);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.customer).to.be.a('string');
            expect(data.customer).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.livemode).to.be.a('boolean');
            expect(data.livemode).to.be(false);
            expect(data._object).to.be.a('string');
            expect(data._object).to.be("");
            expect(data.returnUrl).to.be.a('string');
            expect(data.returnUrl).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterCreatePaymentInvoice', function() {
        it('should call paymentRouterCreatePaymentInvoice successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterCreatePaymentInvoice call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendVerifyApi.ModelsPaymentOptions();
          body.couponId = "";
          body.customerId = "";
          body.ipCount = "0";
          body.paymentMethodId = "";
          body.priceId = "";

          instance.paymentRouterCreatePaymentInvoice(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsPaymentStatus);
            expect(data.clientSecret).to.be.a('string');
            expect(data.clientSecret).to.be("");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.redirectUrl).to.be.a('string');
            expect(data.redirectUrl).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetAllCountries', function() {
        it('should call paymentRouterGetAllCountries successfully', function(done) {
          // TODO: uncomment paymentRouterGetAllCountries call and complete the assertions
          /*

          instance.paymentRouterGetAllCountries(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendVerifyApi.ModelsCountry);
              expect(data.code).to.be.a('string');
              expect(data.code).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetCouponCodes', function() {
        it('should call paymentRouterGetCouponCodes successfully', function(done) {
          // TODO: uncomment paymentRouterGetCouponCodes call and complete the assertions
          /*

          instance.paymentRouterGetCouponCodes(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendVerifyApi.ModelsCoupon);
              expect(data.code).to.be.a('string');
              expect(data.code).to.be("");
              expect(data.couponId).to.be.a('string');
              expect(data.couponId).to.be("");
              expect(data.percentage).to.be.a('number');
              expect(data.percentage).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetPricingPlans', function() {
        it('should call paymentRouterGetPricingPlans successfully', function(done) {
          // TODO: uncomment paymentRouterGetPricingPlans call and complete the assertions
          /*

          instance.paymentRouterGetPricingPlans(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendVerifyApi.ModelsPricing);
              expect(data.invoiceProductId).to.be.a('string');
              expect(data.invoiceProductId).to.be("");
              expect(data.baseLimit).to.be.a('number');
              expect(data.baseLimit).to.be("0");
              expect(data.basePrice).to.be.a('number');
              expect(data.basePrice).to.be(0.0);
              expect(data.basePriceId).to.be.a('string');
              expect(data.basePriceId).to.be("");
              expect(data.planName).to.be.a('string');
              expect(data.planName).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetTaxRateByAddress', function() {
        it('should call paymentRouterGetTaxRateByAddress successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentRouterGetTaxRateByAddress call and complete the assertions
          /*
          var body = new SendVerifyApi.ModelsPaymentAddress();
          body.city = "";
          body.country = "";
          body.line1 = "";
          body.line2 = "";
          body.postalCode = "";
          body.state = "";

          instance.paymentRouterGetTaxRateByAddress(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsTaxDetails);
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.percentageDecimal).to.be.a('string');
            expect(data.percentageDecimal).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.taxType).to.be.a('string');
            expect(data.taxType).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterGetTaxRateByIP', function() {
        it('should call paymentRouterGetTaxRateByIP successfully', function(done) {
          // TODO: uncomment paymentRouterGetTaxRateByIP call and complete the assertions
          /*

          instance.paymentRouterGetTaxRateByIP(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsTaxDetails);
            expect(data.country).to.be.a('string');
            expect(data.country).to.be("");
            expect(data.percentageDecimal).to.be.a('string');
            expect(data.percentageDecimal).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.taxType).to.be.a('string');
            expect(data.taxType).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentRouterHandlePaymentWebhook', function() {
        it('should call paymentRouterHandlePaymentWebhook successfully', function(done) {
          // TODO: uncomment paymentRouterHandlePaymentWebhook call
          /*

          instance.paymentRouterHandlePaymentWebhook(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

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
