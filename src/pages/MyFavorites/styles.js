import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > h1 {
    margin-top: 34px;
  }
  > div {
    margin-top: 32px;

    gap: 32px;
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-areas: 'CardFav CardFav CardFav CardFav';
    align-items: center;
    justify-content: center;
  }
`
