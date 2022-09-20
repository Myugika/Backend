const iconv = require('iconv-lite');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://book.interpark.com/display/collectlist.do?_method=bestsellerHourNew&bookblockname=b_gnb&booklinkname=%BA%A3%BD%BA%C6%AE%C1%B8&bid1=bgnb_mn&bid2=LiveRanking&bid3=main&bid4=001';



axios.get(url, {responseType: 'arraybuffer'})
    .then(response => {
        //console.log(response.data);
        let contentType = response.headers['content-type']
        let charset = contentType.includes('charset=')
          ? contentType.split('charset=')[1]
          : 'UTF-8'
        let data = iconv.decode(response.data, charset)
        const $ = cheerio.load(data);

        $('.listItem.singleType').each((index, element) => {
            let title = $(element).find('.itemName').text().trim();       // trim() : 여백 지우기
            let author = $(element).find('.author').text().trim();
            let company = $(element).find('.company').text().trim();
            let price = $(element).find('.price > em').text().trim();
            console.log(index+1);
            console.log(`제목 : ${title}`);
            console.log(`저자 : ${author}`);
            console.log(`출판사 : ${company}`);
            console.log(`가격 : ${price}원`);
            console.log('---------------------');
        });
    })
    .catch(err => {
        console.log(err);
    });