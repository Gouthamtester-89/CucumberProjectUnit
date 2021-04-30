package Com.telecom.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.telecom.resources.CommonAction;

public class AddCustomerPage extends CommonAction {
	public AddCustomerPage() {
		PageFactory.initElements(driver,this);
}

   @FindBy(xpath="(//a[text()='Add Customer'])[1]")
   private WebElement addcustomerBtn;
   
   @FindBy(xpath="(//label)[1]")
   private WebElement doneBtn;
   
   @FindBy(id="fname")
   private WebElement firstnameBtn;
   
   @FindBy(id="lname")
   private WebElement lastnameBtn;
   
   @FindBy(id="email")
   private WebElement emailbtn;
   
   @FindBy(name="addr")
   private WebElement addrBtn;
   
   @FindBy(id="telephoneno")
   private WebElement telehonenoBtn;
   
   @FindBy(xpath="(//input[@type='submit']")
   private WebElement submitbtn;
   
   @FindBy(xpath="(//td[@align='center'])[2]")
   private WebElement custidBtn;

public WebElement getAddcustomerBtn() {
	return addcustomerBtn;
}

public WebElement getDoneBtn() {
	return doneBtn;
}

public WebElement getFirstnameBtn() {
	return firstnameBtn;
}

public WebElement getLastnameBtn() {
	return lastnameBtn;
}

public WebElement getEmailbtn() {
	return emailbtn;
}

public WebElement getAddrBtn() {
	return addrBtn;
}

public WebElement getTelehonenoBtn() {
	return telehonenoBtn;
}

public WebElement getSubmitbtn() {
	return submitbtn;
}

public WebElement getCustidBtn() {
	return custidBtn;
}
}