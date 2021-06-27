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

const Companies = (props) => {
  const companies = [
    { name: "3M", symbol: "MMM" },
    { name: "Alphabet", symbol: "GOOG" },
    { name: "Alibaba Group", symbol: "BABA" },
    { name: "Apple", symbol: "AAPL" },
    { name: "Bank of America Corp.", symbol: "BAC" },
    { name: "Blackberry Holdings", symbol: "BB" },
    { name: "The Boeing Company", symbol: "BA" },
    { name: "Facebook", symbol: "FB" },
    { name: "Ford Motor Company", symbol: "F" },
    { name: "Sirius XM Holdings", symbol: "SIRI" },
    { name: "JPMorgan Chase", symbol: "JPM" },
    { name: "Mastercard Inc.", symbol: "MA" },
    { name: "Microsoft", symbol: "MSFT" },
    { name: "NVIDIA Corporation", symbol: "NVDA" },
    { name: "Johnson & Johnson", symbol: "JNJ" },
    { name: "Tesla", symbol: "TSLA" },
    { name: "Intel", symbol: "INTC" },
    { name: "Visa", symbol: "V" },
    { name: "Walgreens Boots Alliance", symbol: "WBA" },
    { name: "Walmart", symbol: "WMT" },
  ];

  return (
    <div className="companies">
      {companies.map((stock) => {
        const {name, symbol} = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
};

export default Companies;