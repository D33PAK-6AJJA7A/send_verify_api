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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsSingleValidatedEmail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsSingleValidatedEmail'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.ModelsValidatedEmailList = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsSingleValidatedEmail);
  }
}(this, function(ApiClient, ModelsSingleValidatedEmail) {
  'use strict';

  /**
   * The ModelsValidatedEmailList model module.
   * @module model/ModelsValidatedEmailList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsValidatedEmailList</code>.
   * @alias module:model/ModelsValidatedEmailList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsValidatedEmailList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsValidatedEmailList} obj Optional instance to populate.
   * @return {module:model/ModelsValidatedEmailList} The populated <code>ModelsValidatedEmailList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('detailedResponse'))
        obj.detailedResponse = ApiClient.convertToType(data['detailedResponse'], [ModelsSingleValidatedEmail]);
      if (data.hasOwnProperty('invalid'))
        obj.invalid = ApiClient.convertToType(data['invalid'], ['String']);
      if (data.hasOwnProperty('valid'))
        obj.valid = ApiClient.convertToType(data['valid'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsSingleValidatedEmail>} detailedResponse
   */
  exports.prototype.detailedResponse = undefined;

  /**
   * @member {Array.<String>} invalid
   */
  exports.prototype.invalid = undefined;

  /**
   * @member {Array.<String>} valid
   */
  exports.prototype.valid = undefined;


  return exports;

}));
