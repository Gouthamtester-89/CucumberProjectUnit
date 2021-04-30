package Com.telecom.stepdefinition;



import Com.telecom.objectrepository.AddCustomerPage;
import Com.telecom.resources.CommonAction;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddCustomer extends CommonAction{
	CommonAction ca = new CommonAction();
	AddCustomerPage ac = new AddCustomerPage();
	

		@Given("user click on add customer button")
		public void user_click_on_add_customer_button() {
			ca.button(ac.getAddcustomerBtn());
		}

		@When("user need to fill up fields")
		public void user_need_to_fill_up_fields() {
			ca.button(ac.getDoneBtn());
			ca.insertText(ac.getFirstnameBtn(), "Goutham");
			ca.insertText(ac.getLastnameBtn(), "Madesh");
			ca.insertText(ac.getEmailbtn(), "gouthammadhesh89@gmail.com");
			ca.insertText(ac.getTelehonenoBtn(), "9003482722");
			ca.insertText(ac.getAddrBtn(),"SALEM");
			
		}

		@When("user click on submit button")
		public void user_click_on_submit_button() {
			ca.button(ac.getSubmitbtn());
			
			}

		@Then("user verfy customerid is generated.")
		public void user_verfy_customerid_is_generated() {
			Assert.assertTrue(ac.getCustidBtn().isDisplayed());
		    
		}
}
