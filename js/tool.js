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
