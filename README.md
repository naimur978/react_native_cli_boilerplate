# react_native_cli_boilerplate
 
 
The workflow goes like this:

1. install all the necessary packages
```
yarn
```

2. open your emulator or physical device
```
react-native run-android
```

3. update babel.config.js as per your requirements. if alias doesn't work, turn close all of your terminals and hit this command
```
npm start -- --reset-cache
```

4. add this in babel.config.js
```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['module:react-native-dotenv'],
};
```

5. add .env file, then import those names like this
```
import { SOMETHING } from 'react-native-dotenv'
```

