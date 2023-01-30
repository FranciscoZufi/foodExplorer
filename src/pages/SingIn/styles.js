import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 142px, 108px, 141px, 153px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > h1 {
    font-size: 42px;
    font-family: 'Roboto', sans-serif;
    font-weight: '700';
    line-height: 50px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  > div {
    display: flex;
    gap: 19px;
  }
`
export const Form = styled.form`
  padding: 64px;
  /* max-width: 476px;
  max-height: 540px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > h2 {
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: '400';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 32px;
  }

  > label {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  > Button {
    margin-top: 48px;
  }
  > a {
    margin-top: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
