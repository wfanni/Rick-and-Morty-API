import { ExpansionPanelActions } from "@material-ui/core";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
configure({ adapter: new Adapter() });
import App from "./App"
import Characters from "./components/Characters/Characters";
import Locations from "./components/Locations/Locations";

// Rendering test

it("renders without crashing", () => {
	shallow(<App />);
});

// Character test

// It's the function which compares the actual text inside the component to the expected one
// Used for both character and locaton tests
function isCorrectText(wrapper, className, expectedText) {
	expect(wrapper.find(`.${className}`).text().split(/\s+/).join(" ").trim()).toEqual(expectedText)
}

// Character sample we load into the Character component

const characters = [{
	"id": "1",
	"name": "Rick Sanchez",
	"status": "Alive",
	"species": "Human",
	"gender": "Male",
	"origin": {
	  "name": "Earth (C-137)",
	},
	"location": {
	  "name": "Earth (Replacement Dimension)",
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }]

 // Creating texts which will be compared to the actual texts inside the Character component
const originalTextChar = "Rick Sanchez Human"
const expectedTextChar = "Rick Sanchez Human Gender: Male Status: Alive " +
							"Current location: Earth (Replacement Dimension) Origin: Earth (C-137)"

const divFirst = document.createElement('div');
divFirst.setAttribute('id', 'container1');
document.body.appendChild(divFirst);

// The actual character test
it("more info shows up if a character clicked", () => {
	const wrapper = mount(<Characters data={characters}/>, 
	{ attachTo: document.getElementById('container1') })

	// Check the original text before clicking
	isCorrectText(wrapper, "text-container", originalTextChar)
	wrapper.find(".more-info").simulate("click");
	// // Check the text after clicking
	isCorrectText(wrapper, "text-container", expectedTextChar)
})

// Location test. Same as Character test but with different parameters
const locations = [
  {
	"id": 1,
	"name": "Earth (C-137)",
	"type": "Planet",
	"dimension": "Dimension C-137",
	"residents": [
	  "https://rickandmortyapi.com/api/character/38",
	],
	"url": "https://rickandmortyapi.com/api/location/1",
	"created": "2017-11-10T12:42:04.162Z"
  }
]

const originalTextLoc = "Earth (C-137)Planet";
const expectedTextLoc = "Earth (C-137)Planet Dimension: Dimension C-137";

const divSecond = document.createElement('div');
divSecond.setAttribute('id', 'container2');
document.body.appendChild(divSecond);

it("more info shows up if a location clicked", () => {
	const wrapper = mount(<Locations data={locations}/>, 
	{ attachTo: document.getElementById('container2') })

	// Check the original text before clicking
	isCorrectText(wrapper, "text-container-loc", originalTextLoc)
	wrapper.find(".more-info").simulate("click");
	// Check the text after clicking
	isCorrectText(wrapper, "text-container-loc", expectedTextLoc)
})