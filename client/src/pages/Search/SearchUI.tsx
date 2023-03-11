import React from 'react'
import Loader from '../../components/Loader'
import PostCard from '../../components/PostCard'
import { Button } from '../../components/Styled/Form'
import { GridLayout, PageLayout } from '../../components/Styled/Layout'
import { Text } from '../../components/Styled/Typography'
import Toggler from '../../components/Toggler'
import UserCard from '../../components/UserCard'
import { PostType } from '../../types'

interface PropsType {
    tabs: any[],
    selectTab: (num: number) => void,
    activeTab: number,
    results: { users: any[], posts: any[] },
    fetching: boolean,
    loadMoreResults: (type: 'users' | 'posts') => void,
    allFetched: { users: boolean, posts: boolean }
}

const SearchUI: React.FC<PropsType> = ({
    tabs,
    selectTab,
    activeTab,
    results,
    fetching,
    loadMoreResults,
    allFetched
}) => {


    return (
        <PageLayout>
            <Toggler tabs={tabs} current={activeTab} changeTab={selectTab} />

            {activeTab === 1 ? (
                <div>
                    <div style={{ marginTop: '16px' }}>
                        {results.posts.map((post: PostType) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                    {fetching ? <Loader type='page' />
                        : results.posts.length === 0 ? <Text style={{ textAlign: 'center' }}>No Results found</Text>
                            : !allFetched.posts ? (<Button style={{ margin: 'auto' }} onClick={() => loadMoreResults('posts')}>Load More</Button>)
                                : null}
                </div>
            ) : (
                <div>
                    <GridLayout style={{ marginTop: '16px' }}>
                        {results.users.map((user: any) => (
                            <UserCard key={user._id} user={user} />
                        ))}
                    </GridLayout>

                    {fetching ? <Loader type='page' />
                        : results.users.length === 0 ? <Text style={{ textAlign: 'center' }}>No Results found</Text>
                            : !allFetched.users ? (<Button style={{ margin: 'auto' }} onClick={() => loadMoreResults('users')}>Load More</Button>)
                                : null}
                </div>
            )}
        </PageLayout>
    )
}

export default SearchUI