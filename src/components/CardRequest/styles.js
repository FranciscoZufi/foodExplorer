import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: transparent;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }

  .name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .img {
    > img {
      max-width: 10rem;
      height: 10rem;
    }
  }
  .button {
    button {
      font-size: 1.2rem;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`
