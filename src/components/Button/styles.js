import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 0.5rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border: none;
  gap: 1.1rem;
`
