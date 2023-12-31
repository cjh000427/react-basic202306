// import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import Counter from './component/chap03_state/Counter';
// import Hello from './Hello';
// import SubmitEvent from './component/chap01_event/SubmitEvent';
import NickName from './component/chap03_state/NickName';


//리액트에서는 하나의 컴포넌트가 여러개의 앨리먼트를 반환할 수 있습니다.
//JSX를 작성할 때 return 문 안에 반드시 하나의 최상위 태그가 있어야 합니다.
//Fragment를 사용하면 의미없는 태그를 줄여 가독성을 좋게 합니다.
function App() {

  const looping = () => {
    const helloList = [];
    for(let i=0; i<5; i++) {
      helloList.push(<SayHello/>);
    }
    return helloList;
  }

  //JSX 문법에서는 스크립트를 코드로 직접 사용이 불가능.
  //{} 안에서 함수의 호출문이나 변수참조는 가능.
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
