import React, { useContext } from "react";
import { SecondaryPlayButton } from "./../MediaPlayer/PlayButton";
import CTX from "./../../context/library/libraryContext";
import MusicCTX from "./../../context/music/musicContext";
import { Container, Paper, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& h1": {
        color: "rgba(226, 225, 255, 1)",
        fontSize: "2em",
        margin: 0
        // padding: 0
      },
      "& h2": {
        color: "rgba(226, 225, 255, 1)",
        fontSize: "1.5em",
        margin: 0
      },
      "& h3": {
        color: "rgba(226, 225, 255, 1)",
        margin: 0,
        // padding: 0,
        fontWeight: 100
      }
    },
    shade: {
      color: "rgba(226, 225, 255, 0.2)"
    },
    paper: {
      border: "1px solid rgba(38,38,38,.6)",
      background: "#181818",
      height: 350,
      width: 350,
      overFlow: "hidden",
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    image: {
      height: "inherit",
      width: "inherit",
      borderRadius: 3
    },
    button: {
      background:
        "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)",
      boxShadow: "none",
      height: 35,
      fontWeight: 700,
      borderRadius: 30,
      margin: ".5em 0",
      width: 100,
      color: "white",
      textTransform: "none"
    }
  })
);

const Track = ({ match }: any) => {
  const classes = useStyles();
  const ctx = useContext(CTX);
  const { getTrack, track, loading } = ctx;
  const audioCTX = useContext(MusicCTX);

  getTrack(match.params.id);

  if (loading || Object.keys(track).length <= 0) {
    return <p>Loading</p>;
  }

  return (
    <Container className={classes.root} style={{ marginTop: "4em" }}>
      <Grid item />
      <br />
      <Grid container>
        <Grid item>
          <Paper className={classes.paper}>
            <img
              src={track && track.Album.CoverXL}
              alt=""
              className={classes.image}
            />
          </Paper>
        </Grid>
        <Grid lg="auto" item>
          <Container>
            <Grid>
              <h3>{track.Collection}</h3>
              <h1>{track.Title}</h1>
              <h3>{track.Artist.Name}</h3>
              {/* <span className={classes.shade}>
                {moment(track.ReleaseDate).format("LL")}
              </span> */}
            </Grid>
            <br />
            <Grid>
              <SecondaryPlayButton audio={audioCTX} track={track} />
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid lg={8}>
        <h2>Lyrics</h2>
        <p style={{ color: "#888" }}>{track.Lyrics}</p>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Track;
