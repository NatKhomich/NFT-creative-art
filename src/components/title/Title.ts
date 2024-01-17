import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const Title = styled.h2`
  font-size: 48px;
  font-family: Spectral, sans-serif;
  font-weight: 500;
  line-height: 58px;
  word-wrap: break-word;

  @media ${theme.media.medium} {
    font-size: 40px;
    line-height: 44px;
    text-align: center;
  }

  @media ${theme.media.mobile} {
    font-size: 30px;
    line-height: 38px;
  }
  
  
`