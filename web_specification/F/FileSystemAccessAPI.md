# FileSystemAccessAPI

草案阶段

## 接口

- FileSystemHandle
- FileSystemFileHandle
- FilSystemDirectoryHandle
- FleSystemWritableFileStream

## 示例

```javascript
let fileHandle;

async function gefile() {
  [fileHandle] = await window.showOpenFilePicker();

  if(fileHandle.kind === 'file') {
  // your code
  } else if (fileHandle.kind === 'directory') {
  // your run directory code
  }  
}
```

```javascript
const pickerOpts = {
types: [],
excludeAcceptOption: true,
multiple: false
}

async function getTheFile() {
  [fileHandle] = await window.showOpenFilePicker(pciker)
}

const fileData = await fleHandle.getTheFile();
```

## Accessing directories


```javascript
const dirName = 'directoryToGetName';

const subDir = currentDirHandle.getDirectoryhandler(dirName: {create: true} )
```

The following asynchronous function users resolve to find the path to a chosen file, relative to a  specified directory directory handle.

```javascript
async function returnPathDirectories(directoryHandle) {
  const handle = await self.showOpenFilePicker();

  if(!handle) { return }

  const relativePaths = await directoryHandle.resolve(handle);

 if(relativePaths === null) {
  //  Not
 } else {
  for (const name of relativePaths) {
  console.log(name)} 
 } 
  
```

## Write to files

```javascript
async function saveFile() {
  const newHandle = await window.showSaveFilePicker();

  const writableStream = await newHandle.createWritable();

  await wriatableStream.write(imgBlob);

  await writableStream.close();
} 
```

The following show different example of options that can be apassed into the write methods

```javascript
wriatableStream.write(data);

wriatableStream.write({type: "write", position: position, data: data} );

writableStream.write({type: "seek", position: position} );
wriatableStream.write({type: "truncate", size: size} )
```
