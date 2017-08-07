import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from '../index';

describe('Header component', () => {

	it('should render a single .header element', () => {
		const header = mount(<Header />);
		expect(header.find('.header').length).to.eq(1);
	});

	it('should render a single .header__title element', () => {
		const header = mount(<Header />);
		expect(header.find('.header__title').length).to.eq(1);
	});

	it('should render a single .header__logo element', () => {
		const header = mount(<Header />);
		expect(header.find('.header__logo').length).to.eq(1);
	});

});
