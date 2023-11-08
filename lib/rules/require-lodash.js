/**
 * @fileoverview 默认规则
 * @author heyanqi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "默认规则",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      info: 'You must import _ from lodash before using it.',
    },
  },

  create(context) {
    const source = context.getSourceCode().getText();
    let hasLodash = false; // 是否引入lodash
    let hasFix = false; // 标记是否已经修复了，避免重复修复
    if (source.includes(`import _ from 'lodash'`) || source.includes(`import LO from 'lodash'`) || source.includes(`import lodash from 'lodash'`)) {
      hasLodash = true; // 有引入lodash
    }
    return {
      CallExpression(node) {
        const curObjName = node.callee?.object?.name;
        if ((curObjName === '_' || curObjName === 'lodash' || curObjName === 'LO') && !hasLodash) {
          const range = [0, 0]; // 插入到文档最开始
          const importStatement = `import ${curObjName} from 'lodash';\n`;
          // 没有引入lodash但却使用到了
          context.report({
            node,
            messageId: 'info',
            fix: function(fixer) {
              if (!hasFix) {
                hasFix = true;
                return fixer.insertTextBeforeRange(range, importStatement);
              }
            }
          });
        }
      }
    };
  },
};