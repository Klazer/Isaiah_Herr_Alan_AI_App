import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core"; //Allows us to have nice text and animations for when the cards appear

import useStyles from "./styles.js"; //makestyles creates a hook, useStyles
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>
                      {infoCard.title.split(" ")[2]}:
                      {/*split the title into an array and grab the last element in the array*/}
                    </strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br /> <i> {infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((
          article,
          i /*For each article we map, we put it into a card */
        ) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            {/* xs has 12 grid spaces total*/}
            <NewsCard
              article={article}
              activeArticle={
                activeArticle
              } /*Active article checks to see if whatever is in the newscard is active or not*/
              i={i}
            />
            {/*i is the index. We are also passing a specific article as a prop */}
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
