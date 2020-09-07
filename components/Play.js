import React, {useEffect} from 'react'
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
const Play = props => {
    useEffect(()=>{
        const { songs } = props
        const newSongs = []
        if (songs.length) {
            songs.map(item => {
                const songItem = {
                    name: item.name,
                    artist: item.artists[0],
                    cover: item.album.picture,
                    url: item.url,
                    theme: '#ebd0c2'
                }
                if(item.lyric.translate) {
                    songItem.lrc = item.lyric.translate
                } else {
                    songItem.lrc = item.lyric.base
                }
                newSongs.push(songItem)
            })
        }
        const ap = new APlayer({
            container: document.getElementById('player'),
            listFolded: true,
            listMaxHeight: 90,
            lrcType: 1,
            mini: true,
            fixed: true,
            audio: newSongs
        });
    }, [])
    return (
        <div id='player' />

    )
}
export default Play