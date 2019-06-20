import React, { Component } from 'react';
import Form from './Form';

export class Registration extends Component {

  filterFocusedInputs = (value) => {
    const key = Object.keys(value)[0];
    const inputData = this.form.find((f) => f.id === key);

    const [ filledOut, hidden ] =value[key];

    inputData['filledOut'] = filledOut;
    inputData['hidden'] = hidden;
  }

  form = [
    {
      id: 'name',
      type: 'text',
      filledOut: false,
      autofocus: true,
      hasLabel: false,
      hidden: false
    },
    {
      id: 'surname',
      type: 'text',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    },
    {
      id: 'birth',
      type: 'date',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    },
    {
      id: 'phone',
      type: 'number',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    },
    {
      id: 'email',
      type: 'email',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    },
    {
      id: 'password',
      type: 'password',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    },
  ]

  render() {
    return (
      <section className="registration content-container">

        <Form
          form={ this.form }
          filterFocusedInputs={ this.filterFocusedInputs }
          history={ this.props.history }
        />
      </section>
    );
  }
}

export default Registration;
