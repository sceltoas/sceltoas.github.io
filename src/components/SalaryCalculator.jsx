import React from 'react';
import CountUp from 'react-countup';
import InlineInput from './InlineInput';
import './SalaryCalculator.less';

class NumberAndDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = { prev: 0 };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.prev !== nextProps.number;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.prev !== prevProps.prev) {
            this.setState({ prev: this.props.number });
        }
    }

    render() {
        const { number, description } = this.props;

        return (
            <div className="calculator-result">
                <button
                    aria-label={`${number} - ${description}`}
                    className="calculator-result__title"
                >
                    <CountUp
                        prefix="kr.&nbsp;"
                        start={this.state.prev}
                        end={number}
                        duration={0.5}
                        separator="&nbsp;"
                    />
                </button>
                <div className="calculator-result__title" />
                <div className="calculator-result__description">
                    {description}
                </div>
            </div>
        );
    }
}

class SalaryCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.onPriceChanged = this.onPriceChanged.bind(this);
        this.onHoursChanged = this.onHoursChanged.bind(this);
        this.doCalc = this.doCalc.bind(this);

        this.state = this.doCalc({
            price: 1000,
            numHours: 157,
        });
    }
    onPriceChanged(event) {
        this.setState(
            this.doCalc({
                ...this.state,
                price: Number(event.target.value.replace(/,/g, '.')),
            })
        );
    }
    onHoursChanged(event) {
        this.setState(
            this.doCalc({
                ...this.state,
                numHours: Number(event.target.value.replace(/,/g, '.')),
            })
        );
    }

    doCalc(state) {
        const hours = Number(state.numHours);
        const moneys = Number(state.price);

        if (isNaN(hours) || isNaN(moneys)) {
            return {
                ...state,
                nettoLonnMnd: 0,
                nettoLonnAr: 0,
                bruttoInntjeningMnd: 0,
                bruttoLonnMnd: 0,
                feriepengerMnd: 0,
            };
        }
        const nettoLonnMnd = Math.round(0.6 * hours * moneys);
        const nettoLonnAr = nettoLonnMnd * 11;
        const bruttoInntjeningMnd = Math.round(hours * moneys);
        const bruttoLonnMnd = Math.round((0.6 * hours * moneys) / 1.12);
        const feriepengerMnd = Math.round(
            ((0.6 * hours * moneys) / 1.12) * 0.12
        );

        return {
            ...state,
            nettoLonnMnd,
            nettoLonnAr,
            bruttoInntjeningMnd,
            bruttoLonnMnd,
            feriepengerMnd,
        };
    }

    formatMoneys(n) {
        // https://stackoverflow.com/a/14428340/957731
        return ('' + n).replace(/./g, function(c, i, a) {
            return i && c !== '.' && (a.length - i) % 3 === 0
                ? '\u00A0' + c
                : c;
        });
    }

    render() {
        return (
            <div className="salery-calculator">
                <div className="calculator-input">
                    <div className="">Hvis du har en timepris på kr.&nbsp;</div>
                    <InlineInput
                        id="price"
                        placeholder={this.state.price}
                        onChange={this.onPriceChanged}
                        maxLength="4"
                    />
                    <div className="large-text">&nbsp;og jobber&nbsp;</div>
                    <InlineInput
                        id="numHours"
                        placeholder={this.state.numHours}
                        onChange={this.onHoursChanged}
                        maxLength="4"
                    />
                    <div className="large-text">&nbsp;timer pr. mnd:&nbsp;</div>
                </div>
                <div className="calculation-result-row">
                    <NumberAndDescription
                        number={this.state.bruttoLonnMnd}
                        description="Bruttolønn pr. måned, eks. feriepenger"
                    />
                    <NumberAndDescription
                        number={this.state.nettoLonnAr}
                        description={
                            <div>
                                <div>Ca årslønn i Scelto med 5 ukers ferie</div>
                                <div>
                                    11*mnd lønn + 11*oppsparte feriepenger
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="calculator-input__arrow" />
                <div className="calculation-result-row">
                    <NumberAndDescription
                        number={this.state.bruttoInntjeningMnd}
                        description="Bruttoinntjening pr. måned"
                    />
                    <NumberAndDescription
                        number={this.state.nettoLonnMnd}
                        description="Du får 60% av din inntjening pr. måned"
                    />
                    <NumberAndDescription
                        number={this.state.feriepengerMnd}
                        description="Avsatte feriepenger pr. måned 12%"
                    />
                </div>
            </div>
        );
    }
}

export default SalaryCalculator;
