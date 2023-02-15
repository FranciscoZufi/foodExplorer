import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 3.4rem;
  }
  #file {
    display: none;
  }
  .imgFile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 3.2rem;
    gap: 0.8rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
  }
  #imgInput {
    width: 2.4rem;
    height: 2.4rem;
  }
  @media (min-width: 76.8em) {
    .imgFile {
      max-width: 22.9rem;
      width: 100%;
    }
    .page {
      margin: 4rem 12.4rem;
      textArea {
        width: 100%;
      }
      label {
        gap: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
      #name {
        width: 40.3rem;
      }
    }
    .category {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      margin-top: 3.2rem;
      align-items: center;

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        min-width: 35rem;

        padding: 1.6rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 0.5rem;
        text-align: start;
        option {
          font-size: 1.4rem;
        }
      }
    }
    .price {
      display: flex;
      flex-direction: row;
      gap: 3.2rem;
      margin-top: 3.2rem;
      margin-bottom: 3.2rem;
    }
    .tags {
      display: flex;
      gap: 1.6rem;
      width: 83.7rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      padding: 0.8rem;
      justify-content: start;
    }
    .buttons {
      display: flex;
      justify-content: end;
      gap: 3.2rem;
      margin-top: 3.2rem;
    }
  }
`
