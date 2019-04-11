import { RuleTester } from "eslint";

import rule from "./no-savescreenshot";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("no-savescreenshot", rule, {
  valid: [
    { code: `this.browser.click('.button');` },
  ],
  invalid: [
    {
      code: `this.browser.saveScreenshot('aaa.png');`,
      errors: [{ message: "browser.saveScreenshot() not allowed" }],
    }
  ],
});
