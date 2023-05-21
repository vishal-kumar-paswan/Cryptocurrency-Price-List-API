# Cryptocurrency Price List API

Cryptocurrency price list API is using web scraping to fetch data of top 25 cryptocurrencies from [Yahoo Finance](https://finance.yahoo.com/).

### Make a GET Request at the following URL: https://cryptocurrency-price-list-api.vercel.app/

## Response body

```
[
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        "code": "BTC-USD",
        "name": "Bitcoin USD",
        "price": "27,083.48",
        "change": "+227.57",
        "change_percent": "+0.85%",
        "market_capital": "524.861B",
        "total_volume": "7.414B"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        "code": "ETH-USD",
        "name": "Ethereum USD",
        "price": "1,816.28",
        "change": "+5.98",
        "change_percent": "+0.33%",
        "market_capital": "218.446B",
        "total_volume": "3.14B"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        "code": "USDT-USD",
        "name": "Tether USD",
        "price": "1.0004",
        "change": "+0.0000",
        "change_percent": "+0.00%",
        "market_capital": "82.945B",
        "total_volume": "11.905B"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        "code": "BNB-USD",
        "name": "BNB USD",
        "price": "311.21",
        "change": "+2.90",
        "change_percent": "+0.94%",
        "market_capital": "48.505B",
        "total_volume": "301.785M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
        "code": "USDC-USD",
        "name": "USD Coin USD",
        "price": "1.0001",
        "change": "-0.0000",
        "change_percent": "-0.00%",
        "market_capital": "29.559B",
        "total_volume": "1.543B"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
        "code": "XRP-USD",
        "name": "XRP USD",
        "price": "0.469936",
        "change": "+0.004787",
        "change_percent": "+1.03%",
        "market_capital": "24.377B",
        "total_volume": "426.8M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
        "code": "ADA-USD",
        "name": "Cardano USD",
        "price": "0.365282",
        "change": "+0.000580",
        "change_percent": "+0.16%",
        "market_capital": "12.735B",
        "total_volume": "109.016M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/8085.png",
        "code": "STETH-USD",
        "name": "Lido Staked ETH USD",
        "price": "1,795.55",
        "change": "-3.89",
        "change_percent": "-0.22%",
        "market_capital": "11.579B",
        "total_volume": "11.595M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
        "code": "DOGE-USD",
        "name": "Dogecoin USD",
        "price": "0.073758",
        "change": "+0.000365",
        "change_percent": "+0.50%",
        "market_capital": "10.284B",
        "total_volume": "117.583M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        "code": "MATIC-USD",
        "name": "Polygon USD",
        "price": "0.877148",
        "change": "+0.010056",
        "change_percent": "+1.16%",
        "market_capital": "8.139B",
        "total_volume": "196.81M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        "code": "SOL-USD",
        "name": "Solana USD",
        "price": "20.28",
        "change": "+0.10",
        "change_percent": "+0.48%",
        "market_capital": "8.029B",
        "total_volume": "107.886M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/18579.png",
        "code": "WTRX-USD",
        "name": "Wrapped TRON USD",
        "price": "0.072392",
        "change": "+0.001655",
        "change_percent": "+2.34%",
        "market_capital": "7.361B",
        "total_volume": "706,908"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
        "code": "LTC-USD",
        "name": "Litecoin USD",
        "price": "92.51",
        "change": "+1.60",
        "change_percent": "+1.76%",
        "market_capital": "6.75B",
        "total_volume": "283.242M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
        "code": "TRX-USD",
        "name": "TRON USD",
        "price": "0.072411",
        "change": "+0.001624",
        "change_percent": "+2.29%",
        "market_capital": "6.543B",
        "total_volume": "207.593M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
        "code": "DOT-USD",
        "name": "Polkadot USD",
        "price": "5.3883",
        "change": "+0.0242",
        "change_percent": "+0.45%",
        "market_capital": "6.389B",
        "total_volume": "77.023M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/5015.png",
        "code": "HEX-USD",
        "name": "HEX USD",
        "price": "0.035963",
        "change": "-0.000171",
        "change_percent": "-0.47%",
        "market_capital": "6.236B",
        "total_volume": "9.983M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png",
        "code": "BUSD-USD",
        "name": "Binance USD USD",
        "price": "1.0002",
        "change": "+0.0000",
        "change_percent": "+0.00%",
        "market_capital": "5.501B",
        "total_volume": "1.24B"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
        "code": "SHIB-USD",
        "name": "Shiba Inu USD",
        "price": "0.00000869",
        "change": "+0.00000004",
        "change_percent": "+0.43%",
        "market_capital": "5.124B",
        "total_volume": "55.26M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
        "code": "AVAX-USD",
        "name": "Avalanche USD",
        "price": "14.63",
        "change": "+0.07",
        "change_percent": "+0.46%",
        "market_capital": "4.886B",
        "total_volume": "63.33M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
        "code": "DAI-USD",
        "name": "Dai USD",
        "price": "0.999820",
        "change": "-0.000121",
        "change_percent": "-0.01%",
        "market_capital": "4.847B",
        "total_volume": "66.268M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png",
        "code": "WBTC-USD",
        "name": "Wrapped Bitcoin USD",
        "price": "27,104.28",
        "change": "+218.45",
        "change_percent": "+0.81%",
        "market_capital": "4.219B",
        "total_volume": "34.959M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
        "code": "LEO-USD",
        "name": "UNUS SED LEO USD",
        "price": "3.6292",
        "change": "+0.0368",
        "change_percent": "+1.02%",
        "market_capital": "3.376B",
        "total_volume": "469,834"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
        "code": "LINK-USD",
        "name": "Chainlink USD",
        "price": "6.5139",
        "change": "+0.0271",
        "change_percent": "+0.42%",
        "market_capital": "3.368B",
        "total_volume": "65.204M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
        "code": "UNI7083-USD",
        "name": "Uniswap USD",
        "price": "5.2449",
        "change": "-0.0315",
        "change_percent": "-0.60%",
        "market_capital": "3.029B",
        "total_volume": "25.007M"
    },
    {
        "imageUrl": "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
        "code": "ATOM-USD",
        "name": "Cosmos USD",
        "price": "10.56",
        "change": "+0.01",
        "change_percent": "+0.09%",
        "market_capital": "3.023B",
        "total_volume": "45.314M"
    }
]
```

## Disclaimer

Web scraping without permission can be illegal, unethical, and can lead to serious consequences, including legal action and financial penalties. Therefore, it is highly recommended to obtain permission from the website owner before scraping any data. This project is only for educational purpose and not for any commercial use.
