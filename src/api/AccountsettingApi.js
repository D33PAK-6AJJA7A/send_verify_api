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
    define(['ApiClient', 'model/ModelsAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.AccountsettingApi = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsAccount);
  }
}(this, function(ApiClient, ModelsAccount) {
  'use strict';

  /**
   * Accountsetting service.
   * @module api/AccountsettingApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountsettingApi. 
   * @alias module:api/AccountsettingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountSettingRouterGetAccount operation.
     * @callback module:api/AccountsettingApi~accountSettingRouterGetAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get latest account details <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountsettingApi~accountSettingRouterGetAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccount}
     */
    this.accountSettingRouterGetAccount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountSettingRouterGetAccount");
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
      var returnType = ModelsAccount;

      return this.apiClient.callApi(
        '/account/setting/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
