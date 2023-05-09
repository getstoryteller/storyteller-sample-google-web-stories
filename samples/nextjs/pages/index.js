import { useEffect, useRef } from "react";
import { API_KEY, USER_ID } from "../constants";

import Storyteller from "@getstoryteller/storyteller-sdk-javascript";
import "@getstoryteller/storyteller-sdk-javascript/dist/storyteller.min.css";

import Head from "next/head";

export default function Home() {
  const storyGrid = useRef();

  useEffect(() => {
    Storyteller.sharedInstance
      .initialize(API_KEY, { externalId: USER_ID })
      .then(function () {
        const gridCols = document.documentElement.clientWidth < 768 ? 2 : 5;

        Storyteller.sharedInstance.theme = new Storyteller.UiTheme({
          light: {
            lists: {
              row: {
                endInset: 16,
                startInset: 16,
              },
              grid: {
                columns: gridCols,
              },
            },
            storyTiles: {
              chip: {
                show: false,
              },
              rectangularTile: {
                showWebStoriesIcon: true,
              },
            },
          },
        });

        storyGrid.current = new Storyteller.GridView("story-grid");
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://www.getstoryteller.com/images/favicon/favicon-image.ico"
        />
      </Head>
      <div className="top-bar-section">
        <div className="top-bar">
          <img
            className="storyteller-logo-desktop"
            src="/img/storyteller-logo-desktop.svg"
          ></img>
          <img
            className="storyteller-logo-mobile"
            src="/img/storyteller-logo-mobile.svg"
          ></img>
          <div className="sample-text">Google Web Stories Sample</div>
        </div>
      </div>

      <div className="content">
        <div id="story-grid"></div>
      </div>
    </>
  );
}
