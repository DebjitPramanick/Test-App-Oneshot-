import React, { useState } from 'react'
import { PostContent } from '../Styled/Typography';

const ReadMore: React.FC<any> = ({ children }) => {
    const text = children;
    const shouldShow = text.length > 150
    const [isReadMore, setIsReadMore] = useState(text.length > 150);
    
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <PostContent>
            {isReadMore ? text.slice(0, 150) : text}
            {shouldShow && (
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            )}
        </PostContent>
    );
}

export default ReadMore