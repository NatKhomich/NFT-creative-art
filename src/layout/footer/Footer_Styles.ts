import styled from 'styled-components';
import {Description} from '../../components/description/Description';
import {theme} from '../../styles/Theme';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  
  &::before {
    content: '';
    display: inline-block;
    background-color: #777676;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

//information
const Information = styled.div`
  max-width: 276px;

  & ${Description} {
    margin: 8px 0 24px;
    text-align: left;
  }

  @media ${theme.media.mobile} {
    & ${Description} {
      margin: 16px 0 32px;
    }
  }
`

const SocialIcon = styled.div`
  margin-bottom: 48px;
  
  & svg + svg {
    margin-left: 12px;
  }

  & svg:hover {
    cursor: pointer;
    transform: ${theme.animations.transform};
  }

  @media ${theme.media.mobile} {
    margin-bottom: 48px;
  }
`

//linkList
const LinkList = styled.div`
  display: flex;
  gap: 94px;
  flex-wrap: wrap;
  max-width: 688px;

  margin-bottom: 48px;
  
  @media ${theme.media.mobile} {
    max-width: 150px;
    gap: 32px;
  }
`

const ListTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 24px;
`

const NavList = styled.nav``

const ListItem = styled.li`
  margin-top: 8px;

  & a {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`

//copyright
const CopyrightBlock = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`

const Text = styled.small`
  display: flex;
  gap: 28px;
  color: #FFFFFD;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.60px;

  @media ${theme.media.mobile} {
      flex-direction: column;
    gap: 16px
  }

  &:first-child {
    margin-bottom: 16px;
  }
`

export const S = {
    Footer,
    Content,
    Information,
    SocialIcon,
    LinkList,
    ListTitle,
    NavList,
    ListItem,
    CopyrightBlock,
    Text
}