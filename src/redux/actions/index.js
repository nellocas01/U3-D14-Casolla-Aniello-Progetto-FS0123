// export const SEARCH = 'SEARCH'

// export const searchAction = () =>{
//     let div = document.querySelector('#searchResults .row')
//     div.innerHTML = ''
//     let searchQuery = document.querySelector('#searchField').value // gets the value from the search box
    
//     return async (dispatch) => {
//     if (searchQuery.length > 2) {
//         //if there's a value in the search box => fetch the information from rapidapi & display the result
//         document.querySelector('#searchResults').style.display = 'block'
        
//       try {
//         let response = await fetch(
//           'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
//             searchQuery,
//           {
//             method: 'GET',
//             headers,
//           }
//         ) // gets the information

//         if (response.ok) {
//           let result = await response.json() // transforms the response to json
          
//           dispatch({
//             type: SEARCH,
//             payload: result.data,
//           })
//         //   let songs = result.data // gets the songs info

//           for (let x = 0; x < result.data.length; x++) {
//             div.innerHTML += albumCard(result.data[x])
//           }
//         } else {
//           console.log('error')
//         }
//       } catch (err) {
//         console.log(err)
//       }
//     } else {
//       //else just hide the section!
//       document.querySelector('#searchResults').style.display = 'none'
//     }
// }
// }

// export const albumCardAction = (songInfo) =>{
//     return `
//     <div class="col text-center" id=${songInfo.id}>
//       <a href="/album_page.html?id=${songInfo.album.id}">
//         <img class="img-fluid" src=${
//           songInfo.album.cover_medium
//         } alt="1" />
//       </a>
//       <p>
//         <a href="/album_page.html?id=${songInfo.album.id}">
//           Album: "${
//             songInfo.album.title.length < 16
//               ? `${songInfo.album.title}`
//               : `${songInfo.album.title.substring(0, 16)}...`
//           }"<br>
//         </a>
//         <a href="/artist_page.html?id=${songInfo.artist.id}">
//           Artist: ${songInfo.artist.name}
//         </a>
//       </p>
//     </div>`
// }

//  export const handleArtistAction = async (artistName, domQuerySelector) => {
//     // artistName = "eminem", "metallica", etc...
//     // domQuerySelector = "#rockSection" etc...
//     try {
//       let response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
//           artistName,
//         {
//           method: 'GET',
//           headers,
//         }
//       ) // gets the information
//       if (response.ok) {
//         let result = await response.json()
//         dispatch({
//             type: SONG_INFO,
//             payload: result.data,
//           })
//         let div = document.querySelector(domQuerySelector)
//         div.innerHTML += albumCard(SONG_INFO[0]) // create a new album tyle
//       } else {
//         console.log('error')
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }
