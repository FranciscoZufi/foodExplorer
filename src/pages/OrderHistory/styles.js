import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  .table {
    margin-top: 3.5rem;
    h1 {
      margin-bottom: 3.5rem;
    }
    table {
      width: 100%;
    }
    table,
    th,
    td,
    tr {
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
`
