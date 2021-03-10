import { selectDropdownValue, verifydescendingOrderOfMovieRating } from '../utils/helper'

const movieTitle = '.lister>table>tbody>tr>td.titleColumn'
const movieItems = '.lister>table>tbody>tr'
const centreImage = '.centering-image'
const iMDBChartsLabel = '.seen-collection>div>h3'
const topRatedMoviesLabel = '.seen-collection>div>h1'
const topRatedByUsersLabel = '.seen-collection>div>.byline'
const dropdownSortBYIMDBRating = 'select.lister-sort-by'
const movieRatingIdentifier = 'td.ratingColumn.imdbRating'

export const chartsObjects = {
  verifyMovieTitlesDisplayedInNumericalOrder () {
    cy.get(movieTitle)
    .each(($el, index) => {
      let itemNumber = index + 1

      expect($el).to.contain(`${itemNumber}.`)

    })
    .then(($lis) => {
      expect($lis).to.have.length(250) // true
    })
  },
  verify250MoviesDisplayedinCharts () {
    cy.get(movieItems)
    .each(() => {
    })
    .then(($lis) => {
      expect($lis).to.have.length(250) // true
    })
  },
  verifyCentreImageRenderedCorrectly () {
    cy.get(centreImage)
    .should('be.visible')
    .and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
      expect($img[0].naturalHeight).to.be.greaterThan(0)
    })
  },
  verifyHeaderLabelTopRatedMovies (expectedText) {
    cy.get(topRatedMoviesLabel)
      .should('be.visible')
      .should('contain', expectedText)
  },
  verifyHeaderLabelIMDBCharts (expectedText) {
    cy.get(iMDBChartsLabel)
      .should('be.visible')
      .should('contain', expectedText)
  },
  verifyHeaderLabelTopRatedByUsersLabel (expectedText) {
    cy.get(topRatedByUsersLabel)
      .should('be.visible')
      .should('contain', expectedText)
  },
  selectSortByIMDBRating () {
    selectDropdownValue(dropdownSortBYIMDBRating, 'IMDb Rating')
  },
  verifyMovieAreInDescOrderOfMovieRating () {
    verifydescendingOrderOfMovieRating(movieRatingIdentifier)
  },

}
