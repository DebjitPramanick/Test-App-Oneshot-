import React from 'react'
import { Avatar, Flex } from '../../Styled/Shared';
import { Overlay, PopupContainer, PopupBody, PopupHeader } from '../../Styled/Popup';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Button, Input, TextArea } from '../../Styled/Form';
import { SubHeading, Text } from '../../Styled/Typography';
import { useUser } from '../../../contexts/UserContext';
import Loader from '../../Loader';

interface PropsType {
    closePopup: () => void,
    handlePostData: (val: string, field: 'title' | 'content') => void,
    post: {title: string, content: string, user: string},
    uploadPostData: () => void,
    editPostData: () => void
    uploading: boolean,
    heading?: string
}

const PostFormPopupUI: React.FC<PropsType> = ({
    closePopup,
    handlePostData,
    post,
    uploadPostData,
    editPostData,
    uploading,
    heading = "Create Post"
}) => {

    const { user } = useUser()

    const isEditting = heading.toLowerCase().includes('edit')

    return (
        <Overlay>
            <PopupContainer>
                <PopupBody>
                    <PopupHeader>
                        <SubHeading>{heading}</SubHeading>
                        <AiOutlineCloseCircle size={30} cursor="pointer" onClick={closePopup} />
                    </PopupHeader>

                    <div style={{ padding: '16px' }}>
                        <Flex style={{ gap: '16px', marginBottom: "20px" }}>
                            <Avatar src={user.profile_pic} width={30} />
                            <Text>{user.name}</Text>
                        </Flex>
                        <Input placeholder='Enter the title of your post'
                            style={{ marginBottom: '16px' }}
                            value={post.title}
                            onChange={(e: any) => handlePostData(e.target.value, 'title')} />

                        <TextArea placeholder='Enter the body of your post'
                            style={{ marginBottom: '16px' }}
                            value={post.content}
                            onChange={(e: any) => handlePostData(e.target.value, 'content')} />

                        {isEditting ? (
                            <Button onClick={editPostData} style={{ width: '100%', marginTop: '10px' }}>
                                {uploading ? <Loader type='normal' /> : null}
                                {!uploading ? 'Updating...' : 'Update'}
                            </Button>
                        ) : (
                            <Button onClick={uploadPostData} style={{ width: '100%', marginTop: '10px' }}>
                                {uploading ? <Loader type='normal' /> : null}
                                {uploading ? 'Posting...' : 'Post'}
                            </Button>
                        )}
                    </div>
                </PopupBody>
            </PopupContainer>
        </Overlay>
    )
}

export default PostFormPopupUI;