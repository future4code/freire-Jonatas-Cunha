import styled from "styled-components";
import {PrimaryTitleColor, PrimaryTextColor, SecondaryColor, QuaternaryColor, QuinaryColor, SecondaryTextColor } from "../../constants/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: ${QuaternaryColor};
    border: 1px solid ${SecondaryColor};
    border-radius: 12px;
    height: 100%;
    word-break: break-word;
`
export const TitlePost = styled.h1`
    color: ${PrimaryTitleColor};
    font-size: 1.3rem;
    margin-bottom: 15px;
`

export const ContentPost = styled.p`
    color: ${PrimaryTextColor};
    font-size: 1rem;
    margin-bottom: 15px;
`

export const AuthorPost = styled.span`
    font-size: 0.8rem;
    color: ${SecondaryTextColor};
    margin-bottom: 10px;

`

export const BoxActions = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    gap: 25px;
`

export const BoxLikesAndComments = styled.div`
    color: ${SecondaryTextColor};
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid ${QuinaryColor};
    border-radius: 28px;
    padding: 5px 15px;
    max-height: 31px;
`