import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt)
        .toTimeString()
        .split(":");
    return `${h}:${m}`;
}

export const Appointment = ({ startsAt, customer }) => (
    <table>
   
        <tbody>
            <tr>
                <th>Today's appointment at 12:00</th>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.stylist}</td>
                <td>{customer.service}</td>
                <td>{customer.notes}</td>
            </tr>
        </tbody>
    </table>
);  // Note: also passed without <div>{}</div>



export const AppointmentsDayView = (
    { appointments }
) => {
    const [selectedAppointment, setSelectedAppointment] =
        useState(0);
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map((appointment, i) => (
                    <li key={appointment.startsAt}>
                        <button type="button"
                        onClick={ () => setSelectedAppointment(i)}
                        >
                            {appointmentTimeOfDay(appointment.startsAt)}
                        </button>
                    </li>
                ))}
            </ol>
            {appointments.length === 0 ? (
                <p>There are no appointments scheduled for today.</p>
            ) : ( 
                <Appointment
                    {...appointments[selectedAppointment]}
                />
            )}
        </div>
    );
};
// npm test -- --watchAll