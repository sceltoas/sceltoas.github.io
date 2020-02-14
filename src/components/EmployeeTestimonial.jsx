import React, { Fragment } from 'react';
import './EmployeeTestimonial.module.less';
import { mdiFormatQuoteOpen } from '@mdi/js';
import Icon from '@mdi/react';

const EmployeeTestimonial = ({ testimonial, person, position, customer }) => (
  <blockquote className="employee-testimonial">
    <p>{testimonial}</p>
    <p className="employee-testimonial-customer">{person}, {position} i {customer}</p>
  </blockquote>
);

export default EmployeeTestimonial;
