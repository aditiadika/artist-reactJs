import React from 'react'

const AlbumList = (props) => {
    const showlist = ({ albumList }) => {
        console.log(albumList)
        if (albumList) {
            return albumList.map((res, index) => {
                return(
                    <img key={index} alt="some values" src={`/images/albums/${res.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="albums_list">
            {showlist(props)}
        </div>
    )
}

export default AlbumList