import React, { useState } from 'react'
import AdminActionsUI from './AdminActionsUI'

const AdminActions = () => {

    const [currentTab, setCurrentTab] = useState(1)

    const tabs = [
        {
            id: 1,
            name: 'Posts'
        },
        {
            id: 2,
            name: 'Users'
        },
    ]


    return (
        <AdminActionsUI
            tabs={tabs}
            currentTab={currentTab}
            changeTab={(num) => setCurrentTab(num)} />
    )
}

export default AdminActions