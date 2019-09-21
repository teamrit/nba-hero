import {createStyles, makeStyles} from "@material-ui/core";

export const useCommonStyles = makeStyles((theme) =>
  createStyles({
    flexDisplay: {
      display:"flex"
    },
    flexGrowed: {
      flexGrow: 1,
    },
    flexRow: {
      flexDirection:'row'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    flexEnd: {
      alignSelf: 'flex-end'
    }
  }),
);
