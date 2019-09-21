import React , {useEffect} from 'react';
import {getTeamData, getTeams} from "../redux/actions/calendar.actions";
import {connect} from "react-redux";
import {Box,Typography,Zoom,Paper,Container,Grid,Chip,Avatar} from "@material-ui/core";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import AirplaneIcon from "@material-ui/icons/AirplanemodeActive";
import {getDateString, getGameIcons} from "../functional/scoreboard";
import ContentLoader from "react-content-loader";

export function Loader() {
  return  <ContentLoader
    height={200}
    width={400}
    speed={1}
    primaryColor="#efeef9"
    secondaryColor="#ecebeb"
  >
    <circle cx="10" cy="15" r="5" />
    <rect x="10" y="10" rx="0" ry="0" width="100" height="10" />
    <circle cx="100" cy="105" r="5" />
    <rect x="10" y="30" rx="0" ry="0" width="98" height="10" />
    <rect x="61" y="96" rx="0" ry="0" width="101" height="80" />
    <rect x="235" y="96" rx="0" ry="0" width="98" height="80" />
    <circle cx="200" cy="141" r="13" />
  </ContentLoader>;
}

export function Game({data}) {
  if (typeof data !== "object") return <React.Fragment />;

  const {homeStartDate, gameUrlCode,isHomeTeam} = data;

  let {homeIcon,awayIcon} = getGameIcons(gameUrlCode);

  return <React.Fragment>
      <Container>
        <Box m={1}>
          <Paper>
            <Loader/>
            <Box p={2}>
              <Box align="left" mb={1}>
                <Chip
                  avatar={<Avatar><CalendarIcon/></Avatar>}
                  label={getDateString(homeStartDate)}
                />
                <Chip
                  avatar={<Avatar><CalendarIcon/></Avatar>}
                  label={ContentLoader}>
                  <ContentLoader/>
                </Chip>

              </Box>
              <Box align="left">
                <Chip
                  avatar={<Avatar>{isHomeTeam ? <HomeIcon /> : <AirplaneIcon />}</Avatar>}
                  label={isHomeTeam ? "Home" : "Away"}
                />
              </Box>
              <Box mt={2}>
                <Grid container>
                  <Grid item xs={12} md={5}>
                    <img src={homeIcon} alt=""/>
                    HomeTeam
                  </Grid>
                  <Grid item xs={12} md={2}>
                    vs
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <img src={awayIcon} alt=""/>
                    AwayTeam
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>;
}

export function Schedule({data}) {
  if (typeof data !== "object") return <React.Fragment />;

  return <React.Fragment>
    {data.map(game => (<Game key={JSON.stringify(game)} data={game} />))}
  </React.Fragment>;
}

export function TeamData(props) {
  const {params} = props.match;
  let team = props.scoreboard || {};
  team = team.team || {};

  console.log(team);

  useEffect(() => {
    props.getTeams('/prod/v2/2019/teams.json');
    props.getTeamData(`/prod/v1/2019/teams/${params.id}/schedule.json`);
  }, []);

  return (
    <React.Fragment>
      <Box>
        <Box style={{height:100, backgroundColor: "#ff9b73"}} mb={2}>
          <Box pt={2} px={2}>
            <Typography variant="h3">
              Schedule
            </Typography>
          </Box>

          <div className="svg-container">
            <svg version="1.1" viewBox="0 0 500 500"
                 preserveAspectRatio="xMinYMin meet" className="svg-content">
              <polygon points="0 0, 500 0, 0 50" fill="#ff9b73"/>
            </svg>
          </div>
        </Box>
        {Object.keys(team.league || {}).map(
          key => (
            <Schedule key={key} data={team.league[key]} />
          )
        )}
      </Box>
    </React.Fragment>
  )
}

export default connect(
  (state) => ({scoreboard: state.scoreboard}),
  (dispatch) => ({
    getTeams: url => dispatch(getTeams(url)),
    getTeamData: url => dispatch(getTeamData(url)),
  })
)(TeamData);
