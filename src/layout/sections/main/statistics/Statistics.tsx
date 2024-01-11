import React from 'react';
import {mainData} from '../mainData/mainData';
import {Span} from '../../../../components/span/Span';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Statistics = () => {
    return (
        <>
            {mainData.map((el, index) => (<StatisticsStyled key={index}>
                    <span> <Span>{el.data}</Span><span>{el.small}</span></span>
                    <Text>{el.text}</Text>
                </StatisticsStyled>
            ))}
        </>
    );
};

const StatisticsStyled = styled.div`
  font-size: 48px;
  font-family: Spectral, sans-serif;
  font-weight: 500;

  display: flex;
  flex-direction: column;

  position: relative;

  & span {
    margin-bottom: 10px;
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    width: 2px;
    height: 80px;
    top: 0;
    right: -20px;
    z-index: 2;
  }

  &:last-child {
    margin-right: 34px;
  }
`

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-family: Inter, sans-serif;
`