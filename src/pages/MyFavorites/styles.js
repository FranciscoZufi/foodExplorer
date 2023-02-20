import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  .page {
    h1 {
      margin-top: 5.6rem;
      font-size: 3.2rem;
    }
  }
  @media (min-width: 64em) {
    .page {
      h1 {
        margin-top: 3.4rem;
        font-size: 3.2rem;
      }
    }

    .cards {
      margin-top: 3.2rem;

      gap: 3.2rem;
      display: grid;
      grid-template-rows: 10rem;
      grid-template-columns: repeat(auto-fill, 1fr);
      grid-template-areas: 'CardFav CardFav CardFav CardFav';
      align-items: center;
      justify-content: center;
    }
  }
`
