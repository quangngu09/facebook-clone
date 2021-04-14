import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/148291021_1148562552234764_5070494179295539043_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=sJT-GQiQ5h4AX8bCAS8&_nc_ht=scontent.fhan2-6.fna&oh=c5586ebed549a6ff46095f0493d88e5f&oe=606DC9C2" 
                        title="Quang Ngữ"/>
            <SidebarRow Icon ={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon ={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon ={PeopleIcon} title='Friends'/>
            <SidebarRow Icon ={ChatIcon} title='Messenger'/>
            <SidebarRow Icon ={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon ={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon ={ExpandMoreIcon} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
