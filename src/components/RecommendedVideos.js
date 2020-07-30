import React from 'react'
import '../css/RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="MotoGP Classics: Laguna Seca 2008 (FULL RACE) | Motorsports on NBC"
                    views="10,042 views"
                    timestamp="Mar 19, 2020"
                    channel="Motorsports on NBC"
                    channelImage="https://yt3.ggpht.com/a/AATXAJwqbcIMCvIBjhvJfmMCmg0QiTC9v9N_pQ_ZSfyO=s48-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/fdYrPCFCv30/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBRyd87Lm8dLpzW2-LB4CBhdOUDuQ"
                    imageHover="https://i.ytimg.com/an_webp/fdYrPCFCv30/mqdefault_6s.webp?du=3000&sqp=CPjXiPkF&rs=AOn4CLDVDpJHl70F1t2uQvao1onjudRUzA"
                />
                <VideoCard 
                    title="034Motorsport GTI-RS Concept to Reality Full Length"
                    views="68K views"
                    timestamp="9 years ago"
                    channel="034Motorsport"
                    channelImage="https://yt3.ggpht.com/a/AATXAJw9Wv-BUb_WHIqfOsu1CODeqKQ-wtq8nYUP8u2bNw=s48-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/lEtNMxVKegM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAZy5m5awHy8y7kzctA13JZTswvGw"
                    imageHover="https://i.ytimg.com/an_webp/lEtNMxVKegM/mqdefault_6s.webp?du=3000&sqp=CO7XiPkF&rs=AOn4CLAC3tiD8RH1QBrsGv6mkFDmvIMVqw"
                />
                <VideoCard 
                    title="5 uses for Cloud Functions | Get to know Cloud Firestore #12"
                    views="1.9K views"
                    timestamp="10 hours ago"
                    channel="Firebase"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/77XmRDtOL7c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAdcFIOWS64OnobZbeGO8QosmHgBQ"
                />
                <VideoCard 
                    title="Total Body Yoga - Deep Stretch | Yoga With Adriene"
                    views="11M views"
                    timestamp="2 years ago"
                    channel="Yoga With Adriene"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjvJnrh64QYXCNzR_UUIfidxkuHJ5Zz7mL8zA=s68-c-k-c0x00ffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/GLy2rYHwUqY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA5NU9ICNHBg8UyYogN2Ys9AoSwOA"
                    imageHover="https://i.ytimg.com/an_webp/GLy2rYHwUqY/mqdefault_6s_480x270.webp?du=3000&sqp=CI79iPkF&rs=AOn4CLAcQH6fUn4f4mv1CusdY6vu0bA0Ow"
                />
                <VideoCard 
                    title="RÜFÜS DU SOL - Innerbloom (Lane 8 Remix)"
                    views="4.4M views"
                    timestamp="3 years ago"
                    channel="Lane 8"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyI_qslduU_ufBT46AlhPU0RgoaFuM7x_Ds6qbgGw=s100-c-k-c0xffffffff-no-rj-mo"
                    image="https://i.ytimg.com/vi/KXWSlJ7W5Ag/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBU1eshzdCDAt5M8OkY_QIzohhB7Q"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
