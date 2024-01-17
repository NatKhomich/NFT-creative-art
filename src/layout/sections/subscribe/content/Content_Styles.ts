import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {Description} from '../../../../components/description/Description';

const Content = styled.div`
  max-width: 520px;

  & ${Description} {
    margin: 20px 0 40px;
  }
`

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 16px;
  width: 100%;
  padding: 5px 5px;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    height: 150px;
    background-color: transparent;

    & Button {
      width: 160px;
      height: 52px;
    }
  }
`

const Input = styled.input`
  background-color: ${theme.colors.secondaryBg};
  color: rgba(254.50, 255, 252.88, 0.72);
  font-size: 16px;
  margin: 16px 24px;
  border: none;
  padding: 4px 4px;
  width: 60%;

  &::placeholder {
    color: #495057;
    font-size: 16px;
    font-weight: 400;
  }

  &:focus-visible {
    outline: ${theme.colors.secondaryBg} solid 1px;
    border-bottom: 1px solid #4f4d4d;
  }

  @media ${theme.media.mobile} {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    padding: 0 24px;
  }
`

export const S = {
    Content,
    Form,
    Input
}