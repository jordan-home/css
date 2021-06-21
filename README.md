# 项目介绍
CSS3的一些例子

## 在线测试链接
https://dabblet.com/gist/cd33da5d1a48046746cd

## 属性描述
### 01-半透明边框
* background-clip: border-box	｜ padding-box｜content-box; 元素背景被裁剪到的位置，默认border-box。半透明边框时，要求使用padding-box+半透明border颜色（hsla or rgba)。

### 02-多重边框
* box-shadow 方案
* outline方案

### 03-灵活的背景定位
* background-position
* 特殊情型：定位结合padding时，background-origin

### 04-边框内圆角
* box-shadow + border-radius + outline: box-shadow宽度取border-radius一半

### 05-条纹背景
* background-size: linear-gradient | repeating-linear-gradient

### 06-复杂的背景图
* background-size, background-position, background-image

### 07-伪随机背景
什么是伪随机背景？就是在可见范围内，条纹排列呈现不规律。
策略：一种颜色作为底色，其他颜色作为条纹，然后再让条纹以不同的间隔进行重复平铺。
* 应该把平铺间距最大的贴片安排在最顶层
* 为了显得随机，需要重复贴片的单位大小尽量大，此时使用蝉原则。每个条纹的贴片长度互为相对质数，则重复单元长度为它们的乘积。该原则适用于有规律重复的场景，不限于随机背景

### 08-连续的图像边框
```css
  border: 20px solid transparent;
  background: linear-gradient(white, white) padding-box, url('./bg.png') border-box 0 / cover;
```
### 09-椭圆形
```css
  /** 1 2 3 4分别代表左上、右上、右下和左下；x表示borderRadius水平半径，y代表borderRadius竖直半径*/
  border-radius: x1 x2 x3 x4 / y1 y2 y3 y4;
```
### 10-平行四边形
方案1: transform: skewX(-30deg): 内容也会倾斜
方案2: 容器skewX(n) + 子元素skewX(-n): 需要使用两个元素
方案3: 伪元素方案

### 11-菱形
方案1: 仅仅适合正方形。 父元素rotate(45deg);子元素rotate(-45deg),放大1.42倍
方案2: clip-path,通用

### 12-切角
方案1: 渐变 linear-gradient | radial-gradient
方案2:裁切 clip-path
方案3: border-image: SVG

### 13-梯形标签页
使用 伪元素 + 矩形3D旋转形成梯形

### 14-简单的饼图
方案1: 伪元素：animation + transform
方案2: svg

### 15-单侧投影
box-shadow 是元素本身大小加上模糊范围进行偏移形成的, 它看起来但实际上并非位于元素下层
```css
/* x y是偏移量,r1是模糊半径,r2是扩张半径可负值,c阴影颜色 */
box-shadow: x y r1 r2 c;
```

### 16-不规则投影
不规则指 添加了伪元素或半透明的装饰的元素，它们的投影可以用滤镜
```css
filter: drop-shadow(x y r1 c)
```

### 17-染色效果
方案1: 两个版本的图片（染色的和没染色的）切换
方案2: 透明遮罩
方案3: 半透明图片放在实色背景上
方案4: canvas
方案5: 滤镜
方案6: 混合模式：上层元素的颜色与下层进行混合，保留上层HSL亮度信息，从下层吸取色相饱和度信息

### 18-毛玻璃效果
方案：伪元素 + background + filter: blur()

### 19-折角效果
方案1: 伪元素构造两个三角形，一个模拟折角，一个盖住另一半（一般只适用于纯色背景）
方案2: background: linear-gradient() + 其他样式

### 20-连字符换行
连字符分为硬连字符和软连字符：
硬连字符： ＆hyphen; ，即使该单词没有中间换行，也会显示连字符
软连字符： ＆shy; ，只有单词中间换行才显示连字符
```css
  hyphens：none; / *即使单词中有换行符，也不会换行，只会在空白处换行* /
  hyphens：manual; / *只有单词中有建议换行符才会换行，即插入&shy; * /
  hyphens：auto; / *浏览器在适当的位置自动插入连字符换行* /
```
hyphens 结合 lang="XX"生效

### 21-插入换行
主要考虑伪元素如`:after { content: '\A' }`,并结合`white-space: pre;`。

### 22-文本行斑马条纹
结合渐变背景和em单位实现

### 23-调整tab宽度
应用场景：网页上展示代码
`tab-size` `pre` `code`
### 24-连字
如在浏览器`fiffl`中，`f`和`i`,  `f`和`l`发生了连字
为了避免这种`bug`,可以使用：
```css
/* 通用连字 酌情连字 historical连字*/
/* none什么连字效果也没有 normal使用默认值 */
font-variant-ligatures: common-ligatures discretionary-ligatures historical-ligatures; 
/** 对应关闭xx属性为: no-xx-ligatures **/
```

### 25-单独给单个或多个设置字体
`@font-face`定义一个字体，限定使用范围；然后给一段话设置多个字体，利用字体排列顺序来保证目标符号使用目标字体，其他符号使用其他字体。

## 26-下划线效果
常见的实现方式：
* background-image
* text-decoration
* 伪元素
* box-shadow

## 27-文字仿真效果
主要通过利用text-shadow来实现

## 28-环形文字
best way: 借助svg实现