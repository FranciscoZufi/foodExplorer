import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  @media (max-width: 64em) {
    .tableDesktop {
      display: none;
    }
    .tableMobile {
      margin-top: 3.5rem;
      margin-bottom: 10rem;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 3.2rem;
      }
      table {
        width: 100%;
      }
      .tr {
        font-size: 1.4rem;
        border: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.8rem;
        padding: 2.1rem auto;
        border-collapse: collapse;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-top: 2.5rem;
      }
      td {
        display: flex;
        gap: 0.8rem;
        text-align: start;
        padding: 1.6rem 2.4rem;
      }

      .fragment {
        display: flex;
        flex-direction: row;
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 64em) {
    .tableMobile {
      display: none;
    }
    .tableDesktop {
      margin-top: 3.5rem;
      margin-bottom: 10rem;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 3.2rem;
        margin-bottom: 3.5rem;
      }
      table {
        width: 100%;
      }
      table,
      th,
      td,
      tr {
        font-size: 1.4rem;
        border: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
        padding: 2.1rem auto;
        border-collapse: collapse;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
      td {
        text-align: start;
        padding: 1.6rem 2.4rem;
      }
      th {
        text-align: start;
        padding: 2.1rem 2.4rem;
        font-weight: 700;
      }
    }
  }
`
