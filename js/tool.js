// 比较版本号
function compareVersions(v1, v2) {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  if (parts1[0] < parts2[0] || parts1[1] < parts2[1] || parts1[2] < parts2[2]) {
    return true;
  } else if (parts1[0] > parts2[0] || parts1[1] > parts2[1] || parts1[2] > parts2[2]) {
    return false;
  }
  return false; // 如果版本相等，则返回 false
}


function Version() {
  var nowVersion = getItem('Version', config.version); //现在版本 
  var nowtime = Date.now();
  var oldtime = parseInt(getItem('VersionChecktime', '0').replace('time', ''));
  if (getMyVar('BgCode-VersionCheck', '0') == '0' && nowtime > (oldtime + 12 * 60 * 60 * 1000)) {
      try {
          require(config.url + 'version_log.js')
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