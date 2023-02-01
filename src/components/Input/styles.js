import styled from 'styled-components'

export const Container = styled.div`
  > input {
    width: 581px;
    height: 100%;

    padding: 16px 99px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 5px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
