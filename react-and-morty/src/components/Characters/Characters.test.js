import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Characters from "./Characters";

test("when click on character it shows more information", () => {
	const wrapper = shallow(<Characters />);
	wrapper.find("more-info").simulate("click");
	console.log(wrapper.find(".character.li"));
	expect(wrapper.find(".character-li"));
})

//  1445  npm install @material-ui/core
//  1446  npm install @material-ui/lab 