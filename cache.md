# HTTP缓存
  浏览器与服务器之间的通信方式是应答模式。    
  最初，进入浏览器，首次发起请求，此时，浏览器肯定是不会有缓存的。因此，其通信过程如下图所示

   <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/storage/storage1.png" alt="图1" title="图1" width="300" height="300" />
   在上图可以看出：

   - 浏览器每次发起请求，都会先在浏览器缓存中查找请求的结果及缓存标识  
   - 浏览器每次拿到换回的请求结果，都会将结果和标识存入浏览器缓存中。

## 不同情况下的缓存过程

  - 当从浏览器没有获取到缓存结果和缓存标识的情况，其情况同第一次发起http请求。如下图所示：

     <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/storage/storage2.png" alt="图2" title="图2" width="300" height="300" />  
  
  - 当浏览器缓存存在缓存结果和缓存标识，但结果和标识失效的情况下，此时，使用协商缓存。如下图所示：

     <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/storage/storage3.png" alt="图3" title="图3" width="300" height="300" />  
    
  - 当强缓存有效，即浏览器缓存中的缓存结果和标识都存在且有效。此时，直接从浏览器缓存获取，不需要与服务器交互。如下图所示： 
  
     <img src="https://raw.githubusercontent.com/xiaosunJessica/interview/master/images/storage/storage4.png" alt="图3" title="图3" width="300" height="300" />  
  
  ## 强缓存
  当浏览器向服务器发起请求时，服务器会将缓存规则放入HTTP响应报文的HTTP头中和相应结果一起返回给浏览器，强制缓存就是向浏览器缓存查找请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。控制强缓存的字段是Expires和Cache-control,其中Cache-Control的优先级高于Expires。

  ### Expires  

  Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间。即客户端发起请求时，如果客户端的时间小于Expires的值时，使用缓存的结果。Expires是使用客户端的时间与服务器返回的时间做对比，如果客户端的与服务器由于某些原因发生时间误差，此时，强缓存会失效，没有意义。

  ### Cache-Control  
  Cache-Control主要取值为：  
  - public: 所有内容被缓存（客户端和服务器都可以）  
  - private: 只有客户端内容可以缓存（默认值）  
  - no-cache: 客户端缓存，但是至于是否需要缓存需要协商验证  
  - no-store: 所有内容都不会缓存，（即强制缓存和协商缓存都不使用）  
  - max-age = XXX: 缓存内容在XXX秒后失效  
  
  ## 协商缓存 
  协商缓存是带条件的，是在强缓存失效后，携带缓存标识向服务器发起请求，由服务器根据缓存标识来决定是否使用缓存的过程。它有两种情况：
  一是内容没有变化，使用缓存的内容，即缓存有效，返回304.  
  二是内容发生改变，使用服务器返回的结果，即缓存失效，返回200. 

  使用协商缓存的字段有两个，分别为Last-modified/If-Modified-Since与Etag/If-none-match, 其中，Etag/If-none-match的优先级高于Last-modified/If-Modified-Since.  

  ### Last-Modified/If-Modified-Since
  Last-Modified是服务器响应请求时，返回该资源文件在服务器最后的修改时间。  
  If-Modified-Since则是客户端再次发起请求时，携带上次请求返回的last-modified。通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求时间，发现请求头含有If-Modified-Since字段，则会根据If-Modified-Since的字段值与该资源最后在服务器修改时间做对比，如果服务器的资源最后被修改时间大于If-Modified-Since的字段值，则重新返回资源，状态码为200；否则，返回304，代表资源无更新，可继续使用缓存文件。

  ### Etag/If-None-Match  
  Etag是服务器响应请求时，返回当前资源文件的一个唯一标识。
  If-None-Match是客户端再次发起请求时，携带上次请求返回的唯一标识ETag值，通过该字段告诉服务器该资源上次请求返回的唯一标识值。服务器收到该请求后，发现请求头中的If-None-Match，则会根据If-None-Match的字段值与该资源在服务器的Etag做对比，如果一致，则代表资源无更新，返回状态码304；不一致则重新返回资源文件，返回状态码200.
  
  ### 对比强缓存和协商缓存

 对比类型 | 强缓存 | 协商缓存
---- | --- | ---
http状态码 | 200 | 304
缓存位置 |  本地浏览器 | 本地浏览器
谁来决定 | 本地浏览器 | 服务器
是否有效 | F5刷新无效，ctrl + F5刷新无效 | F5刷新有效， Ctrl+F5刷新无效

  ## 总结  
  强制缓存优于协商缓存，强制缓存是从浏览器缓存中获取的，协商缓存是带条件的，需要向服务器发起请求。
	
  ### 优化策略-消灭304
   - 协商缓存本身也有http请求的损耗，尽可能将静态文件存储较长时间，多利用强缓存而不是协商缓存，但同时存在一个问题，当文件更新后，不能及时更新内容，可采取hash方式对文件命名



  
## 参考链接
  1. http://mp.weixin.qq.com/s?srcid=04270LewQDCrOr1hW9vh5gHL&scene=23&mid=2651228395&sn=dcf7e3bd518f1e189ce17eaed94c27bb&idx=1&__biz=MjM5MTA1MjAxMQ%3D%3D&chksm=bd49516f8a3ed879221bf28bf68ac00c4733a6048c54ea90e75a9e2315a262c2d66fb29a4a34&mpshare=1#rd&appinstall=0
	2. https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651554722&idx=2&sn=1fd2eef32a303056beecbe8b0da37512&chksm=80255463b752dd75ac981952e0bd5211939e52244776b55a044bc2eeb9ae2d6b1d9c3f2e16c6&scene=38#wechat_redirect