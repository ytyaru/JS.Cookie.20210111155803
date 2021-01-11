[ja](./README.ja.md)

# Cookie

Use cookies with JS.

# DEMO

* [DEMO](https://ytyaru.github.io/JS.Cookie.20210111155803/)

# Features

* used [js-cookie][]

[js-cookie]:https://github.com/js-cookie/js-cookie

# Requirement

* <time datetime="2021-01-11T15:57:57+0900">2021-01-11</time>
* [Raspbierry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 4 Model B Rev 1.2
* [Raspberry Pi OS](https://ja.wikipedia.org/wiki/Raspbian) buster 10.0 2020-08-20 <small>[setup](http://ytyaru.hatenablog.com/entry/2020/10/06/111111)</small>
* bash 5.0.3(1)-release
* Chromium 84.0.4147.141

```sh
$ uname -a
Linux raspberrypi 5.4.72-v7l+ #1356 SMP Thu Oct 22 13:57:51 BST 2020 armv7l GNU/Linux
```

# Installation

```sh
git clone https://github.com/ytyaru/JS.Cookie.20210111155803
```

# Usage

1. Start the terminal
    1. Move the current directory. To the path where index.html is. `cd JS.Cookie.20210111155803 / src`
    2. `python3 -m http.server 8000`
2. Launch your browser
    1. Enter `http://0.0.0.0:8000/` in the URL field

# Note

* Cookies are not saved when executed locally with no domain `file: //`. If you upload to a place with a domain such as `http://domain.jp` and then execute it, the cookie will be saved. Because cookies are stored on a domain-by-domain basis.

# Author

ytyaru

* [![github](http://www.google.com/s2/favicons?domain=github.com)](https://github.com/ytyaru "github")
* [![hatena](http://www.google.com/s2/favicons?domain=www.hatena.ne.jp)](http://ytyaru.hatenablog.com/ytyaru "hatena")
* [![mastodon](http://www.google.com/s2/favicons?domain=mstdn.jp)](https://mstdn.jp/web/accounts/233143 "mastdon")

# License

This software is CC0 licensed.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.en)

