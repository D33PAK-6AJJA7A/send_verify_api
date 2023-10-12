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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.ModelsEmailList = factory(root.SendVerifyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEmailList model module.
   * @module model/ModelsEmailList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEmailList</code>.
   * @alias module:model/ModelsEmailList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEmailList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEmailList} obj Optional instance to populate.
   * @return {module:model/ModelsEmailList} The populated <code>ModelsEmailList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('emailIds'))
        obj.emailIds = ApiClient.convertToType(data['emailIds'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Array.<String>} emailIds
   */
  exports.prototype.emailIds = undefined;


  return exports;

}));
