import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

export function useBehaviorSubject<T>(
  subject: BehaviorSubject<T>,
): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(subject.getValue());

  const updateValue = (v: T) => {
    subject.next({ ...value, ...v });
  };

  useEffect(() => {
    const subscription = subject.subscribe(v => {
      setValue(v);
    });

    return () => subscription.unsubscribe();
  }, []);

  return [value, updateValue];
}
