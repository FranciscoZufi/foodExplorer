import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: transparent;
  .img {
    > img {
      width: 100px;
      height: 100px;
    }
  }
  .button {
    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`
