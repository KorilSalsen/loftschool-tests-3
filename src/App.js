import React, { Component } from 'react';
import './App.css';

import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false
  };

  handleTabClick = (step) => {
    this.setState({
      step
    });
  };

  handleChangeForm = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  handleChangeTimeOver = (isTimeOver) => {
    this.setState({
      isTimeOver
    });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return firstName !== '' && lastName !== '' && email !== '' && email.includes('@');
      case 2:
        return cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return 'Поздравляем!';
      default:
        return false;
    }
  };

  render() {
    const steps = stepTitles.map((title, i) => {
      const step = i + 1;

      return (
        <Step
          key={title}
          onClick={this.handleTabClick}
          isSelected={this.state.step === step}
          number={step}
          isClickable={this.state.step > step}
        >
          {title}
        </Step>
      );
    });

    const form = this.renderForm();

    return (
      <div className="container">
        <div className="tab-panel">
          {steps}
        </div>
        <div className="form-content">
          {form}
        </div>
        <div className="button-panel">
          <button
            disabled={!this.isFormCommitable() || this.state.isTimeOver}
            onClick={this.handleClickNextForm}
            className="button-next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
