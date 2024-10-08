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
    define(['ApiClient', 'model/ModelsJobStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsJobStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.SendVerifyApi) {
      root.SendVerifyApi = {};
    }
    root.SendVerifyApi.ModelsValidationJob = factory(root.SendVerifyApi.ApiClient, root.SendVerifyApi.ModelsJobStatus);
  }
}(this, function(ApiClient, ModelsJobStatus) {
  'use strict';

  /**
   * The ModelsValidationJob model module.
   * @module model/ModelsValidationJob
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsValidationJob</code>.
   * @alias module:model/ModelsValidationJob
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsValidationJob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsValidationJob} obj Optional instance to populate.
   * @return {module:model/ModelsValidationJob} The populated <code>ModelsValidationJob</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('processed'))
        obj.processed = ApiClient.convertToType(data['processed'], 'Number');
      if (data.hasOwnProperty('resultInvalidPath'))
        obj.resultInvalidPath = ApiClient.convertToType(data['resultInvalidPath'], 'String');
      if (data.hasOwnProperty('resultPath'))
        obj.resultPath = ApiClient.convertToType(data['resultPath'], 'String');
      if (data.hasOwnProperty('resultValidPath'))
        obj.resultValidPath = ApiClient.convertToType(data['resultValidPath'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ModelsJobStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} processed
   */
  exports.prototype.processed = undefined;

  /**
   * @member {String} resultInvalidPath
   */
  exports.prototype.resultInvalidPath = undefined;

  /**
   * @member {String} resultPath
   */
  exports.prototype.resultPath = undefined;

  /**
   * @member {String} resultValidPath
   */
  exports.prototype.resultValidPath = undefined;

  /**
   * @member {module:model/ModelsJobStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * @member {Number} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
