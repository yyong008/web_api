const evt: Event = new Event('go', {bubbles: true, cancelable: false});
document.dispatchEvent(evt); // 使用 dispatchEvent 方法派发的是 Event 的实例

const div = document.createElement('div');
div.dispatchEvent(evt);

const animationEvent: AnimationEvent = new AnimationEvent('goAni');

let blobEvent: Blob = new BlobEvent()

let ClipboardEvent: ClipboardEvent = new ClipboardEvent();

var event = new CloseEvent(typeArg, closeEventInit);

var composition: CompositionEvent = new CompositionEvent('');

var event: CustomEvent = new CustomEvent('go');

var deviceMotionEvent = new DeviceMotionEvent('x')

var deviceOrientationEvent = new DeviceOrientationEvent('')