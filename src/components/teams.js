import React, {useEffect} from 'react';
import {getDates, getScoreBoard, getTeams} from "../redux/actions/calendar.actions";
import connect from "react-redux/es/connect/connect";
import {createTeamLink, toTitleCase} from "../functional/scoreboard";
import {
  Box,
  Collapse,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as R from 'ramda';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BasketBall from '@material-ui/icons/SportsBasketball';

import {useCommonStyles} from "../helper.functions";

function switchTeamIcon({isNBAFranchise, isAllStar}) {
  switch (true) {
    case (isAllStar) :
      return <img src="https://www.pinclipart.com/picdir/middle/404-4045761_orleans-burberry-pelicans-all-star-game-2018-nba.png" alt="" style={{height:'33px'}}/>;
    case (isNBAFranchise) :
      return <img src="https://i.pinimg.com/originals/52/4a/46/524a467886b251a6ef5becf35e47de10.png" alt="" style={{height:'33px'}}/>;
    default:
      return <BasketBall />;
  }
}

function Team({team}) {
  const {isNBAFranchise, isAllStar, fullName, teamId} = team;
  return <ListItem  component={Link} to={createTeamLink(teamId)} button onClick={()=> {console.log("sa")}}>
    <ListItemIcon>
      {switchTeamIcon({isNBAFranchise, isAllStar})}
    </ListItemIcon>
    <ListItemText>
        {fullName}
    </ListItemText>
  </ListItem>;
}

function League({league,data}) {
  const classes = useCommonStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  let firstFewTeams = R.slice(0,5,data);
  let restOfTeams = R.slice(5, Infinity, data);

  return <Box m={2}>
    <Paper elevation={5}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Box p={2} bgcolor="white" boxShadow={1} style={{
              // -webkit-box-shadow: 0 8px 6px -6px black;
              // -moz-box-shadow: 0 8px 6px -6px black;
              boxShadow: '0 4px 6px -6px black'
            }}>
              <Typography align="left" variant="h5">
                {toTitleCase(league)}
              </Typography>
            </Box>
          </ListSubheader>
        }
        className={classes.root}
      >
        {firstFewTeams.map(team => <Team key={team.fullName} team={team} />)}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {restOfTeams.map(team => <Team key={team.fullName} team={team} />)}
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="View more" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
    </Paper>
  </Box>
}

function TeamsInternal({scoreboard,getTeams}) {

  const {teams} = scoreboard;

  useEffect(() => {
    getTeams('/prod/v2/2019/teams.json');
  }, []);

  return (
    <React.Fragment>
        <div className="uk-margin-large">
          <Box pt={3} bgcolor={"#badass"}>
            <Typography variant="h2">Teams</Typography>
          </Box>
          <Container>
            {Object.keys(teams.league || {}).map(league => (
              <League league={league} data={teams.league[league]} key={league+''}/>
            ))}
          </Container>
        </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({scoreboard: state.scoreboard});

const mapDispatchToProps = dispatch => {
  return {
    getTeams: url => dispatch(getTeams(url))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsInternal);
