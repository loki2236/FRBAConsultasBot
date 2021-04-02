/* eslint-disable no-undef */
let assert = require('assert');

suite('Testing Suite', function() {
  suite('Config().feature', function() {
    test('Should be an object that has a key for 0 (Default)', function() {
      assert.ok(require('../utils/config').features['0']);
    });
    test('Should be an object with the config for each group', function() {
      let obj = {
        '-1001262375149': {
          enableDeleteSystemMessages: false,
          enableLinks: false,
          enableValidateUsers: false,
          enableRotate: false,
          enableGoogle: false,
          enableNuke: true,
          enableExcel: true,
        },
        // defaults
        '0': {
          enableDeleteSystemMessages: false,
          enableLinks: true,
          enableValidateUsers: false,
          enableRotate: true,
          enableGoogle: true,
          enableNuke: true,
          enableExcel: true,
        },
      };
      assert.deepStrictEqual(require('../utils/config').features, obj);
    });

  });
});
