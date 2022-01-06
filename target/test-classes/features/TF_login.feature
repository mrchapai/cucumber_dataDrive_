Feature: Techfios login fanctionality validation 
Scenario: User hould be abe to login with valid credentials 
	Given User is on Techfios login page 
	When User enter username as "demo@techfios.com" 
	When  User enter password "abc123" 
	And user clicks on Signin button 
	Then user should land on Dadhbord Page 
