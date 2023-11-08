/**
 * @fileoverview 默认规则
 * @author heyanqi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/require-lodash"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("require-lodash-import", rule, {
  valid: [
  //   {
  //     code: `import _ from 'lodash';
  //       _.map(item => item*2);
  //     `,
  // },
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "function a (item) { return item*2 };_.map(a)",
      errors: [{ message: "You must import _ from lodash before using it.", type: "CallExpression" }],
    },
  ],
});