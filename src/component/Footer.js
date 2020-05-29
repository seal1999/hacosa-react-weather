// react
import React from 'react';

// styled-components test
import styled from 'styled-components';

const FooterDiv = styled.div`
  min-height: 2rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copy = styled.small`
  display: block;
  text-align: center;
`;

const Footer = (props) => {
  return (
    <FooterDiv>
      <Copy>Copyright © 2020 Teacher.Seal</Copy>
    </FooterDiv>
  );
};

export default Footer;
