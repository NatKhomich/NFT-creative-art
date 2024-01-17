import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {Description} from '../../../../components/description/Description';

const Content = styled.div`
  max-width: 544px;

  @media ${theme.media.medium} {
    max-width: 600px;
    
    & ${Description} {
      text-align: center;
    }
  }
`

const Title = styled.h1`
  font-family: Spectral, sans-serif;
  font-size: 64px;
  font-weight: 600;
  word-wrap: break-word;
  line-height: 76px;

  & span {
    color: ${theme.colors.accent};
    font-weight: 700;
  }

  @media ${theme.media.medium} {
    font-size: 48px;
    line-height: 46px;
    text-align: center;
  }

  @media ${theme.media.mobile} {
    font-size: 40px;
  }
}
`

const LinkBlock = styled.div`
  display: flex;
  align-items: center;

  @media ${theme.media.medium} {
    justify-content: center;
  }
`

export const S = {
    Content,
    Title,
    LinkBlock
}