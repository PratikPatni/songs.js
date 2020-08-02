export const selectSong = (song) => { //named export needs curly braces
    //return an action
    return {
            type: 'SONG_SELECTED',
            payload: song
    };
};
