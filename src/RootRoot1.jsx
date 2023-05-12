import React from "react";
import styled from "styled-components";

export const RootRoot1 = ({}) => {
  const BuyButtonContainerFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ConnectWalletButtonContainerFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <RootRoot>
      <Navbar>
        <LogoImg src="" />
        <MenuIcon src="https://file.rendit.io/n/kNvOoqteRqXWDDCowrWj.svg" />
        <HomeTab>Home</HomeTab>
        <AboutTab>About</AboutTab>
        <HowToBuyTab>How to buy</HowToBuyTab>
        <TokenomicsTab>Tokenomics</TokenomicsTab>
        <RoadmapTab>Roadmap</RoadmapTab>
        <BuyButtonContainer
          onClick={(e) => BuyButtonContainerFunction(e, "BuyButtonContainer")}
        >
          <BuyButton>Buy Now</BuyButton>
        </BuyButtonContainer>
        <ConnectWalletButtonContainer
          onClick={(e) =>
            ConnectWalletButtonContainerFunction(
              e,
              "ConnectWalletButtonContainer"
            )
          }
        >
          <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
        </ConnectWalletButtonContainer>
      </Navbar>
      <BackgroundImage src="https://file.rendit.io/n/9JEeDZ2WoQUGlK8qnXrp.png" />
      <HeaderImageContainer>
        <HeaderImage src="" />
        <HeaderTitle>Milady</HeaderTitle>
      </HeaderImageContainer>
      <MainSectionTitle>Miladys knew this coin would come.</MainSectionTitle>
      <MainSectionTitle>
        LADYS may not be the meme coin Miladys want, but LADYS is the meme coin
        Miladys
        <br />
        need in these times of unbridled memetic power.
      </MainSectionTitle>
      <MainSectionTitle>You like the art, we make the coin.</MainSectionTitle>
      <SocialMediaContainer>
        <TwitterIcon src="https://file.rendit.io/n/NFTfPQEElTGJvdGGoNwg.png" />
        <TwitterIcon src="https://file.rendit.io/n/NhM8sGvf90xHSSP6QIYW.png" />
        <TwitterIcon src="https://file.rendit.io/n/NhM8sGvf90xHSSP6QIYW.png" />
        <SocialIconsContainer>
          <SocialMediaIcon src="" />
        </SocialIconsContainer>
        <TwitterIcon src="https://file.rendit.io/n/tYVOYRVKdWDLegTryUar.png" />
        <TwitterIcon src="https://file.rendit.io/n/fULp3ug7kRKcVhP9pdvQ.png" />
        <TwitterIcon src="https://file.rendit.io/n/8yyP82HLKe48mAxqEjoL.png" />
        <TwitterIcon src="https://file.rendit.io/n/D1g8oLKZR41G2ZVzDif6.png" />
        <TwitterIcon src="" />
      </SocialMediaContainer>
      <ExchangeContainer>
        <ExchangeBox>
          <ExchangeIconSpace src="" />
          <BybitTab>Bybit</BybitTab>
        </ExchangeBox>
        <ExchangeBox1>
          <ExchangeIconSpace src="" />
          <BybitTab>Gate</BybitTab>
        </ExchangeBox1>
        <ExchangeBox2>
          <ExchangeIconSpace src="" />
          <BybitTab>Huobi</BybitTab>
        </ExchangeBox2>
        <ExchangeBox3>
          <ExchangeIconSpace src="" />
          <BybitTab>Bitget</BybitTab>
        </ExchangeBox3>
        <ExchangeBox4>
          <ExchangeIconSpace src="" />
          <BybitTab>MEXC</BybitTab>
        </ExchangeBox4>
      </ExchangeContainer>
      <TopIcon src="https://file.rendit.io/n/64S4bFpJ8A56lDFr6OIL.png" />
    </RootRoot>
  );
};

const MainSectionTitle = styled.div`
  position: relative;
  margin: 0px 0px 13px 0px;
  color: #1f1310;
  font-size: 20px;
  font-family: ABeeZee;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const TwitterIcon = styled.img`
  width: 40px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const ExchangeIconSpace = styled.img`
  width: 32px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const BybitTab = styled.div`
  position: relative;
  color: #364c18;
  font-size: 20px;
  font-family: ABeeZee;
  line-height: 28px;
  box-sizing: border-box;
`;
const RootRoot = styled.div`
  position: relative;
  gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(https://file.rendit.io/n/xWbwIS9rNccZJgx6kkQ4.png);
`;
const Navbar = styled.div`
  width: 100%;
  position: relative;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 13px 0px;
  padding: 16px 335px;
  border-width: 1px;
  border-style: solid;
  border-color: #1f1310;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-image: linear-gradient(90deg, #bfe2eb 0%, #ecbed2 100%);
  box-shadow: 0px 4px 6px 0px rgba(49, 11, 49, 0.08);
`;
const LogoImg = styled.img`
  width: 44.6px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const MenuIcon = styled.img`
  width: 79.2px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  margin: 0px 133px 0px 0px;
  box-sizing: border-box;
`;
const HomeTab = styled.div`
  position: relative;
  margin: 0px 49.2px 0px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  box-sizing: border-box;
`;
const AboutTab = styled.div`
  position: relative;
  margin: 0px 48.1px 0px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  box-sizing: border-box;
`;
const HowToBuyTab = styled.div`
  position: relative;
  margin: 0px 52.2px 0px 0px;
  font-size: 13px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const TokenomicsTab = styled.div`
  position: relative;
  margin: 0px 48.6px 0px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  box-sizing: border-box;
`;
const RoadmapTab = styled.div`
  position: relative;
  margin: 0px 138px 0px 0px;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  box-sizing: border-box;
`;
const BuyButtonContainer = styled.button`
  width: 120px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0.04px 0px 0px;
  padding: 0px;
  padding-top: 8px;
  padding-right: 28.2px;
  padding-bottom: 10px;
  padding-left: 28.2px;
  border-width: 0px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #262626;
  box-sizing: content-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #121212;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const BuyButton = styled.div`
  position: relative;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const ConnectWalletButtonContainer = styled.button`
  width: 139px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  padding-top: 9px;
  padding-right: 15px;
  padding-bottom: 9px;
  padding-left: 15px;
  border-width: 0px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #262626;
  box-sizing: content-box;
  background-color: #000000;
  box-shadow: 2px 2px 0px 0px #121212;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const ConnectWalletButton = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const BackgroundImage = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const HeaderImageContainer = styled.div`
  width: 254px;
  position: relative;
  gap: 29.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 13px 0px;
  box-sizing: border-box;
`;
const HeaderImage = styled.img`
  width: 80px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;
const HeaderTitle = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
  color: #262626;
  font-size: 44px;
  font-weight: 700;
  font-family: Inter;
  line-height: 60px;
  text-align: center;
  box-sizing: border-box;
`;
const SocialMediaContainer = styled.div`
  width: 552px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 29px 0px;
  box-sizing: border-box;
`;
const SocialIconsContainer = styled.div`
  width: 7.25%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/8DktN7Hngr0rZqW9lXSD.svg");
`;
const SocialMediaIcon = styled.img`
  width: 40px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const ExchangeContainer = styled.div`
  width: 1163px;
  position: relative;
  gap: 28.3px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 77px 0px;
  box-sizing: border-box;
`;
const ExchangeBox = styled.div`
  width: 18.05%;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 59px;
  border-width: 1px;
  border-style: solid;
  border-color: #364c18;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #58362c;
`;
const ExchangeBox1 = styled.div`
  width: 18.05%;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 61.5px;
  border-width: 1px;
  border-style: solid;
  border-color: #364c18;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #58362c;
`;
const ExchangeBox2 = styled.div`
  width: 18.05%;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 55.9px;
  border-width: 1px;
  border-style: solid;
  border-color: #364c18;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #58362c;
`;
const ExchangeBox3 = styled.div`
  width: 18.05%;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 55.6px;
  border-width: 1px;
  border-style: solid;
  border-color: #364c18;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #58362c;
`;
const ExchangeBox4 = styled.div`
  width: 18.05%;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 57.8px;
  border-width: 1px;
  border-style: solid;
  border-color: #364c18;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 2px 0px 0px #58362c;
`;
const TopIcon = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  margin: 0px 0px -55.74px 0px;
  box-sizing: border-box;
`;
