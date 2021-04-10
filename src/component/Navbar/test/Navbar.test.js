import React from "react";
import ReactDom from 'react-dom';

import Navbar from "../Navbar";
import {render, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('Testing Navbar', ()=> {
    it('renders without crashing', function () {
        const div = document.createElement("div");
        ReactDom.render(<Navbar />, div);
    });

    it('render navbar correctly', () => {
        const {getByTestId} = render(<Navbar />);

        expect(getByTestId('navbar')).toHaveTextContent('Stainley Lebron HomeAbout MePortfolioContact MeSign UpSign Up');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Navbar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
