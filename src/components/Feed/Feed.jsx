import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/44520484?v=4"
        message="Facebook test post"
        timestamp="time and date"
        username="Sakil Khan"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/44520484?v=4"
        message="Facebook test post"
        timestamp="time and date"
        username="Sakil Khan"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/44520484?v=4"
        message="Facebook test post"
        timestamp="time and date"
        username="Sakil Khan"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      />
    </div>
  );
}

export default Feed;
