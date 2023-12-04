/*
 * SendVerify API
 * Improve deliverability of your email list by automatically cleaning all emails before sending to them. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.37
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
    root.SendVerifyApi.ModelsEAccountMember = factory(root.SendVerifyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEAccountMember model module.
   * @module model/ModelsEAccountMember
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEAccountMember</code>.
   * @alias module:model/ModelsEAccountMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEAccountMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEAccountMember} obj Optional instance to populate.
   * @return {module:model/ModelsEAccountMember} The populated <code>ModelsEAccountMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uid'))
        obj.uid = ApiClient.convertToType(data['uid'], 'String');
      if (data.hasOwnProperty('verifyEmail'))
        obj.verifyEmail = ApiClient.convertToType(data['verifyEmail'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} uid
   */
  exports.prototype.uid = undefined;

  /**
   * @member {Boolean} verifyEmail
   */
  exports.prototype.verifyEmail = undefined;


  return exports;

}));
