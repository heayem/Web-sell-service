import { Icon } from '@iconify/react';
import React from 'react';

const Profile = ({ name, position, linkedin_link, github_link }) => {
  return (
    <div className='w-[200px] h-[370px]'>
      <img
        className='w-[200px] h-[200px] object-cover rounded-full bg-blue-300'
        src="images/photo_2024-10-05_17-17-43.jpg"
        alt={`${name}'s profile`}
      />
      <div className='mt-4 flex flex-col items-center gap-3'>
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3 className='text-xl'>{position}</h3>
      </div>
      <div className='mt-5 flex justify-center gap-7 text-3xl'>
        {linkedin_link && (
          <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
            <Icon icon="skill-icons:linkedin" width="1.2em" height="1.2em" />
          </a>
        )}
        {github_link && (
          <a href={github_link} target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" width="1.2em" height="1.2em" />
          </a>
        )}
        <Icon icon="fxemoji:smiletongue" width="1.2em" height="1.2em" />
      </div>
    </div>
  );
};

export default Profile;
