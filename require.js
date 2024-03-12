
let  data  =fetch(requirelist[i].url + 'bgvioletsky/hiker/main/version', { timeout: 2000 });
let  versionArr =data.split('.');
version=`v${versionArr[0]}.${versionArr[1]}.${parseInt(versionArr[2])+1}`;