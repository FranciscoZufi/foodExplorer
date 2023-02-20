import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.2rem;
  min-width: 8rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  border-radius: 1rem;

  button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding-right: 1.6rem;
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding-right: 1.6rem;
  }

  input {
    min-width: 7rem;

    padding: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
