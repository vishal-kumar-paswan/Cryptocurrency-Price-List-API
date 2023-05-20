# Cryptocurrency Price List API

Cryptocurrency price list API is using web scrapping to fetch data of top 25 cryptocurrencies from https://finance.yahoo.com/.

### Make a GET Request at the following URL: https://cryptocurrency-price-list-api.vercel.app/

## Response body

```
[
    {
        "code": "BTC-USD",
        "name": "Bitcoin USD",
        "price": "27,052.53",
        "change": "+177.68",
        "change_percent": "+0.66%",
        "market_capital": "524.249B",
        "total_volume": "7.019B"
    },
    {
        "code": "ETH-USD",
        "name": "Ethereum USD",
        "price": "1,817.69",
        "change": "+3.31",
        "change_percent": "+0.18%",
        "market_capital": "218.618B",
        "total_volume": "2.946B"
    },
    {
        "code": "USDT-USD",
        "name": "Tether USD",
        "price": "1.0002",
        "change": "-0.0001",
        "change_percent": "-0.01%",
        "market_capital": "82.925B",
        "total_volume": "11.888B"
    },
    {
        "code": "BNB-USD",
        "name": "BNB USD",
        "price": "310.45",
        "change": "+1.93",
        "change_percent": "+0.63%",
        "market_capital": "48.386B",
        "total_volume": "277.917M"
    },
    {
        "code": "USDC-USD",
        "name": "USD Coin USD",
        "price": "0.999924",
        "change": "-0.000051",
        "change_percent": "-0.01%",
        "market_capital": "29.555B",
        "total_volume": "1.434B"
    },
    {
        "code": "XRP-USD",
        "name": "XRP USD",
        "price": "0.468125",
        "change": "+0.001433",
        "change_percent": "+0.31%",
        "market_capital": "24.283B",
        "total_volume": "489.313M"
    },
    {
        "code": "ADA-USD",
        "name": "Cardano USD",
        "price": "0.365600",
        "change": "-0.002676",
        "change_percent": "-0.73%",
        "market_capital": "12.746B",
        "total_volume": "120.115M"
    },
    {
        "code": "STETH-USD",
        "name": "Lido Staked ETH USD",
        "price": "1,804.43",
        "change": "+4.92",
        "change_percent": "+0.27%",
        "market_capital": "11.611B",
        "total_volume": "9.336M"
    },
    {
        "code": "DOGE-USD",
        "name": "Dogecoin USD",
        "price": "0.073683",
        "change": "+0.000171",
        "change_percent": "+0.23%",
        "market_capital": "10.273B",
        "total_volume": "115.453M"
    },
    {
        "code": "MATIC-USD",
        "name": "Polygon USD",
        "price": "0.874212",
        "change": "+0.004063",
        "change_percent": "+0.47%",
        "market_capital": "8.112B",
        "total_volume": "206.164M"
    },
    {
        "code": "SOL-USD",
        "name": "Solana USD",
        "price": "20.26",
        "change": "-0.10",
        "change_percent": "-0.52%",
        "market_capital": "8.024B",
        "total_volume": "120.482M"
    },
    {
        "code": "WTRX-USD",
        "name": "Wrapped TRON USD",
        "price": "0.072556",
        "change": "+0.002247",
        "change_percent": "+3.20%",
        "market_capital": "7.377B",
        "total_volume": "893,688"
    },
    {
        "code": "LTC-USD",
        "name": "Litecoin USD",
        "price": "92.06",
        "change": "+0.50",
        "change_percent": "+0.55%",
        "market_capital": "6.717B",
        "total_volume": "309.691M"
    },
    {
        "code": "TRX-USD",
        "name": "TRON USD",
        "price": "0.072569",
        "change": "+0.002004",
        "change_percent": "+2.84%",
        "market_capital": "6.557B",
        "total_volume": "204.829M"
    },
    {
        "code": "DOT-USD",
        "name": "Polkadot USD",
        "price": "5.4136",
        "change": "+0.0428",
        "change_percent": "+0.80%",
        "market_capital": "6.419B",
        "total_volume": "84.429M"
    },
    {
        "code": "HEX-USD",
        "name": "HEX USD",
        "price": "0.034360",
        "change": "-0.000226",
        "change_percent": "-0.65%",
        "market_capital": "5.958B",
        "total_volume": "9.896M"
    },
    {
        "code": "BUSD-USD",
        "name": "Binance USD USD",
        "price": "1.0000",
        "change": "-0.0000",
        "change_percent": "-0.00%",
        "market_capital": "5.5B",
        "total_volume": "1.236B"
    },
    {
        "code": "SHIB-USD",
        "name": "Shiba Inu USD",
        "price": "0.00000872",
        "change": "+0.00000004",
        "change_percent": "+0.47%",
        "market_capital": "5.139B",
        "total_volume": "55.409M"
    },
    {
        "code": "AVAX-USD",
        "name": "Avalanche USD",
        "price": "14.63",
        "change": "-0.06",
        "change_percent": "-0.44%",
        "market_capital": "4.886B",
        "total_volume": "70.677M"
    },
    {
        "code": "DAI-USD",
        "name": "Dai USD",
        "price": "0.999846",
        "change": "-0.000276",
        "change_percent": "-0.03%",
        "market_capital": "4.854B",
        "total_volume": "58.933M"
    },
    {
        "code": "WBTC-USD",
        "name": "Wrapped Bitcoin USD",
        "price": "27,034.96",
        "change": "+130.40",
        "change_percent": "+0.48%",
        "market_capital": "4.208B",
        "total_volume": "26.363M"
    },
    {
        "code": "LINK-USD",
        "name": "Chainlink USD",
        "price": "6.4991",
        "change": "-0.0082",
        "change_percent": "-0.13%",
        "market_capital": "3.361B",
        "total_volume": "70.339M"
    },
    {
        "code": "LEO-USD",
        "name": "UNUS SED LEO USD",
        "price": "3.6092",
        "change": "+0.0110",
        "change_percent": "+0.31%",
        "market_capital": "3.358B",
        "total_volume": "473,759"
    },
    {
        "code": "UNI7083-USD",
        "name": "Uniswap USD",
        "price": "5.2867",
        "change": "-0.0320",
        "change_percent": "-0.60%",
        "market_capital": "3.053B",
        "total_volume": "26.959M"
    },
    {
        "code": "ATOM-USD",
        "name": "Cosmos USD",
        "price": "10.58",
        "change": "-0.02",
        "change_percent": "-0.17%",
        "market_capital": "3.031B",
        "total_volume": "49.27M"
    }
]
```

## Disclaimer
Web scraping without permission can be illegal, unethical, and can lead to serious consequences, including legal action and financial penalties. Therefore, it is highly recommended to obtain permission from the website owner before scraping any data. This project is only for educational purpose and not for any commercial use.
