var channel = 'https://api.picarto.tv/v1/channel/name/'
const fs = require('fs');
const quest = require('request');
const cheerio = require('cheerio');
var jsonfile = require('jsonfile');
var user = picarto.user;



module.exports = {

    get: function get() {

        var pageURL = (channel + user);

        function scrapePage() {
            //make an HTTP request for the page to be scraped
            request(pageURL, function(error, response, responseHtml) {

                //write the entire scraped page to the local file system
                JSON.stringify(responseHtml);
            });
        }

        //scrape the page
        scrapePage();
    }
};