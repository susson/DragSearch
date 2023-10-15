/**
 * 在document上代理 dragend 事件
 */
document.addEventListener('dragend', function(e){
  const selection = window.getSelection().toString()
  if (selection) {
    // console.log('划词内容:', selection)
    chrome.runtime.sendMessage({ action: "search", keyWords: selection });
  }
})
