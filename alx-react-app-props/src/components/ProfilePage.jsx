import React from "react";
import UserInfo from "src/components/UserInfo";

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
