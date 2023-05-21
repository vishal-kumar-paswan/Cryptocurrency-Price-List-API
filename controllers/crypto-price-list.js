const axios = require("axios");
const cheerio = require("cheerio");
exports.fetchCryptoPriceList = async (req, res) => {
    try {
        //  fetching yahoo finance web page by performing an HTTP GET request in Axios
        const axiosResponse = await axios.request({
            method: "GET",
            url: 'https://finance.yahoo.com/crypto/',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(axiosResponse.data);

        let cryptocurrencyList = [];

        // Iterating through all the elements of the HTML table
        $("tr.simpTblRow").each((index, crypto) => {
            let cryptocurrencyDetails = {};

            cryptocurrencyDetails.imageUrl = $(crypto).find("img.W\\(20px\\).H\\(20px\\).Mend\\(5px\\)").attr('src');

            // cryptocurrency code
            cryptocurrencyDetails.code = $(crypto).find("a.Fw\\(600\\).C\\(\\$linkColor\\)").text();

            // cryptocurrency name
            cryptocurrencyDetails.name = $(crypto).find("td.Va\\(m\\).Ta\\(start\\).Px\\(10px\\).Fz\\(s\\)").text();

            // Iterating to first, second and third element of the following selector to fetch the price, change and change percentage
            $(crypto).find("td.Va\\(m\\).Ta\\(end\\).Pstart\\(20px\\).Fw\\(600\\).Fz\\(s\\)").each((i, price) => {
                switch (i) {
                    case 0:
                        cryptocurrencyDetails.price = $(price).text();
                        break;
                    case 1:
                        cryptocurrencyDetails.change = $(price).text();
                        break;
                    case 2:
                        cryptocurrencyDetails.change_percent = $(price).text();
                        break;
                    default:
                        break;
                }
            });

            // Iterating to third and fifth element of the following selector to fetch the market capital and total volume
            $(crypto).find("td.Va\\(m\\).Ta\\(end\\).Pstart\\(20px\\).Fz\\(s\\)").each((index, item) => {
                switch (index) {
                    case 3:
                        cryptocurrencyDetails.market_capital = $(item).text();
                        break;
                    case 6:
                        cryptocurrencyDetails.total_volume = $(item).text();
                        break;
                    default:
                        break;
                }
            });
            cryptocurrencyList.push(cryptocurrencyDetails);
        });
        return res.status(200).send(cryptocurrencyList);
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}