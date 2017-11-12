import React, {Component} from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = (e) => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    const {firstName, lastName, email} = this.props;

    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input type="text" name="firstName" onChange={this.handleChangeForm} value={firstName} placeholder="First name" />
        <br />
        <input type="text" name="lastName" onChange={this.handleChangeForm} value={lastName} placeholder="Last name" />
        <br />
        <input type="email" name="email" onChange={this.handleChangeForm} value={email} placeholder="Email" />
      </div>
    );
  }
}

export default PersonalForm;
