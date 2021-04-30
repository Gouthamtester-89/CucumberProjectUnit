package Com.telecom.stepdefinition;

import Com.telecom.resources.CommonAction;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends CommonAction{

@Before
public void beforeScenario() {

System.out.println("Before Scenario");
launch("\"http://demo.guru99.com/telecom/");


}
@After
public void afterscenario() {

System.out.println("after Scenario");


}

}
