// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react';

import FriendsList from './FriendsList';
import Search from './Search';
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsDummyData from '../dummy-data/friends';

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friendData, setFriendData] = useState(friendsDummyData);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchValue, setSearchValue] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = (id) => {
    const newFriendData = friendData.map(friend => {
      if (friend.id === id) {
        return {...friend, married: !friend.married};
      } else {
        return friend;
      }
    })
    setFriendData(newFriendData);
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search />
      <FriendsList friends={friendData} changeRelationStatus={changeStatus} />
      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
