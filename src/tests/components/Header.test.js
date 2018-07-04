import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../components/Header.js'

test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
})