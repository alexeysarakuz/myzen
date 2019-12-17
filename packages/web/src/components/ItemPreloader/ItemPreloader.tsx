import React from 'react';
import styled from 'styled-components';

const ItemPreloader = () => (
  <Item>
    <UserData>
      <Image />
      <>
        <Name />
      </>
    </UserData>
    <Rating>
      <RatingLineContainer />
      <RatingLineContainer2 />
    </Rating>

    <Tags>
      <TagType1 />
      <TagType2 />
      <TagType1 />
    </Tags>

    <Reviews>
      <Review>
        <ReviewImage />
      </Review>
      <Review>
        <ReviewImage />
      </Review>
      <Review>
        <ReviewImage />
      </Review>
      <Review>
        <ReviewImage />
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
  box-shadow: ${props => props.theme.shadows.searchResultItemShadow};
  border-radius: 3px;

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

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;
  animation: animationGradient 1.5s ease infinite;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const Name = styled.h3`
  width: 140px;
  height: 20px;
  margin-left: 20px;
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;
  animation: animationGradient 1.5s 0.2s ease infinite;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const Rating = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const RatingLineContainer = styled.div`
  width: 150px;
  height: 15px;
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;
  animation: animationGradient 1.5s ease infinite;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const RatingLineContainer2 = styled.div`
  width: 120px;
  height: 15px;
  margin-top: 10px;
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;
  animation: animationGradient 1.5s ease infinite;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 78px;
`;

const Tag = styled.div`
  width: 58px;
  height: 9px;
  padding: 9px 13px;
  margin-right: 10px;
  margin-top: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

const TagType1 = styled(Tag)`
  animation: animationGradient 1.5s ease infinite;
`;

const TagType2 = styled(Tag)`
  animation: animationGradient 1.5s 0.2s ease infinite;
`;

const Reviews = styled.div`
  display: flex;
  margin-top: 35px;
`;

const Review = styled.div`
  margin-top: 10px;
  position: relative;

  &:last-child {
    width: 32px;
    height: 32px;
  }
`;

const ReviewImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: -15px;
  border: 2px solid ${props => props.theme.colors.white};
  background: linear-gradient(to right, rgb(233, 233, 233), rgb(201, 201, 201));
  background-size: 400% 400%;
  animation: animationGradient 1.5s ease infinite;

  @keyframes animationGradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
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
  font-size: 12px;
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

export default ItemPreloader;
