import React from "react";
import "./Global.css";
import CV from "./components/CV";
import { withStyles } from "@material-ui/core";
const style = (theme) => ({
  root: {},
});
function App() {
  return (
    <div className="App">
      <CV></CV>
    </div>
  );
}

export default withStyles(style)(App);
