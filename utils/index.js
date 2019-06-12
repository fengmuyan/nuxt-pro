import CryptoJS from 'crypto-js'
/**
 * @desc 格式化时间
 * @param {date} time 时间对象或时间戳
 * @param {String} cFormat default '{y}-{m}-{d} {h}:{i}:{s}'
 * @return {String} 2018-11-29 17:22:10 / 2018-11-29
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * @desc: 深拷贝
 * @param {Object/Array} source 期待对象或数组
 * @return {Object/Array}  返回新的对象或数组
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = source[keys].constructor === Array ? [] : {}
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @desc 返回顶部
 * @param {String} element
 * @param {String} to
 * @param {Number} duration
 */
export function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return
  }
  const difference = to - element.scrollTop
  const perTick = difference / duration * 10
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}

/**
 * @desc 数据加密
 * @param {Object} word 待加密字符串或实例化的对象
 * @param {String} keyStr 加密需要用到的16位字符串的key
 * @returns {Function}
 */
export function encrypt(word, keyStr = 'jx360jx360jx3601', ivStr = 'jx360ijx360jx360') {
  var iv = CryptoJS.enc.Utf8.parse(ivStr);
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * @desc 数据解密
 * @param {Object} word 待解密字符串或实例化的对象
 * @param {String} keyStr 解密需要用到的16位字符串的key
 * @returns {Function}
 */
export function decrypt(word, keyStr = 'jx360jx360jx3601', ivStr = 'jx360ijx360jx360') {
  var iv = CryptoJS.enc.Utf8.parse(ivStr);
  var key = CryptoJS.enc.Utf8.parse(keyStr);
  let base64 = CryptoJS.enc.Base64.parse(word);
  let src = CryptoJS.enc.Base64.stringify(base64);
  var decrypt = CryptoJS.AES.decrypt(src, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}