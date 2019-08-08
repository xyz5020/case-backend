import scrapy


class CaseSpider(scrapy.Spider):
    name = "case_spider"
    start_urls = ['https://ras.papercept.net/conferences/conferences/CASE19/program/CASE19_ProgramAtAGlanceWeb.html']

    def parse(self, response):
        SET_SELECTOR = ".set"
        for item in response.css(SET_SELECTOR):
            name_selector = 'h1 ::text'
            yield {
                'name': item.css(name_selector).extract_first(),
            }
