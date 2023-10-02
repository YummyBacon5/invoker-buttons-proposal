interface InvokerMixin {
  invokeTargetElement: HTMLElement | null;
  invokeAction: string;
}

interface InterestMixin {
  interestTargetElement: HTMLElement | null;
}

declare global {
  interface InvokeEvent extends Event {
    relatedTarget: Element;
    action: string;
  }
  interface InterestEvent extends Event {
    relatedTarget: Element;
  }
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface HTMLButtonElement extends InvokerMixin, InterestMixin {}
  interface HTMLInputElement extends InvokerMixin, InterestMixin {}
  interface HTMLAnchorElement extends InterestMixin {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
  interface Window {
    InvokeEvent: InvokeEvent;
    InterestEvent: InterestEvent;
  }
}
