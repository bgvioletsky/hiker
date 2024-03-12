//一级菜单
function Frist() {
    if (getMyVar('BgCode-VersionCheck', '0') == '0') {
        Version();
    }
    let datasource = getItem('BgCodesource', 'sougou');
    const Color = "#3399cc";
    const categorys = datasource == "sougou" ? ['电视剧', '电影', '动漫', '综艺', '纪录片'] : ['电视剧', '电影', '动漫', '综艺'];
    const listTabs = datasource == "sougou" ? ['teleplay', 'film', 'cartoon', 'tvshow', 'documentary'] : ['2', '1', '4', '3']; //['/dianshi/list','/dianying/list','/dongman/list','/zongyi/list'];
    const fold = getMyVar('BgCode$fold', "0");
    const 类型 = getMyVar('BgCode$类型', '');
    const 地区 = getMyVar('BgCode$地区', '');
    const 年代 = getMyVar('BgCode$年代', '');
    const 资源 = getMyVar('BgCode$资源', '');
    const 明星 = getMyVar('BgCode$明星', '');
    const 排序 = getMyVar('BgCode$排序', '');
    let headers = {
        'User-Agent': PC_UA
    }
    if (datasource == "sougou") {
        MY_URL = "https://waptv.sogou.com/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=" + getMyVar('BgCode$listTab', 'teleplay') + "&filter=&start=" + (MY_PAGE - 1) * 15 + "&len=15&fr=filter";
        if (类型 != "") {
            MY_URL = MY_URL + "&style=" + 类型;
        }
        if (地区 != "") {
            MY_URL = MY_URL + "&zone=" + 地区;
        }
        if (年代 != "") {
            MY_URL = MY_URL + "&year=" + 年代;
        }
        if (资源 != "") {
            MY_URL = MY_URL + "&fee=" + 资源;
        }
        if (明星 != "") {
            MY_URL = MY_URL + "&emcee=" + 明星;
        }
        if (排序 != "") {
            MY_URL = MY_URL + "&order=" + (排序 == "最新" ? "time" : "score");
        }
    } else {
        MY_URL = "https://api.web.360kan.com/v1/filter/list?catid=" + getMyVar('BgCode$listTab', '2') + "&size=36&pageno=" + MY_PAGE;
        if (排序 != "") {
            MY_URL = MY_URL + "&rank=" + 排序;
        }
        if (类型 != "") {
            MY_URL = MY_URL + "&cat=" + 类型;
        }
        if (地区 != "") {
            MY_URL = MY_URL + "&area=" + 地区;
        }
        if (年代 != "") {
            MY_URL = MY_URL + "&year=" + 年代;
        }
        if (明星 != "") {
            MY_URL = MY_URL + "&act=" + 明星;
        }
        headers.Referer = "https://www.360kan.com";
    }
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
            title: fold === '1' ? '““””<b><span style="color: #F54343">∨</span></b>' : '““””<b><span style="color:' + Color + '">∧</span></b>',
            url: $('#noLoading#').lazyRule((fold) => {
                putMyVar('BgCode$fold', fold === '1' ? '0' : '1');
                refreshPage(false);
                return "hiker://empty";
            }, fold),
            col_type: 'scroll_button',
        })

        for (var i in categorys) {
            display.push({
                title: getMyVar('BgCode$listTab', datasource == "sougou" ? 'teleplay' : '2') === listTabs[i] ? '““””<b><span style="color:' + Color + '">' + categorys[i] + '</span></b>' : categorys[i],
                url: $('#noLoading#').lazyRule((listTab) => {
                    putMyVar('BgCode$listTab', listTab);
                    clearMyVar('BgCode$类型');
                    clearMyVar('BgCode$地区');
                    clearMyVar('BgCode$年代');
                    clearMyVar('BgCode$资源');
                    clearMyVar('BgCode$明星');
                    clearMyVar('BgCode$排序');
                    refreshPage(false);
                    return "hiker://empty";
                }, listTabs[i]),
                col_type: 'scroll_button'
            });
        }

        display.push({
            col_type: "blank_block"
        });
        try {
            var html = JSON.parse(request(MY_URL, {
                headers: headers
            }));
        } catch (e) {
            setItem('BgCodesource', getItem('BgCodesource', 'sougou') == 'sougou' ? '360' : 'sougou');
            refreshPage(true);
            toast("当前主页数据源连接异常，已自动切换！");
        }

        if (fold === '1') {
            if (datasource == "sougou") {
                let filter = html.listData.list.filter_list;
                for (let i in filter) {
                    display.push({
                        title: filter[i].name == "排序" ? 排序 == "" ? '““””<span style="color:red">最热</span>' : "最热" : (类型 == "" && filter[i].name == "类型") || (地区 == "" && filter[i].name == "地区") || (年代 == "" && filter[i].name == "年代") || (资源 == "" && filter[i].name == "资源") || (明星 == "" && filter[i].name == "明星") ? '““””<span style="color:red">全部</span>' : "全部",
                        url: $('#noLoading#').lazyRule((name) => {
                            putMyVar('BgCode$' + name, '');
                            refreshPage(false);
                            return "hiker://empty";
                        }, filter[i].name),
                        col_type: 'scroll_button',
                    })
                    let option_list = filter[i].option_list;
                    for (let j in option_list) {
                        display.push({
                            title: getMyVar('BgCode$' + filter[i].name, '') == option_list[j] ? '““””<span style="color:red">' + option_list[j] + '</span>' : option_list[j],
                            url: $('#noLoading#').lazyRule((name, option) => {
                                putMyVar('BgCode$' + name, option);
                                refreshPage(false);
                                return "hiker://empty";
                            }, filter[i].name, option_list[j]),
                            col_type: 'scroll_button'
                        });
                    }
                    display.push({
                        col_type: "blank_block"
                    });
                }
            } else {
                try {
                    let filterjs = fetchCache('https://s.ssl.qhres2.com/static/ebf701e82844fbc9.js', 360, {
                        timeout: 2000
                    }); //3deb65e2c118233e.js
                    let filters = filterjs.split(`defaultId:"rankhot"},`); //filterjs.match(/defaultId:\"rankhot\"\},(.*?),o=i/)[1];
                    filters.splice(0, 1);
                    filters = filters.map(item => {
                        return '[' + (item.split(',o=i')[0].split(',r=i')[0])
                    })
                    let filterstr = filters[listTabs.indexOf(getMyVar('BgCode$listTab', '2'))];
                    if (getMyVar('BgCode$listTab', '2') == '1' || getMyVar('BgCode$listTab', '2') == '2') {
                        eval('var acts = ' + filterstr.split(',display=')[1]);
                        filterstr = filterstr.split(',display=')[0];
                    }
                    eval('var filter = ' + filterstr);
                } catch (e) {
                    log(e.message);
                    var filter = [];
                }

                for (let i in filter) {
                    let option_list = filter[i].data;
                    for (let j in option_list) {
                        let optionname = option_list[j].id ? option_list[j].id : option_list[j].title;
                        display.push({
                            title: getMyVar('BgCode$' + filter[i].label, '全部') == optionname ? '““””<span style="color:red">' + (optionname == "lt_year" ? "更早" : optionname) + '</span>' : (optionname == "lt_year" ? "更早" : optionname),
                            url: $('#noLoading#').lazyRule((name, option) => {
                                if (option == '') {
                                    clearMyVar('BgCode$' + name);
                                } else {
                                    putMyVar('BgCode$' + name, option);
                                }
                                refreshPage(false);
                                return "hiker://empty";
                            }, filter[i].label, option_list[j].id),
                            col_type: 'scroll_button'
                        });
                    }

                    if (typeof (acts) != "undefined" && filter[i].label == '明星') {
                        let act = acts[getMyVar('BgCode$地区', '全部')] || acts['中国' + getMyVar('BgCode$地区', '全部')] || acts['全部'];
                        act.forEach(item => {
                            if ($.type(item) != 'string') {
                                item = item.id;
                            }
                            display.push({
                                title: getMyVar('BgCode$明星', '全部') == item ? '““””<span style="color:red">' + item + '</span>' : item,
                                url: $('#noLoading#').lazyRule((option) => {
                                    if (option == '') {
                                        clearMyVar('BgCode$明星');
                                    } else {
                                        putMyVar('BgCode$明星', option);
                                    }
                                    refreshPage(false);
                                    return "hiker://empty";
                                }, item),
                                col_type: 'scroll_button'
                            });
                        })
                    }
                    display.push({
                        col_type: "blank_block"
                    });
                }

                let ranks = [{
                    title: "最近热映",
                    id: "rankhot"
                }, {
                    title: "最近上映",
                    id: "ranklatest"
                }, {
                    title: "最受好评",
                    id: "rankpoint"
                }];
                for (let i in ranks) {
                    if (i < 2 || (getMyVar('BgCode$listTab', '2') == '1' || getMyVar('BgCode$listTab', '2') == '2')) {
                        display.push({
                            title: getMyVar('BgCode$排序', 'rankhot') == ranks[i].id ? '““””<span style="color:red">' + ranks[i].title + '</span>' : ranks[i].title,
                            url: $('#noLoading#').lazyRule((id) => {
                                putMyVar('BgCode$排序', id);
                                refreshPage(false);
                                return "hiker://empty";
                            }, ranks[i].id),
                            col_type: 'scroll_button'
                        });
                    }

                }
            }
        }
    } else {
        var html = JSON.parse(request(MY_URL, {
            headers: headers
        }));
    }
    var seachurl = $('').lazyRule(() => {
        return $('hiker://empty#noRecordHistory##noHistory#').rule((name) => {
            require(config.conf.match(/http(s)?:\/\/.*\//)[0].replace('/Ju/', '/master/') + 'SrcJyXunmi.js');
            xunmi(name);
        }, input);
    });
    let list = [];
    if (datasource == "sougou") {
        list = html.listData.results;
        list = list.map(item => {
            return {
                name: item.name,
                img: item.v_picurl,
                url: "https://v.sogou.com" + item.url.replace('teleplay', 'series').replace('cartoon', 'series'),
                desc: item.ipad_play_for_list.finish_episode ? item.ipad_play_for_list.episode == item.ipad_play_for_list.finish_episode ? "全集" + item.ipad_play_for_list.finish_episode : "连载" + item.ipad_play_for_list.episode + "/" + item.ipad_play_for_list.finish_episode : ""
            };
        })
    } else if (datasource == "360") {
        list = html.data ? html.data.movies : [];
        list = list.map(item => {
            return {
                name: item.title,
                img: /^http/.test(item.cdncover) ? item.cdncover : 'https:' + item.cdncover,
                url: "https://api.web.360kan.com/v1/detail?cat=" + getMyVar('BgCode$listTab', '2') + "&id=" + item.id,
                desc: item.total ? item.total == item.upinfo ? item.total + '集全' : '连载' + item.upinfo + "/" + item.total : item.tag ? item.tag : item.doubanscore ? item.doubanscore : ""
            };
        })
    }
// log("bgcode")
    for (var i in list) {
        display.push({
            title: list[i].name,
            img: list[i].img + '@Referer=',
            url: "hiker://empty##" + list[i].url + "#immersiveTheme##autoCache#",
            desc: list[i].desc,
            extra: {
                pic: list[i].img,
                name: list[i].name,
                datasource: getItem('BgCodesource', 'sougou'),
            }
        });
    }

    setResult(display);
}

function Version() {
    var nowVersion = getItem('Version', config.version); //现在版本 
    var nowtime = Date.now();
    var oldtime = parseInt(getItem('VersionChecktime', '0').replace('time', ''));
    if (getMyVar('BgCode-VersionCheck', '0') == '0' && nowtime > (oldtime + 12 * 60 * 60 * 1000)) {
        try {
            eval(request(config.url + 'version_log.js'))
            require(config.url + 'js/tool.js')
            if (compareVersions(nowVersion, newVersion.BgCode)) {
                confirm({
                    title: '发现新版本，是否更新？',
                    content: nowVersion + '=>' + newVersion.BgCode + '\n' + newVersion.BgCodedesc[newVersion.BgCode],
                    confirm: $.toString((nowtime, newVersion) => {
                        setItem('Version', newVersion);
                        setItem('VersionChecktime', nowtime + 'time');
                        deleteCache();
                        delete config.conf;
                        refreshPage();
                    }, nowtime, newVersion.BgCode),
                    cancel: ''
                })
                log('检测到新版本！\n《V' + newVersion.BgCode + '版本》' + newVersion.BgCodedesc[newVersion.BgCode]);
            }
            putMyVar('BgCode-Version', '-V' + newVersion.BgCode);
        } catch (e) {}
        putMyVar('BgCode-VersionCheck', '1');
    } else {
        putMyVar('BgCode-Version', '-V' + nowVersion);
    }
}