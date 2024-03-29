import styled from "styled-components";

export const Text = styled.p`
    font-style: normal;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    &.no-truncate{
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }
`
export const SmallText = styled.p`
    font-style: normal;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.subText};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    &.no-truncate{
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }
`

export const LargeText = styled.p`
    font-style: normal;
    font-size: 20px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    &.no-truncate{
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }
`

export const Heading = styled.h1`
    font-style: normal;
    font-size: 30px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    &.no-truncate{
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }
`

export const SubHeading = styled.h3`
    font-style: normal;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;

    &.no-truncate{
        text-overflow: unset;
        overflow: visible;
        white-space: unset;
    }

    &.disabled{
        color: ${props => props.theme.subText}
    }
`

export const PostContent = styled.p`
    font-style: normal;
    font-size: 15px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text};

    .read-or-hide {
        cursor: pointer;
        color: ${props => props.theme.readMore}
    }
`