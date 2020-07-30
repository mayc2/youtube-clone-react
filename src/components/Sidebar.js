import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from '../components/SidebarRow'
import HomeSharpIcon from '@material-ui/icons/HomeSharp'
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp'
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp'
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeSharpIcon} />
            <SidebarRow title="Trending" Icon={WhatshotSharpIcon} />
            <SidebarRow title="Subscription" Icon={SubscriptionsSharpIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibrarySharpIcon} />
            <SidebarRow title="History" Icon={HistorySharpIcon} />
            <SidebarRow title="Your Videos" Icon={OndemandVideoSharpIcon} />
            <SidebarRow title="Watch Later" Icon={WatchLaterSharpIcon} />
            <SidebarRow title="Liked Videos" Icon={ThumbUpSharpIcon} />
            <SidebarRow title="Show more" Icon={ExpandMoreSharpIcon} />
            <hr />

        </div>
    )
}

export default Sidebar
