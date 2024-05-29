import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react";

import { Appointment, AppointmentsDayView } from "../src/Appointment";



describe("Appointment", () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    })

    const render = component =>
        act(() =>
            ReactDOM.createRoot(container).render(component)
        );

    it("renders customer first name", () => {
        const customer = { firstName: "Ashley" };
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Ashley");
    })

    it("renders another customer first name", () => {
        const customer = { firstName: "Jordan" };
        render(<Appointment customer={customer} />);
        expect(document.body.textContent).toContain("Jordan");
    })
})
describe("AppointmentsDayView", () => {

    const today = new Date();   //coupling
    const twoAppointments = [
        { startsAt: today.setHours(12, 0) },
        { startsAt: today.setHours(13, 0) },
    ];

    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);

    })
    const render = (component) =>
        act(() =>
            ReactDOM.createRoot(container).render(component)    //todo duplication other render
        );

    it("renders a div with the right id", () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(
            document.querySelector(
                "div#appointmentsDayView"
            )
        ).not.toBeNull();
    });

    it("renders an OL element to display apointments", () => {
        render(<AppointmentsDayView appointments={[]}/>);

        const listElement = document.querySelector("ol");

        expect(listElement).not.toBeNull();

    });

    it("renders an li for each appointment", () => {

        render(
            <AppointmentsDayView
            appointments={twoAppointments}
            />
        );

        const listChildren =
            document.querySelectorAll("li");    //note did not need "ol > li"
        expect(listChildren).toHaveLength(2);
    });

    it("renders the time for each appointment", () => {

        render(
            <AppointmentsDayView
            appointments={twoAppointments}
            />
        );

        const listChildren =
            document.querySelectorAll("li");
        expect(listChildren[0].textContent).toEqual("12:00");
        expect(listChildren[1].textContent).toEqual("13:00");
    });
})