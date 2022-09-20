const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.hanbit.co.kr/academy/books/new_book_list.html';
axios.get(url)
    .then(response => {
        //console.log(response.data);
        const $ = Cheerio.load(response.data);

        $('.view_box').each((index, element) => {
            const title = $(element).find('.book_tit').text().trim();       // trim() : 여백 지우기
            let author = $(element).find('.book_writer').text().trim();
            author = author.split(',').map(x => x.trim()).join(', ');
            console.log(index+1, '==========================================');
            console.log(title);
            console.log(autohor);
        });
    })
    .catch(err => {
        console.log(err);
    });