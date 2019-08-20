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
          <Description>{item.description}</Description>
          <Description>{item.description}</Description>
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
  border-radius: 6px;
  background-image: url('/images/login-page/abstractr-background.png');
  background-size: cover;
`;

const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;
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
  font-weight: bold;
  color: ${props => props.theme.colors.primaryBlue};
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;
export default FeedbackSlider;
