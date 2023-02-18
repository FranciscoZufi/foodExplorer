import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  @media (max-width: 64em) {
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.4rem 3.9rem;
    border: none;
    gap: 1.1rem;
    display: flex;
  }
  @media (min-width: 64em) {
    border-radius: 0.5rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    font-size: 1.4rem;
    border: none;
    gap: 1.1rem;
    display: flex;
  }
`
