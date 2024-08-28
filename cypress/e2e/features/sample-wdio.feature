@webdriverio
Feature: Search Feature on the WebdriverIO website

  Background:
    Given I go to the WebdriverIO page
    And I see "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js" in the title

  @smoke
  Scenario: Using the search input with the text "setValue"
    Given I fill the search input with the "setValue" term on the home page
    When I click on the first result
    Then the text "setValue" should be visible on the result page on the Search result page

  # Scenario Outline: Using the search input with the text "<search_text>"
  #   Given I fill the search input with the "<search_text>" term on the Search Engine page
  #   When I click on the search button on the Search Engine page
  #   Then the text "<expected_text>" should be visible on the result page on the Search Engine page

  #   Examples:
  #     | search_text | expected_text |
  #     | cypress     | cypress.io    |
  #     | javascript  | JavaScript    |
