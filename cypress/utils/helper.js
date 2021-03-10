//import { forEach,sortBy } from "cypress/types/lodash"
const _ = require('lodash');

export const getArrayRandomelement = (arr) => {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}

export const randomGenerator = (number) => {
  return Math.floor(Math.random() * (number))
}

export const selectRandomDropdownValue = (dropdownelement, random_option) => {
  cy.get(random_option).its('length').then(($length) => {
    const list = randomGenerator($length)
    cy.log(list)
    cy.log(random_option)
    cy.get(random_option)
      .eq(list)
      .then((elem) => {
        cy.get(dropdownelement)
          .select(elem.val())
      })
  })
}

export const selectDropdownValue = (dropdownelement, text) => {
  cy.log(dropdownelement + ":" + text)
  cy.get(dropdownelement).select(text)
    .should('contain', text)
}

export const verifydescendingOrderOfMovieRating = (movieRatingIdentifier) => {
  let currentValue = 0;
  cy.get(movieRatingIdentifier)
  .within(() => {
    const cellsToRatingObjects = (cells$) => {
      return _.map(cells$, (cell$) => {
        return {
          rating: Number(cell$.textContent)
        }
      })
    }

    cy.get('strong')
    .then(cellsToRatingObjects)
    .then((rating) => {
      console.table(rating)
      const sorted = _.sortBy(rating)
      expect(rating, 'cells are sorted').to.deep.equal(sorted)
    })
  })
}


export const clickRandomElementByIndex = (randomelement) => {
  cy.get(randomelement).its('length').then(($length) => {
    const list = randomGenerator($length)

    console.log('listno', list)
    cy.get(randomelement)
      .eq(list)
      .then(($elem) => {
        cy.wrap($elem).click()
      })
  })
}


