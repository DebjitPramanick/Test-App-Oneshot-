import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button } from '../../Styled/Form';
import { Overlay, PopupContainer, PopupBody, PopupHeader } from '../../Styled/Popup';
import { Flex } from '../../Styled/Shared';
import { SubHeading, Text } from '../../Styled/Typography';

interface PropsType {
    header: string,
    message: string,
    closePopup: () => void;
    onCancel?: () => void;
    onConfirm: () => void
}

const ConfirmPopup: React.FC<PropsType> = ({
    header,
    message,
    closePopup,
    onCancel,
    onConfirm
}) => {
    return (
        <Overlay>
            <PopupContainer>
                <PopupBody>
                    <PopupHeader>
                        <SubHeading>{header}</SubHeading>
                        <AiOutlineCloseCircle size={30} cursor="pointer" onClick={closePopup} />
                    </PopupHeader>
                    <div style={{ padding: '16px' }}>
                        <Text className='no-truncate'>{message}</Text>
                        <Flex style={{marginTop: '20px', gap: '16px'}}>
                            <Button onClick={onCancel} style={{width: '100%', border: 0}}>Cancel</Button>
                            <Button onClick={onConfirm} style={{width: '100%', border: 0}}>Cofirm</Button>
                        </Flex>
                    </div>
                </PopupBody>
            </PopupContainer>
        </Overlay >
    )
}

export default ConfirmPopup