import styled from 'styled-components'

export const Container = styled.div`
  height: 29.2rem;
  width: 21rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  #button {
    background-color: transparent;
    border: none;
  }

  .button {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 1.2rem;
    button {
      width: 2.4rem;
      height: 2.2rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_300};
      border: none;
      margin-top: 1.6rem;
      margin-right: 1.8rem;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 1.2rem;
    h1 {
      font-size: 1.4rem;
    }
    p {
      display: none;
    }
    img {
      height: 8.8rem;
      width: 8.8rem;
    }
  }

  @media (min-width: 64em) {
    height: 46.2rem;
    width: 30.4rem;
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    gap: 1.5rem;
    .button {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      button {
        background-color: ${({ theme }) => theme.COLORS.DARK_300};
        border: none;
        margin-top: 1.6rem;
        margin-right: 1.8rem;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
      h1 {
        font-size: 2.4rem;
      }
      p {
        display: flex;
        font-size: 1.4rem;
      }
      img {
        height: 17.6rem;
        width: 17.6rem;
      }
    }
  }
`
