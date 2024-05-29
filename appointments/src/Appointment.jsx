import React from "react";

const appointmentTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt)
        .toTimeString()
        .split(":");
    return `${h}:${m}`;
}

export const Appointment = ({ customer }) => (
    <div>{customer.firstName}</div>
);  // Note: also passed without <div>{}</div>
    // Note: do not understand how import Readt activates html syntax


export const AppointmentsDayView = (
    { appointments }
) => (
    <div id="appointmentsDayView">
        <ol>
            {appointments.map(appointment => (
                <li key={appointment.startsAt}>
                    {appointmentTimeOfDay(appointment.startsAt)}
                </li>
            ))}
        </ol>
    </div>
);
// npm test -- --watchAll