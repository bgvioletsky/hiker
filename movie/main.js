function Frist() {
    var display = [];
    var url = `https://shayuapi.com/api.php/provide/vod/?ac=detail&pg=${MY_PAGE}`
    let headers = {
        'User-Agent': PC_UA
    }
    
    let data = JSON.parse(request(url,{headers: headers})).list
    data.forEach(element => {
        display.push({
            title: element.vod_name,
            pic_url:element.vod_pic,
            url: "hiker://empty##immersiveTheme##autoCache#",
            col_type: 'movie_3',
            extra: {
                id:element.vod_id,
                title: element.vod_name,
                pic_url:element.vod_pic,
            }
        })
    });

    setResult(display);
}

function Second() {
    let url=`https://shayuapi.com/api.php/provide/vod/?ac=detail&ids=${MY_PARAMS.id}`
    let headers = {
        'User-Agent': PC_UA
    }
    let data = JSON.parse(request(url,{headers: headers})).list[0]
    var easy =$("").lazyRule(() => {
        require('http://192.168.1.11:8080/js/SrcParseS.js');
        return SrcParseS.聚影(input);
    });
    var display = [];
    display.push({
        title: data.vod_name,//详情1
        desc: data.vod_content,//详情2
        pic_url: data.vod_pic + '@Referer=',//图片
        url: data.vod_pic + '#noHistory#',//链接
        col_type: 'movie_1_vertical_pic_blur',
    });
    let list=data.vod_play_url.split("$")
    display.push({
        title:list[0],
        url:list[1]+ easy,
        col_type: 'text_center_1'
    })
    setResult(display);
}