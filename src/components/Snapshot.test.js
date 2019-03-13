import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import BackBtn from './BackBtn';
import CardList from './CardList';
import DecriptionRow from './DecriptionRow';
import AmoountBox from './AmountBox';


//Card
const mockParams_Card = {
    name: 'Anton',
    id: 5,
    description:{itIs: 'test mock'},
    helper: 'test text'
};

it('Snapshot test for Card component', () => {
    expect(shallow(<Card {...mockParams_Card} />)).toMatchSnapshot();
});


it('Snapshot test for AmoountBox component', () => {
    expect(shallow(<AmoountBox />)).toMatchSnapshot();
});

//DecriptionRow
const mockParams_DecriptionRow = {name:'test-test'};

it('Snapshot test for DecriptionRow component', () => {
    expect(shallow(<DecriptionRow {...mockParams_DecriptionRow}/>)).toMatchSnapshot();
});

//CardList
const mockParams_CardList = {
    robots: [mockParams_Card]
};

it('Snapshot test for CardList component', () => {
    expect(shallow(<CardList {...mockParams_CardList} />)).toMatchSnapshot();
});

it('Snapshot test for BackBtn component', () => {
    expect(shallow(<BackBtn />)).toMatchSnapshot();
});