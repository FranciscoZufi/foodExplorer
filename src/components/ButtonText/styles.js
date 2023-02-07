import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  padding: 12px 24px;
  align-items: center;
  border: none;
  display: flex;
  gap: 11px;
`
