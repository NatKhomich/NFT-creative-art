import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const Span = styled.span`
  font-family: Spectral, sans-serif;
  color: ${theme.colors.accent};
  font-size: 48px;
  font-weight: 500;

  @media ${theme.media.medium} {
    font-size: 40px;
  }

  @media ${theme.media.mobile} {
    font-size: 30px;
  }
`