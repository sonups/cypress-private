import { loginPage } from '../../pageobjects/login_pageobjects'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open IMDB homepage', () => {
  cy.visit('http://www.imdb.com/chart/top?ref_=nv_mv_250_6')
})
Given('I open Internet herokuapp page', () => {
  cy.visit('https://the-internet.herokuapp.com/')
})
When('I SignIn as user', () => {
  loginPage.signIn()
})
Then('The account name should be displayed', () => {
  loginPage.verifyAccountNameDisplayed()
})

Then('I select random sortBy value', () => {
  loginPage.selectRandomSortBy()
})
Then('I click random link', () => {
  loginPage.clickRandomTitle()
})
