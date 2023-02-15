import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .folder {
    margin-top: 19.2rem;
    max-width: 112rem;
    width: 100%;
    height: 28rem;
    display: flex;
    align-items: center;
    text-align: end;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    img {
      position: relative;
      display: flex;
      align-items: baseline;
      margin-top: -22.094rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  .carousel {
    margin-top: 6.3rem;
    .cards {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 2.7rem;
    }
    .title {
      margin-bottom: 2.3rem;
    }
    h2 {
      font-size: 3.2rem;
      font-weight: 500;
    }
  }
`
