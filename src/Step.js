import React, {PureComponent} from 'react';
import './Step.css';

class Step extends PureComponent {
  handleClick = () => {
    const {onClick, number, isClickable} = this.props;

    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const {number, children, isSelected, isClickable} = this.props;

    return (
      <div
        className={'step' + (isSelected ? ' step-selected' : '') + (isClickable ? ' step-clickable' : '')}
        onClick={this.handleClick}
      >
        <div className="step__number">
          {number}
        </div>
        <div className="step__title">
          {children}
        </div>
      </div>
    );
  }
}

export default Step;
