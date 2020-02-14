import React from 'react';
import './EmployeeTestimonial.less';

const EmployeeTestimonial = ({ testimonial, person, position, customer }) => (
    <blockquote className="employee-testimonial">
        <p className="employee-testimonial-content">{testimonial}</p>
        <p className="employee-testimonial-customer">
            - {person}, {position} i {customer}
        </p>
    </blockquote>
);

export default EmployeeTestimonial;
