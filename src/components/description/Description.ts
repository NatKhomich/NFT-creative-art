import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  word-wrap: break-word;
  margin: 20px 0 40px;

  @media ${theme.media.mobile} {
    margin-bottom: 32px;
  }
`