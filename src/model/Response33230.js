(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Response33230Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Response33230Result'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33230 = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Response33230Result);
  }
}(this, function(ApiClient, Response33230Result) {
  'use strict';




  /**
   * The Response33230 model module.
   * @module model/Response33230
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33230</code>.
   * @alias module:model/Response33230
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Response33230</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33230} obj Optional instance to populate.
   * @return {module:model/Response33230} The populated <code>Response33230</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = Response33230Result.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Response33230Result} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


