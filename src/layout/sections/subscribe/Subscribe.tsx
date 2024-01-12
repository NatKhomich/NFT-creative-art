import React from 'react';
import styled from 'styled-components';
import {Title} from '../../../components/title/Title';
import {Description} from '../../../components/description/Description';
import {Button} from '../../../components/button/Button';

import photo1 from '../../../assets/images/subscribe/subscribe1.webp'
import photo2 from '../../../assets/images/subscribe/subscribe2.webp'
import {Span} from '../../../components/span/Span';
import {Container} from '../../../components/container/Container';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {theme} from '../../../styles/Theme';


export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <FlexWrapper justify='space-between' wrap='wrap-reverse'>
            <SubscribeImage>
                <Image src={photo1} alt=""/>
                <div>
                    <Image src={photo2} alt=""/>
                </div>

            </SubscribeImage>

            <SubscribeContent>
                <Title>Subscribe And <Span> get our Updates</Span> Every Week </Title>
                <Description>
                    We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                    weekly
                </Description>

                <Form>
                    <Input placeholder="Enter your e-mail"/>
                    <Button styleButton="accent" width='160px'>Subscribe</Button>
                </Form>
            </SubscribeContent>
                </FlexWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  display: flex;
`

const SubscribeContent = styled.div`
max-width: 520px;
  
  & ${Description} {
    margin: 20px 0 40px;
  }
`

const SubscribeImage = styled.div`
  position: relative;

  & div {
    position: absolute;
    right: -150px;
    bottom: -20px;
  }
`

const Image = styled.img`
  border-radius: 16px;
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