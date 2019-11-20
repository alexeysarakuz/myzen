import React from 'react';
import styled from 'styled-components';

const AdvantagesSection = () => (
  <AdvantagesRow>
    <AdvantagesCol>
      <AdvantagesImage src="/images/interface-elems/headphones.svg" alt="" />
      <AdvantagesTitle>Speak with our Sales manager 24/7</AdvantagesTitle>
    </AdvantagesCol>
    <AdvantagesCol>
      <AdvantagesImage src="/images/interface-elems/security.svg" alt="" />
      <AdvantagesTitle>Your data is safe. Just trust us</AdvantagesTitle>
    </AdvantagesCol>
    <AdvantagesCol>
      <AdvantagesImage src="images/interface-elems/wallet.svg" alt="" />
      <AdvantagesTitle>
        We can&apos;t wait to transfer your money
      </AdvantagesTitle>
    </AdvantagesCol>
  </AdvantagesRow>
);

const AdvantagesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 20px;
`;

const AdvantagesCol = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  box-sizing: border-box;
  padding: 10px 0;
`;

const AdvantagesImage = styled.img`
  height: 40px;
  margin-right: 23px;
`;

const AdvantagesTitle = styled.h3`
  max-width: 179px;
  font-size: 15px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryBlue};
`;

export default AdvantagesSection;
