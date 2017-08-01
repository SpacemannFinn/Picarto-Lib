var channel = 'https://api.picarto.tv/v1/channel/name/'
const fs = require('fs');
const quest = require('request');
const cheerio = require('cheerio');
var jsonfile = require('jsonfile');
var pageURL;
//people can specify user


module.exports = {

    get: function get(user) {
        var puser = user;

        function scrapePage() {
            pageURL = channel + puser;
            //make an HTTP request for the page to be scraped
            request(pageURL, function(error, response, responseHtml) {

                //write the entire scraped page to the local file system
                JSON.stringify(responseHtml);
                //console.log
            });
        }

        //scrape the page
        scrapePage();
    }
};