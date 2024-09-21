//一级菜单
function Frist() {
    var display = [];
    let bg
    let gender = [{
        "title": "全部",
        "value": "-1"
    },
    {
        "title": "一般向",
        "value": "2"
    },
    {
        "title": "BL向",
        "value": "0"
    },
    {
        "title": "禁漫",
        "value": "1"
    }]
    let area = [
        {
            "value": "",
            "title": "全部"
        },
        {
            "value": "2",
            "title": "韩国"
        },
        {
            "value": "3",
            "title": "日漫"
        },
        {
            "value": "4",
            "title": "国漫"
        },
        {
            "value": "5",
            "title": "台漫"
        },
        {
            "value": "6",
            "title": "其他"
        }
    ]
    let end = [
        {
            "value": "",
            "title": "全部"
        },
        {
            "value": "2",
            "title": "连载中"
        },
        {
            "value": "1",
            "title": "完结"
        }
    ]
    let explicit = [
        {
            "value": "",
            "title": "全部"
        },
        {
            "value": "1",
            "title": "高清清水版"
        },
        {
            "value": "2",
            "title": "未删减完整版"
        }
    ]
    let tag = [
        {
            "value": "",
            "title": "全部"
        },
        {
            "value": "19R",
            "title": "19R"
        },
        {
            "value": "韩漫",
            "title": "韩漫"
        },
        {
            "value": "恋爱",
            "title": "恋爱"
        },
        {
            "value": "日漫",
            "title": "日漫"
        },
        {
            "value": "都市",
            "title": "都市"
        },
        {
            "value": "巨乳",
            "title": "巨乳"
        },
        {
            "value": "校园",
            "title": "校园"
        },
        {
            "value": "搞笑",
            "title": "搞笑"
        },
        {
            "value": "热血",
            "title": "热血"
        },
        {
            "value": "少女",
            "title": "少女"
        },
        {
            "value": "玄幻",
            "title": "玄幻"
        },
        {
            "value": "纯爱",
            "title": "纯爱"
        },
        {
            "value": "国漫",
            "title": "国漫"
        },
        {
            "value": "宅系",
            "title": "宅系"
        },
        {
            "value": "色气受",
            "title": "色气受"
        },
        {
            "value": "年下",
            "title": "年下"
        },
        {
            "value": "穿越",
            "title": "穿越"
        },
        {
            "value": "甜文",
            "title": "甜文"
        },
        {
            "value": "腹黑攻",
            "title": "腹黑攻"
        },
        {
            "value": "古风",
            "title": "古风"
        },
        {
            "value": "大尺度",
            "title": "大尺度"
        },
        {
            "value": "奇幻",
            "title": "奇幻"
        },
        {
            "value": "其他",
            "title": "其他"
        },
        {
            "value": "剧情",
            "title": "剧情"
        },
        {
            "value": "非现代",
            "title": "非现代"
        },
        {
            "value": "悬疑",
            "title": "悬疑"
        },
        {
            "value": "冒险",
            "title": "冒险"
        },
        {
            "value": "性感",
            "title": "性感"
        },
        {
            "value": "15R",
            "title": "15R"
        },
        {
            "value": "多人",
            "title": "多人"
        },
        {
            "value": "后宫",
            "title": "后宫"
        },
        {
            "value": "美人",
            "title": "美人"
        },
        {
            "value": "生活",
            "title": "生活"
        },
        {
            "value": "职场",
            "title": "职场"
        },
        {
            "value": "日常",
            "title": "日常"
        },
        {
            "value": "戏剧",
            "title": "戏剧"
        },
        {
            "value": "ABO",
            "title": "ABO"
        },
        {
            "value": "勾引",
            "title": "勾引"
        },
        {
            "value": "动作",
            "title": "动作"
        },
        {
            "value": "忠犬攻",
            "title": "忠犬攻"
        },
        {
            "value": "傲娇受",
            "title": "傲娇受"
        },
        {
            "value": "小说改编",
            "title": "小说改编"
        },
        {
            "value": "少男",
            "title": "少男"
        },
        {
            "value": "调教",
            "title": "调教"
        },
        {
            "value": "总裁",
            "title": "总裁"
        },
        {
            "value": "正妹",
            "title": "正妹"
        },
        {
            "value": "壮受",
            "title": "壮受"
        },
        {
            "value": "重生",
            "title": "重生"
        },
        {
            "value": "青梅竹马",
            "title": "青梅竹马"
        },
        {
            "value": "可爱受",
            "title": "可爱受"
        },
        {
            "value": "兽耳",
            "title": "兽耳"
        },
        {
            "value": "黑道",
            "title": "黑道"
        },
        {
            "value": "治愈",
            "title": "治愈"
        },
        {
            "value": "娱乐圈",
            "title": "娱乐圈"
        },
        {
            "value": "伦理",
            "title": "伦理"
        },
        {
            "value": "连载",
            "title": "连载"
        },
        {
            "value": "浪漫",
            "title": "浪漫"
        },
        {
            "value": "SM\/BDSM",
            "title": "SM\/BDSM"
        },
        {
            "value": "爆笑",
            "title": "爆笑"
        },
        {
            "value": "改编",
            "title": "改编"
        },
        {
            "value": "黑皮",
            "title": "黑皮"
        },
        {
            "value": "乱伦",
            "title": "乱伦"
        },
        {
            "value": "魔幻",
            "title": "魔幻"
        },
        {
            "value": "大女主",
            "title": "大女主"
        },
        {
            "value": "重逢",
            "title": "重逢"
        },
        {
            "value": "战斗",
            "title": "战斗"
        },
        {
            "value": "虐文",
            "title": "虐文"
        },
        {
            "value": "兽人",
            "title": "兽人"
        },
        {
            "value": "体型差",
            "title": "体型差"
        },
        {
            "value": "透视",
            "title": "透视"
        },
        {
            "value": "霸总",
            "title": "霸总"
        },
        {
            "value": "恐怖",
            "title": "恐怖"
        },
        {
            "value": "淫乱",
            "title": "淫乱"
        },
        {
            "value": "少年",
            "title": "少年"
        },
        {
            "value": "多CP",
            "title": "多CP"
        },
        {
            "value": "男孕",
            "title": "男孕"
        },
        {
            "value": "修真",
            "title": "修真"
        },
        {
            "value": "巨屌",
            "title": "巨屌"
        },
        {
            "value": "年龄差",
            "title": "年龄差"
        },
        {
            "value": "女大学生",
            "title": "女大学生"
        },
        {
            "value": "惊悚",
            "title": "惊悚"
        },
        {
            "value": "SM",
            "title": "SM"
        },
        {
            "value": "科幻",
            "title": "科幻"
        },
        {
            "value": "3D",
            "title": "3D"
        },
        {
            "value": "同居",
            "title": "同居"
        },
        {
            "value": "唯美",
            "title": "唯美"
        },
        {
            "value": "演艺圈",
            "title": "演艺圈"
        },
        {
            "value": "偷情",
            "title": "偷情"
        },
        {
            "value": "制服",
            "title": "制服"
        },
        {
            "value": "人妻",
            "title": "人妻"
        },
        {
            "value": "群交",
            "title": "群交"
        },
        {
            "value": "办公室",
            "title": "办公室"
        },
        {
            "value": "肉欲",
            "title": "肉欲"
        },
        {
            "value": "戏剧",
            "title": "戏剧"
        },
        {
            "value": "魔法",
            "title": "魔法"
        },
        {
            "value": "掰弯",
            "title": "掰弯"
        },
        {
            "value": "女学生",
            "title": "女学生"
        },
        {
            "value": "吸血鬼",
            "title": "吸血鬼"
        },
        {
            "value": "性爱",
            "title": "性爱"
        },
        {
            "value": "逆袭",
            "title": "逆袭"
        },
        {
            "value": "复仇",
            "title": "复仇"
        },
        {
            "value": "女王受",
            "title": "女王受"
        },
        {
            "value": "呆萌受",
            "title": "呆萌受"
        },
        {
            "value": "有夫之妇",
            "title": "有夫之妇"
        },
        {
            "value": "诱惑",
            "title": "诱惑"
        },
        {
            "value": "大叔",
            "title": "大叔"
        },
        {
            "value": "温柔攻",
            "title": "温柔攻"
        },
        {
            "value": "女装",
            "title": "女装"
        },
        {
            "value": "灵异",
            "title": "灵异"
        },
        {
            "value": "校服",
            "title": "校服"
        },
        {
            "value": "健气受",
            "title": "健气受"
        },
        {
            "value": "三角关系",
            "title": "三角关系"
        },
        {
            "value": "武侠",
            "title": "武侠"
        },
        {
            "value": "爱情",
            "title": "爱情"
        },
        {
            "value": "架空",
            "title": "架空"
        },
        {
            "value": "萝莉",
            "title": "萝莉"
        },
        {
            "value": "短篇合集",
            "title": "短篇合集"
        },
        {
            "value": "出轨",
            "title": "出轨"
        },
        {
            "value": "强迫",
            "title": "强迫"
        },
        {
            "value": "真人",
            "title": "真人"
        },
        {
            "value": "过膝袜",
            "title": "过膝袜"
        },
        {
            "value": "淫荡",
            "title": "淫荡"
        },
        {
            "value": "NTR",
            "title": "NTR"
        },
        {
            "value": "年上",
            "title": "年上"
        },
        {
            "value": "虐心",
            "title": "虐心"
        },
        {
            "value": "推理",
            "title": "推理"
        },
        {
            "value": "全彩",
            "title": "全彩"
        },
        {
            "value": "霸道攻",
            "title": "霸道攻"
        },
        {
            "value": "知音漫客",
            "title": "知音漫客"
        },
        {
            "value": "系统",
            "title": "系统"
        },
        {
            "value": "超能力",
            "title": "超能力"
        },
        {
            "value": "骨科\/伪骨科",
            "title": "骨科\/伪骨科"
        },
        {
            "value": "人外",
            "title": "人外"
        },
        {
            "value": "青春",
            "title": "青春"
        },
        {
            "value": "不伦",
            "title": "不伦"
        },
        {
            "value": "漫客栈",
            "title": "漫客栈"
        },
        {
            "value": "出版",
            "title": "出版"
        },
        {
            "value": "高潮",
            "title": "高潮"
        },
        {
            "value": "师生",
            "title": "师生"
        },
        {
            "value": "傲娇攻",
            "title": "傲娇攻"
        },
        {
            "value": "高甜",
            "title": "高甜"
        },
        {
            "value": "修仙",
            "title": "修仙"
        },
        {
            "value": "黑白",
            "title": "黑白"
        },
        {
            "value": "主仆关系",
            "title": "主仆关系"
        },
        {
            "value": "玩具",
            "title": "玩具"
        },
        {
            "value": "双向暗恋",
            "title": "双向暗恋"
        },
        {
            "value": "病娇攻",
            "title": "病娇攻"
        },
        {
            "value": "萌系",
            "title": "萌系"
        },
        {
            "value": "励志",
            "title": "励志"
        },
        {
            "value": "脑洞",
            "title": "脑洞"
        },
        {
            "value": "初恋",
            "title": "初恋"
        },
        {
            "value": "契约关系",
            "title": "契约关系"
        },
        {
            "value": "剧情向",
            "title": "剧情向"
        },
        {
            "value": "血腥",
            "title": "血腥"
        },
        {
            "value": "装逼",
            "title": "装逼"
        },
        {
            "value": "橘味",
            "title": "橘味"
        },
        {
            "value": "百合",
            "title": "百合"
        },
        {
            "value": "BL",
            "title": "BL"
        },
        {
            "value": "口交",
            "title": "口交"
        },
        {
            "value": "囚禁",
            "title": "囚禁"
        },
        {
            "value": "鬼怪",
            "title": "鬼怪"
        },
        {
            "value": "肛交",
            "title": "肛交"
        },
        {
            "value": "丧尸",
            "title": "丧尸"
        },
        {
            "value": "短篇",
            "title": "短篇"
        },
        {
            "value": "互攻",
            "title": "互攻"
        }
    ]
    let sort = [
        {
            "title": "最新",
            "value": -1
        },
        {
            "title": "最旧",
            "value": 0
        },
        {
            "title": "收藏",
            "value": 1
        },
        {
            "title": "新漫",
            "value": 2
        }
    ]
    var searchurl = $('').lazyRule(() => {
        require(config.依赖);
        sousuo(input);
    })
    bg = [gender, area, end, explicit, tag, sort]
    if (MY_PAGE == 1) {
        display.push(
            {
                title: "收藏", url: "hiker://collection", pic_url: "hiker://files/bgHouse/src/system/1.svg", col_type: "icon_2"
            }, {
            title: "历史", url: "hiker://history", pic_url: "hiker://files/bgHouse/src/system/4.svg", col_type: "icon_2"
        }, {
            col_type: "blank_block"
        }
        )
        for (var i in bg) {
            for (var j in bg[i]) {
                display.push({
                    title:
                        getMyVar("mainindex" + i, "0") == j
                            ? "““””<font color='#58D3F7'>" + bg[i][j].title + "</font>"
                            : "““””<font color='#22383e'>" + bg[i][j].title + "</font>",
                    url: $("#noLoading#").lazyRule((a, b) => {
                        putMyVar("mainindex" + a, b);
                        refreshPage(true);
                        return "hiker://empty";
                    }, i, j),
                    col_type: "scroll_button"
                })
            }
            display.push({
                col_type: "blank_block"
            })
        }
        display.push({
            title: "搜索",
            col_type: "input",
            url: $.toString(() => {
                return $("hiker://empty#noRecordHistory##noHistory##fypage").rule((input) => {
                    require(config.依赖);
                    sousuo(input);
                }, input);

            }),
        })
    }
    let url = 'https://manwac2.xyz/getBooks?page=' + MY_PAGE + '&tag=' + bg[4][getMyVar("mainindex4", "0")].value + '&end=' + bg[2][getMyVar("mainindex2", "0")].value + '&gender=' + bg[0][getMyVar("mainindex0", "0")].value + '&has_full=' + bg[3][getMyVar("mainindex3", "0")].value + '&area=' + bg[1][getMyVar("mainindex1", "0")].value + '&sort=' + bg[5][getMyVar("mainindex5", "0")].value;
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
            pic_url: 'https://manwac2.xyz' + data[i].cover_url,
            url: 'https://manwac2.xyz/book/' + data[i].id + "#immersiveTheme##autoCache#",
            col_type: 'movie_3',
            extra: {
                gradient: true,
                title: data[i].book_name,
                desc: data[i].summary,
                pic: 'https://mwfimsvfast3.cc/' + data[i].cover_url,
                url: 'https://manwac2.xyz/book/' + data[i].id,
            }
        });
    }
    display.push({
        col_type: "blank_block"
    });

    setResult(display);
}
//二级菜单
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
    var url = xpathArray(data, '//*[@id="detail-list-select"]/li/a/@href')
    var xiazai = []
    for (var i in url) {
        xiazai.push({
            title: story[i],
            url: url[i]
        })
    }
    let lazy = $("").lazyRule(() => {
        eval(getCryptoJS())
        url = 'https://manwac2.xyz' + input
        let html = request(url)
        let key = html.match(/const encryptedPhotos = '([\s\S]*?';){3}/)[0].split("','enc'")[0].split(",'")[1]
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
                const image = $.require("hiker://page/image?rule=漫蛙");
                return image.imageDecrypt();
            }, MY_RULE.title)
            pics.push(img)
        })

        return "pics://" + pics.join("&&");

    });
    display.push({
        title: "下载",
        desc: "",
        url: "hiker://page/download.view#noRecordHistory##noRefresh##noHistory#?rule=本地资源管理",
        pic_url: "https://cdn.jsdelivr.net/gh/bgvioletsky/hiker@0.0.10/icon/manwa.png",
        col_type: "icon_small_3",
        extra: {
            chapterList: xiazai,
            info: {
                bookName: name,
                bookTopPic: pic,
                parseCode: $.toString(() => {
                    eval(getCryptoJS())
                    url = 'https://manwac2.xyz' + input
                    let html = request(url)
                    let key = html.match(/const encryptedPhotos = '([\s\S]*?';){3}/)[0].split("','enc'")[0].split(",'")[1]
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
                            const image = $.require("hiker://page/image");
                            return image.imageDecrypt();
                        }, MY_RULE.title)
                        pics.push(img)
                    })

                    return "pics://" + pics.join("&&");

                }),
                ruleName: "BGcode"
            }
        }
    })
    display.push({
        col_type: 'line'
    });

    for (var i in url) {
        display.push({
            title: story[i],
            url: url[i] + lazy,
            col_type: 'text_4'
        })
    }
    setResult(display);
}


function getImg(result) {
    let hp = {
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Referer": "https://mwcomic3.online/" + result,
        "Cookie": " _ga=GA1.1.1643448054.1691222181; show_img_host2=1; ckc=1; _ga_8BCHF90D92=GS1.1.1691222180.1.1.1691222261.60.0.0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29"
    };
    let url = "https://mwgetimg.xscodes.icu/?getimg=https://manwaz3.xyz/" + result + "?img_host=0"
    let data = request(url, { headers: hp })
    let img_url = xpathArray(data, '//div/img/@src')
    let img_url_list = "pics://"
    for (let key in img_url) {
        img_url_list = img_url_list + "https://manwa.xscodes.icu/?imageUrl=" + img_url[key] + "&&"
    }
    if (img_url_list.endsWith("&&")) {
        img_url_list = img_url_list.slice(0, -2);
    }
    return img_url_list
}

function sousuo(name) {
    let display = [];
    let url = "https://manwac2.xyz/search?keyword=" + name + "&page=" + MY_PAGE;
    let data = request(url, {
        headers: {
            "referer": "https://mwcomic3.online/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
            "cookie": "ckc=1; 0338f6aad17636a90fcff738ec241c5b=587eab99869888fc42ddec8de2c5b9ad; PHPSESSID=6cd3600b489270a3d58072af62fa25b1; show_img_host2=1; c_gender=2"
        }, timeout: 3000
    })
    let img_url = xpathArray(data, "//ul[@class='book-list']/li/div[@class='book-list-info']/a/@href")
    let title = xpathArray(data, "//ul[@class='book-list']/li/div[@class='book-list-info']/a/p[@class='book-list-info-title']/text()")
    let pic = xpathArray(data, "//ul[@class='book-list']/li/div[@class='book-list-cover']/a/img/@data-original")
    let desc = xpathArray(data, "//ul[@class='book-list']/li/div[@class='book-list-info']/a/p[@class='book-list-info-desc']/text()")
    for (var i in img_url) {
        display.push({
            title: title[i],
            url: $("hiker://empty#noRecordHistory##noHistory##immersiveTheme##autoCache#").rule(() => {
                require(config.依赖);
                Second();
            }),
            desc: desc[i],
            pic_url: pic[i],
            col_type: 'movies_3',
            extra: {
                gradient: true,
                title: title[i],
                desc: desc[i],
                pic: pic[i],
                url: 'https://manwac2.xyz/' + img_url[i],
            }
        })
    }
    setResult(display);
}
