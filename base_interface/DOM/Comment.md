# Comment

## 继承关系

- CharacterData 

##  从 lib.dom.d.ts

```ts
interface Comment extends CharacterData {
}

declare var Comment: {
    prototype: Comment;
    new(data?: string): Comment;
};
```

## 参考

1. https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
