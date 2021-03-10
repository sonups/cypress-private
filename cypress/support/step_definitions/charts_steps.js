import { chartsObjects } from '../../pageobjects/charts_pageobjects'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//verifies 250 movies rows are present in charts page
Then('The imdb charts contains 250 movie titles', () => {
  chartsObjects.verify250MoviesDisplayedinCharts()
})
//verifies the movie titles to contain text such as 1. , 2. , 3. etc..
Then('The imdb charts contains 250 movie titles in numerical order', () => {
  chartsObjects.verifyMovieTitlesDisplayedInNumericalOrder()
})

//verifies the movie titles to contain text such as 1. , 2. , 3. etc..
Then('The imdb charts page contains the centre image', () => {
  chartsObjects.verifyCentreImageRenderedCorrectly()
})

//verifies the top charts page to contain header labels such as 'Top Rated Movies', 'IMDb Charts', 'Top 250 as rated by IMDb Users'
Then('The top charts page contains the header labels', () => {

  chartsObjects.verifyHeaderLabelTopRatedMovies('Top Rated Movies')
  chartsObjects.verifyHeaderLabelIMDBCharts('IMDb Charts')
  chartsObjects.verifyHeaderLabelTopRatedByUsersLabel('Top 250 as rated by IMDb Users')
})
Given('I open IMDB homepage', () => {
  cy.visit('http://www.imdb.com/chart/top?ref_=nv_mv_250_6')
})


Then('I select random sortBy value', () => {
  chartsObjects.selectRandomSortBy()
})
When('I select random sortBy IMDB Rating', () => {
  chartsObjects.selectSortByIMDBRating()
})
Then('The movies are displayed in descending order of movie rating', () => {
  chartsObjects.verifyMovieAreInDescOrderOfMovieRating()
})


