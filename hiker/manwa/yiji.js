function main() {
    let d = [];
    let yijimenu = [{
        title: "收藏", url: "hiker://collection", pic_url: "hiker://files/bgHouse/src/system/1.svg", col_type: "icon_5"
    }, {
        title: "历史", url: "hiker://history", pic_url: "hiker://files/bgHouse/src/system/4.svg", col_type: "icon_5"
    }, {
        title: "分类", url:  $("#noLoading#").lazyRule(() => {
            if(getItem("fenlei")=="off"){
                setItem("fenlei", "on");
                refreshPage(false);
                return "hiker://empty";
            }else {
                setItem("fenlei", "off");
                refreshPage(false);
                return "hiker://empty";
            }

        }), pic_url: "hiker://files/bgHouse/src/system/6.svg", col_type: "icon_5"
    }, {
        title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            shezi();
        }), pic_url: "hiker://files/bgHouse/src/system/3.svg", col_type: "icon_5"
    }, {
        title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            sousuo();
        }), pic_url: "hiker://files/bgHouse/src/system/22.svg", col_type: "icon_5"
    }, {
        col_type: "line"
    }]
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(eval(yijimenu[i]))
        }
    }
    require(config.localhost + "js/" + url + "/1.js")
    d=d.concat(rule())
    setResult(d);
}
