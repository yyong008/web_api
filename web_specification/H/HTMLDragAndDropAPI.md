# Drag 拖放 API

1. 拖拽事件
2. 接口
3. 基础
4. 互操作性
5. 示例和演示
6. 规范
7. 参见

## 事件

- drag
- dragend
- dragenter
- dragexit
- dragleave
- dragover
- dargstart
- drop

## 接口

- DragEvent
- DataTransfer
- DataTransferItem
- DataTransferItemList

## Gecko 专用接口

## 定义拖拽数据

```javascript
function dragstart_handler(ev) {
  ev.dataTransfer.setData("text/plain", ev,target.innerText);
} 
```

## 定义拖拽图像

```javascript
function dragstart_handler(ev) {
  var img = new Image();
  img.src = 'example.gif;
  ev.dataTransfer.setDragImage(img, 10, 10);
} 
```

## 拖拽效果

- copy
- move
- link

```javascript
function dargstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy"
} 
```

## 定义一个放置区

```javascript
function dropover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
} 

function drop_handler(ev) {
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data))
} 

<p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</p> 
```

## 处理放置效果

```javascript
function dragstart_handler(ev) {
  ev.dataTransfer.setData("application/my-app", ev.target.id);

  ev.dataTransfer.dropEffect = "move";
} 

function dropover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
} 

function drop_hanlder(ev) {
  ev.preventDefault();

  var target = ev.dataTransfer.getData("application/my-app");
  ev.target.appendChild(document.getElementById(data));
}

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">This element is draggable</p>
<div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</div>

```


