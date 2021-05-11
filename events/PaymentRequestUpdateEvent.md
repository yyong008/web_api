# PaymentRequestUpdateEvent

## 基本示例

```ts
var paymentRequestUpdateEvent = new PaymentRequestUpdateEvent()
```

## 从 lib.dom.d.ts 中看 PaymentRequestUpdateEvent

```ts
interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: PaymentDetailsUpdate | Promise<PaymentDetailsUpdate>): void;
}

declare var PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};
```

## 参考

1. [PaymentRequestUpdateEvent MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequestUpdateEvent)
