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
    root.SendVerifyApi.ModelsAccount = factory(root.SendVerifyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsAccount model module.
   * @module model/ModelsAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsAccount</code>.
   * @alias module:model/ModelsAccount
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsAccount} obj Optional instance to populate.
   * @return {module:model/ModelsAccount} The populated <code>ModelsAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('creditsRemaining'))
        obj.creditsRemaining = ApiClient.convertToType(data['creditsRemaining'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('isAdmin'))
        obj.isAdmin = ApiClient.convertToType(data['isAdmin'], 'Boolean');
      if (data.hasOwnProperty('isCanceled'))
        obj.isCanceled = ApiClient.convertToType(data['isCanceled'], 'Boolean');
      if (data.hasOwnProperty('isUpgraded'))
        obj.isUpgraded = ApiClient.convertToType(data['isUpgraded'], 'Boolean');
      if (data.hasOwnProperty('locked'))
        obj.locked = ApiClient.convertToType(data['locked'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('sendpost_subaccount_api_key'))
        obj.sendpostSubaccountApiKey = ApiClient.convertToType(data['sendpost_subaccount_api_key'], 'String');
      if (data.hasOwnProperty('sendpost_subaccount_id'))
        obj.sendpostSubaccountId = ApiClient.convertToType(data['sendpost_subaccount_id'], 'Number');
      if (data.hasOwnProperty('stripeBasePriceId'))
        obj.stripeBasePriceId = ApiClient.convertToType(data['stripeBasePriceId'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} creditsRemaining
   */
  exports.prototype.creditsRemaining = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} isAdmin
   */
  exports.prototype.isAdmin = undefined;

  /**
   * @member {Boolean} isCanceled
   */
  exports.prototype.isCanceled = undefined;

  /**
   * @member {Boolean} isUpgraded
   */
  exports.prototype.isUpgraded = undefined;

  /**
   * @member {Boolean} locked
   */
  exports.prototype.locked = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} sendpostSubaccountApiKey
   */
  exports.prototype.sendpostSubaccountApiKey = undefined;

  /**
   * @member {Number} sendpostSubaccountId
   */
  exports.prototype.sendpostSubaccountId = undefined;

  /**
   * @member {String} stripeBasePriceId
   */
  exports.prototype.stripeBasePriceId = undefined;


  return exports;

}));
