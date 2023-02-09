import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  .table {
    margin-top: 35px;
    h1 {
      margin-bottom: 35px;
    }
    table {
      width: 100%;
    }
    table,
    th,
    td,
    tr {
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 21px auto;
      border-collapse: collapse;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    td {
      text-align: start;
      padding: 16px 24px;
    }
    th {
      text-align: start;
      padding: 21px 24px;
      font-weight: 700;
    }
    th:nth-child(1) {
    }
  }
`
