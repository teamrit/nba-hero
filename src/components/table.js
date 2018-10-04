import React, {Component} from 'react';
import {Api} from "../network/api";
import {TODAYS_REPORTS} from "../network/requests";
import {getLinks} from "../redux/actions/link.actions";
import {connect} from "react-redux";


export class Table extends Component {

    state = {
        links: {}
    };

    componentDidMount() {
        Api.get(TODAYS_REPORTS).then(r => {
            this.setState({links: r.links});
        });
        const {findLinks} = this.props;
        findLinks();
    };

    render() {
        return (
            <p>
                {/*{JSON.stringify(links)};*/}
            </p>
        );
    }
}

const mapStateToProps = state => {
    const {links} = state;
    return {
        links
    }
};

const mapDispatchToProps = dispatch => {
    return {
      findLinks: () => {
          dispatch(getLinks());
      }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

