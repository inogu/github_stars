import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function ErrorAlert(props) {
  const classes = useStyles();

  if (props.visible)
    return (
      <div className={classes.root}>
        <Alert severity="error">{props.message}</Alert>
      </div>
    );
  else return <div></div>;
}
