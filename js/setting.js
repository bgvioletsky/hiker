//设置界面
function Setting(){
    setPageTitle("设置-"+config.version);
    let display=[]
    display.push({
        title: '主页设置',
        url: `#noLoading#@lazyRule=.js:putMyVar('guanli','jk');refreshPage(false);'toast://已切换到接口管理';`,
        img: "https://hikerfans.com/tubiao/movie/98.svg",
        col_type: "icon_small_3",
        extra: {
            longClick: [{
                title: "☁️云盘接口",
                js: $.toString(() => {
                    return $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
                        require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJySet.js');
                        yundiskjiekou();
                    })
                })
            }]
        }
    },{
        title: '小说设置',
        url: `#noLoading#@lazyRule=.js:putMyVar('guanli','jx');refreshPage(false);'toast://已切换到解析管理';`,
        img: "https://hikerfans.com/tubiao/movie/105.svg",
        col_type: "icon_small_3"
    },{
        title: '漫画设置',
        url: $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
            require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJySet.js');
            extension();
        }),
        img: "https://hikerfans.com/tubiao/ke/156.png",
        col_type: "icon_small_3"
    });

    setResult(display);
}