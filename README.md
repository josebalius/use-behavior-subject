# use-behavior-subject

This project provides a simple `useBehaviorSubject` react hook that allows you to read and write values from an rxJS `BehaviorSubject` value. BehaviorSubjects can be used quite effectively to manage global state in a React application.

It manages setup and teardown automatically so you don't have to think about it.

## Usage

```javascript
import useBehaviorSubject from 'use-behavior-subject';
import store from './store';

const MyComponent = () => {
  const [value, setValue] = useBehaviorSubject(store.value);
  const [valueObject, setValueObject] = useBehaviorSubject(store.valueObject);

  // using value, valueObject reads from store

  // Setters will update global store & local state
  // setValue("...")
  // setValueObject({...valueObject, newProp: newValue})
};
```

## Store

Below is an example of how to setup a simple, easy to use global store in your React application.

### store.js

```javascript
import { BehaviorSubject } from 'rxjs';

export default {
  value: new BehaviorSubject(''),
  valueObject: new BehaviorSubject({}),
};
```

And that's it! You can now import store and this hook whenever you want access to global state and it all just works.
