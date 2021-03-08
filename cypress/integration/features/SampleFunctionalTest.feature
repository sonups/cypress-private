Feature: Sample Test

   Scenario: check valid login test
      Given I open IMDB homepage
      When I click on "Sign In"
      And I press button "Sign in with IMDb"
      Then I should see "Sign-In" text displayed
      When I SignIn as user
      Then The account name should be displayed

   Scenario: select random dropdown value
      Given I open IMDB homepage
      When I select random sortBy value

   Scenario: click random link
      Given I open IMDB homepage
      When I click random link




