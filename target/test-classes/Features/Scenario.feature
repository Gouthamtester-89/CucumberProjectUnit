#Author: your.email@your.domain.com
Feature: Scenario Outline

  Scenario Outline: Scenario Outline using Hooks
  # Given Users launches telecom applications
    And Users clicks on to Add Traffic plans
    When Users fills the fieldss "<AA>", "<AB>","<AC>","<AD>","<AE>","<AF>","<AG>"
    And Users clicks the submit buttons
    Then Users verifies the configuration texts

    Examples: 
      | AA  | AB  | AC  | AD  | AE  | AF  | AG  |
      | 111 | 211 | 311 | 411 | 511 | 611 | 711 |
      | 112 | 212 | 312 | 412 | 512 | 612 | 712 |
      | 113 | 213 | 333 | 413 | 513 | 612 | 713 |
      | 114 | 214 | 334 | 414 | 514 | 613 | 714 |
