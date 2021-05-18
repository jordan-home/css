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