import React from 'react';
import '../../styles/desktop/styles.scss';

export default function Introduction() {
  return (
    <div className="introduction_parent">
      <div className="profile_details_container">
        <span className="profile_name">Apurva Garg</span>
        <span className="profile_designation">Software development engineer</span>
        <span className="profile_company">ZoloStays</span>
      </div>
      <div className="profile_image_container">
        <img className="profile_image" src="assets/profile.png" />
      </div>
    </div>
  )
}
