import styled from 'styled-components'

export const Container = styled.div`
  max-height: 462px;
  max-width: 304px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  > img {
    display: flex;
    align-items: flex-end;
  }

  > div:nth-child() {
    display: flex;
    flex-direction: row;
    align-items: center;
    > Button {
      width: 92px;
      height: 48px;
    }
  }
`
