import React from 'react';
import { Link } from 'react-router-dom';
import { StepsModels } from 'modules/dashboard/dashboard.models';
import styled from 'styled-components';

interface StepsSectionProps {
  steps: StepsModels;
}

const StepsSection = ({ steps }: StepsSectionProps) => (
  <StepsRow>
    <StepsCol>
      <Paper>
        <Image src="/images/interface-elems/contract.svg" alt="" />
        <Title>Create An Account</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nam
          architecto.
        </Paragraph>
        <Completed>
          <span className="icon icon-checkmark"></span>
          Completed
        </Completed>
      </Paper>
    </StepsCol>
    <StepsCol>
      <Paper>
        <Image src="/images/interface-elems/cards.svg" alt="" />
        <Title>Add payment info</Title>
        <Paragraph>
          We need your payment data to handle all purchases and sales.
        </Paragraph>
        {steps.add_payment ? (
          <Completed>
            <span className="icon icon-checkmark"></span>
            Completed
          </Completed>
        ) : (
          <Complete to="/">Add info</Complete>
        )}
      </Paper>
    </StepsCol>
    <DoubleCol>
      <Paper>
        <div>
          <Image src="/images/interface-elems/job.svg" alt="" />
        </div>
        <div>
          <Title>Find your first job</Title>
          <Paragraph>
            We need your payment data to handle all purchases and sales.
          </Paragraph>
          {steps.find_job ? (
            <Completed>
              <span className="icon icon-checkmark"></span>
              Completed
            </Completed>
          ) : (
            <Complete to="/">Find a job</Complete>
          )}
        </div>
      </Paper>
      <Paper>
        <div>
          <Image src="/images/interface-elems/hire.svg" alt="" />
        </div>
        <div>
          <Title>Hire your first freelancer</Title>
          <Paragraph>
            We need your payment data to handle all purchases and sales.
          </Paragraph>
          {steps.hire_freelancer ? (
            <Completed>
              <span className="icon icon-checkmark"></span>
              Completed
            </Completed>
          ) : (
            <Complete to="/search">Hire a person</Complete>
          )}
        </div>
      </Paper>
    </DoubleCol>
  </StepsRow>
);

const StepsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

const Paper = styled.div`
  padding: 30px 20px;
  margin-top: auto;
  margin-bottom: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 9px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.6;
  color: ${props => props.theme.colors.primaryBlue};
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 15px;
`;

const Image = styled.img`
  height: 56px;
  margin-bottom: 20px;
`;

const StepsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  border-radius: 9px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.03);

  ${Paragraph} {
    margin: 18px 0;
  }
`;

const Completed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-size: 16px;
  color: ${props => props.theme.colors.primaryBlue};
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  margin-top: 10px;

  span {
    display: block;
    font-size: 24px;
    margin-right: 8px;
  }
`;

const DoubleCol = styled.div`
  width: 33%;

  ${Paper}:last-child {
    margin-top: 20px;
  }

  ${Paper} {
    display: flex;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.03);
    text-align: left;
    padding-left: 30px;
  }

  ${Paragraph} {
    margin: 25px 0;
    margin-right: 8px;
  }

  ${Title} {
    text-align: left;
  }

  ${Image} {
    margin-right: 20px;
    height: 50px;
  }

  ${Completed} {
    justify-content: flex-start;
    padding-left: 0;
  }
`;

const Complete = styled(Link)`
  display: inline-block;
  padding: 14px 32px;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }

  &:focus {
    outline: none;
  }
`;

export default StepsSection;
