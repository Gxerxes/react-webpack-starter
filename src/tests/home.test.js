import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../src/main/Home'

configure({ adapter: new Adapter() });

const props = {
  onClick: jest.fn()
}

describe('Home component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<Home {...props}/>)
    expect(wrapper.find('h1').text()).toContain('Welcome to DMViewer')
  })
})
