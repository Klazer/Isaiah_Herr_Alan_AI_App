import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  //Using this way of styling components is easier for Material UI
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
