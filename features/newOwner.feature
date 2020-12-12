Feature: User going to validate New Owner Page for Petclinic application

    Scenario: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid First Name, Last Name, Address, City, Telephone
        And User clicks on Add Owner button on New Owner page
        Then New Owner added successfully message should be displayed