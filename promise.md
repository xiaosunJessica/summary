# 使用promise方式加载图片

  ```javascript
  function loadImg(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.onLoad = () => {
        resolve(img)
      }
      img.error = () => {
        reject()
      }
    })
  }
  ```  

# 使用promise方式实现ajax请求  

  ```javascript
  function request(method, url, async, data) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHTTPRequest();
      xhr.open(method, url, async) 
      if (data && (method && method.toLowerCase()) === 'post') {
        xhr.send(data)
      } else {
        xhr.send()
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300)
          resolve()
        } else {
          reject()
        }
      }
    })
  }
  ```
