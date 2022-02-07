import styled, {createGlobalStyle} from 'styled-components';

export const Colors = {
  lightGray: '#E5E5E5',
  black: '#000000',
  green: '#03CEA4',
  white: '#FFFFFF',
  red: '#DC143C',
};


export const Size = {
  mobile: '375px',
  betweenMobAndTab: '470px',
  tablet: '768px',
  laptop: '1024px',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${Colors.lightGray};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    letter-spacing: 0;
  }

  h1 {
    font-size: 54px;
    margin: 32px 0 20px;
    text-align: center;
    font-family: 'Playfair Display', serif;

    @media (max-width: ${Size.tablet}) {
      font-size: 46px;
    }
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;

    @media (min-width: ${Size.mobile}) and (max-width: ${Size.betweenMobAndTab}) {
      font-size: 16px;
    }
  }

  button.smallButtonText {
    font-size: 16px;
  }

  span.defaultText {
    font-size: 15px;

    @media (min-width: ${Size.mobile}) and (max-width: ${Size.betweenMobAndTab}) {
      font-size: 12px;
    }
  }

  .bold {
    font-weight: 700;
  }

  .semiBold {
    font-weight: 600;
  }

  .medium {
    font-weight: 500;
  }
`;


export const MainContainer = styled.div`
  max-width: 1350px;
  padding: 0 10px;
  margin: 24px auto 0;
`;
