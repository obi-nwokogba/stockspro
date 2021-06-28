import { useState, useEffect } from "react";

const CurrentPrice = (props) => {

    const apiKey = "c2qq5lqad3ickc1m1gsg";
    const symbol = props.symbol;
    const url1 = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

    const [stock, setStock] = useState(null);

    const getStock = async () => {
        const response = await fetch(url1);
        const data = await response.json();
        setStock(data);
    }

    useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        console.log(stock.c);
        return (
            <h2>{stock.c}</h2>
        )
    }
    const loading = () => {
        return <img src="../img/loading2.gif" alt="loading..." />;
    }
    return stock ? loaded() : loading();
    //return stock ? console.log(stock) : console.log("not working");
};

export default CurrentPrice;