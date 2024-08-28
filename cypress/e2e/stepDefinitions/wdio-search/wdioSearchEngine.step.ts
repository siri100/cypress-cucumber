import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../pageObjects/HomePage'

const homePage = new HomePage();

Given('I go to the WebdriverIO page', function () {

    homePage.open();

})

Given('I fill the search input with the {string} term on the home page', function (searchText: string) {
    homePage.searchValue(searchText)

})

When('I click on the first result', function () {
    homePage.clickOnFirstResult()
})

Then('the text {string} should be visible on the result page on the Search result page', function (searchText: string) {
    homePage.validateSearchResult(searchText)
})
