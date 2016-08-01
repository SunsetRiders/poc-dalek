# POC for Dalek.js
> NOTE: Still under development

## Comparison
> TBD: To be discovered

| Functional tests          | Intern              | Dalek
----------------------------|---------------------|-----------
| Selenium                  | :heavy_check_mark:  | no
| [browser] Chrome          | :heavy_check_mark:  | :heavy_check_mark:
| [browser] Firefox         | :heavy_check_mark:  | :heavy_check_mark:
| [browser] Phantom         | :heavy_check_mark:  | :heavy_check_mark:
| [feat] Screenshot         | :heavy_check_mark:  | :heavy_check_mark:
| [feat] Custom tweaks      | :heavy_check_mark:  | TBD
| [feat] Mocks / stubs      | :heavy_check_mark:  | no
| [feat] Command line args  | :heavy_check_mark:  | TBD
| [feat] Skip tests         | :heavy_check_mark:  | TBD
| [feat] Aux. methods       | :heavy_check_mark:  | :heavy_check_mark:
| [feat] Coverage           | :heavy_check_mark:  | TBD
| [feat] BDD interface      | :heavy_check_mark:  | no
| [feat] TDD interface      | :heavy_check_mark:  | no
| [feat] Object interface   | :heavy_check_mark:  | :heavy_check_mark:
| [integration] CI-Codeship | :heavy_check_mark:  | TBD
| [api][general][1] done()  | :heavy_check_mark:  | ISSUE




## Install
```sh
$ npm install dalek-cli -g
$ npm install dalekjs --save-dev
```

### Custom plugins
## "dalek-reporter-html" - Generate console and html test reports
```sh
npm install dalek-reporter-html --save-dev
dalek <test-file-name> -r console,html
```

## "dalek-browser-chrome" - Running the tests using your chrome browser
> Note: Chrome Browser needs to be installed

```sh
npm install dalek-browser-chrome --save-dev
dalek <test-file-name> -r console,html -b chrome
```

## PROS vs CONS
1. PRO for: "The intern"
  - "BDD" and "TDD" interfaces
  Tests on "dalek.js" can only be written using the "object interface".
  You can't chain tests using the "dalek.js" object interface.

  "The intern" e.g:
  ```js
  bdd.describe("Submit form", function() {
    bdd.describe("must have", function() {
      bdd.it("email input", function() {
        // ... test
      });

      bdd.it("password input", function() {
        // ... test
      });
    });
  });
  ```
  "Dalek.js" e.g:

  > // DOESN'T WORK
  ```js
  module.exports = {
    "Submit form": function(test) {
      "must have": function(test) {

      }
    };
  };
  ```

  > // WORK
  ```js
  module.exports = {
    'Page title is correct': function (test) {
      test
        .open('http://google.com')
        .assert.title().is('Google', 'It has title')
        .done();
    },
    'Sign in form exists': function (test) {
      test
        .open('http://localhost:8080')
        .assert.exists("form.form-signin")
        .done();
    }
  };
  ```

### TODO
2. PRO for: "The intern"
  - Logging errors on test executions
  "The intern" logs are very "stacktrace" like, which helps on debugging.
  On the other hand, "Dalek.js" is not.
  Look at the example bellow:
  > The intern

  > Dalek.js

3. Pro for: "The intern" Browser

## ISSUES
# [API][GENERAL][1]:
  "done()"
  - User story:
  Even when calling the "done()" function at the end of the tests, the CLI thinks that the done() function is not being called.
  The output message at the every test after the first one is: ">> WARNING: done() not called before timeout!"

  - Image: <dalek-api-done()-bug.png>

  - Issue reference:
  https://github.com/dalekjs/dalek-reporter-console/issues/4
  https://github.com/dalekjs/dalek/issues/12

  - Google search:

  - Solution reference:

  - Solution:



# [PACKAGE][1]:
  "Copying extracted folder"
    - User story:
      Running "npm install dalek" downloads "phantomjs" npm package.
      As it finishes, the npm tries to unpack the ".tar.gz" file at your "node_modules/" package but the CLI frozes
      and the message "Copying extracted folder /tmp/phantomjs/phantomjs-1.9.8-linux-x86_64.tar.bz2-extract-1470071522030/phantomjs-1.9.8-linux-x86_64 ->"(...) remains.

    - Image: <dalek-bug.jpg>

    - Issue reference:

    - Google search: "dalek Copying extracted folder"

    - Solution reference: https://github.com/dalekjs/dalek/issues/165

    - Solution:
    The problem is with the "dalek-browser-phantomjs" package, the fix is already done in a fork but not already merged.
    Add this to your "package.json" file:
    ```json
    "dalek-browser-phantomjs":"https://github.com/wrumsby/dalek-browser-phantomjs/tarball/b0b6c011eec55ea7da987461f6e1c79a6ab4bf6e"
    ```
