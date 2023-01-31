import styled from 'styled-components'

export const Container = styled.div`
  width: 348px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  margin-bottom: 28px;
  border-radius: 10px;
  > input {
    width: 100%;

    padding: 12px 14px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border: 1px solid #ffffff;
    border-radius: 5px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
