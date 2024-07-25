import Notifications from "./Notifications";
import { shallow } from "enzyme";
import React from "react";

const wrapper = shallow(<Notifications />)

test('checkin crashing', () => {
    shallow(<Notifications />)
});

test('checkin three list item', () => {
    expect(wrapper.find(ul > li).exists().toEqual(3))
})

test('checkin the text', () => {
    expect(wrapper.find(p).exists().textToBe("Here is the list of notifications"))
})