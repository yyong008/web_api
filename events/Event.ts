const evt: Event = new Event('go', {bubbles: true, cancelable: false});
document.dispatchEvent(evt); // 使用 dispatchEvent 方法派发的是 Event 的实例

const div = document.createElement('div');
div.dispatchEvent(evt);
