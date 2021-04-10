import React from 'react';
import ReactDOM from 'react-dom';

import Portfolio from "../Portfolio";
import {render, screen} from "@testing-library/react";
import About from "../../about/About";

describe('Portfolio test suite', ()=> {

    it('render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Portfolio/>, div);
    } );


});
