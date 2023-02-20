import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  .page {
    margin-top: 3.2rem;
    gap: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19.7rem;
    h1 {
      font-size: 3.2rem;
      margin-top: 3.4rem;
      margin-bottom: 3.4rem;
    }
    h2 {
      font-size: 2rem;
      margin-top: 1.8rem;
    }
  }
  .buttonAdvance {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 4.7rem;
    margin-bottom: 1rem;
  }
  .formOfPayment {
    display: flex;
  }
  .pix {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    padding: 3.6rem 5.6rem;
    border-radius: 1rem 0 0 0;
  }
  .card {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    padding: 3.1rem 3.2rem;
    border-radius: 0 1rem 0 0;
  }

  .qrcode {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.7rem 3.7rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 0 0 1rem 1rem;
    img {
      width: 16.6rem;
      height: 16.6rem;
    }
    margin-bottom: 10rem;
  }
  .hide {
    display: none;
  }
  .description {
    display: flex;
    gap: 1.7rem;
  }
  .cardPayment {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 0 0 1rem 1rem;
    padding: 5.7rem;

    label {
      display: flex;
      flex-direction: column;
    }
    .nCard {
      input {
        margin-top: 0.8rem;
        margin-bottom: 3.7rem;
        padding: 1.6rem 1.4rem;
        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 0.5rem;
        width: 30rem;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30rem;
    }
    .description {
      input {
        margin-top: 0.8rem;
        margin-bottom: 3.7rem;
        padding: 1.6rem 1.4rem;
        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 0.5rem;
        max-width: 14.4rem;
      }
    }
  }

  .payments {
    margin-top: 3.4rem;

    h2 {
      font-size: 1.6rem;
    }
  }
  .card {
    display: flex;
    flex-direction: column;

    input {
      background: transparent;
    }
  }

  @media (min-width: 64em) {
    .page {
      margin-top: 3.2rem;
      gap: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 19.7rem;
      h1 {
        font-size: 3.2rem;
        margin-top: 3.4rem;
        margin-bottom: 3.4rem;
      }
      h2 {
        font-size: 2rem;
        margin-top: 1.8rem;
      }
    }
    .formOfPayment {
      display: flex;
    }
    .pix {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      padding: 3.6rem 10.3rem 3.5rem 10.3rem;
      border-radius: 1rem 0 0 0;
    }
    .card {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      padding: 3.1rem 9.5rem 3.1rem 9.5rem;
      border-radius: 0 1rem 0 0;
    }

    .qrcode {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 5.7rem;
      padding-bottom: 5.7rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 0 0 1rem 1rem;
    }
    .hide {
      display: none;
    }
    .description {
      display: flex;
      gap: 1.7rem;
    }
    .cardPayment {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: 0 0 1rem 1rem;
      padding: 5.1rem 9.1rem 4.8rem 9.1rem;
      label {
        display: flex;
        flex-direction: column;
      }
      input {
        margin-top: 0.8rem;
        margin-bottom: 3.7rem;
        padding: 1.6rem 1.4rem;
        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 0.5rem;
        max-width: 43.8rem;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 43.8rem;
      }
    }

    .payments {
      margin-top: 3.4rem;

      h2 {
        font-size: 1.6rem;
      }
    }
    .card {
      display: flex;
      flex-direction: column;

      input {
        background: transparent;
      }
    }
  }
`
