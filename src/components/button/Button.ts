import styled from 'styled-components';
import {theme} from '../../styles/Theme';


type Props = {
    width?: string
    height?: string
}
export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.fontBlack};
  border-radius: 10px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  font-size: 16px;

  width: ${props => props.width || '150px'};
  height: ${props => props.height || '50px'};
`