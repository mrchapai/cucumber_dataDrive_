$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_login.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios login fanctionality validation",
  "description": "",
  "id": "techfios-login-fanctionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User hould be abe to login with valid credentials",
  "description": "",
  "id": "techfios-login-fanctionality-validation;user-hould-be-abe-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enter password \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should land on Dadhbord Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LotinStepDefination.Given_User_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 4396910600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 24
    }
  ],
  "location": "LotinStepDefination.user_enter_username_as(String)"
});
formatter.result({
  "duration": 163794900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 21
    }
  ],
  "location": "LotinStepDefination.user_enter_password(String)"
});
formatter.result({
  "duration": 3097609000,
  "status": "passed"
});
formatter.match({
  "location": "LotinStepDefination.user_clicks_on_Signin_button()"
});
formatter.result({
  "duration": 4617230600,
  "status": "passed"
});
formatter.match({
  "location": "LotinStepDefination.user_should_land_on_Dadhbord_Page()"
});
formatter.result({
  "duration": 3013703100,
  "status": "passed"
});
});