import React from 'react'
import { PageLayout } from '../../components/Styled/Layout'
import PostsList from './components/PostsList'
import ProfileBox from './components/ProfileBox'

const ProfileUI = () => {
  return (
    <PageLayout>
        <ProfileBox />
        <PostsList />
    </PageLayout>
  )
}

export default ProfileUI