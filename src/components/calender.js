import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDates} from "../redux/actions/calender.actions";
import {
    beautifyCalenderData,
    createHeatChartTooltip,
    provideIntensity,
    stringToDateString
} from "../functional/calender";
import CalenderHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

export class Calender extends Component {

    state = {
        url: "",
        year: "2018"
    };

    change = (event) => {
        this.setState({year: event.target.value});
    };

    componentWillMount() {
        const {getDates,links: {links}} = this.props;
        getDates("/prod/v1/calendar.json");
    }

    render() {
        const {links: {links},calender:{calender}} = this.props;
        const {year} = this.state;
        return (
            <div className="container is-dark">
                <div className="p-5">
                    <div className="box mt-1">
                        <h2>NBA Matches</h2>
                        <div className="container">
                            <div className="row is-dark">
                                <div className="col-2">
                                    <div className="select">
                                        <select onChange={this.change} value={year}>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-8">
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
                        </div>
                        <ReactTooltip />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {links,calender} = state;
    return {
        links,
        calender
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDates : (url) => dispatch(getDates(url))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calender);