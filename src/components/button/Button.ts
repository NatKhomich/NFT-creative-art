import styled, {css} from 'styled-components';
import {theme} from '../../styles/Theme';


type Props = {
    width?: string
    height?: string
    styleButton: 'base' | 'accent'
}
export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  font-size: 16px;

  width: ${props => props.width || '150px'};
  height: ${props => props.height || '52px'};

  background-color: ${props => props.styleButton || 'transparent'};

  ${props => props.styleButton === 'base' && css<Props>`
    border: 1px solid ${theme.colors.accent};
    border-radius: 8px;
    color: ${theme.colors.accent};

    &:hover {
      background-color: #97b436;
      color: ${theme.colors.fontBlack};
      transition: .2s;
    }
  `}

  ${props => props.styleButton === 'accent' && css<Props>`
    color: ${theme.colors.fontBlack};
    background-color: ${theme.colors.accent};

    &:hover {
      background-color: #97b436;
      transition: .2s;
    }
  `}
`