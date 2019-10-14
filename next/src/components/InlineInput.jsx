import React, {Fragment} from 'react';
import './InlineInput.less';

class InlineInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.placeholder,
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.timeoutListener = undefined;
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      value: this.inputElement.value,
    });
    /**
     * delaying so that the div placeholder is rendered before we calculate the width
     */
    this.timeoutListener = setTimeout(() => {
      if (typeof this.setState === 'function') {
        this.setState({
          ...this.state,
          width: this.divElement.clientWidth,
        });
      }
    }, 50);
  }

  componentWillUnmount() {
    if (this.timeoutListener !== undefined) {
      clearTimeout(this.timeoutListener);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      value: this.inputElement.value,
    });
  }

  onKeyDown(event) {
    setTimeout(() => {
      this.setState({
        ...this.state,
        width: this.divElement.clientWidth,
      });
    }, 1);
  }
  onChange(event) {
    this.setState({
      ...this.state,
      value: this.inputElement.value,
    });
    this.props.onChange(event);
  }

  render() {
    const {id, placeholder, maxLength, className} = this.props;

    return (
      <Fragment>
        <div
          id={`hidden-${id}`}
          ref={ref => (this.divElement = ref)}
          className="inline inline-input__input"
        >
          {this.state.value || placeholder}
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
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          autoComplete="on"
          autoCorrect="false"
        />
      </Fragment>
    );
  }
}

export default InlineInput;
