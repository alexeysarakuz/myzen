import React from 'react';
import styled from 'styled-components';
import { User } from '../profile.models';

interface GeneralInfoProps {
  user: User;
}

const GeneralInfo = ({ user }: GeneralInfoProps) => (
  <Paper>
    <Content>
      <div>
        {user.picture ? (
          <Image
            src={`/images/users/${user.picture}`}
            alt={`${user.username}'s photo`}
          />
        ) : (
          <TemporaryImage />
        )}
      </div>
      <div>
        <Username>{user.username}</Username>
        <Quote>100 Successful deals</Quote>
        <Email>{user.email}</Email>
        {user.phone ? (
          <Phone>{user.phone}</Phone>
        ) : (
          <Phone>Enter your phone</Phone>
        )}
        <Buttons>
          {!user.confirmed && <Button>Confirm e-mail</Button>}
          {!user.creditCard && <Button>Add credit card</Button>}
        </Buttons>
      </div>
    </Content>
    <Footer>
      <Col>
        <Title>183</Title>
        <Descr>Successful deals</Descr>
      </Col>
      <Col>
        <Title>256</Title>
        <Descr>Successful deals</Descr>
      </Col>
      <Col>
        <Title>983</Title>
        <Descr>Successful deals</Descr>
      </Col>
    </Footer>
  </Paper>
);

const Paper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
`;

const Content = styled.div`
  display: flex;
  padding: 30px 20px;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
`;

const TemporaryImage = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: ${props => props.theme.colors.lightGrayProgress};
`;

const Username = styled.div`
  color: ${props => props.theme.colors.secondaryDarkGray};
  font-size: 17px;
`;

const Quote = styled.div`
  color: ${props => props.theme.colors.primaryLightGray};
  font-size: 13px;
  margin-top: 7px;
`;

const Email = styled.div`
  color: ${props => props.theme.colors.darkGrayProfile};
  font-size: 13px;
  margin-top: 20px;
`;

const Phone = styled.div`
  color: ${props => props.theme.colors.darkGrayProfile};
  font-size: 13px;
  margin-top: 7px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 23px;
  font-size: 13px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.cyan};
  border: none;
  border-radius: 3px;
  margin-right: 10px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 20px;
  margin-top: 5px;
  border-top: 1px solid ${props => props.theme.colors.lightGrayProfileLine};
`;

const Col = styled.div`
  width: 20%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${props => props.theme.colors.cyan};
`;

const Descr = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.primaryLightGray};
  margin-top: 8px;
`;

export default GeneralInfo;
