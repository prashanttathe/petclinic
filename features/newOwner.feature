Feature: User going to validate New Owner Page for Petclinic application
    @smoke
    Scenario: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid First Name, Last Name, Address, City, Telephone
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last

    Scenario Outline: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid "<First_Name>" "<Last_Name>" "<Address>" "<City>" "<Telephone>"
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last

        Examples:
            | First_Name | Last_Name | Address             | City        | Telephone |
            | James      | Butt      | 6649 N Blue Gum St  | New Orleans | 70116     |
            | Josephine  | Darakjy   | 4 B Blue Ridge Blvd | Brighton    | 5248      |


