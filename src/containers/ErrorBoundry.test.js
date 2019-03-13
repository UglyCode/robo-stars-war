import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';

function Something() {
    // this is just a placeholder
    return null;
}

it('test statefull component', () => {

    const ErrorBoundryWrapper = shallow(<ErrorBoundry><Something/></ErrorBoundry> );
    expect(ErrorBoundryWrapper.find('.errorOccurred')).toHaveLength(0);

    ErrorBoundryWrapper.find(Something).simulateError(new Error('test error'));
    expect(ErrorBoundryWrapper.find('.errorOccurred')).toHaveLength(1);

});