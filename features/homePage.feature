Feature: User going to validate Petclinic Application homepage

    Scenario: Verify User able to see Five menus on homepage
        Given User is on Petclinic home page
        Then Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties

    Scenario: Verify sub-menus like ALL and ADD NEW is displays on Owners tab
        Given User is on Petclinic home page
        When User clicks on owners tab
        Then ALL and ADD NEW owners sub-menus should be displayed

    Scenario: Verify user clicks on ALL sub-menu on Owners tab
        Given User is on Owners tab
        When User clicks on ALL sub-menu
        Then Owners list should be displayed 

    Scenario: Verify user clicks on Add Owner button on list page
        Given User is on All Owners list page
        When User clicks on Add Owner button
        Then Add New Owner page should be displayed

    # Scenario: Verify user clicks on ADD NEW sub-menu on Owners tab
    #     Given User is on Owners tab
    #     When User clicks on ADD NEW sub-menu
    #     Then New Owner page should get displayed



