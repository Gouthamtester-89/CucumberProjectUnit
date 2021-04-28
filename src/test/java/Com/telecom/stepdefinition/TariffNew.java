package Com.telecom.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class TariffNew {
	public static WebDriver driver;
	
	

@Given("Users launches telecom application")
public void users_launches_telecom_application() {
	
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();

    
}

@Given("Users clicks on to Add Traffic plan")
public void users_clicks_on_to_Add_Traffic_plan() {
    driver.findElement(By.xpath("(//h3)[3]")).click();

}

@When("Users fills the fields")
public void users_fills_the_fields() {
	driver.findElement(By.id("rental1")).sendKeys("100");
    driver.findElement(By.id("local_minutes")).sendKeys("123");
    driver.findElement(By.id("inter_minutes")).sendKeys("145");
    driver.findElement(By.id("sms_pack")).sendKeys("28");
    driver.findElement(By.id("minutes_charges")).sendKeys("125");
    driver.findElement(By.id("inter_charges")).sendKeys("240");
    driver.findElement(By.id("sms_charges")).sendKeys("29");

    }

@When("Users clicks the submit button")
public void users_clicks_the_submit_button() {
	driver.findElement(By.xpath("//input[@type='submit']")).click();

}

@Then("Users verifies the configuration text")
public void users_verifies_the_configuration_text() {
    Assert.assertEquals("Congratulations you add tariff plan", driver.findElement(By.xpath("//h2[1]")).getText());
}

@When("Users fills the fields by one dim list")
public void users_fills_the_fields_by_one_dim_list(io.cucumber.datatable.DataTable dataTable)
{
	List<String> datas = dataTable.asList();
	driver.findElement(By.id("rental1")).sendKeys(datas.get(0));
    driver.findElement(By.id("local_minutes")).sendKeys(datas.get(1));
    driver.findElement(By.id("inter_minutes")).sendKeys(datas.get(2));
    driver.findElement(By.id("sms_pack")).sendKeys(datas.get(3));
    driver.findElement(By.id("minutes_charges")).sendKeys(datas.get(4));
    driver.findElement(By.id("inter_charges")).sendKeys(datas.get(5));
    driver.findElement(By.id("sms_charges")).sendKeys(datas.get(6));
    
    
    

}
@When("Users fills the fields by one dim map")
public void users_fills_the_fields_by_one_dim_map(io.cucumber.datatable.DataTable dataTable) {
	Map<String, String> datas = dataTable.asMap(String.class, String.class);
	driver.findElement(By.id("rental1")).sendKeys(datas.get("rental "));
    driver.findElement(By.id("local_minutes")).sendKeys(datas.get("lname"));
    driver.findElement(By.id("inter_minutes")).sendKeys(datas.get("email"));
    driver.findElement(By.id("sms_pack")).sendKeys(datas.get("addr"));
    driver.findElement(By.id("minutes_charges")).sendKeys(datas.get("telephoneno"));
    driver.findElement(By.id("inter_charges")).sendKeys(datas.get("addss"));
    driver.findElement(By.id("sms_charges")).sendKeys(datas.get("tele"));
    
    
}

@When("Users fills the fields by two dim list")
public void users_fills_the_fields_by_two_dim_list(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> datas = dataTable.asLists(String.class);
	driver.findElement(By.id("rental1")).sendKeys(datas.get(0).get(1));
    driver.findElement(By.id("local_minutes")).sendKeys(datas.get(1).get(2));
    driver.findElement(By.id("inter_minutes")).sendKeys(datas.get(2).get(4));
    driver.findElement(By.id("sms_pack")).sendKeys(datas.get(1).get(5));
    driver.findElement(By.id("minutes_charges")).sendKeys(datas.get(2).get(5));
    driver.findElement(By.id("inter_charges")).sendKeys(datas.get(1).get(3));
    driver.findElement(By.id("sms_charges")).sendKeys(datas.get(0).get(2));

}

@When("Users fills the fields by two dim map")
public void users_fills_the_fields_by_two_dim_map(io.cucumber.datatable.DataTable dataTable)
{
	List<Map<String, String>> datas = dataTable.asMaps(String.class,String.class);
	driver.findElement(By.id("rental1")).sendKeys(datas.get(0).get("ren"));
    driver.findElement(By.id("local_minutes")).sendKeys(datas.get(0).get("ema"));
    driver.findElement(By.id("inter_minutes")).sendKeys(datas.get(1).get("ema"));
    driver.findElement(By.id("sms_pack")).sendKeys(datas.get(1).get("add"));
    driver.findElement(By.id("minutes_charges")).sendKeys(datas.get(2).get("tele"));
    driver.findElement(By.id("inter_charges")).sendKeys(datas.get(1).get("san"));
    driver.findElement(By.id("sms_charges")).sendKeys(datas.get(0).get("pre"));
	
}
}
		