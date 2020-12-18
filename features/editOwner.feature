Feature: Validate user is able to edit owner information
    @smoke
    Scenario: Verify User able to see Five menus on homepage
        Given User is on All Owners list page
        When User clicks on first owner name to check owner information
        And User clicks on Add Visit button
        And User selects date from calendar