import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/130842086_2769344696612345_4002028691500257642_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pAQNX8ToZw4AX9dDHDK&_nc_ht=scontent.fhan5-7.fna&oh=0559fe2329cfbe21049229190071a34c&oe=606DDF7D"
                massage="Đội lót đường. AE cố Gắng "
                timestamp="This is a timestamp"
                username="Vũ Quang Vinh"
                image="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/129183015_2761592694054212_3995215653750202619_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=dZ93ohl75SkAX9LPj9F&_nc_ht=scontent.fhan5-3.fna&oh=f5096d63c4829d562322004b3c57840d&oe=606EDEB9"
            />
        </div>
    )
}

export default Feed
