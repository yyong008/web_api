# 幕后任务调度器 requestIdleCallback

- 其事件循环队列为中心。
- Window.requestIdleCallback() 允许浏览器告诉您的代码可以安全使用多少时间而不会导致系统延迟，从而有助于确保浏览器的事件循环平稳运行。如果您保持在给定的范围内，您可以使用户体验更好。

## 充分利用空闲回调

- 对非搞优先级的任务使用空闲回调
- 空闲回调尽可能不超出支配到的时间
- 避免在回调中带遍 DOM
- 避免运行时间无法预测的任务
- 在你需要的时候要用 timeout, 但记得只在需要的时候才用

## 退回到 timeout

```javascript
window.requestIdleCallback = window.requestIdleCallback ||function (handler){
    let startTime = Date.now();

    return setTimeout(function () {
        handler({
            didTimeout: false,
            timeRemaining: function () {
                return Math.max(0, 50.0, (Date.now() - startTime))
            }
        })
    })
}
```

## 管理任务队列

接下来，让我们来了解我们管理需要执行的任务方式。为此，我们将创建一个先进先出 （FIFO） 的任务队列，在空闲回调期间，如果时间允许，我们将执行这个队列。

## 排队任务

```javascript
function enqueueTask(taskHandler, taskData) {
    taskList.push({
        handler: taskHandler,
        data: taskData,
    });

    totalTaskCount++;

    if (!taskHandle) {
        taskHandle = requestIdleCall(runTaskQueue, { timeout: 1000});
    }

    scheduleStatusRefresh();
}
```

- enqueueTask 一个函数，被调用来处理任务。
- taskData 一个对象，被当作输入参数传入给 taskHanler, 以允许任务接受自定是数据。

## 执行任务

```javascript
function runTaskQueue(deadline) {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.length ) {
        let task = taskList.shift();
        currentTaskNumber++;

        task.handler(task.data);
        scheduleStatusRefresh();
    }

    if (taskList.length) {
        taskHandle = requireIdleCall(runTaskQueue, {timeout: 1000})
    } else {
        taskHandle = 0;
    }
}
```

## 更新状态显示

记录输出和进度来更新文档。然后在空闲回调中改变 DOM 是不安全的。作为替代，我们使用 requestAnimationFrame() 来让浏览器可以在安全地更新显示时通知我们。

## 安排显示的更新

```javascript
function scheduleStatusRefresh() {
    if (!statusRefreshScheduled) {
        requestAnimationFrame(updateDisplay);
        statusRefreshScheduled = true;
    }
}
```

## 更新显示

```javascript
function updateDisplay() {
    let scrollToEnd = logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

    if (totalTaskCount) {
        if (progressBarElem.max != totalTaskCount) {
            totalTaskCountElem.textContent = totalTaskCount;
            progressBarElem.max = totalTaskCount;
        };

        if (progressBarElem.value != currentTaskNumber) {
            currentTaskNumberElem.textCount = currentTaskNumber;
            progressBarElem.value = currentTaskNumber;
        };

        if (logFragment) {
            logElem.appendChild(logFragment);
            logFragment = null;
        }

        if (scrolledToEnd) {
            logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
        }

        statusRefreshScheduled = false;
    };
}
```

## 向记录添加文件

```javascript
function log(text) {
    if (!logFragment) {
        logFragment = document.createDocumentFragment();
    }

    let el = document.createElement("div");
    el.innerHTML = text;

    logFragment.appendChild(el);
}
```

## 运行任务

## 任务处理器

```javascript
function logTaskHandler(data) {
    log("<strong>Running task #" + currentTaskNumber + "</strong>");

    for (i = 0; i < data.count; i += 1) {
        log((i + 1).toString() + ". " + data.text);
    }
}
```

## 主程序

用户点击 “开始” 按钮，会触发所有操作。也会导致 decodeTechnoStuff() 函数。

```javascript
function decodeTechnoStuff() {
    totalTaskCount = 0;
    currentTaskNumber = 0;
    updateDisplay();

    let n = getRandomIntInclusive(100, 200);

    for (i = 0; i < n; i++) {
        let taskData = {
          count: getRandomIntInclusive(75, 150),
          text: "This text is from task number " + (i+1).toString() + " of " + n
        };

        enqueueTask(logTaskHandler, taskData);
    }
}

document.getElementById("startButton").addEventListener("click", decodeTechnoStuff, false);
```

decodeTechnoStuff() 开始执行时会将任务总数（到现在为止添加到队列中的任务树）清零，并随后调用 updateDisplay() 以重置显示为 “没有任何事发生”的状态。

这个示例去创建一个随机数量（100-200）的任务。为此，我们使用 Math.random 文档中作为示例提供的 `getRandomIntInclusive()` 以获得呀创建的任务数。

随后我们开始一个循环以创建实际的任务。对每个任务，我们创建一个对象，taskData, 其中包含两个属性：

- count 是要从任务输出到记录中的字符串量。
- text 是输出到日志的文本（由 count 指定的次数）
