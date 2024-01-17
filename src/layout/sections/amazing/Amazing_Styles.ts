import styled from 'styled-components';
import {Title} from '../../../components/title/Title';
import {Button} from '../../../components/button/Button';
import {theme} from '../../../styles/Theme';

const Amazing = styled.section``

//content
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  
  & ${Title} {
    max-width: 600px;
    flex-shrink: 1;
  }

  & ${Button} {
    max-width: 600px;
    flex-shrink: 0;

    @media ${theme.media.medium} {
      margin-top: 32px;
    }
  }

  @media ${theme.media.medium} {
    justify-content: center;
  }
`

export const S = {
    Amazing,
    Content
}

