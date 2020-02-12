import React, { PureComponent } from 'react';

interface IProps {
  color: string
}

interface IState {
  count: number
}

class CounterButton extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    console.log('CounterButton');
    return (
      <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
    );
  }
}


export default CounterButton;