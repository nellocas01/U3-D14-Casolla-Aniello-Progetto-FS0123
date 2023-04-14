const FunctionArtist = (songInfo) => {
  return `
          <div class="col-sm-auto col-md-auto text-center mb-5">
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img class="img-fluid" src=${
                songInfo.album.cover_medium // creating the album image anchor
              } alt="1" />
            </a>
            <p>
              <a href="#">
                Track: "${
                  songInfo.title.length < 16
                    ? `${songInfo.title}`
                    : `${songInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a><br>
              <a href="/album_page.html?id=${songInfo.album.id}">
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a>
            </p>
          </div>`;
};

window.onload = async () => {
  let artistId = new URLSearchParams(document.location.search).get("id");

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });

  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
      {
        method: "GET",
        headers,
      }
    );

    if (response.ok) {
      let artist = await response.json();

      // displaying the playButton
      let playButton = document.querySelector("#playButton");
      playButton.classList.remove("d-none");
      playButton.classList.add("d-inline");

      // displaying the followButton
      let followButton = document.querySelector("#followButton");
      followButton.classList.remove("d-none");
      followButton.classList.add("d-inline");

      // setting the artist name
      let titleMain = document.querySelector(".titleMain");
      titleMain.innerHTML = artist.name;

      // setting the followers section
      let followers = document.querySelector("#followers");
      followers.innerText = artist.nb_fan + " followers";

      let tracksResponse = await fetch(
        // await the fetch of the artist songs
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artist.name,
        {
          method: "GET",
          headers,
        }
      );

      if (tracksResponse.ok) {
        let tracklist = await tracksResponse.json();
        for (let i = 0; i < tracklist.data.length; i++) {
          let apiLoaded = document.querySelector("#apiLoaded");
          apiLoaded.innerHTML += albumCard(tracklist.data[i]);
        }
      }
    } else {
      // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
      document.querySelector("#apiLoaded").innerHTML =
        "NOT OK" + (await response.text());
    }
  } catch (exception) {
    // ex.: Url is not correct, Internal Server Error
    document.querySelector("#apiLoaded").innerHTML = exception;
  }
};

export default FunctionArtist;
