import { rightSidePanelObjects } from '../../pageobjects/right_sidepanelobjects'
import { Then } from 'cypress-cucumber-preprocessor/steps'


Then('The right side panel contains You Have Seen Label', () => {
  rightSidePanelObjects.verifyYouHaveSeenThisDisplayed()
})

Then('The right side panel contains IMDb Charts', () => {
  rightSidePanelObjects.verifyChartsLabelDissplayed()
})

Then('The right side panel contains Top India Charts', () => {
  rightSidePanelObjects.verifyTopIndiaChartsLabelDIsplayed()
})
