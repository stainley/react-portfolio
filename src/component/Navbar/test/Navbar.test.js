import React from "react";
import ReactDom from 'react-dom';

import Navbar from "../Navbar";
import {render, cleanup, act, fireEvent, getByTestId} from "@testing-library/react";
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import App from "../../../App";

afterEach(cleanup);

describe('rendering components', ()=> {
    it('renders Navbar component without crashing', function () {

        const div = document.createElement("div");
        ReactDom.render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>, div
        );
    });

    it('render navbar correctly', () => {
        const {getByTestId} = render(<MemoryRouter><Navbar /></MemoryRouter>);

        expect(getByTestId('navbar-test-id')).toHaveTextContent('Stainley Lebron HomeAbout MePortfolioContact MeSign UpSign Up');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('navigate about when click', async () => {
        const tree = render(<MemoryRouter><Navbar/></MemoryRouter>);
        // Interact with the page
        tree.queryByText('nav-links');
        act(() => {
            // Clicked
            fireEvent.click(tree.getByText('About Me'));

        });

    });
});


describe('logic', () => {

    it('logic sum two values', () => {
        expect(1).toEqual(1);
    })

});
