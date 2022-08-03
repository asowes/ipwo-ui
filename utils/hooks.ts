import * as React from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? React.useLayoutEffect
    : React.useEffect;

// eslint-disable-next-line no-unused-vars
export function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref: any = React.useRef(fn);

  // we copy a ref to the callback scoped to the current state/props on each render
  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  // eslint-disable-next-line no-void
  return React.useCallback((...args: any[]) => ref.current.apply(void 0, args), []) as T;
}

export interface UseRecordInputProps {
  // element need to record
  ref: React.RefObject<HTMLElement>;
  // input data object
  refRecord: React.RefObject<object>;
  // record length
  recordLength?: number;
  // is to record
  isAutoComplete?: boolean;
}

export function useRecordInput(props: UseRecordInputProps): void {
  const { ref, refRecord, recordLength = 0, isAutoComplete = true } = props;

  const recordInput = (e: any) => {
    if (e && e.target && refRecord.current) {
      if (refRecord.current[e.target.name]) {
        if (refRecord.current[e.target.name].length < recordLength) {
          refRecord.current[e.target.name].unshift(e.target.value);
        } else {
          refRecord.current[e.target.name].pop();
          refRecord.current[e.target.name].unshift(e.target.value);
        }
      } else {
        refRecord.current[e.target.name] = [];
        refRecord.current[e.target.name].unshift(e.target.value);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (ref && ref.current && isAutoComplete) {
      ref.current.addEventListener('change', recordInput);
    }
    return () => {
      if (ref && ref.current && isAutoComplete) {
        ref.current?.removeEventListener('change', recordInput);
      }
    };
  }, []);
}
