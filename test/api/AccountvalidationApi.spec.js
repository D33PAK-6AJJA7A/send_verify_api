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
    instance = new SendVerifyApi.AccountvalidationApi();
  });

  describe('(package)', function() {
    describe('AccountvalidationApi', function() {
      describe('validationRouterCount', function() {
        it('should call validationRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterCount call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.validationRouterCount(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('validationRouterDeductCredits', function() {
        it('should call validationRouterDeductCredits successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterDeductCredits call
          /*
          var xSendPostSubAccountApiKey = "xSendPostSubAccountApiKey_example";
          var body = new SendVerifyApi.ModelsCreditsInfo();
          body.usedCredits = "0";

          instance.validationRouterDeductCredits(xSendPostSubAccountApiKey, body, function(error, data, response) {
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
      describe('validationRouterGetAll', function() {
        it('should call validationRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.validationRouterGetAll(xAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendVerifyApi.ModelsValidationJob);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.processed).to.be.a('number');
              expect(data.processed).to.be("0");
              expect(data.resultInvalidPath).to.be.a('string');
              expect(data.resultInvalidPath).to.be("");
              expect(data.resultPath).to.be.a('string');
              expect(data.resultPath).to.be("");
              expect(data.resultValidPath).to.be.a('string');
              expect(data.resultValidPath).to.be("");
              expect(data.status).to.be.a(SendVerifyApi.ModelsJobStatus);
                  expect(data.total).to.be.a('number');
              expect(data.total).to.be("0");
              expect(data.updated).to.be.a('number');
              expect(data.updated).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('validationRouterGetResults', function() {
        it('should call validationRouterGetResults successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterGetResults call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var opts = {};
          opts.jobId = 789;
          opts.tag = "tag_example";

          instance.validationRouterGetResults(xAccountApiKey, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsBulkResponse);
            expect(data.jobId).to.be.a('number');
            expect(data.jobId).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('validationRouterValidateEmailBulk', function() {
        it('should call validationRouterValidateEmailBulk successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterValidateEmailBulk call and complete the assertions
          /*
          var fileinput = "/path/to/file.txt";
          var xAccountApiKey = "xAccountApiKey_example";
          var memberEmail = "memberEmail_example";

          instance.validationRouterValidateEmailBulk(fileinput, xAccountApiKey, memberEmail, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsBulkResponse);
            expect(data.jobId).to.be.a('number');
            expect(data.jobId).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('validationRouterValidateListEmailBulk', function() {
        it('should call validationRouterValidateListEmailBulk successfully', function(done) {
          // TODO: uncomment, update parameter values for validationRouterValidateListEmailBulk call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendVerifyApi.ModelsEmailList();
          body.emailIds = [""];

          instance.validationRouterValidateListEmailBulk(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendVerifyApi.ModelsBulkResponse);
            expect(data.jobId).to.be.a('number');
            expect(data.jobId).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

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
