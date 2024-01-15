import styled, {css} from 'styled-components';

const Header = styled.header<{isScrolled: boolean}>`
  padding: 28px 0;
  height: 104px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: transparent;
  
   ${props => props.isScrolled && css<{isScrolled: boolean}>`
     background-color: rgba(0, 0, 0, 0.41);
`}
  
`

export const S = {
    Header
}