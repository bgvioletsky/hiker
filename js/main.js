//一级菜单
function Frist() {
    var display = [];
    if (MY_PAGE == 1) {
        if ($.type(storage0.getItem('buttonmenu1')) == "object") {
            setItem('buttonmenu1', storage0.getItem('buttonmenu1').name);
        }
        if ($.type(storage0.getItem('buttonmenu2')) == "object") {
            setItem('buttonmenu2', storage0.getItem('buttonmenu2').name);
        }
        if ($.type(storage0.getItem('buttonmenu3')) == "object") {
            setItem('buttonmenu3', storage0.getItem('buttonmenu3').name);
        }
        if ($.type(storage0.getItem('buttonmenu4')) == "object") {
            setItem('buttonmenu4', storage0.getItem('buttonmenu4').name);
        }
        if ($.type(storage0.getItem('buttonmenu5')) == "object") {
            setItem('buttonmenu5', storage0.getItem('buttonmenu5').name);
        }
        let btnmn1 = getItem('buttonmenu1', "设置");
        let btnmn2 = getItem('buttonmenu2', "收藏");
        let btnmn3 = getItem('buttonmenu5', "历史");
        let btnmn4 = getItem('buttonmenu3', "搜索");
        let btnmn5 = getItem('buttonmenu4', "展示");
        let buttonmenu = {
            "设置": {
                img: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/bgvioletsky/hiker/main/icon/setting.svg",
                url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                    require(config.conf.match(/http(s)?:\/\/.*\//)[0] + 'setting.js');
                    Setting();
                })
            },
            "历史": {
                img: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/bgvioletsky/hiker/main/icon/history.svg",
                url: "hiker://history?rule=" + MY_RULE.title
            },
            "收藏": {
                img: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/bgvioletsky/hiker/main/icon/collection.svg",
                url: "hiker://collection?rule=" + MY_RULE.title
            },
            "搜索": {
                img: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/bgvioletsky/hiker/main/icon/search.svg",
                url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                    require(config.conf);
                    Search();
                })
            },
            "展示": {
                img: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/bgvioletsky/hiker/main/icon/show.svg",
                url: $("hiker://empty##fypage#noRecordHistory##noHistory#").rule(() => {
                    require(config.conf);
                    Show();
                })
            },
        }
        let fristmenu = [{
                title: btnmn1,
                url: buttonmenu[btnmn1].url,
                pic_url: buttonmenu[btnmn1].img,
                col_type: 'icon_5',
                extra: {
                    id: 'buttonmenu1',
                }
            },
            {
                title: btnmn2,
                url: buttonmenu[btnmn2].url,
                pic_url: buttonmenu[btnmn2].img,
                col_type: 'icon_5',
                extra: {
                    id: 'buttonmenu2'
                }
            },
            {
                title: btnmn3,
                url: buttonmenu[btnmn3].url,
                pic_url: buttonmenu[btnmn3].img,
                col_type: 'icon_5',
                extra: {
                    id: 'buttonmenu2'
                }
            },
            {
                title: btnmn4,
                url: buttonmenu[btnmn4].url,
                pic_url: buttonmenu[btnmn4].img,
                col_type: 'icon_5',
                extra: {
                    id: 'buttonmenu2'
                }
            },
            {
                title: btnmn5,
                url: buttonmenu[btnmn5].url,
                pic_url: buttonmenu[btnmn5].img,
                col_type: 'icon_5',
                extra: {
                    id: 'buttonmenu2'
                }
            },
            {
                col_type: 'line'
            }
        ]
        fristmenu.forEach((item) => {
            display.push(item);
        })
        for (let i = 0; i < 10; i++) {
            display.push({
                col_type: "blank_block"
            })
        }
        display.push({
            col_type: "blank_block"
        });
    }
    setResult(display);
}

function Second(){
    let display=[]
    var pic = MY_PARAMS.pic;
    var name = MY_PARAMS.name;
    var pic = MY_PARAMS.pic;
    display.push({
        title: name,//详情1
        desc: details2,//详情2
        pic_url: pic + '@Referer=',//图片
        url: pic + '#noHistory#',//链接
        col_type: 'movie_1_vertical_pic_blur',
        extra: {
            gradient: true
        }

    });
    var erjimenu = [
        {
            title: "剧情简介",
            url: /\.sogou\./.test(MY_URL)?$('hiker://empty#noRecordHistory##noHistory#').rule((url) => {
                    var d=[];
                    var html = request(url, {headers:{ 'User-Agent': PC_UA }, timeout:3000 });
                    var story=parseDomForHtml(html, 'body&&.srch-result-info&&Html').replace(/<\/a><a/g,',</a><a');
                    for(let i = 0;;i++){
                        try{
                            d.push({
                                title:parseDomForHtml(story, 'div,' +i+ '&&Text').replace('更多',''),
                                col_type: 'rich_text'
                            });
                            d.push({
                                col_type: 'line'
                            });
                        }catch(e){
                            break;
                        }
                    };
    
                    try{
                        var photos=parseDomForArray(html, '#photoList&&.sort_lst_bx&&a');
                        if(photos.length>0){
                            d.push({
                                title: '剧照：',
                                col_type: 'rich_text'
                            });
                            d.push({
                                col_type: 'line'
                            });
                        }
                        for(var i in photos){
                            d.push({
                                pic_url: parseDomForHtml(photos[i], 'img&&data-src'),
                                url: 'hiker://empty',
                                col_type: 'pic_1_full'
                            });
                            d.push({
                                col_type: 'line'
                            });
                        }
                    }catch(e){};
                    setHomeResult(d);
                }, MY_URL): $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
                    setHomeResult([{
                        title: '影片简介：\n' + getMyVar('moviedesc',''),
                        col_type: 'long_text'
                    }]);
                }),
            pic_url: 'https://hikerfans.com/tubiao/messy/32.svg',
            col_type: 'icon_small_3'
        },
        {
            title: "观影设置",
            url: $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
                    require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJyMenu.js');
                    lookset();
                }),
            pic_url: 'https://hikerfans.com/tubiao/messy/37.svg',
            col_type: 'icon_small_3'
        },
        {
            title: "更多片源",
            url: !fileExist('hiker://files/rules/Src/Juying/jiekou.json')?"toast://分享页面或没有接口，无法扩展更多片源":getMyVar('SrcJy$back')=='1'?`#noLoading#@lazyRule=.js:back(false);'hiker://empty'`:$('hiker://empty#noRecordHistory##noHistory#').rule((name) => {
                require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJyXunmi.js');
                xunmi(name);
            }, MY_PARAMS.name),
            pic_url: 'https://hikerfans.com/tubiao/messy/25.svg',
            col_type: 'icon_small_3',
            extra: {
                key: MY_PARAMS.name,
                longClick: [{
                    title: "云盘君",
                    js: $.toString(() => {
                        return "#noHistory#hiker://page/soup?rule=云盘君";
                    })
                },{
                    title: "云盘君.简",
                    js: $.toString(() => {
                        return "#noHistory#hiker://page/sou?p=fypage&rule=云盘君.简";
                    })
                }]
            }
        }
    ]
    for(var i in erjimenu){
        display.push(
            erjimenu[i]
        )
    }
    display.push({
        desc: '‘‘’’<small><font color=#f20c00>此规则仅限学习交流使用，请于导入后24小时内删除，任何团体或个人不得以任何方式方法传播此规则的整体或部分！</font></small>',
        url: 'toast://温馨提示：且用且珍惜！',
        col_type: 'text_center_1',
        extra: {
            id: "listloading",
            lineVisible: false
        }
    });
    addListener("onClose", $.toString(() => {
        clearMyVar('SrcJyDisk$back');
    }));
    setResult(display);
}
