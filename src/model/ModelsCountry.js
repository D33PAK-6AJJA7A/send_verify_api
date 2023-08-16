/*
 * SendVerify API
 * Improve deliverability of your email list by automatically cleaning all emails before sending to them. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    root.SendVerifyApi.ModelsCountry = factory(root.SendVerifyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsCountry model module.
   * @module model/ModelsCountry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsCountry</code>.
   * @alias module:model/ModelsCountry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsCountry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsCountry} obj Optional instance to populate.
   * @return {module:model/ModelsCountry} The populated <code>ModelsCountry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
