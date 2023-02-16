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
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  .carousel {
    margin-top: 6.3rem;
    .title {
      margin-bottom: 2.3rem;
      h2 {
        font-size: 3.2rem;
        font-weight: 500;
      }
    }
    .view {
      position: relative;
      padding: 15px;
      max-width: 102.4rem;

      .gallery-wrapper {
        overflow-x: auto;
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
        color: #fff;
        transition: all 600ms ease-in-out;
        background: linear-gradient(to left, transparent 0%, black 200%);
        opacity: 1;
        cursor: pointer;
        border: none;
      }

      .arrow-right {
        right: 0;
        left: auto;
        text-align: right;
        background: linear-gradient(to right, transparent 0%, black 200%);
      }
      .cards {
        display: flex;
        flex-flow: row nowrap;
        gap: 15px;
      }
      .gallery-wrapper::-webkit-scrollbar {
        display: none;
      }
      .gallery-wrapper {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    }
  }
`
