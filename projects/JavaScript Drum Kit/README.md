# Day 1 Drum Kit :octocat:

## 目標 :alien:

敲擊鍵盤發出相對應的聲音，並且有動畫效果，顯示正在敲擊的按鍵。

解決流程:
1. 監聽哪個鍵按下
2. 發出相對應的聲音
3. 動畫顯示按鍵被按下
4. 動畫結束移除效果


## HTML :muscle:

1. `<kbd>*</kbd>` 有特殊樣式的 tag，用來表示從鍵盤輸入放入的內容*

```text
輸入 <kbd>ok</kbd> 表示以閱讀過內容
```
輸出結果:
輸入 <kbd>ok</kbd> 表示以閱讀過內容

2. `data-*`創造自定義的屬性*，專案里使用這個屬性將鍵盤及相應的聲音檔相連

```html
<div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
```
使用規則:
- 不能包含大寫字母
- 可以是任何形式的 `string`

## CSS :open_mouth:

1. `html {font-size: 10px;}` 
`rem` 的大小依據 `html` 的設定，`em` 根據 parent 的大小，預設文字大小為 `16px`

2. `display: flex` 用在 parent 上，對所有的 children 進行調整
- `justify-content` (main-axis) 進行內容左右排版
```text
flex-start / flex-end / center / space-between / space-around / space-evenly
```
- `align-items` (cross-axis) 進行內容上下排版 
```text
stretch / flex-start / flex-end / center / baseline
```

3. `transform` 可以旋轉、歪斜、放大、縮小、移動元素
```text
ratate(deg) / skew(θx,θy) / scale(mx,my) / translate(ox,oy) / matrix(a,b,c,d,e,f)
``` 

4. `transition` 
- 在給定的時間內更改屬性值
- 常用於滑鼠或鍵盤事件
- 無法在生成網頁自動發生，觸發為一次性無重複，除非一直觸發(js)
- 只能定義開始及結束狀態，無法定義過程

## JavaScript :runner:

```js
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});
```
1. 監聽 `addEventListener` 事件 `keydown` 是否有發生
2. 偵測是哪個按鍵 `${e.keyCode}` 尋找對應的節點 `document.querySelector`
3. 不是預設的按鍵就不反應 `if (!audio) return;` (小細節)
4. 事件發生加上動畫 `key.classList.add('playing')` 及播放音效 `audio.play()`

```js
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', function(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}));
```
1. 選取所有事件節點 `document.querySelectorAll('.key')` 用 `Array.from` 將 nodelist 轉為 array
2. 對每個節點監聽動畫結束 `transitionend`
3. 動畫事件有五件只對 `transform`進行處理 (小細節)
4. 動畫結束移除效果 `this.classList.remove('playing')`
5. 目前程式碼不好閱讀，將 function 提出來，整理一下

## 問題點 :shit:

連續點墼按鈕可以立即撥放音效，不需要等前次音效撥放完
發生事件前加上 `audio.currentTime = 0` 每次撥放都會將時間歸零

