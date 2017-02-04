/**
 * Created by Yuvv on 2017/1/30.
 */

'use strict';

const INLINE_MATH_RENDER_REGEX = /\$([^\n]+?)\$/g;
const BLOCK_MATH_RENDER_REGEX = /\$\$([\s\S]+?)\$\$/g;

var katex = require('katex');

hexo.extend.filter.register('before_post_render', function (data) {
  data.content = data.content.replace(INLINE_MATH_RENDER_REGEX, function (match, p1) {
    try {
      return '<span class="math-inline">' + katex.renderToString(p1) + '</span>';
    } catch (ParseError) {
      console.log('Inline ParseError: ' + p1);
      return '<span class="math-inline"><span style="color: red;">不支持的公式...</span></span>';
    }
  });

  data.content = data.content.replace(BLOCK_MATH_RENDER_REGEX, function (match, p1) {
    try {
      return '\n<span class="math-display">' + katex.renderToString(p1) + '</span>\n';
    } catch (ParseError) {
      console.log('Block ParseError: ' + p1);
      return '<span class="math-display"><span style="color: red;">不支持的公式...</span></span>';
    }
  });
  return data;
});