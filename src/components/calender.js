import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDates} from "../redux/actions/calender.actions";
import {beautifyCalenderData, provideIntensity, stringToDateString} from "../functional/calender";
import CalenderHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

export class Calender extends Component {

    state = {
        url: ""
    };

    componentWillMount() {
        const {getDates,links: {links}} = this.props;
        getDates("/prod/v1/calendar.json");
    }

    render() {
        const {links: {links},calender:{calender}} = this.props;
        return (
            <div>
                <CalenderHeatmap
                    startDate={stringToDateString(calender.startDate)}
                    endDate={stringToDateString(calender.endDate)}
                    values={beautifyCalenderData(calender)}
                    tooltipDataAttrs={value => {
                        return {
                            'data-tip': `${value.count} NBA matches on ${value.date}`,
                        };
                    }}
                    classForValue={value => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-github-${provideIntensity(value)}`;
                    }}
                />
                <ReactTooltip />
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