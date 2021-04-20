# 2인용 변형 마작 게임 지뢰 게임 17보

## 절찬 제작중

create-react-app, node.js, express.js, pwa, REST API에서 socket.io로 변경

## 중요

따로 텐파이, 대기패 여부를 체크하는 기능이 없어 화료 가능 여부에 상관없이 론 버튼이 활성화됩니다.  플레이어분들의 역량을 믿고 게으름을 피운 것이라 볼 수 있습니다 죄송.

론 버튼을 잘못 눌러 화료 불가능한 패가 되면 촌보가 됩니다.

랜덤매칭 기능이 아직 없습니다.  친구와 사전에 방번호를 정해 들어가야 합니다.


## 게임 방법

0. 지뢰 게임 17보는 만화 도박묵시록 카이지에 등장하는 2인용 마작 게임입니다. 여기선 룰을 약간 간소화했습니다.

1. 게임이 시작되면 자신과 상대는 자기 앞의 패산의 모든 패(34장)를 자신 앞으로 가져옵니다.

2. 제한시간 3분 이내에 34개의 패 중 적절히 13장의 패를 골라 텐파이 상태를 만듭니다. 이 때 만관 이상 텐파이여야 합니다.

2-1. 이 게임은 쯔모 없이 론으로만 화료하는 게임이며 천화는 없습니다.

3. 서로의 첫 순에 리치를 선언하며 2에서 선택하지 않은 패를 번갈아가며 버립니다. 서로가 17개의 패를 버렸으면 유국이 됩니다.

4. 상대방이 오름패(대기패)를 버렸다면 일반 마작과 마찬가지로 론을 선언하면 됩니다.

5. 역을 계산해 걸은 점수 X 아래의 배율을 곱해 지불합니다.

만관	하네만	배만	삼배만	역만\
1배	1.5배	2배	3배	4배

6. 패를 깠는데 만관 이하라면 자동으로 촌보가 됩니다.(-8000점)

※장풍패는 없으며, 문풍패는 東/西 고정. 울기(후로) 없음(안깡도 불가), 후리텐 룰 적용. 유국만관 없음, 역만 중첩 가능. 더블리치와 단일 역의 더블역만 없음. 인화는 리치 일발로만 취급한다. (자가 리치를 걸기 전에 오야가 쏘였을 때도 리치로 취급)

보다 자세한 룰은 이 룰의 출처이기도 한 나무위키를 참고하세요




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
