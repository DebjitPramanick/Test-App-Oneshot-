import React from 'react'
import { Input } from '../../../../components/Styled/Form'
import { Text } from '../../../../components/Styled/Typography'
import Toggler from '../../../../components/Toggler'
import { AdminSBContainer } from './styles'

interface PropsType {
    tabs: { id: number, name: string, icon?: any }[],
    currentTab: number,
    changeTab: (tab: number) => void
}

const AdminActionsUI: React.FC<PropsType> = ({
    tabs,
    currentTab,
    changeTab
}) => {

    return (
        <AdminSBContainer>
            <Toggler
                tabs={tabs}
                current={currentTab}
                changeTab={changeTab} />
            {
                currentTab === 1 ? (
                    <>
                        <Text style={{marginBottom:'10px'}}>Search posts by title</Text>
                        <Input placeholder='Enter post title' />
                    </>
                ) : (
                    <>
                        <Text style={{marginBottom:'10px'}}>Search user by name</Text>
                        <Input placeholder='Enter user name' />
                    </>
                )
            }
        </AdminSBContainer>
    )
}

export default AdminActionsUI