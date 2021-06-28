import { Link } from 'react-router-dom';
import CurrentPrice from "../components/CurrentPrice";
import PercentChange from "../components/PercentChange";

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

<table><tr><td>company</td>
<td>current price</td>
<td>% change</td></tr>


      {companies.map((stock) => {
        const {name, symbol} = stock;

        return (
          <tr><td>
          <Link to={`/stocks/${symbol}`}>
            <h2>{name} <span className="lightest">{symbol}</span></h2>
          </Link>
          </td><td><CurrentPrice symbol={symbol}/></td>
          <td><PercentChange symbol={symbol}/></td>
          </tr>
        );
      })}

</table>
    </div>
  )
};

export default Companies;