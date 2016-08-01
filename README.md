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
| [integration] CI-Codeship | :heavy_check_mark:  | TBD

## Install
```sh
$ npm install dalek-cli -g
$ npm install dalekjs --save-dev
```

### Custom plugins
## "dalek-reporter-html" - Generate console and html test reports
npm install dalek-reporter-html --save-dev
dalek <test-file-name> -r console,html


## "dalek-browser-chrome" - Running the tests using your chrome browser
> Note: Chrome Browser needs to be installed
npm install dalek-browser-chrome --save-dev
dalek <test-file-name> -r console,html -b chrome
