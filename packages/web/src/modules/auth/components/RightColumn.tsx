import BlueAbstract from './BlueAbstract';
import RedAbstract from './RedAbstract';
import React from 'react';
import styled from 'styled-components';
import FeedbackSlider from './FeedbackSlider';
import Logo from 'components/Logo/Logo';
import { FeedbackItem } from '../auth.models';

interface RightColumnProps {
  feedbackData: FeedbackItem[];
}

const RightColumn = ({ feedbackData }: RightColumnProps) => (
  <>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <FeedbackSlider data={feedbackData} />
    <TurquoiseSquare
      src="/images/login-page/TurquoiseAbstract.png"
      alt="TurquoiseAbstract"
    />
    <YellowSquare
      src="/images/login-page/YellowAbstract.png"
      alt="TurquoiseAbstract"
    />
    <AbstractDotTop>
      <BlueAbstract />
    </AbstractDotTop>
    <AbstractDotBottom>
      <BlueAbstract />
    </AbstractDotBottom>
    <AbstractDotLeft>
      <RedAbstract />
    </AbstractDotLeft>
  </>
);

const LogoWrapper = styled.div`
  margin-left: 20px;
  margin-top: 25px;
`;

const YellowSquare = styled.img`
  position: absolute;
  right: 0;
  top: 30px;
  max-width: 60%;

  @media (min-width: 1600px) {
    max-width: 45%;
  }
`;

const TurquoiseSquare = styled.img`
  position: absolute;
  left: 0;
  bottom: 20px;
  max-width: 60%;

  @media (min-width: 1600px) {
    max-width: 45%;
  }
`;

const AbstractDotTop = styled.div`
  position: absolute;
  top: 120px;
  right: 40px;
`;

const AbstractDotBottom = styled(AbstractDotTop)`
  top: auto;
  right: auto;
  left: 40px;
  bottom: 60px;
`;

const AbstractDotLeft = styled.div`
  position: absolute;
  width: 10px;
  z-index: 10;
  top: 70px;
  left: 40px;

  svg {
    max-width: 40px;
  }
`;

RightColumn.defaultProps = {
  feedbackData: [
    {
      id: 0,
      image: '/images/login-page/founder.png',
      name: 'Alex Sarakuz',
      position: 'Founder',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati.',
    },
  ],
};

export default RightColumn;
