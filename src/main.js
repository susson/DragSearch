/**
 * 在document上代理 dragend 事件
 */
document.addEventListener('dragend', function(e){
  const selection = window.getSelection().toString()
  if (selection) {
    console.log('划词内容:', `-=${selection}=-`)

    // 如果是链接，则在新标签页中打开
    // -= 定义URL的正则表达式=-
    const pattern = new RegExp('^(https?:\\/\\/)' + // 强制要求http://或https://
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // 域名
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // 或者IP地址
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // 端口和路径
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // 查询字符串
      '(\\#[-a-z\\d_]*)?$', 'i') // 锚点

    if (pattern.test(selection)) {
      chrome.runtime.sendMessage({ action: "openNewTab", url: selection });
    } else {
      chrome.runtime.sendMessage({ action: "search", keyWords: selection });
    }
  }
})
