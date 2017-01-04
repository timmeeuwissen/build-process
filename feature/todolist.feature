@watch @focus

Feature: Being able to conveniently moderate a todolist
	In order to be able to moderate our todolist
	As a Developer
	I want to know for certain that we can create, read and delete items on our todolist

	Scenario: Successfully adding an item to our todolist 
		Given the user as entered "something" in the inputbox
		When the user clicks on the add button
		Then I should be seeing an item with "something" in the title

  Scenario: Successfully removing an item from our todolist
    Given there is an item with "something" in the title
    When I click the remove button
    Then I shouldn't be seeing an item with "something" in the title
