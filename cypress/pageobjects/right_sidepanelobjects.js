
const youHaveSeenThis = '.seen-sidebar'
const imdbCharts = '.oneline'
const topIndiaCharts = '.oneline'

export const rightSidePanelObjects = {
  verifyYouHaveSeenThisDisplayed () {
    cy.get(youHaveSeenThis)
      .should('contain', 'You Have Seen')
  },
  verifyChartsLabelDissplayed () {
    cy.get(imdbCharts)
      .should('contain', 'IMDb Charts')
  },
  verifyTopIndiaChartsLabelDIsplayed () {
    cy.get(topIndiaCharts)
      .should('contain', 'Top India Charts')
  },
}
