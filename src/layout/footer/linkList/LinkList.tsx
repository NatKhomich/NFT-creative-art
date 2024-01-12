import React from 'react';
import {dataLink} from '../data/footerData';
import styled from 'styled-components';

export const LinkList = () => {
    return (
        <StyledLinkList>
            {dataLink.map(el => (
                <div key={el.id}>
                    <ListTitle>{el.title}</ListTitle>
                    <NavList>
                        <ul>
                            {el.items.map((i, index) => (
                                <ListItem key={index}>
                                    <a href="#">{i}</a>
                                </ListItem>
                            ))}
                        </ul>
                    </NavList>
                </div>
            ))}
        </StyledLinkList>
    );
};

const StyledLinkList = styled.div`
  display: flex;
  gap: 94px;
  flex-wrap: wrap;
  max-width: 688px;
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