@watch @focus

Feature: Seeing the effect of the config on the screen
	In order to know if the config was correctly applied,
	As a Developer
	I want to test some of the aspects of the config on the screen

	Scenario: Check if background color is corect
		Given the config has the color set to ivory
		When we look at the website
		Then I should be having a ivory background
