## 同Array相同的操作
concat将一个或多个字符串连接合并  
includes用于判断一个字符串是否包含另一个字符串中  
indexOf返回调用String对象中第一次出现的指定值的索引，未找到为-1  
lastIndexOf返回调用String对象中最后出现的指定值的索引，未找到为-1   
slice提取一个字符串的一部分，返回新的字符串   

## stringToArray 
split指定分隔符，将String对象分割成字符串数组  

## 正则表达式中的操作
match一个字符串与一个正则表达式匹配  
replace返回一个由替换值替换一些或所有匹配模式的新字符   
search方法执行正则表达式和String对象直接的一个搜索匹配  

## 大小写转换
toLowerCase会调用该方法的字符串值转换为小写形式  
toUpperCase会调用该方法的字符串值转换为大写形式 

## other
charAt方法从一个字符串中返回指定的字符  
charCodeAt从字符串中返回指定字符的unicode码  
repeat构造并返回新字符串  
substr返回字符串中从指定位置开始到指定字符数的字符， 对比slice, 尤其时第二个参数的意义，substr时指长度，slice是指位置。  
substring返回一个字符串从开始索引到结束索引之间的一个子集，同slice  
trim从字符串的两端删除空白字符 