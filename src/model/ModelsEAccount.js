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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.ModelsEAccount = factory(root.SendVerifyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsEAccount model module.
   * @module model/ModelsEAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEAccount</code>.
   * @alias module:model/ModelsEAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEAccount} obj Optional instance to populate.
   * @return {module:model/ModelsEAccount} The populated <code>ModelsEAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creditLimit'))
        obj.creditLimit = ApiClient.convertToType(data['creditLimit'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('jwtToken'))
        obj.jwtToken = ApiClient.convertToType(data['jwtToken'], 'String');
      if (data.hasOwnProperty('signupMode'))
        obj.signupMode = ApiClient.convertToType(data['signupMode'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('uid'))
        obj.uid = ApiClient.convertToType(data['uid'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} creditLimit
   */
  exports.prototype.creditLimit = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} jwtToken
   */
  exports.prototype.jwtToken = undefined;

  /**
   * @member {String} signupMode
   */
  exports.prototype.signupMode = undefined;

  /**
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * @member {String} uid
   */
  exports.prototype.uid = undefined;


  return exports;

}));
