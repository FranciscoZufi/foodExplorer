import styled from 'styled-components'

export const Container = styled.textarea`
  min-width: 32rem;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
