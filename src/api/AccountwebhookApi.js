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
    define(['ApiClient', 'model/ModelsAccountWebhook', 'model/ModelsCountStat', 'model/ModelsDeleteResponse', 'model/ModelsEMember', 'model/ModelsEWebhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelsAccountWebhook'), require('../model/ModelsCountStat'), require('../model/ModelsDeleteResponse'), require('../model/ModelsEMember'), require('../model/ModelsEWebhook'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.AccountwebhookApi = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsAccountWebhook, root.SendVerifyApi.ModelsCountStat, root.SendVerifyApi.ModelsDeleteResponse, root.SendVerifyApi.ModelsEMember, root.SendVerifyApi.ModelsEWebhook);
  }
}(this, function(ApiClient, ModelsAccountWebhook, ModelsCountStat, ModelsDeleteResponse, ModelsEMember, ModelsEWebhook) {
  'use strict';

  /**
   * Accountwebhook service.
   * @module api/AccountwebhookApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountwebhookApi. 
   * @alias module:api/AccountwebhookApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountWebhookRouterCount operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsCountStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Count Total AccountWebhooks <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:api/AccountwebhookApi~accountWebhookRouterCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsCountStat}
     */
    this.accountWebhookRouterCount = function(xAccountApiKey, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterCount");
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
        '/account/webhook/count', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountWebhookRouterCreate operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create AccountWebhook <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {module:model/ModelsEWebhook} body The AccountWebhook content
     * @param {module:api/AccountwebhookApi~accountWebhookRouterCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountWebhook}
     */
    this.accountWebhookRouterCreate = function(xAccountApiKey, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterCreate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountWebhookRouterCreate");
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
      var returnType = ModelsAccountWebhook;

      return this.apiClient.callApi(
        '/account/webhook/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountWebhookRouterDelete operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete AccountWebhook <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} webhookId The AccountWebhookId you want to delete
     * @param {module:model/ModelsEMember} body The triggering action member
     * @param {module:api/AccountwebhookApi~accountWebhookRouterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsDeleteResponse}
     */
    this.accountWebhookRouterDelete = function(xAccountApiKey, webhookId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterDelete");
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling accountWebhookRouterDelete");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountWebhookRouterDelete");
      }


      var pathParams = {
        'webhookId': webhookId
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
      var returnType = ModelsDeleteResponse;

      return this.apiClient.callApi(
        '/account/webhook/{webhookId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountWebhookRouterGet operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find AccountWebhook by AccountWebhookId <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} webhookId the AccountWebhookId you want to get
     * @param {module:api/AccountwebhookApi~accountWebhookRouterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountWebhook}
     */
    this.accountWebhookRouterGet = function(xAccountApiKey, webhookId, callback) {
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterGet");
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling accountWebhookRouterGet");
      }


      var pathParams = {
        'webhookId': webhookId
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
      var returnType = ModelsAccountWebhook;

      return this.apiClient.callApi(
        '/account/webhook/{webhookId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountWebhookRouterGetAll operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterGetAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelsAccountWebhook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All AccountWebhooks <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset offset
     * @param {Number} opts.limit limit
     * @param {String} opts.search search
     * @param {module:api/AccountwebhookApi~accountWebhookRouterGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelsAccountWebhook>}
     */
    this.accountWebhookRouterGetAll = function(xAccountApiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterGetAll");
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
      var returnType = [ModelsAccountWebhook];

      return this.apiClient.callApi(
        '/account/webhook/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountWebhookRouterUpdate operation.
     * @callback module:api/AccountwebhookApi~accountWebhookRouterUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelsAccountWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update AccountWebhook <br>
     * @param {String} xAccountApiKey Account API Key
     * @param {Number} webhookId The AccountWebhookId you want to update
     * @param {module:model/ModelsEWebhook} body The body
     * @param {module:api/AccountwebhookApi~accountWebhookRouterUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelsAccountWebhook}
     */
    this.accountWebhookRouterUpdate = function(xAccountApiKey, webhookId, body, callback) {
      var postBody = body;

      // verify the required parameter 'xAccountApiKey' is set
      if (xAccountApiKey === undefined || xAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xAccountApiKey' when calling accountWebhookRouterUpdate");
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling accountWebhookRouterUpdate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountWebhookRouterUpdate");
      }


      var pathParams = {
        'webhookId': webhookId
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
      var returnType = ModelsAccountWebhook;

      return this.apiClient.callApi(
        '/account/webhook/{webhookId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
