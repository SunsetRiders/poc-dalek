let indexPage = "http://localhost:8080",
  successPage = indexPage + "/success",
  errorPage = indexPage + "/error";

let tests = {
  "Page title is correct": function (test) {
    test
      .open('http://localhost:8080')
      .assert.title().is('POC-Dalek')
      .done();
  },
  "Sign in form exists": function (test) {
    test
      .open('http://localhost:8080')
      .assert.exists("form.form-signin")
      .done();
  },
  "Has a email input": function(test) {
    // test.
    //   open("")
  },
  "Has a password input": function(test) {

  },
  'Clicking on "Use API e-mail" fills the email input with the http.response email': function(test) {

  },
  'Go to the success page for admin/123 user': function(test) {

  },
  'Go to the success page for the "API e-mail" user': function(test) {

  },
  'Go to the error page for other email/password combinations': function(test) {

  }
}

module.exports = tests;
