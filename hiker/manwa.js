//一级菜单
function Frist() {
    var display = [];
    let url = 'https://15.235.65.127/getBooks?page=' + MY_PAGE + '&tag=调教&end=&gender=&has_full=&area=&sort=';
    
    let data = request(url, {
        headers: {
            "referer": "https://mwcomic3.online/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
            "cookie": "ckc=1; 0338f6aad17636a90fcff738ec241c5b=587eab99869888fc42ddec8de2c5b9ad; PHPSESSID=6cd3600b489270a3d58072af62fa25b1; show_img_host2=1; c_gender=2"
        }, timeout: 3000
    });
    data = JSON.parse(data).books;
    for (var i in data) {
        display.push({
            title: data[i].book_name,
            desc: data[i].summary,
            pic_url: 'https://mwfimsvfast3.cc/' + data[i].cover_url,
            url: 'https://15.235.65.127/book/' + data[i].id+"#immersiveTheme##autoCache#",
            col_type: 'movie_3',
            extra: {
                gradient: true,
                title: data[i].book_name,
                desc: data[i].summary,
                pic: 'https://mwfimsvfast3.cc/' + data[i].cover_url,
                url: 'https://15.235.65.127/book/' + data[i].id,
            }
        });
    }
    display.push({
        col_type: "blank_block"
    });

    setResult(display);
}

function Second() {
    let display = []
    var pic = MY_PARAMS.pic;
    var name = MY_PARAMS.title;
    var url = MY_PARAMS.url;
    var desc = MY_PARAMS.desc;
    display.push({
        title: name,//详情1
        desc: desc,//详情2
        pic_url: pic + '@Referer=',//图片
        url: pic + '#noHistory#',//链接
        col_type: 'movie_1_vertical_pic_blur',
        extra: {
            gradient: true
        }
    });
    let data = request(url, {
        headers: {
            "referer": "https://mwcomic3.online/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
            "cookie": "ckc=1; 0338f6aad17636a90fcff738ec241c5b=587eab99869888fc42ddec8de2c5b9ad; PHPSESSID=6cd3600b489270a3d58072af62fa25b1; show_img_host2=1; c_gender=2"
        }
    })
    
    var story = xpathArray(data, '//*[@id="detail-list-select"]/li/a/@title')
    var url=xpathArray(data, '//*[@id="detail-list-select"]/li/a/@href')
    for(var i in url){
        display.push({
            title: story[i],
            url:$().lazyRule((url)=>{
                require(config.依赖);
                return getImg(url)
            },(url[i])) ,
            col_type: 'text_4'
        })
    }
    setResult(display);
}


function getImg(result){
    let hp= { "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Referer": "https://mwcomic3.online/" + result,
        "Cookie": " _ga=GA1.1.1643448054.1691222181; show_img_host2=1; ckc=1; _ga_8BCHF90D92=GS1.1.1691222180.1.1.1691222261.60.0.0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29"};
    let url="https://mwgetimg.xscodes.icu/?getimg=https://manwaz3.xyz/" + result + "?img_host=0"
    let data=request(url,{headers: hp})
    let img_url=xpathArray(data, '//div/img/@src')
    let img_url_list="pics://"
    for (let key in img_url) {
        img_url_list=img_url_list+"https://manwa.xscodes.icu/?imageUrl="+img_url[key]+"&&"
    }
    if (img_url_list.endsWith("&&")) {
        img_url_list = img_url_list.slice(0, -2);
    }
    return img_url_list
}