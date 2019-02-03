import React, {Fragment} from 'react';
import './InlineInput.less';

class InlineInput extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      value: props.placeholder,
    };
    this.onChange = this.onChange.bind (this);
    this.onKeyUp = this.onKeyUp.bind (this);
  }

  componentDidMount () {
    this.setState ({
      ...this.state,
      value: this.inputElement.value,
      width: this.divElement.clientWidth,
    });
  }

  componentWillReceiveProps (nextProps) {
    this.setState ({
      ...this.state,
      value: this.inputElement.value,
    });
  }

  onKeyUp (event) {
    this.setState ({
      ...this.state,
      width: this.divElement.clientWidth === 0
        ? 100
        : this.divElement.clientWidth,
    });
  }
  onChange (event) {
    this.setState ({
      ...this.state,
      value: this.inputElement.value,
    });
    this.props.onChange (event);
  }

  render () {
    const {id, placeholder, maxLength, className} = this.props;

    return (
      <Fragment>
        <div
          id={`hidden-${id}`}
          ref={ref => (this.divElement = ref)}
          className="inline inline-input__input"
        >
          {this.state.value}
        </div>
        <input
          id={id}
          type="text"
          aria-label={id}
          className={`inline inline-input__input ${className}`}
          style={{
            width: this.state.width,
          }}
          placeholder={placeholder}
          ref={ref => (this.inputElement = ref)}
          maxLength={maxLength}
          aria-autocomplete="none"
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          autoComplete="off"
          autoCorrect="false"
        />
      </Fragment>
    );
  }
}

export default InlineInput;
