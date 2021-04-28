#Author: your.email@your.domain.com
Feature: Adding tariff plan

  Scenario: validate the Add Traffic plan
    Given Users launches telecom application
    And Users clicks on to Add Traffic plan
    When Users fills the fields
    And Users clicks the submit button
    Then Users verifies the configuration text

  Scenario: validate the Add Traffic plan
    Given Users launches telecom application
    And Users clicks on to Add Traffic plan
    When Users fills the fields by one dim list
      | 10 | 200 | 300 | 400 | 500 | 600 | 700 |
    And Users clicks the submit button
    Then Users verifies the configuration text

  Scenario: validate the Add Traffic plan
    Given Users launches telecom application
    And Users clicks on to Add Traffic plan
    When Users fills the fields by one dim map
      | rental      |   11 |
      | lname       | 2200 |
      | email       | 3300 |
      | addr        | 4400 |
      | telephoneno | 5500 |
      | addss       | 6600 |
      | tele        | 7700 |
    And Users clicks the submit button
    Then Users verifies the configuration text

  Scenario: validate the Add Traffic plan
    Given Users launches telecom application
    And Users clicks on to Add Traffic plan
    When Users fills the fields by two dim list
      | 11 | 21 | 31 | 41 | 500 | 600 | 700 |
      | 12 | 22 | 32 | 42 | 500 | 600 | 700 |
      | 13 | 23 | 33 | 43 | 500 | 600 | 700 |
    And Users clicks the submit button
    Then Users verifies the configuration text

  Scenario: validate the Add Traffic plan
    Given Users launches telecom application
    And Users clicks on to Add Traffic plan
    When Users fills the fields by two dim map
      | ren | lnm | ema | add | tele | san | pre |
      |  11 |  21 |  31 |  41 |  500 | 600 | 700 |
      |  12 |  22 |  32 |  42 |  500 | 600 | 700 |
      |  13 |  23 |  33 |  43 |  500 | 600 | 700 |
    And Users clicks the submit button
    Then Users verifies the configuration text
