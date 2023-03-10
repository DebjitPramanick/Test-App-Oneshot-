import React from 'react'
import { Tab, ToggleContainer } from './styles'

interface PropsType {
    tabs: { id: number, name: string }[],
    current: number,
    changeTab: (tab: number) => void
}

const Toggler: React.FC<PropsType> = ({ tabs, current, changeTab }) => {
    return (
        <ToggleContainer>
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    className={current === tab.id ? 'active' : ''}
                    onClick={() => changeTab(tab.id)}>{tab.name}</Tab>
            ))}
        </ToggleContainer>
    )
}

export default Toggler