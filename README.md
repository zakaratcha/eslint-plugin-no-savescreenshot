# eslint-plugin-no-savescreenshot

Forbides `this.browser.saveScreenshot()`. Useful for WebdriverIO and Hermione.

## install

```
npm i eslint-plugin-no-savescreenshot
```


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
