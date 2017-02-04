/**
 * Created by Yuvv on 2017/1/30.
 */

'use strict';

var cheerio = require('cheerio');

hexo.extend.filter.register('after_post_render', function (data) {
  let $ = cheerio.load(data.content);

  // format post body
  $('blockquote').addClass('ui piled segment');
  $('p>img').addClass('ui rounded centered image');
  $('table').each(function(i, ele) {
    if(!this.parentNode) {
      $(this).addClass('ui celled table');
    }
  });
  $('ol,ul').each(function(i, ele) {
    if(!this.parentNode) {
      $(this).addClass('ui list');
    }
  });
  
  data.content = $.html();
  return data;
});