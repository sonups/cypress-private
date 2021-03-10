Feature: Test to verify imdb top charts

   Scenario: Verify the header labels in top charts page are displayed
      Given I open IMDB homepage
      Then The header should contain "Top Rated Movies"
      Then The top charts page contains the header labels

   Scenario: Verify the top charts contains 250 movies
      Given I open IMDB homepage
      Then The imdb charts contains 250 movie titles

   Scenario: Verify the top charts contains 250 movies in numerical order
      Given I open IMDB homepage
      Then The imdb charts contains 250 movie titles in numerical order







