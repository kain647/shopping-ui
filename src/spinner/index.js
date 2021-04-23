import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  SpinnerContainer,
  SpinnerButton,
  SpinnerValue,
} from "../spinner/styled";

class Spinner extends React.Component {
  state = {
    value: this.props.initial || 1,
  };

  dec = () => {
    const { onChange } = this.props;
    const { value } = this.state;
    const newValue = value - 1;
    const finalValue = newValue < 0 ? 0 : newValue;
    this.setState({
      value: finalValue,
    });
    if (onChange) {
      onChange(finalValue);
    }
  };

  inc = () => {
    const { value } = this.state;
    const newValue = value + 1;
    const finalValue = newValue > 10 ? 10 : newValue;
    this.setState({
      value: finalValue,
    });
    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  };

  render() {
    const { value, dec, inc } = this.props;
    return (
      <SpinnerContainer>
        <SpinnerButton onClick={dec}>
          <FiChevronLeft />
        </SpinnerButton>
        <SpinnerValue>{value}</SpinnerValue>
        <SpinnerButton onClick={inc}>
          <FiChevronRight />
        </SpinnerButton>
      </SpinnerContainer>
    );
  }
}

export default Spinner;
