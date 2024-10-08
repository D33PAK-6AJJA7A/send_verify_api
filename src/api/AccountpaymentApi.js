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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsBillingPortalSession', 'model/ModelsCountry', 'model/ModelsCoupon', 'model/ModelsCouponOptions', 'model/ModelsPaymentAddress', 'model/ModelsPaymentOptions', 'model/ModelsPaymentStatus', 'model/ModelsPricing', 'model/ModelsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBillingPortalSession'), require('../model/ModelsCountry'), require('../model/ModelsCoupon'), require('../model/ModelsCouponOptions'), require('../model/ModelsPaymentAddress'), require('../model/ModelsPaymentOptions'), require('../model/ModelsPaymentStatus'), require('../model/ModelsPricing'), require('../model/ModelsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.AccountpaymentApi = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsBillingPortalSession, root.SendVerifyApi.ModelsCountry, root.SendVerifyApi.ModelsCoupon, root.SendVerifyApi.ModelsCouponOptions, root.SendVerifyApi.ModelsPaymentAddress, root.SendVerifyApi.ModelsPaymentOptions, root.SendVerifyApi.ModelsPaymentStatus, root.SendVerifyApi.ModelsPricing, root.SendVerifyApi.ModelsTaxDetails);
  }
}(this, function(ApiClient, ModelsBillingPortalSession, ModelsCountry, ModelsCoupon, ModelsCouponOptions, ModelsPaymentAddress, ModelsPaymentOptions, ModelsPaymentStatus, ModelsPricing, ModelsTaxDetails) {
  'use strict';

  /**
   * Accountpayment service.
   * @module api/AccountpaymentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountpaymentApi. 
   * @alias module:api/AccountpaymentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the paymentRouterApplyCouponToStripeCustomer operation.
     * @callback module:api/AccountpaymentApi~paymentRouterApplyCouponToStripeCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply Coupon to Stripe Customer <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsCouponOptions} body Coupon Code Options
     * @param {module:api/AccountpaymentApi~paymentRouterApplyCouponToStripeCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentRouterApplyCouponToStripeCustomer = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling paymentRouterApplyCouponToStripeCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentRouterApplyCouponToStripeCustomer");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/payment/customer/coupon', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterCreateCustomerPortal operation.
     * @callback module:api/AccountpaymentApi~paymentRouterCreateCustomerPortalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBillingPortalSession} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Customer Portal for account <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountpaymentApi~paymentRouterCreateCustomerPortalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBillingPortalSession}
     */
    this.paymentRouterCreateCustomerPortal = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling paymentRouterCreateCustomerPortal");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsBillingPortalSession;

      return this.apiClient.callApi(
        '/account/payment/portal', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterCreatePaymentInvoice operation.
     * @callback module:api/AccountpaymentApi~paymentRouterCreatePaymentInvoiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsPaymentStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Payment Invoice for Stripe <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsPaymentOptions} body PaymentOptions content
     * @param {module:api/AccountpaymentApi~paymentRouterCreatePaymentInvoiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsPaymentStatus}
     */
    this.paymentRouterCreatePaymentInvoice = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling paymentRouterCreatePaymentInvoice");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentRouterCreatePaymentInvoice");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsPaymentStatus;

      return this.apiClient.callApi(
        '/account/payment/invoice', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterGetAllCountries operation.
     * @callback module:api/AccountpaymentApi~paymentRouterGetAllCountriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsCountry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with slice of all countries <br>
     * @param {module:api/AccountpaymentApi~paymentRouterGetAllCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsCountry>}
     */
    this.paymentRouterGetAllCountries = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsCountry];

      return this.apiClient.callApi(
        '/account/payment/pricing/countries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterGetCouponCodes operation.
     * @callback module:api/AccountpaymentApi~paymentRouterGetCouponCodesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsCoupon>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with slice of coupon codes <br>
     * @param {module:api/AccountpaymentApi~paymentRouterGetCouponCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsCoupon>}
     */
    this.paymentRouterGetCouponCodes = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsCoupon];

      return this.apiClient.callApi(
        '/account/payment/coupons', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterGetPricingPlans operation.
     * @callback module:api/AccountpaymentApi~paymentRouterGetPricingPlansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsPricing>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with slice of pricing plans <br>
     * @param {module:api/AccountpaymentApi~paymentRouterGetPricingPlansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsPricing>}
     */
    this.paymentRouterGetPricingPlans = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ModelsPricing];

      return this.apiClient.callApi(
        '/account/payment/pricing', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterGetTaxRateByAddress operation.
     * @callback module:api/AccountpaymentApi~paymentRouterGetTaxRateByAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsTaxDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with tax details <br>
     * @param {module:model/ModelsPaymentAddress} body Address parameters
     * @param {module:api/AccountpaymentApi~paymentRouterGetTaxRateByAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsTaxDetails}
     */
    this.paymentRouterGetTaxRateByAddress = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling paymentRouterGetTaxRateByAddress");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsTaxDetails;

      return this.apiClient.callApi(
        '/account/payment/tax/address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterGetTaxRateByIP operation.
     * @callback module:api/AccountpaymentApi~paymentRouterGetTaxRateByIPCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsTaxDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responds back with tax details <br>
     * @param {module:api/AccountpaymentApi~paymentRouterGetTaxRateByIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsTaxDetails}
     */
    this.paymentRouterGetTaxRateByIP = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelsTaxDetails;

      return this.apiClient.callApi(
        '/account/payment/tax/ip', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRouterHandlePaymentWebhook operation.
     * @callback module:api/AccountpaymentApi~paymentRouterHandlePaymentWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Handle Payment Related Webhooks <br>
     * @param {module:api/AccountpaymentApi~paymentRouterHandlePaymentWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentRouterHandlePaymentWebhook = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/payment/webhook', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
