import React , {useEffect} from 'react';
import '../App.css';
import {Switch, Route} from "react-router";
import NavBar from "./navbar";
import Calendar from "./calendar";
import Teams from "./teams";
import {getLinks} from "../redux/actions/link.actions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import TeamData from "./TeamData";

export function Main(props) {

  useEffect(() => {
    props.getLinks();
    console.log("ss")
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/calendar" exact component={Calendar}/>
        <Route path="/team/:id" component={TeamData}/>
        <Route path="/teams" exact component={Teams}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => ({getLinks : (url) => dispatch(getLinks(url))});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
