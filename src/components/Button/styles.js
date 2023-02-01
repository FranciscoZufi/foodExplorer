import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 5px;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  gap: 11px;
`
