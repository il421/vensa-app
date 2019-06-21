import React, { useState } from 'react';
import { forOwn } from 'lodash';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { setUserDetails } from '../../actions/form';

export const Form = ({ form, filterFocusedInputs, setUserDetails, history }) => {

  let [ data, setValue ] = useState({
    agree: false,
    name: '',
    surname: '',
    birth: '',
    phone: '',
    email: '',
    password: '',
    focus: true,
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setValue({...data, [name]: value});
  };

  const handleCheckboxChange = () => {
    setValue({ ...data, agree: !data.agree });
  };

  const formFieldsFilter = () => {
    forOwn(data, (value, key) => {
      // iterate state to find not filled fields && update prop
      if (key !== 'agree' && key !== 'focus') {
        let filledOut = false;
        let hidden = false;

        if (key !== 'agree' && value.toString() !== '') {
          filledOut = true;
        }

        // if the field is name or surname set hidden true
        if (key === 'name' || key === 'surname') {
          if (value.toString() !== '') {
            hidden = true;
          }
        }

        filterFocusedInputs({ [key]: [filledOut, hidden] });
      }
    });
    setValue({ ...data, focus: !data.focus });
  };

  const submitForm = async (evt) => {
    evt.preventDefault();
    const state = { ...data };

    forOwn(state, (value, key) => {
      if (value.toString() === '') {
        toast(`The ${ key } filed is required!`);
        return false;
      }
    });

    if (!data.agree) {
      toast('Please, read and agree conditions!');
      return false;
    }

    setUserDetails(data);

    toast('Thank you for your time!');
    await history.push('/');
  };

  return (
    <>
      <div className={`registration__full-name ${ data.name !== '' && 'registration__full-name--visible' }`}>
        <input type="text" value={`${data.name} ${data.surname}`} readOnly={ true }/>
      </div>

      <div
        className={`registration__title ${data.name !== '' && 'registration__title--hide'}`}
      >
        let's start with
        your name:
      </div>

      <form className="registration__form form">
        <div className="form__wrapper">
          {
            form.map((f, index) => (
              <div
                key={ index }
                className={ `form__${f.id} ${ f.filledOut && 'form--blur'} ${ f.hidden && 'form--hidden' } form--input` }
              >
                <input
                  type={ f.type }
                  name={ f.id }
                  onChange={ handleInputChange }
                  onBlur={ formFieldsFilter }
                  autoFocus={ f.autofocus }
                  disabled={ f.id !== 'name' && data.name.length === 0 }
                  required />
                {
                  f.hasLabel &&
                  (
                    <label>{ f.id }</label>
                  )
                }
              </div>
            ))
          }

          <div className="form__info">
            <div>
              <input
                id="terms" type="checkbox"
                defaultChecked={ data.agree }
                onChange={ handleCheckboxChange }
                required
              />
              <label htmlFor="terms"></label>
            </div>
            <div>
              I have read and agreed to the <a>terms and
              conditions</a> and the <a>privacy policy</a>
            </div>
          </div>

          <div className="form__submit pointer">
            <button onClick={ submitForm }>next</button>
          </div>
        </div>

      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetails: (data) => dispatch(setUserDetails(data))
  };
};

const mapStateToProps = (state) => {
  return {
    userData: state.form
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
