# IYOV-A web proxy and analyze tool especially for app engineers.

### How it comes
Sometimes we\`ll help colleagues to locate issues between app and servers. I have to login each server and dump the tcp packages, 
but it\`s not that humanzied, or many ads. So I build this tool. It\`s free and open to all developers. You can know every details 
of each `HTTP` request and response packages. Now it\`s avaliable in the [IYOV](http://iyov.io) cloud platform, and I`m still working on 
making it more easy to use.


### Features
* A proxy for http and https;
* Support `Content-Length`;
* Support `Transfer-Encoding: chunkded`;
* Support `Content-Encoding: gzip`;

 ![request](https://github.com/nicecp/iyov/blob/master/Doc/Image/request.png)
 ![response](https://github.com/nicecp/iyov/blob/master/Doc/Image/response.png)


### Installation
* `clone` this repository
* then `composer install`

### Config
1. cp `.env.ini.example` to `.env.ini`
2. add `test.iyov.io    127.0.0.1` to your own hosts;

### Run
* get into the root dir and run `php start.php start` command;
### How to use
1. set proxy config of mobile, `Address: your computer local address`, `Port: 9733`
2. open `test.iyov.io:8080` in browser

Ok, Now you can surf the internet or test applications in mobile devices, every detail will be explosed in the tab.

**If using iyov in your computer, app and computer should connect to the same network,otherwise it\`s workless.**
