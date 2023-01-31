import styled from 'styled-components'

export const Container = styled.div`
  display: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  gap: 15px;
  > Button {
    display: absolute;
    margin-top: 0px;
    margin-right: 0px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      font-size: 24px;
    }
    > p {
      font-size: 14px;
    }
  }
`
