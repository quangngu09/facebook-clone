import { Avatar } from '@material-ui/core'
import React from 'react';
import "./SidebarRow.css";
import {IconButton } from '@material-ui/core';

function SidebarRow({src,title, Icon}) {
    return (
        <div className="SidebarRow">
            {src && <Avatar src={src}/>}
            <IconButton>
                {Icon && <Icon/>}
            </IconButton>        
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
