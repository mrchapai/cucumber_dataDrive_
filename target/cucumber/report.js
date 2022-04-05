$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/loginWithDataFromDatabase.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios login page with data extracted from databases",
  "description": "",
  "id": "techfios-login-page-with-data-extracted-from-databases",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DbF1"
    }
  ]
});
formatter.before({
  "duration": 5088265300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "1 User hould be abe to login with valid credentials",
  "description": "",
  "id": "techfios-login-page-with-data-extracted-from-databases;1-user-hould-be-abe-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Db1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Techfios login page with daata",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter \"username\" from techfios with database",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"password\" from techfios with database",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Signin button with database",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should land on Dadhbord Page with database",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Techfios_login_page_with_daata()"
});
formatter.result({
  "duration": 114727400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enter_from_techfios_with_database(String)"
});
formatter.result({
  "duration": 4402393900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enter_from_techfios_with_database(String)"
});
formatter.result({
  "duration": 3149532000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Signin_button_with_database()"
});
formatter.result({
  "duration": 6415801100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dadhbord_Page_with_database()"
});
formatter.result({
  "duration": 3234817900,
  "status": "passed"
});
formatter.after({
  "duration": 701706400,
  "status": "passed"
});
});