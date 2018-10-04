import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDates,getScoreBoard} from "../redux/actions/calender.actions";
import {
    beautifyCalenderData,
    createHeatChartTooltip,
    provideIntensity,
    stringToDateString
} from "../functional/calender";
import CalenderHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import {ScoreBoard} from './scoreboard';

export class Calender extends Component {

    state = {
        url: "",
        year: "2018"
    };

    change = (event) => {
        this.setState({year: event.target.value});
    };

    componentWillMount() {
        const {getDates,getScoreBoard,links: {links}} = this.props;
        getDates("prod/v1/calendar.json");
        getScoreBoard("/prod/v1/20180928/scoreboard.json");
    }

    render() {
        const {links: {links},calender:{calender},scoreboard} = this.props;
        const {year} = this.state;
        return (
            <div className="container">
                <div className="uk-padding">
                    <div className="box uk-margin-top uk-margin-bottom">
                        <h2>NBA Matches</h2>
                            <div className="uk-grid is-dark">
                                <div className="uk-width-1-6@l uk-width-1-1@s uk-margin-large">
                                    <div className="select">
                                        <select onChange={this.change} value={year}>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="uk-width-5-6@l uk-width-1-1@s uk-padding uk-align-center">
                                    <CalenderHeatmap
                                        startDate={`${year}-01-01`}
                                        endDate={`${year}-12-31`}
                                        values={beautifyCalenderData(calender,year)}
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
    const {links,calender,scoreboard} = state;
    return {
        links,
        calender,
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
)(Calender);