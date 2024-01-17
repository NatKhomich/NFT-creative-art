import styled from 'styled-components';
import {Title} from '../../../components/title/Title';
import {theme} from '../../../styles/Theme';

const Popular = styled.section``

//content
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 14px 64px;

  & ${Title} {
    max-width: 400px;
    margin-bottom: 32px;
  }

  @media ${theme.media.large} {
    justify-content: center;
    margin: 0 14px 32px;
  }
`

export const S = {
    Popular,
    Content
}