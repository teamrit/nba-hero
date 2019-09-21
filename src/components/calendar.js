import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDates,getScoreBoard} from "../redux/actions/calendar.actions";
import {
    beautifycalendarData,
    createHeatChartTooltip,
    provideIntensity,
    stringToDateString
} from "../functional/calendar";
import calendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import {ScoreBoard} from './scoreboard';

export class Calendar extends Component {

    state = {
        url: "",
        year: "2018",
        currentYear: null
    };

    change = (event) => {
        this.setState({year: event.target.value});
    };

    componentWillMount() {
        const {getDates,getScoreBoard,links: {links}} = this.props;
        const date = new Date();
        const apiDate = this.castToString(date.getFullYear()) +
            this.makeTwoDigit(date.getMonth()+1+'') +
            this.makeTwoDigit(date.getDate()+1+'');

        getDates("prod/v1/calendar.json");
        getScoreBoard(`/prod/v1/${apiDate}/scoreboard.json`);
        this.setState({currentYear: date.getFullYear() + '', year: date.getFullYear() + ''});
    }

    castToString = d => d+'';

    makeTwoDigit = oneDigit => (
      oneDigit.length === 1 ? '0' + oneDigit : oneDigit
    );

    render() {
        const {links: {links},calendar:{calendar},scoreboard} = this.props;
        const {year,currentYear} = this.state;
        return (
            <div className="container">
                <div className="uk-padding">
                    <div className="box uk-margin-top uk-margin-bottom">
                        <h2>NBA Matches</h2>
                            <div className="uk-grid is-dark">
                                <div className="uk-width-1-6@l uk-width-1-1@s uk-margin-large">
                                    <div className="select">
                                        <select onChange={this.change} value={year}>
                                            <option>{Number(currentYear) - 1}</option>
                                            <option>{currentYear}</option>
                                            <option>{Number(currentYear) + 1}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="uk-width-5-6@l uk-width-1-1@s uk-padding uk-align-center">
                                    <calendarHeatmap
                                        startDate={`${year}-01-01`}
                                        endDate={`${year}-12-31`}
                                        values={beautifycalendarData(calendar,year)}
                                        tooltipDataAttrs={value => {
                                            return {
                                                'data-tip': `${createHeatChartTooltip(value)}`,
                                            };
                                        }}
                                        classForValue={value => {
                                            if (!value) {
                                                return 'color-empty';
                                            }
                                            return `color-github-${provideIntensity(value)}`;
                                        }}
                                    />
                                </div>
                            </div>
                        <ReactTooltip />
                    </div>
                </div>
                <ScoreBoard state={scoreboard} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {links,calendar,scoreboard} = state;
    return {
        links,
        calendar,
        scoreboard
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDates : (url) => dispatch(getDates(url)),
        getScoreBoard : (url) => dispatch(getScoreBoard(url)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
