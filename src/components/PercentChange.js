import { useState, useEffect } from "react";

const PercentChange = (props) => {

    let apiKey = "c2qq5lqad3ickc1m1gsg";

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  
    if(getRandomInt(2)==1){
      apiKey = "c3d04bqad3i868don970";
    }
    
    const symbol = props.symbol;
    const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

    const [stock2, setStock2] = useState(null);

    const getStock2 = async () => {
        const response = await fetch(url1);
        const data = await response.json();
        setStock2(data);
    }

    useEffect(() => {
        getStock2();
    }, []);

    const loaded = () => {
        let currentprice = stock2.c;
        let previousclose = stock2.pc;
        let changeamount = stock2.c - stock2.pc;
        let changepercentage = (changeamount/stock2.pc) * 100;
        let returnedString = "";
        
        changepercentage = (changepercentage * 100) / 100;
        changepercentage = changepercentage.toFixed(2);

        if(changeamount >= 0){
            returnedString = <span className="greentext">{changepercentage}% 
            <sup className="lighter">{"$" + changeamount.toFixed(2)}</sup></span>
        }
        else{
            returnedString = <span className="redtext">{changepercentage} %
             <sup className="lighter">{"$" + changeamount.toFixed(2)}</sup></span>
        }


        return (
            <h2> {returnedString} </h2>
        )
    }
    const loading = () => {
        return <img src="../img/loading2.gif" alt="loading..." />;
    }
    return stock2 ? loaded() : loading();
};

export default PercentChange;