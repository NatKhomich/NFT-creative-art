import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const InfoLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.20px;
  position: relative;
  margin-left: 36px;

  &:hover {
    &::before {
      height: 2px;
      transition: ${theme.animations.transition};
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 0;
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
  }
`