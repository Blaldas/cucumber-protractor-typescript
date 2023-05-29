Feature: Ryanair Web App Test Navigation

  Scenario Outline: Scenario Outline name: Ryanair > Basic Navigation
    Given I search for a flight from "Lisbon" to "Terceira Lajes" on 14/10/2023 for <nAdults> adults and <nChild> child
    When I proceed to pay with selected seats and 20 kg bags added for <nAdults> adults and <nChild> child
    Then login popup shows up
      Examples: 
      | nAdults | nChild |
      | 3       | 2      |