import React from "react";
import ReactDOM from "react-dom/client";
import {act} from "react";

import { Appointment } from "../src/Appointment.js";

describe("Appointment", () => {
    it("renders customer first name", () => {
        const customer = { firstName: "Ashley" };
        const component = <Appointment customer={customer} />;
        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act( () => 
            ReactDOM.createRoot(container).render(component)
        );
        
        expect(document.body.textContent).toContain("Ashley");
    })

    it("renders another customer first name", () => {
        const customer = { firstName: "Jordan" };
        const component = <Appointment customer={customer} />;
        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act( () => 
            ReactDOM.createRoot(container).render(component)
        );
        
        expect(document.body.textContent).toContain("Jordan");
    })
 })