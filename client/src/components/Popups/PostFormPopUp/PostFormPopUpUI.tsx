import React from 'react'
import { Avatar, Flex } from '../../Styled/Shared';
import { Overlay, PopupContainer, PopupBody, PopupHeader } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Button, Input, TextArea } from '../../Styled/Form';
import { SubHeading, Text } from '../../Styled/Typography';
import { useUser } from '../../../contexts/UserContext';

interface PropsType {
    closePopup: () => void,
    handlePostData: (val: string, field: 'title' | 'content') => void,
    post: any,
    uploadPostData: () => void
    uploading: boolean
}

const PostFormPopupUI: React.FC<PropsType> = ({
    closePopup,
    handlePostData,
    post,
    uploadPostData,
    uploading,
}) => {

    const {user} = useUser()

    return (
        <Overlay>
            <PopupContainer>
                <PopupBody>
                    <PopupHeader>
                        <SubHeading>Create Post</SubHeading>
                        <AiOutlineCloseCircle size={30} cursor="pointer" onClick={closePopup} />
                    </PopupHeader>

                    <div style={{ padding: '16px' }}>
                        <Flex style={{gap: '16px', marginBottom: "20px"}}>
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

                        <Button onClick={uploadPostData} style={{ width: '100%', marginTop: '10px' }}>
                            {!uploading ? 'Post' : 'Posting...'}
                        </Button>
                    </div>
                </PopupBody>
            </PopupContainer>
        </Overlay >
    )
}

export default PostFormPopupUI