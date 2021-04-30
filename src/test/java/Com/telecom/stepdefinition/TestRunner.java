package Com.telecom.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features//Addcustomer.feature",
		         glue="Com.telecom.stepdefinition",
		         plugin="html:target",
		         monochrome=true,
		         dryRun=false)
		        
                 
		         


public class TestRunner {

}
