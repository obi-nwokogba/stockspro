import { Link } from 'react-router-dom';


/*

Travelers
Walgreens Boots Alliance
Dow
American Express
Goldman Sachs
Caterpillar
IBM

Honeywell
McDonald’s
Chevron
Cisco
Salesforce
Coca-Cola
Merck & Co.
Nike
Intel
Verizon
Home Depot
Disney
Procter & Gamble
UnitedHealth Group
Walmart
Johnson & Johnson
JPMorgan Chase
Visa
Microsoft





*/
const Currencies = (props) => {
  const currencies = [
    { name: "3M", symbol: "MMM" },
    { name: "Apple", symbol: "AAPL" },
    { name: "Amgen", symbol: "LTC" },
    { name: "Boeing", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
    { name: "Dogecoin", symbol: "DOGE" },
    { name: "Intel", symbol: "INTC" },
    { name: "Walgreens Boots Alliance", symbol: "WBA" },
    { name: "Walmart", symbol: "WMT" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const {name, symbol} = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
};

export default Currencies;