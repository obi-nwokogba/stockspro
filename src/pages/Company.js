import { useState, useEffect } from "react";

const Company = (props) => {
  let apiKey = "c2qq5lqad3ickc1m1gsg";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if(getRandomInt(2)==1){
    apiKey = "c3d04bqad3i868don970";
  }
  
  const symbol = props.match.params.symbol;
  const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  const url2 = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`;
  const [stock, setStock] = useState(null);
  const [companyProfile, setCompanyProfile] = useState(null);

  const getStock = async () => {
    const response = await fetch(url1);
    const data = await response.json();
    const profileResponse = await fetch(url2);
    const profileData = await profileResponse.json();
    setCompanyProfile(profileData);
    setStock(data);
  }

  useEffect(() => {
    getStock();
  }, []);


  const loaded = () => {

    let openingprice = stock.o;
    let currentprice = stock.c - stock.o;
    let currentpricedisplay = "";

    let changeamount = stock.c - stock.pc;
        let changepercentage = (changeamount/stock.pc) * 100;
        let returnedString = "";
        
        changepercentage = (changepercentage * 100) / 100;
        changepercentage = changepercentage.toFixed(2);

    if (currentprice > openingprice) {

      currentpricedisplay = <span className="greentext">{stock.c} {changepercentage}%</span>;
    }
    else {
      currentpricedisplay = <span className="redtext">${stock.c} {changepercentage}%</span>;
    }

    return (
      <div className="companyInfoDiv">

        <span class="companyname"> {companyProfile.name}</span>
        <a className="companyurl" href={companyProfile.weburl} target="_blank">
          {companyProfile.weburl}</a>

        <p className="infoName"> stock ticker symbol </p>
        <p className="infoValue">{symbol}</p>

        <p className="infoName"> current price </p>
        <p className="infoValue">
          {currentpricedisplay}
        </p>

        <p className="infoName"> Today's High, Today's Low </p>
        <p className="infoValue">H: {stock.h} &middot; L:{stock.l}</p>

        <p className="infoName"> Industry </p>
        <p className="infoValue">{companyProfile.finnhubIndustry}</p>

        <p className="infoName"> Market Capitalization </p>
        <p className="infoValue">${companyProfile.marketCapitalization * 10 * 10 * 100 * 100}</p>
      </div>
    )
  }
  const loading = () => {
    return <img src="../img/loading2.gif" alt="loading..." />;
  }
  return stock ? loaded() : loading();
};

export default Company;