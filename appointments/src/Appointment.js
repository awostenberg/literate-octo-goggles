import React from "react";
export const Appointment = ({ customer }) => (
    <div>{customer.firstName}</div>
);  // Note: also passed without <div>{}</div>
    // Note: do not understand how import Readt activates html syntax

// npm test -- --watchAll