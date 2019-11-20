import React from 'react';
import { ResultItem } from 'modules/dashboard/dashboard.models';
import styled from 'styled-components';

const averageListingScore = 50.0;

const SearchResultsItem = ({ item }: { item: ResultItem }) => (
  <Item>
    <UserData>
      <Image src={item.profilePicture} />
      <>
        <Name>{item.username}</Name>
      </>
    </UserData>
    <Rating>
      <RatingNumber>{item.rating} Rating</RatingNumber>
      <RatingLineContainer>
        <RatingLine width={item.rating * 10} />
      </RatingLineContainer>
    </Rating>

    <TagsTitle>Roles</TagsTitle>
    <Tags>
      {item.tags.map(tag => (
        <Tag key={tag.title}>{tag.title}</Tag>
      ))}
    </Tags>

    <ReviewsTitle>
      REVIEWS ABOUT <ReviewsName>{item.username}</ReviewsName>
    </ReviewsTitle>
    <Reviews>
      <Review>
        <ReviewImage src={item.profilePicture} />
      </Review>
      <Review>
        <ReviewImage src={item.profilePicture} />
      </Review>
      <Review>
        <ReviewImage src={item.profilePicture} />
      </Review>
      <Review>
        <ReviewImage src={item.profilePicture} />
      </Review>
    </Reviews>

    <ButtonsRow>
      <CommunicateButton>Book now</CommunicateButton>
      <CommunicateButton>Text now</CommunicateButton>
      <CommunicateFullButton>Check availability</CommunicateFullButton>
    </ButtonsRow>
  </Item>
);

const Item = styled.div`
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 20px ${props => props.theme.colors.primaryBlueShadow};

  @media (min-width: 0) and (max-width: 580px) {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }

  @media (min-width: 580px) and (max-width: 1277px) {
    width: 48%;
    margin-left: 2%;
    margin-right: 2%;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &:first-child,
    &:nth-child(2n + 1) {
      margin-left: 0;
    }
  }

  @media (min-width: 1277px) and (max-width: 1384px) {
    width: 26.65%;
    margin-left: 3%;
    margin-right: 3%;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(3n + 1),
    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 1384px) and (max-width: 1515px) {
    width: 23.5%;
    margin-left: 1%;
    margin-right: 1%;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1),
    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 1515px) {
    width: 22.5%;
    margin-bottom: 40px;
    margin-left: 1.6%;
    margin-right: 1.6%;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1),
    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 1655px) {
    width: 21.8%;
    padding: 23px;
    margin-left: 2.1%;
    margin-right: 2.1%;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-child(4n + 1),
    &:first-child {
      margin-left: 0;
    }
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Name = styled.h3`
  font-weight: 300;
  font-size: 15px;
  margin-left: 20px;
  color: ${props => props.theme.colors.darkGraySearchResults};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const RatingNumber = styled.div`
  width: 40%;
  font-size: 13px;
  color: ${props => props.theme.colors.darkGraySearchResults};
  text-transform: uppercase;
`;

const RatingLineContainer = styled.div`
  width: 60%;
`;

const RatingLine = styled.div<{ width: number }>`
  position: relative;
  height: 5px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGrayTags};
  border-radius: 20px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width}%;
    height: 100%;

    ${props =>
      props.width > averageListingScore
        ? `
        background-color: ${props.theme.colors.greenRating};
    `
        : `
        background-color: ${props.theme.colors.redRating};
    `}
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 78px;
`;

const TagsTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGrayTags};
  text-transform: uppercase;
`;

const Tag = styled.div`
  padding: 9px 13px;
  margin-right: 10px;
  margin-top: 8px;
  font-size: 13px;
  color: ${props => props.theme.colors.darkGrayTags};
  background-color: ${props => props.theme.colors.lightGrayTags};
  border-radius: 4px;
`;

const Reviews = styled.div`
  display: flex;
`;

const ReviewsTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.6;
  color: ${props => props.theme.colors.darkGrayTags};
  text-transform: uppercase;
`;

const Review = styled.div`
  margin-top: 10px;
  position: relative;

  &:last-child {
    width: 32px;
    height: 32px;

    &::after {
      content: '';
      position: absolute;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      opacity: 0.6;
      background-color: ${props => props.theme.colors.black};
      left: 2px;
      top: 2px;
    }

    &::before {
      content: '+6';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 10px;
      color: ${props => props.theme.colors.white};
      z-index: 5;
    }
  }
`;

const ReviewImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: -15px;
  border: 2px solid ${props => props.theme.colors.white};
`;

const ReviewsName = styled.b`
  color: ${props => props.theme.colors.primaryBlue};
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const CommunicateButton = styled.button`
  padding: 13px;
  width: 48%;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryBlue};
  border: 1.5px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  margin-top: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryBlue};
    border-color: ${props => props.theme.colors.primaryBlue};
    color: ${props => props.theme.colors.white};
  }
`;

const CommunicateFullButton = styled(CommunicateButton)`
  width: 100%;
`;

export default SearchResultsItem;
