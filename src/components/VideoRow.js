import React, { useState } from 'react'
import '../css/VideoRow.css'

function VideoRow( {views, description, timestamp, channel, title, image, imageHover } ) {
    
    const [thumbnail, setThumbnail] = useState(image)

    return (
        <div className="videoRow" 
             onMouseOver={e => setThumbnail(imageHover ? imageHover : image)}
             onMouseLeave={e => setThumbnail(image)}>

            <img src={thumbnail} alt="" className="videoRow__thumbnail" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel} • {views} • {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow