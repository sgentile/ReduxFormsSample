import React, {Component} from 'react';
import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }
    // if (!values.email) {
    //     errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    // }
    // if (!values.age) {
    //     errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //     errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //     errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors;
};



const renderField = ({ input, label, type, meta: { touched, error } }) => {
    const formGroupClasses = classNames({'form-group':true, 'has-error':touched && error})
  return (
      <div className={formGroupClasses}>
          <label className="control-label">{label}</label>
          <input className="form-control" {...input} placeholder={label} type={type}/>
      </div>
  );
};

const AddUserForm = (props) => {
    const {handleSubmit, addUser, pristine, reset, submitting, invalid } = props;
    return (
        <form className="form-horizontal" onSubmit={handleSubmit(addUser)}>
            <Field name="name" component={renderField} type="text" label={'Name:'} placeholder={'Name'} />
            <div className="pull-right">
                <button className="btn btn-primary" style={{marginRight:'5px'}} type="submit" disabled={invalid || submitting}>Submit</button>
                <button className="btn btn-secondary" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};
//Decorate the form component:
export default reduxForm({
    form: 'addUserFrm',
    validate
})(AddUserForm);

/*

 <form className="form-horizontal">
 <div className="form-group">
 <label className="col-sm-2 control-label">Focused</label>
 <div className="col-sm-10">
 <input className="form-control" id="focusedInput" type="text" value="Click to focus"/>
 </div>
 </div>
 <div className="form-group">
 <label for="inputPassword" className="col-sm-2 control-label">Disabled</label>
 <div className="col-sm-10">
 <input className="form-control" id="disabledInput" type="text" disabled/>
 </div>
 </div>
 <fieldset disabled>
 <div className="form-group">
 <label for="disabledTextInput" className="col-sm-2 control-label">Fieldset disabled</label>
 <div className="col-sm-10">
 <input type="text" id="disabledTextInput" className="form-control"/>
 </div>
 </div>
 <div className="form-group">
 <label for="disabledSelect" className="col-sm-2 control-label"></label>
 <div className="col-sm-10">
 <select id="disabledSelect" className="form-control">
 <option>Disabled select</option>
 </select>
 </div>
 </div>
 </fieldset>
 <div className="form-group has-success has-feedback">
 <label className="col-sm-2 control-label" for="inputSuccess">
 Input with success and icon</label>
 <div className="col-sm-10">
 <input type="text" className="form-control" id="inputSuccess"/>
 <span className="glyphicon glyphicon-ok form-control-feedback"></span>
 </div>
 </div>
 <div className="form-group has-warning has-feedback">
 <label className="col-sm-2 control-label" for="inputWarning">
 Input with warning and icon</label>
 <div className="col-sm-10">
 <input type="text" className="form-control" id="inputWarning"/>
 <span className="glyphicon glyphicon-warning-sign form-control-feedback"></span>
 </div>
 </div>
 <div className="form-group has-error has-feedback">
 <label className="col-sm-2 control-label" for="inputError">
 Input with error and icon</label>
 <div className="col-sm-10">
 <input type="text" className="form-control" id="inputError"/>
 <span className="glyphicon glyphicon-remove form-control-feedback"></span>
 </div>
 </div>
 </form>

 */