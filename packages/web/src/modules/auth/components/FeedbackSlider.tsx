import { FeedbackItem } from '../auth.models';
import React from 'react';
import styled from 'styled-components';

interface SliderProps {
  data: FeedbackItem[];
}

const FeedbackSlider = ({ data }: SliderProps) => (
  <Slider>
    {data.map((item: FeedbackItem) => (
      <Item key={item.id}>
        <Content>
          <ProfileImage src={item.image} alt={`Photo of ${item.position}`} />
          <Name>{item.name}</Name>
          <Description>{`"${item.description}"`}</Description>
          <Position>Position: {item.position}</Position>
        </Content>
      </Item>
    ))}
  </Slider>
);

const Slider = styled.div`
  position: relative;
  z-index: 8;
  margin-top: auto;
  margin-bottom: auto;
`;

const Item = styled.div`
  width: 350px;
  max-width: 70%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 0;
  border-radius: 20px;
  background-image: url('/images/login-page/abstractr-background.png');
  background-size: cover;

  @media (min-width: 1600px) {
    width: 380px;
  }
`;

const Content = styled.div`
  max-width: 75%;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 65%;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  transform: translateY(-80px);
  border-radius: 50%;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.colors.primaryBlue};
`;

const Description = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 14px;
  line-height: 1.65;
  font-weight: 100;
  color: ${props => props.theme.colors.primaryDarkGray};
  margin-top: 20px;
  margin-bottom: 10px;

  @media (min-width: 1600px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const Position = styled.h4`
  color: ${props => props.theme.colors.primaryBlue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
`;

export default FeedbackSlider;
