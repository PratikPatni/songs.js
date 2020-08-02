import { combineReducers } from 'redux';
const songsReducer = () => {
return [
    { title: 'No scrubs', duration: '4:05'},
    { title: 'Numb', duration: '3:05'},
    { title: 'No love', duration: '3:35'},
    { title: 'Nuketown', duration: '2:15'}
];
};
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});