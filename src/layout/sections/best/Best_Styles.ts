import styled from 'styled-components';
import {FlexWrapper} from '../../../components/flexWrapper/FlexWrapper';
import {theme} from '../../../styles/Theme';

const Best = styled.section`
  & ${FlexWrapper} {
    
    @media ${theme.media.large} {
      justify-content: center;
    }
  }
`

//content
const Content = styled.div`
  max-width: 426px;

  @media ${theme.media.large} {
    margin-bottom: 30px;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 0;
  }
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;

  @media ${theme.media.mobile} {
    justify-content: center;
    margin-bottom: 0;
  }
`

export const S = {
    Best,
    Content,
    LinkBlock
}