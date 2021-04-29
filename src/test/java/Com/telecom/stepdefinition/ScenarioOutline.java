package Com.telecom.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ScenarioOutline {
	public static WebDriver driver;
	@Given("Users launches telecom applications")
	public void users_launches_telecom_applications() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();

	}

	@Given("Users clicks on to Add Traffic plans")
	public void users_clicks_on_to_Add_Traffic_plans() {
	    driver.findElement(By.xpath("(//h3)[3]")).click();

	    	}

	@When("Users fills the fieldss {string}, {string},{string},{string},{string},{string},{string}")
	public void users_fills_the_fieldss(String string1, String string2, String string3, String string4, String string5, String string6, String string7) {
		driver.findElement(By.id("rental1")).sendKeys(string1);
	    driver.findElement(By.id("local_minutes")).sendKeys(string2);
	    driver.findElement(By.id("inter_minutes")).sendKeys(string3);
	    driver.findElement(By.id("sms_pack")).sendKeys(string4);
	    driver.findElement(By.id("minutes_charges")).sendKeys(string5);
	    driver.findElement(By.id("inter_charges")).sendKeys(string6);
	    driver.findElement(By.id("sms_charges")).sendKeys(string7);

	}

	@When("Users clicks the submit buttons")
	public void users_clicks_the_submit_buttons() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("Users verifies the configuration texts")
	public void users_verifies_the_configuration_texts() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


	

}
