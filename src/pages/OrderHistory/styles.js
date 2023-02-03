import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  > table,
  td,
  tr {
    border: 2px solid #192227;
    padding: 21px auto;
    border-collapse: collapse;
    height: 100%;
    text-align: justify;
    border: 2px solid #192227;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
