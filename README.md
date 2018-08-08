BossApp 基于react-native的SD-Wan管理APP
===========
## 目录
* [开始部署](#开始部署)

### 开始部署
----------- 
 IOS基本步骤：(基于已经安装好node和npm的系统，建议不要使用淘宝的cnpm源，会报错）
  1. 去app store下载xcode，并安装；
  2. 安装react-native-cli
  
```Bash
npm install -g react-native-cli
```
  3. 进入项目目录，npm安装所需依赖
```Bash
npm install 
```
  4. 安装好以后，build-ios
  
```Bash
react-native run-ios
```
   这里面坑比较多，有一些是国内网速导致的</br>
      1. 卡在incorrect hash：
    
 ```Bash
      Incorrect hash:

      333dca13f4d16419d02d914c1b645477d40fd725 ?/Users/dev/.rncache/boost_1_63_0.tar.gz

      Retrying...

        % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current

                                       Dload  Upload   Total   Spent    Left  Speed

      100   609    0   609    0     0   1170      0 --:--:-- --:--:-- --:--:--  1168
 ```
   这种情况是react-native在下载的第三方包时中途中断，或者是解压的时候被中断所导致的文件不符合，rn是使用curl从源获取这些文件，然后国内下载速度又特别慢，所以就有卡在这里的现象。以下是利用ss提高下载速度比较好的解决办法</br>
     删掉项目中的node_modules;</br>
     进入~/.rncache,删掉里面所有文件；</br>
     用ss挂代理，装一个shadowsocks，配置好代理；</br>
     在终端跑以下命令：</br>
     
```Bash
export ALL_PROXY=socks5://127.0.0.1:1086（端口号根据ss客户端里的配置找，这个命令是临时的，终端重启后要再跑一次）
```
   再跑一次npm install和react-native run-ios,卡住的时候不要ctrl+C，否则又要再来一次。</br>
 2.出现如下报错：
 ```Bash
 Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/roam.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist
 ```
 引用网上的解决办法：
>Open Terminal, go to your project's root folder and do:</br>
>cd node_modules/react-native/third-party/glog-0.3.4/</br>
> Run the configure script:./configure</br>

     
     

