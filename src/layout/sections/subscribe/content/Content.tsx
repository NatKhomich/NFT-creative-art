import React from 'react';
import {Title} from '../../../../components/title/Title';
import {Span} from '../../../../components/span/Span';
import {Description} from '../../../../components/description/Description';
import {Button} from '../../../../components/button/Button';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Content = () => {
    return (
        <StyledContent>
            <Title>Subscribe And <Span> get our Updates</Span> Every Week </Title>
            <Description>
                We have a blog related to NFT so we can share thoughts and routines on our blog which is
                updated
                weekly
            </Description>

            <Form>
                <Input placeholder="Enter your e-mail"/>
                <Button styleButton="accent" width="160px">Subscribe</Button>
            </Form>
        </StyledContent>
    );
};

const StyledContent = styled.div`
  max-width: 520px;

  & ${Description} {
    margin: 20px 0 40px;
  }
`

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 16px;
  width: 100%;
  padding: 5px 5px;
`

const Input = styled.input`
  background-color: ${theme.colors.secondaryBg};
  color: rgba(254.50, 255, 252.88, 0.72);
  font-size: 16px;
  margin: 16px 24px;
  border: none;
  padding: 4px 4px;
  width: 60%;

  &::placeholder {
    color: #495057;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus-visible {
    outline: ${theme.colors.secondaryBg} solid 1px;
    border-bottom: 1px solid #4f4d4d;
  }
`