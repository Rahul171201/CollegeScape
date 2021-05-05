import React from "react";
import design from "../Components/LoginComponents/loginComponents.module.css";
import logo from "../Components/LoginComponents/images/movietime.jpg";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "310px",
      "& .MuiInput-underline:after": {
        borderBottomColor: "black",
      },
    },
  },
}));

const StyledButton = withStyles({
  root: {
    background: "#393e46",
    borderRadius: 7,
    border: 0,
    color: "white",
    width: 310,
    height: 35,
    padding: "0 30px",
    boxShadow: "grey",
    "&:hover": {
      background: "black",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function Login() {
  const classes = useStyles();

  return (
    <div className={design.main}>
      <div className={design.LoginBox}>
        <div className={design.column1}>
          <p className={design.heading}>Login</p>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Email" />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
            />
          </form>
          <StyledButton className={design.submitbutton}>Sign up</StyledButton>
          <p className={design.foot}>
            Forgot password? <div className={design.link}>click here</div>
          </p>
        </div>
        <div className={design.column2}>
          <img src={logo} alt="movietime" className={design.logo1}></img>
        </div>
      </div>
    </div>
  );
}
