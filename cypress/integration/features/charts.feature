Feature: Test to verify IMDB top charts

   Scenario: Verify in IMDB top charts page the header labels are displayed
      Given I open IMDB homepage
      Then The header should contain "Top Rated Movies"
      Then The top charts page contains the header labels

   Scenario: Verify the IMDB top charts contains 250 movies
      Given I open IMDB homepage
      Then The imdb charts contains 250 movie titles

   @specific
   Scenario: Verify the IMDB top chart contains 250 movies in numerical order
      Given I open IMDB homepage
      Then The imdb charts contains 250 movie titles in numerical order







