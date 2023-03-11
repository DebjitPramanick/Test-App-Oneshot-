import React, { useState } from 'react'
import ConfirmPopup from '../../../../components/Popups/ConfirmPopup'
import { useUser } from '../../../../contexts/UserContext'
import ProfileBoxUI from './ProfileBoxUI'

const ProfileBox = () => {

  const [showPopup, setShowPopup] = useState(false)
  const { deleteUserAccount } = useUser()

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <ProfileBoxUI
        togglePopup={togglePopup} />
        
      <ConfirmPopup
        header='Delete account?'
        message='Are you sure you want to delete your acccount? All of your data will be deleted.'
        onConfirm={deleteUserAccount}
        onCancel={togglePopup}
        closePopup={togglePopup}
        show={showPopup}
      />
    </>
  )
}

export default ProfileBox