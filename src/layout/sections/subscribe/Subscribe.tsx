import React from 'react';
import styled from 'styled-components';
import {Title} from '../../../components/title/Title';
import {Description} from '../../../components/description/Description';
import {Button} from '../../../components/button/Button';

import photo1 from '../../../assets/images/subscribe/subscribe1.webp'
import photo2 from '../../../assets/images/subscribe/subscribe2.webp'
import {Span} from '../../../components/span/Span';


export const Subscribe = () => {
    return (
        <StyledSubscribe>

            <SubscribeImage>
                <Image src={photo1} alt=""/>
                <Image src={photo2} alt=""/>
            </SubscribeImage>

            <SubscribeContent>
                <Title>Subscribe And <Span> get ourUpdates</Span> Every Week </Title>
                <Description>
                    We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                    weekly
                </Description>

                <InputButtonBlock>
                    <Input placeholder='Enter your e-mail'/>
                    <Button styleButton='accent'>Subscribe</Button>
                </InputButtonBlock>
            </SubscribeContent>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  display: flex;
`

const SubscribeContent = styled.div`

`

const SubscribeImage = styled.div`

`

const Image = styled.img`
border-radius: 16px;
`

const InputButtonBlock = styled.div`
  display: flex;
`

const Input = styled.input`

`