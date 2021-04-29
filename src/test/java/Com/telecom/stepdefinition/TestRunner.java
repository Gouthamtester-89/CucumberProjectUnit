package Com.telecom.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features",
		         glue="Com.telecom.stepdefinition",
		         plugin="html:target",
		         monochrome=true,
		         dryRun=false,
		         tags= {"~@goutham"})
                 
		         


public class TestRunner {

}
