import React from 'react'
import '../css/SearchPage.css'
import TuneSharpIcon from '@material-ui/icons/TuneSharp'
import VideoRow from './VideoRow.js'
import ChannelRow from './ChannelRow.js'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>Filter</h2>
            </div>
            <hr/>

            {/* 
                TODO -- pull back from an api
                Can only search for Lane 8 right now
            */}
            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJyI_qslduU_ufBT46AlhPU0RgoaFuM7x_Ds6qbgGw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Lane 8"
                verified
                subs="151K"
                noOfVideos={246}
                description="Rather than pander to the purists or create music for DJs alone, Daniel Goldstein aka Lane 8 has always tread his own, distinctive ..."
            />
            <hr/>

            <h4 className="searchPage__latest">Latest from Lane 8</h4>
            {/* TODO -- pull back from an api */}
            <VideoRow 
                title="MotoGP Classics: Laguna Seca 2008 (FULL RACE) | Motorsports on NBC"
                subs=""
                description="Relive this exciting classic MotoGP race from Laguna Seca in 2008. #MotorsportsonNBC #MotoGP #LagunaSeca » Subscribe to ..."
                views="10,042 views"
                timestamp="Mar 19, 2020"
                channel="Motorsports on NBC"
                image="https://i.ytimg.com/vi/fdYrPCFCv30/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBRyd87Lm8dLpzW2-LB4CBhdOUDuQ"
                imageHover="https://i.ytimg.com/an_webp/ycwz4Ljm6_s/mqdefault_6s_480x270.webp?du=3000&sqp=CPCNjfkF&rs=AOn4CLAJsl9SHw_4_AhjsjnjTDLgRqpmag"
            />
            <VideoRow 
                title="034Motorsport GTI-RS Concept to Reality Full Length"
                subs=""
                description="In 2010 034Motorsport built the ultimate VW, a 1000HP mid engined 2.7t, wide body VW GTI with Porsche 996 Turbo rear ..."
                views="68K views"
                timestamp="9 years ago"
                channel="034Motorsport"
                image="https://i.ytimg.com/vi/lEtNMxVKegM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAZy5m5awHy8y7kzctA13JZTswvGw"
                imageHover="https://i.ytimg.com/an_webp/lEtNMxVKegM/mqdefault_6s.webp?du=3000&sqp=CO7XiPkF&rs=AOn4CLAC3tiD8RH1QBrsGv6mkFDmvIMVqw"
            />
            <VideoRow 
                title="5 uses for Cloud Functions | Get to know Cloud Firestore #12"
                subs=""
                description="On this episode of Get to know Cloud Firestore, we'll dig into some common patterns for using Cloud Functions and think about ..."
                views="1.9K views"
                timestamp="10 hours ago"
                channel="Firebase"
                image="https://i.ytimg.com/vi/77XmRDtOL7c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAdcFIOWS64OnobZbeGO8QosmHgBQ"
            />
            <VideoRow 
                title="Total Body Yoga - Deep Stretch | Yoga With Adriene"
                subs=""
                description="Total Body Yoga is a deep stretch practice for the legs, back, and hips. This session invites you on the mat to go deeper. This 45 ..."
                views="11M views"
                timestamp="2 years ago"
                channel="Yoga With Adriene"
                image="https://i.ytimg.com/vi/GLy2rYHwUqY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA5NU9ICNHBg8UyYogN2Ys9AoSwOA"
                imageHover="https://i.ytimg.com/an_webp/GLy2rYHwUqY/mqdefault_6s_480x270.webp?du=3000&sqp=CI79iPkF&rs=AOn4CLAcQH6fUn4f4mv1CusdY6vu0bA0Ow"
            />
            <VideoRow 
                title="RÜFÜS DU SOL - Innerbloom (Lane 8 Remix)"
                subs=""
                description="Buy/Stream: https://lnk.to/InnerbloomLane8yo Subscribe: http://po.st/ytlane8music Follow Lane 8: Website: ..."
                views="4.4M views"
                timestamp="3 years ago"
                channel="Lane 8"
                image="https://i.ytimg.com/vi/KXWSlJ7W5Ag/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBU1eshzdCDAt5M8OkY_QIzohhB7Q"
            />
        </div>
    )
}

export default SearchPage
