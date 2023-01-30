import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > h1 {
    font-size: 42px;
    font-family: 'Roboto', sans-serif;
    font-weight: '700';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
export const Form = styled.form`
  padding: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h2 {
    font-size: 24px;
    margin-top: 84px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > label {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  > a {
    margin-top: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
