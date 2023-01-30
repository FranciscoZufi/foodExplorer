import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 48px;
  border: 0;
  padding: 12px, 32px, 12px, 32px;
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;

  > placeholder {
    font-size: 16px;
  }
  &:disabled {
    opacity: 0.5;
  }
`
