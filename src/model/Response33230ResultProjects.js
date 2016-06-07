(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33230ResultProjects = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Response33230ResultProjects model module.
   * @module model/Response33230ResultProjects
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33230ResultProjects</code>.
   * @alias module:model/Response33230ResultProjects
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Response33230ResultProjects</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33230ResultProjects} obj Optional instance to populate.
   * @return {module:model/Response33230ResultProjects} The populated <code>Response33230ResultProjects</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));


