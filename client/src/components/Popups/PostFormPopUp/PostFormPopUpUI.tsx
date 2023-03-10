import React from 'react'
import { Avatar, Flex } from '../../Styled/Shared';
import { Overlay, PopupContainer, PopupBody } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Button, Input, TextArea } from '../../Styled/Form';
import { SubHeading } from '../../Styled/Typography';

interface PropsType {
    closePopup: () => void,
    handlePostData: (val: string, field: 'title' | 'content') => void,
    post: any,
    uploadPostData: () => void
    uploading: boolean
}

const PostFormPopUpUI: React.FC<PropsType> = ({
    closePopup,
    handlePostData,
    post,
    uploadPostData,
    uploading,
}) => {
    return (
        <Overlay>
            <PopupContainer>
                <PopupBody>
                    <Flex style={{ justifyContent: 'space-between', borderBottom: '1px solid #cfcfcf', padding: '16px' }}>
                        <SubHeading>Create Post</SubHeading>
                        <AiOutlineCloseCircle size={30} cursor="pointer" onClick={closePopup} />
                    </Flex>

                    <div style={{ padding: '16px' }}>
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

export default PostFormPopUpUI