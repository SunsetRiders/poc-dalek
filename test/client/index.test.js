let indexPage = "http://localhost:8080",
  successPage = indexPage + "/success",
  errorPage = indexPage + "/error";

let tests = {
  "Page title is correct": function (test) {
    test
      .open(indexPage)
      .assert.title('POC-Dalek', "")
      .done();
  },
  "Sign in form exists": function (test) {
    test
      .open(indexPage)
      .assert.exists("form.form-signin", "")
      .done();
  },
  "Has a email input": function(test) {
    test.
      open(indexPage)
      .assert.exists("input[type=email]")
      .done();
  },
  "Has a password input": function(test) {
    test.
      open(indexPage)
      .assert.exists("input[type=password]")
      .done();
  },
  'Clicking on "Use API email" fills the email input with the http.response email': function(test) {
    // http://www.mocky.io/v2/579fa2452c0000811c9e1093
    test.
      open(indexPage)
      .click("#use-api-email")
      .wait(5000)
      .assert.text("input[type=email]", "lscastro@daitangroup.com")
      .done();
  },
  'Go to the success page for admin/123 user': function(test) {

  },
  'Go to the success page for the "API e-mail" user': function(test) {

  },
  'Go to the error page for other email/password combinations': function(test) {

  },


  "Using custom command line parameters": function(test) {
    // NODE_ENV=testing PARAM1=VALUE1 dalek test/client/*.js
    // This is the workaround that I found to make it work
    let _test = test.open(indexPage);

    console.log(process.ENV.PARAM1);
    if(process.ENV.PARAM1 === "VALUE1") {
      _test.title().is("Google");
    } else {
      _test.title().is("POC-Dalek");
    }

    _test.done();
  }
}

module.exports = tests;
