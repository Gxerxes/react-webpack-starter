import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import Footer from '../../src/components/footer'

configure({ adapter: new Adapter() });

const props = {
  onClick: jest.fn()
}

describe('Footer component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<Footer {...props}/>)
    expect(wrapper.find('a').text()).toContain('click footer')
  })
})
