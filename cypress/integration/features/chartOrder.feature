Feature: Test to verify the IMDB top charts page displayed are in correct order 


   Scenario: Sort charts by IMDB rating and verify the movies are in order
      Given I open IMDB homepage
      When I select random sortBy IMDB Rating
      Then The movies are displayed in descending order of movie rating

