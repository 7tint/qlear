import React from 'react';

class Sidebar extends React.Component {
  render() {
    return(
      <div className="sidebar is-fixed-side has-background-theme-beige is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-column is-align-items-center">
          <img className="mt-6 mb-5 circle" src="https://pbs.twimg.com/profile_images/1062881019651477504/La2PqRaB_400x400.jpg" width="85" height="85" alt="Brand logo"/>
          <div className="mb-4 has-text-theme-green-1 title brand has-text-weight-normal">Everlane</div>
        </div>
        <div className="has-text-left has-text-centered-touch mx-5 px-3">
          <div className="title is-size-7 has-text-weight-normal has-text-grey-dark my-5 py-1">Dashboard</div>
          <div className="title is-size-7 has-text-weight-normal has-text-grey-dark my-5 py-1">My Tags</div>
          <div className="title is-size-7 has-text-weight-normal has-text-grey-dark my-5 py-1">Settings</div>
        </div>
        <div className="mt-auto has-text-left has-text-centered-touch py-6-desktop mx-5 px-3">
          <div className="title is-size-7 has-text-weight-normal has-text-grey-dark">Logout</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
