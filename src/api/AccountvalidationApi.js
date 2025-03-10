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
    define(['ApiClient', 'model/ModelsBulkResponse', 'model/ModelsCountStat', 'model/ModelsCreditsInfo', 'model/ModelsEmailList', 'model/ModelsValidationJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsBulkResponse'), require('../model/ModelsCountStat'), require('../model/ModelsCreditsInfo'), require('../model/ModelsEmailList'), require('../model/ModelsValidationJob'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.AccountvalidationApi = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsBulkResponse, root.SendVerifyApi.ModelsCountStat, root.SendVerifyApi.ModelsCreditsInfo, root.SendVerifyApi.ModelsEmailList, root.SendVerifyApi.ModelsValidationJob);
  }
}(this, function(ApiClient, ModelsBulkResponse, ModelsCountStat, ModelsCreditsInfo, ModelsEmailList, ModelsValidationJob) {
  'use strict';

  /**
   * Accountvalidation service.
   * @module api/AccountvalidationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountvalidationApi. 
   * @alias module:api/AccountvalidationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validationRouterCount operation.
     * @callback module:api/AccountvalidationApi~validationRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total Validations <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountvalidationApi~validationRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.validationRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterCount");
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
      var returnType = ModelsCountStat;

      return this.apiClient.callApi(
        '/account/validation/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterDeductCredits operation.
     * @callback module:api/AccountvalidationApi~validationRouterDeductCreditsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deduct Credits <br>
     * @param {String} xSendPostSubAccountApiKey Account API Key
     * @param {module:model/ModelsCreditsInfo} body Used Credits Info
     * @param {module:api/AccountvalidationApi~validationRouterDeductCreditsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.validationRouterDeductCredits = function(xSendPostSubAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xSendPostSubAccountApiKey' is set
      if (xSendPostSubAccountApiKey === undefined || xSendPostSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSendPostSubAccountApiKey' when calling validationRouterDeductCredits");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validationRouterDeductCredits");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-SendPost-SubAccount-ApiKey': xSendPostSubAccountApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/account/validation/deduct', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetAll operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsValidationJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all validation <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/AccountvalidationApi~validationRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsValidationJob>}
     */
    this.validationRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterGetAll");
      }


      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'search': opts['search'],
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
      var returnType = [ModelsValidationJob];

      return this.apiClient.callApi(
        '/account/validation/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterGetResults operation.
     * @callback module:api/AccountvalidationApi~validationRouterGetResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get validation Results <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.jobId jobId
     * @param {String} opts.tag tag
     * @param {module:api/AccountvalidationApi~validationRouterGetResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validationRouterGetResults = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterGetResults");
      }


      var pathParams = {
      };
      var queryParams = {
        'jobId': opts['jobId'],
        'tag': opts['tag'],
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
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/results', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterValidateEmailBulk operation.
     * @callback module:api/AccountvalidationApi~validationRouterValidateEmailBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Emails In File Asynchronously
     * @param {File} fileinput CSV whose emails need to be validated
     * @param {String} xAccountApiKey Account API Key
     * @param {String} memberEmail Member Email
     * @param {module:api/AccountvalidationApi~validationRouterValidateEmailBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validationRouterValidateEmailBulk = function(fileinput, xAccountApiKey, memberEmail, callback) {
      var postBody = null;

      // verify the required parameter 'fileinput' is set
      if (fileinput === undefined || fileinput === null) {
        throw new Error("Missing the required parameter 'fileinput' when calling validationRouterValidateEmailBulk");
      }

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterValidateEmailBulk");
      }

      // verify the required parameter 'memberEmail' is set
      if (memberEmail === undefined || memberEmail === null) {
        throw new Error("Missing the required parameter 'memberEmail' when calling validationRouterValidateEmailBulk");
      }

      var pathParams = {
      };
      var queryParams = {
        'memberEmail': memberEmail,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Account-ApiKey': xAccountApiKey
      };
      var formParams = {
        'fileinput': fileinput
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validationRouterValidateListEmailBulk operation.
     * @callback module:api/AccountvalidationApi~validationRouterValidateListEmailBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsBulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Emails In File Asynchronously <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEmailList} body The email list to be sent for being validated
     * @param {module:api/AccountvalidationApi~validationRouterValidateListEmailBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsBulkResponse}
     */
    this.validationRouterValidateListEmailBulk = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling validationRouterValidateListEmailBulk");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling validationRouterValidateListEmailBulk");
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
      var returnType = ModelsBulkResponse;

      return this.apiClient.callApi(
        '/account/validation/list/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
