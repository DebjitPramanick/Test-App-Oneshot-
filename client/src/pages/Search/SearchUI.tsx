import React from 'react'
import Loader from '../../components/Loader'
import PostCard from '../../components/PostCard'
import { Button } from '../../components/Styled/Form'
import { GridLayout, PageLayout } from '../../components/Styled/Layout'
import { Text } from '../../components/Styled/Typography'
import Toggler from '../../components/Toggler'
import UserCard from '../../components/UserCard'

interface PropsType {
    tabs: any[],
    selectTab: (num: number) => void,
    activeTab: number,
    results: { users: any[], posts: any[] },
    fetching: boolean
}

const SearchUI: React.FC<PropsType> = ({
    tabs,
    selectTab,
    activeTab,
    results,
    fetching
}) => {


    return (
        <PageLayout>
            <Toggler tabs={tabs} current={activeTab} changeTab={selectTab} />

            {fetching ? (<Loader type='page' />) : (
                <>
                    {activeTab === 1 ? (
                        <div>
                            <div style={{ marginTop: '16px' }}>
                                {results.posts.map((post: any) => (
                                    <PostCard key={post._id} post={post} />
                                ))}
                            </div>
                            {results.posts.length === 0 ? <Text style={{textAlign: 'center'}}>No Results found</Text> : (
                                <Button style={{ margin: 'auto' }}>Load More</Button>
                            )}
                        </div>
                    ) : (
                        <div>
                            <GridLayout style={{ marginTop: '16px' }}>
                                {results.users.map((user: any) => (
                                    <UserCard key={user._id} user={user} />
                                ))}
                            </GridLayout>
                            {results.users.length === 0 ? <Text style={{textAlign: 'center'}}>No Results found</Text> : (
                                <Button style={{ margin: 'auto' }}>Load More</Button>
                            )}
                        </div>
                    )}
                </>
            )}
        </PageLayout>
    )
}

export default SearchUI