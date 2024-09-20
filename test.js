js:
var d = [];

var html = getResCode();
var des_pic = pdfh(html, '.lazy&&data-original');

var des_desc = pdfh(html, '.detail-desc&&Text').replace(/详情|介绍|简介/, '');

var des_text = pdfa(html, '.detail-main-info&&p').map(name => pdfh(name, 'Text'))

d.push({
    title: des_text.join('\
'),
    pic_url: des_pic,
    desc: des_desc,
    url: MY_URL,
    col_type: 'movie_1_vertical_pic_blur'
});


let lazy = $("").lazyRule(() => {
    eval(getCryptoJS())
    let html = request(input)

    let key = html.match(/const encryptedPhotos = '([\s\S]*?';){3}/)[0].split("','enc'")[0].split(",'")[1]
    log(key)


    eval(html.match(/const encryptedPhotos = '([\s\S]*?';){2}/)[0])

    function decryptPhotos(encryptedPhotos, key) {
        const _0xe0fffe = key;
        try {
            var _0x34e73b = CryptoJS.enc.Utf8.parse(_0xe0fffe);
            var _0x4b91e9 = CryptoJS.enc.Utf8.parse(_0xe0fffe.substring(0, 16));
            var _0x23959c = CryptoJS.AES.decrypt(encryptedPhotos, _0x34e73b, {
                "iv": _0x4b91e9,
                "mode": CryptoJS.mode.CBC,
                "padding": CryptoJS.pad.Pkcs7
            });
            var _0x33fe5e = _0x23959c.toString(CryptoJS.enc.Utf8);
            return JSON.parse(_0x33fe5e);
        } catch (_0x2c34e7) {
            return [];
        }
    }

    let images = decryptPhotos(encryptedPhotos, key)
    var list = images



    var pics = [];
    list.forEach(x => {

        var img = x.img_url + '@js=' + $.toString(() => {
            const image = $.require("hiker://page/image?rule=阅漫君");
            return image.imageDecrypt();
        }, MY_RULE.title)
        pics.push(img)
    })

    return "pics://" + pics.join("&&");

});


var list = pdfa(html, 'body&&.detail-list-select&&li');
eval(JSON.parse(request('hiker://page/rule')).rule);
for (let i in list) {
    let title = pdfh(list[i], 'Text')
    let url = pd(list[i], 'a&&href')
    d.push({
        title: title,
        url: url + lazy,
        col_type: 'text_2'
    })
}

setResult(d)