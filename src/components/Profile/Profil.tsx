import React from 'react'
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";
import ProfilePreview from "./ProfilePreview/ProfilPreview";
import {PostType, UserProfileType} from "../../types/types";

type PropsType = {
  userProfile: UserProfileType
  status: string
  updateStatus: () => void
  updateProfileInfo: () => void
  addPost: (newPostText: string) => void
  posts: Array<PostType>
}

const Profile: React.FC<PropsType> = (props) => {
  const {userProfile, status, updateStatus, updateProfileInfo, addPost, posts} = props


  if (!userProfile) return <Preloader/>
  return (
    <div className={styles.profilePage}>
      <ProfilePreview userProfile={userProfile}
                      status={status}
                      updateStatus={updateStatus}
                      updateProfileInfo={updateProfileInfo}/>
      <MyPosts addPost={addPost} posts={posts}/>
    </div>
  );
}

export default Profile