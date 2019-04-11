import { Rule } from 'eslint';
import { Node } from "estree";

const rule: Rule.RuleModule = {
    create: (context) => {
        return {
            "CallExpression > MemberExpression > Identifier.property[name='saveScreenshot']": (node: Node) => {
                context.report({
                    message: "browser.saveScreenshot() not allowed",
                    node,
                });
            }
        };
    }
};

export = rule;
