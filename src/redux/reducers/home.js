
// const initialState = {
//     rockArtists: [
//         'queen',
//         'u2',
//         'thepolice',
//         'eagles',
//         'thedoors',
//         'oasis',
//         'thewho',
//         'bonjovi',
//     ],
//     popArtists:[
//         'maroon5',
//         'coldplay',
//         'onerepublic',
//         'jamesblunt',
//         'katyperry',
//         'arianagrande',
//     ],
//     hipHopArtists:[
//         'eminem',
//         'snoopdogg',
//         'lilwayne',
//         'drake',
//         'kanyewest',
//     ]
// }

// const homeReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SEARCH:
//         return{
//             ...state,
//             rockArtists: action.payload,
//             popArtists: action.payload,
//             hipHopArtists: action.payload,
//         }
//         default:
//             return state
//     }
// }

// export default homeReducer;