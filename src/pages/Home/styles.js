import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  .folder {
    margin-top: 4.4rem;
    max-width: 37.6rem;
    width: 100%;
    height: 12rem;
    display: flex;
    align-items: center;
    text-align: end;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    img {
      max-width: 19.1rem;
      position: relative;
      display: flex;
      align-items: baseline;
      margin-top: -2.094rem;
    }
    .description {
      margin-right: 0.8rem;
      gap: 0.3rem;
      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  .carousel {
    margin-top: 6.3rem;
    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 2.4rem;
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
    .view {
      position: relative;
      display: flex;
      overflow: hidden;
      max-width: 37.6rem;

      .cards {
        display: flex;
        gap: 15px;
      }
      .arrow-left,
      .arrow-right {
        position: absolute;
        top: 0;
        left: 0;
        right: auto;
        bottom: 0;
        font-size: 20px;
        line-height: 250px;
        width: 40px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: none;
        cursor: pointer;
        border: none;
      }

      .arrow-right {
        right: 0;
        left: auto;
        text-align: right;
        background: none;
      }
    }
  }

  @media (min-width: 64em) {
    .folder {
      margin-top: 19.2rem;
      max-width: 112rem;
      width: 100%;
      height: 28rem;
      display: flex;
      align-items: center;
      text-align: end;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      img {
        position: relative;
        display: flex;
        align-items: baseline;
        margin-top: -22.094rem;
      }
      .description {
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
    }
    .carousel {
      margin-top: 6.3rem;
      display: flex;
      flex-direction: column;

      .title {
        margin-bottom: 2.3rem;
        h2 {
          font-size: 3.2rem;
          font-weight: 500;
        }
      }
      .view {
        position: relative;
        display: flex;
        overflow: hidden;
        max-width: 110rem;

        .cards {
          display: flex;
          gap: 15px;
        }
        .arrow-left,
        .arrow-right {
          position: absolute;
          top: 0;
          left: 0;
          right: auto;
          bottom: 0;
          font-size: 20px;
          line-height: 250px;
          width: 40px;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          background: none;
          cursor: pointer;
          border: none;
        }

        .arrow-right {
          right: 0;
          left: auto;
          text-align: right;
          background: none;
        }
      }
    }
  }
`
