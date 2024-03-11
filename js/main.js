function Yiji(){

}

function Version() {
    var nowVersion = getItem('Version', "0.0.1");//现在版本 
    var nowtime = Date.now();
    var oldtime = parseInt(getItem('VersionChecktime','0').replace('time',''));
    if (getMyVar('SrcJuying-VersionCheck', '0') == '0' && nowtime > (oldtime+12*60*60*1000)) {
        try {
            eval(request(config.依赖.match(/http(s)?:\/\/.*\//)[0].replace('/Ju/','/master/') + 'SrcTmplVersion.js'))
            if (parseFloat(newVersion.SrcJuying) > parseFloat(nowVersion)) {
                confirm({
                    title:'发现新版本，是否更新？', 
                    content:nowVersion+'=>'+newVersion.SrcJuying+'\n'+newVersion.SrcJuyingdesc[newVersion.SrcJuying], 
                    confirm: $.toString((nowtime,newVersion) => {
                        setItem('Version', newVersion);
                        setItem('VersionChecktime', nowtime+'time');
                        deleteCache();
                        delete config.依赖;
                        refreshPage();
                    },nowtime, newVersion.SrcJuying),
                    cancel:''
                })
                log('检测到新版本！\nV'+newVersion.SrcJuying+'版本》'+newVersion.SrcJuyingdesc[newVersion.SrcJuying]);
            }
            putMyVar('SrcJuying-Version', '-V'+newVersion.SrcJuying);
        } catch (e) { }
        putMyVar('SrcJuying-VersionCheck', '1');
    }else{
        putMyVar('SrcJuying-Version', '-V'+nowVersion);
    }
}
