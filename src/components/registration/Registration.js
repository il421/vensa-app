import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree: false,
      name: '',
      surname: '',
      birth: '',
      phone: '',
      email: '',
      password: ''
    };

    this.titleRef = createRef();
    this.nameRef = createRef();
    this.surnameRef = createRef();
    this.dateRef = createRef();
    this.phoneRef = createRef();
    this.emailRef = createRef();
    this.passRef = createRef();
  }

  // onTitleChange = (evt) => {
  //   const title = evt.target.value;
  //   this.setState(() => ({ title }));
  // };

  onNameFocus = () => {
    console.log(this.nameRef);
    this.nameRef.current.parentElement.classList.toggle('form--blur');
    // this.titleRef.current.hidden = true;
    // this.titleRef.current.classList.add('form__title--hide');
  }

  handleInputChange = (evt) => {
    const id = evt.target.name;
    const value = evt.target.value;

    this.setState(() => ({
      [id]: value
    }));

  }


  form = [
    {
      id: 'name',
      type: 'text',
      action: this.onNameFocus,
      autofocus: true,
      hasLabel: false,
      ref: this.nameRef
    },
    {
      id: 'surname',
      type: 'text',
      action: null,
      autofocus: false,
      hasLabel: true,
      ref: this.surnameRef
    },
    {
      id: 'date of birth',
      type: 'date',
      action: null,
      autofocus: false,
      hasLabel: true,
      ref: this.dateRef
    },
    {
      id: 'phone',
      type: 'number',
      action: null,
      autofocus: false,
      hasLabel: true,
      ref: this.phoneRef
    },
    {
      id: 'email',
      type: 'email',
      action: null,
      autofocus: false,
      hasLabel: true,
      ref: this.emailRef
    },
    {
      id: 'password',
      type: 'password',
      action: null,
      autofocus: false,
      hasLabel: true,
      ref: this.passRef
    },
  ]

  render() {
    return (
      <section className="registration content-container">
        <div className="registration__full-name">
          <input type="text" value={`${this.state.name} ${this.state.surname}`}/>
        </div>

        <form className="registration__form form">

          <div ref={ this.titleRef } className="form__title">
            let's start with
            your name:
          </div>

          <div className="form__wrapper">
            {
              this.form.map((f, index) => (
                <div key={ index } className={ `form__${f.id} form--blur form--input` }>
                  {
                    f.hasLabel && (
                      <label>{ f.id }</label>
                    )
                  }
                  <input
                    type={ f.type }
                    ref={ this[`${f.id}Ref`]}
                    name={ f.id }
                    onClick={ () => f.action() }
                    onChange={ this.handleInputChange }
                    autoFocus={ f.autofocus }
                    required />
                </div>
              ))
            }

            <div className="form__info">
              <div>
                <input id="terms" type="checkbox" value={ this.state.agree } defaultChecked={ this.state.agree } />
                <label htmlFor="terms"></label>
              </div>
              <div>
                I have read and agreed to the <a>terms and
                conditions</a> and the <a>privacy policy</a>
              </div>
            </div>

            <div className="form__submit">
              <Link to="/booking">
                next
              </Link>
            </div>
          </div>

        </form>
      </section>
    );
  }
}

const mapStateToProps =(state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect (mapStateToProps, mapDispatchToProps)(Registration);
