## SUI PLUGIN
This is a plugin for theme [SUI](https://github.com/Yuvv/hexo-theme-sui).

## WARNING
The code is full of shit.

## Installation

### Install

1. Clone SUI theme into your themes folder.
```shell
$ git clone git@github.com:yuvv/hexo-theme-sui.git themes/sui
```
2. Clone theme plugins into your scripts folder to use katex and pre-render some tags.
```shell
$ git clone -b scripts git@github.com:yuvv/hexo-theme-sui-plugin.git scripts/
```

**If you don't use katex and don't want to pre-render post, just skip step 2 and uncomment these code in theme js folder `sui/source/js/main.js`**
```javascript
// format post body ===> uncomment these four lines bellow.
// $('#post-body>blockquote').addClass('ui piled segment');
// $('#post-body>p>img').addClass('ui rounded centered image');
// $('#post-body>table').addClass('ui celled table');
// $('#post-body>ol,ul').addClass('ui list');
```

## LICENSE

[MIT License](LICENSE)
