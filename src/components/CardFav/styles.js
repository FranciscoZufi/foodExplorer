import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: transparent;
  .img {
    > img {
      width: 10rem;
      height: 10rem;
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
