import React from 'react';
import './StoryReel.css';
import Story from './Story/Story';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://avatars.githubusercontent.com/u/44520484?v=4"
        title="Sakil Khan"
      />
      <Story
        image={img}
        profileSrc="https://avatars.githubusercontent.com/u/44520484?v=4"
        title="Sakil Khan"
      />
      <Story
        image={img}
        profileSrc="https://avatars.githubusercontent.com/u/44520484?v=4"
        title="Sakil Khan"
      />
      <Story
        image={img}
        profileSrc="https://avatars.githubusercontent.com/u/44520484?v=4"
        title="Sakil Khan"
      />
      <Story
        image={img}
        profileSrc="https://avatars.githubusercontent.com/u/44520484?v=4"
        title="Sakil Khan"
      />
    </div>
  );
}

export default StoryReel;
