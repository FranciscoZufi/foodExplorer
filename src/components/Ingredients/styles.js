import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 11.8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    min-width: 11.8rem;
    height: 5.6rem;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
