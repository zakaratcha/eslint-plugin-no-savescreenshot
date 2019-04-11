# eslint-plugin-no-savescreenshot

Forbides `this.browser.saveScreenshot()`. Useful for WebdriverIO and Hermione.

Add to your `eslintrc`:
```
{
    "plugins": [
        "eslint-plugin-no-savescreenshot"
    ],
    "rules": {
      "eslint-plugin-no-savescreenshot/no-savescreenshot": 2
    }
}
```
