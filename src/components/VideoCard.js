import React, { useState } from 'react'
import '../css/VideoCard.css'
import Avatar from "@material-ui/core/Avatar"

function VideoCard({ title, views, channel, timestamp, channelImage, image, imageHover}) {
    const [thumbnail, setThumbnail] = useState(image)
    
    return (
        <div 
            className="videoCard" 
            onMouseOver={e => setThumbnail(imageHover ? imageHover : image)}
            onMouseLeave={e => setThumbnail(image)}
        >
            <img
                className="videoCard_thumbnail"
                src={thumbnail} 
                alt=""/>
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
