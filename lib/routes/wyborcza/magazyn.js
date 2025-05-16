const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const url = 'https://wyborcza.pl/magazyn/0,0.html';
    const { data: html } = await got(url);
    const $ = cheerio.load(html);

    const items = $('.section__inner .teaser')
        .map((_, el) => {
            const e = $(el).find('.teaser__link');
            const link = e.attr('href');
            const title = e.find('.teaser__title').text().trim();
            if (!link || !title) return null;
            return {
                title,
                link: link.startsWith('http') ? link : `https://wyborcza.pl${link}`,
                guid: link,
            };
        })
        .get()
        .filter(Boolean);

    ctx.state.data = {
        title: 'Wyborcza – Wolna Sobota Magazyn',
        link: url,
        item: items,
    };
};
