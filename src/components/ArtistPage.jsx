import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Spotifylogo from "../assets/logo/Spotify_Logo.png";
import PlayerNext from "../assets/playerbuttons/Next.png";
import PlayerPlay from "../assets/playerbuttons/Play.png";
import PlayerPrevious from "../assets/playerbuttons/Previous.png";
import PlayerRepeat from "../assets/playerbuttons/Repeat.png";
import PlayerShuffle from "../assets/playerbuttons/Shuffle.png";

const ArtistPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <Navbar
              className="navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
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

          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Row className="mb-3">
              <Col className="mainLinks d-none d-md-flex" xs={9} lg={11}>
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12} md={10} lg={10} className="mt-5">
              <h2 className="titleMain"></h2>
              <div id="followers"></div>
              <div
                className="d-flex justify-content-center"
                id="button-container"
              >
                <Button
                  className="btn btn-success mr-2 mainButton d-none"
                  id="playButton"
                >
                  PLAY
                </Button>
                <Button
                  className="btn btn-outline-light mainButton d-none"
                  id="followButton"
                >
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="p-0" xs={10} md={10} lg={10}>
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <div className="row" id="apiLoaded"></div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>

      <Container className="container-fluid fixed-bottom bg-container pt-1">
        <Row>
          <Col lg={10}>
            <Row>
              <Col className=" mt-1" xs={6} md={4} lg={2}>
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
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtistPage;
