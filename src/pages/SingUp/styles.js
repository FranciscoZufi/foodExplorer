import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  > h1 {
    font-size: 42px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
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
  width: 476px;
  height: 621px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  > Input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;

    border: 1px solid #ffffff;
    width: 100vw;
    height: 48px;
  }
  > h2 {
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > label {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  > Button {
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
