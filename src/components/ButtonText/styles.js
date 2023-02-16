import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 140%;
  padding: 1.2rem 2.4rem;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  gap: 1.1rem;
`
