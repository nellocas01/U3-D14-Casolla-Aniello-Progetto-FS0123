import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Spotifylogo from "../assets/logo/Spotify_Logo.png";
import PlayerNext from "../assets/playerbuttons/Next.png";
import PlayerPlay from "../assets/playerbuttons/Play.png";
import PlayerPrevious from "../assets/playerbuttons/Previous.png";
import PlayerRepeat from "../assets/playerbuttons/Repeat.png";
import PlayerShuffle from "../assets/playerbuttons/Shuffle.png";
import { searchAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const search = useSelector((state) => state.search.result);
  const dispatch = useDispatch();
  function albumCard(songInfo) {
    // songInfo represents the info for the current song
    // creating the wrapper div
    return `
    <div class="col text-center" id=${songInfo.id}>
      <a href="/album_page.html?id=${songInfo.album.id}">
        <img class="img-fluid" src=${songInfo.album.cover_medium} alt="1" />
      </a>
      <p>
        <a href="/album_page.html?id=${songInfo.album.id}">
          Album: "${
            songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`
          }"<br>
        </a>
        <a href="/artist_page.html?id=${songInfo.artist.id}">
          Artist: ${songInfo.artist.name}
        </a>
      </p>
    </div>`;
  }

  const handleArtist = async (artistName, domQuerySelector) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          // headers,
        }
      ); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        let div = document.querySelector(domQuerySelector);
        div.innerHTML += albumCard(songInfo[0]); // create a new album tyle
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  window.onload = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    document.querySelector("#searchField").value = ""; // empties search field on page load

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <Navbar
              className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
              id="sidebar"
            >
              <div className="nav-container">
                <a className="navbar-brand">
                  <img
                    src={Spotifylogo}
                    alt="Spotify_Logo"
                    width="131"
                    height="40"
                  />
                </a>
                <Button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <a className="nav-item nav-link">
                          <i className="fas fa-home fa-lg"></i>&nbsp; Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-item nav-link" href="#">
                          <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                          Library
                        </a>
                      </li>
                      <li>
                        <div className="input-group mt-3">
                          <input
                            type="text"
                            className="form-control mb-2"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div
                            className="input-group-append"
                            style={{ margin_bottom: 4 }}
                          >
                            <Button
                              className="btn btn-outline-secondary btn-sm"
                              type="button"
                              id="button-addon1"
                              onClick={() => dispatch(searchAction(result))}
                            >
                              GO
                            </Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="nav-btn">
                <Button className="btn signup-btn" type="button">
                  Sign Up
                </Button>
                <Button className="btn login-btn" type="button">
                  Login
                </Button>
                <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
              </div>
            </Navbar>
          </Col>

          <Col xs={12} md={9}>
            <Row>
              <Col className="mainLinks d-none d-md-flex" xs={9} lg={11}>
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock classNameics</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="container-fluid fixed-bottom bg-container pt-1">
        <Row>
          <Col lg={10}>
            <Row>
              <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <Row>
                  <a href="#">
                    <img src={PlayerShuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={PlayerPrevious} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={PlayerPlay} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={PlayerNext} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={PlayerRepeat} alt="shuffle" />
                  </a>
                </Row>
              </div>
            </Row>
            <div className="row justify-content-center playBar py-3">
              <div className="col-8 col-md-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
