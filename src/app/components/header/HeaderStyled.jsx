import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RangeLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  width: 100px;
`;

export const RangeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f0f8ff;
  padding: 20px;
  width: 100vw;

  .text-leadster-400 {
    font-weight: bold;
    color: #2c83fb;
    font-size: 10px;
    text-transform: uppercase;
    margin-bottom: 10px;
    border: 2px solid #2c83fb;
    border-radius: 9% 7% 7% 2% / 23% 45% 51% 5%;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
  }

  .text-2xl {
    font-size: 24px;
    font-weight: bold;
    color: #2c83fb;
    margin-bottom: 10px;
  }

  .text-transparent {
    color: transparent;
    background-image: linear-gradient(to right, #2c83fb 0%, #1f76f0 70%);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .text-3xl {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .slogan {
    position: absolute;
    top: 1px;
    right: -5px;
    width: 15px;
    height: 10px;
  }

  .divider {
    height: 1px;
    background-color: #000000;
    opacity: 0.2;
    width: 100%;
    margin: 10px 0;
  }

  .text-center {
    text-align: center;
  }

  .text-base {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin-top: 10px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const HeaderSubtitle = styled.p`
  font-size: 58px;
  font-weight: bold;
  color: #2c83fb;
`;

export const HeaderDescription = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const HeaderDivider = styled.div`
  height: 1px;
  background-color: #000000;
  opacity: 0.2;
  width: 120%;
  margin: 20px -10% 5px -10%;
`;