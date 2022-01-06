package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.TestBase;

public class LotinStepDefination extends TestBase {
	LoginPage loginPage;

	@Given("^User is on Techfios login page$")
	public void Given_User_is_on_Techfios_login_page() {
		init();
		driver.get("https://techfios.com/billing/?ng=admin/");

	}

	@When("^User enter username as \"([^\"]*)\"$")
	public void user_enter_username_as(String username) throws Throwable {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(username);
	}

	@When("^User enter password \"([^\"]*)\"$")
	public void user_enter_password(String password) throws Throwable {
		loginPage.enterPassword(password);
		Thread.sleep(3000);
	}

	@And("^user clicks on Signin button$")
	public void user_clicks_on_Signin_button() throws Throwable {
		loginPage.clickSignInButton();
		Thread.sleep(3000);
	}

	@Then("^user should land on Dadhbord Page$")
	public void user_should_land_on_Dadhbord_Page() throws Throwable {
		loginPage.getPageTitle();
		Thread.sleep(3000);
	}

}
