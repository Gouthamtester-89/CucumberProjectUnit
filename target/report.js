$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Addcustomer.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate add customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_launches_telecom_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7N9UK2A\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58216}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c7468e1e90065c9ec16ca5ebd93ebb40\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat Com.telecom.stepdefinition.AddCustomer.user_launches_telecom_application(AddCustomer.java:22)\r\n\tat ✽.user launches telecom application(src/test/resources/Features/Addcustomer.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user need to fill up fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_need_to_fill_up_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verfy customerid is generated.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_verfy_customerid_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Scenario.feature");
formatter.feature({
  "name": "Scenario Outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Scenario Outline using Hooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Users launches telecom applications",
  "keyword": "Given "
});
formatter.step({
  "name": "Users clicks on to Add Traffic plans",
  "keyword": "And "
});
formatter.step({
  "name": "Users fills the fieldss \"\u003cAA\u003e\", \"\u003cAB\u003e\",\"\u003cAC\u003e\",\"\u003cAD\u003e\",\"\u003cAE\u003e\",\"\u003cAF\u003e\",\"\u003cAG\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Users clicks the submit buttons",
  "keyword": "And "
});
formatter.step({
  "name": "Users verifies the configuration texts",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "AA",
        "AB",
        "AC",
        "AD",
        "AE",
        "AF",
        "AG"
      ]
    },
    {
      "cells": [
        "111",
        "211",
        "311",
        "411",
        "511",
        "611",
        "711"
      ]
    },
    {
      "cells": [
        "112",
        "212",
        "312",
        "412",
        "512",
        "612",
        "712"
      ]
    },
    {
      "cells": [
        "113",
        "213",
        "333",
        "413",
        "513",
        "612",
        "713"
      ]
    },
    {
      "cells": [
        "114",
        "214",
        "334",
        "414",
        "514",
        "613",
        "714"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario Outline using Hooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Users launches telecom applications",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.users_launches_telecom_applications()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7N9UK2A\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58237}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: de628034246ee7a352d88140eba900f3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat Com.telecom.stepdefinition.ScenarioOutline.users_launches_telecom_applications(ScenarioOutline.java:18)\r\n\tat ✽.Users launches telecom applications(src/test/resources/Features/Scenario.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Users clicks on to Add Traffic plans",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_on_to_Add_Traffic_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users fills the fieldss \"111\", \"211\",\"311\",\"411\",\"511\",\"611\",\"711\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.users_fills_the_fieldss(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users clicks the submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users verifies the configuration texts",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.users_verifies_the_configuration_texts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Outline using Hooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Users launches telecom applications",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.users_launches_telecom_applications()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7N9UK2A\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 44b7fa250154b61962fa300d2424162a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat Com.telecom.stepdefinition.ScenarioOutline.users_launches_telecom_applications(ScenarioOutline.java:18)\r\n\tat ✽.Users launches telecom applications(src/test/resources/Features/Scenario.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Users clicks on to Add Traffic plans",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_on_to_Add_Traffic_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users fills the fieldss \"112\", \"212\",\"312\",\"412\",\"512\",\"612\",\"712\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.users_fills_the_fieldss(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users clicks the submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users verifies the configuration texts",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.users_verifies_the_configuration_texts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Outline using Hooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Users launches telecom applications",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.users_launches_telecom_applications()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7N9UK2A\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58260}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 86ae40640b5f186a19a41f4dcd4cad87\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat Com.telecom.stepdefinition.ScenarioOutline.users_launches_telecom_applications(ScenarioOutline.java:18)\r\n\tat ✽.Users launches telecom applications(src/test/resources/Features/Scenario.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Users clicks on to Add Traffic plans",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_on_to_Add_Traffic_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users fills the fieldss \"113\", \"213\",\"333\",\"413\",\"513\",\"612\",\"713\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.users_fills_the_fieldss(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users clicks the submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users verifies the configuration texts",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.users_verifies_the_configuration_texts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario Outline using Hooks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Users launches telecom applications",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.users_launches_telecom_applications()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7N9UK2A\u0027, ip: \u0027192.168.43.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc5e9d7554b06f2e835f5640509dddb0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat Com.telecom.stepdefinition.ScenarioOutline.users_launches_telecom_applications(ScenarioOutline.java:18)\r\n\tat ✽.Users launches telecom applications(src/test/resources/Features/Scenario.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Users clicks on to Add Traffic plans",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_on_to_Add_Traffic_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users fills the fieldss \"114\", \"214\",\"334\",\"414\",\"514\",\"613\",\"714\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.users_fills_the_fieldss(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users clicks the submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.users_clicks_the_submit_buttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Users verifies the configuration texts",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.users_verifies_the_configuration_texts()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});