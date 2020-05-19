import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import JSXComp from './components/JSXComp';
//import StateClass from './components/StateProps/StateClass';
import DestructuringProps from './components/StateProps/DestructuringProps';
import DestructuringPropsClass from './components/StateProps/DestructuringPropsClass';
import FunctionClick from './components/EventHandling/FunctionClick';
import FunctionClickClassComp from './components/EventHandling/FunctionClickClassComp';
import EventBindingClass from './components/EventBinding/EventBindingClass';
import ParentComponent from './components/MethodAsProps/ParentComponent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';
import NameList from './components/ListRandering/NameList';
import NameListWithKey from './components/ListRandering/NameListWithKey';
import Stylesheet from './components/CSSStyles/Stylesheet';
import Inline from './components/CSSStyles/Inline';

import styles from './components/CSSStyles/appStyles.module.css';
import Form from './components/FormSubmition/Form';
import MountingClassA from './components/Lifecycle/MountingClassA';
import MountingClassB from './components/Lifecycle/MountingClassB';
import UpdateClassA from './components/Lifecycle/UpdateClassA';
import FragmentDemo from './components/Fragment/FragmentDemo';
import Table from './components/Fragment/Table';
import PureComp from './components/PureComponent/PureComp';
import ParentComp from './components/PureComponent/ParentComp';
import RefsDemo from './components/RefsDemo/RefsDemo';
import FocusInput from './components/RefsDemo/FocusInput';
import FRCompParentInput from './components/RefsDemo/FRCompParentInput';
import PortalRootComp from './components/Portal/PortalRootComp';
import Hero from './components/ErrorHandling/Hero';
import ErrorBoundary from './components/ErrorHandling/ErrorBoundary';
import CounterClick from './components/HigherOrderComp/CounterClick';
import HoverCounter from './components/HigherOrderComp/HoverCounter';
import ClickCounter from './components/RenderProps/ClickCounter';
import HoverCount from './components/RenderProps/HoverCount';
import User from  './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';
import ComponentC from './components/Context/ComponentC';
import {UserProvider} from './components/Context/userContext';
import PostList from './components/HttpRequestData/PostList';
import PostForm from './components/HttpRequestData/PostForm';
import HookCounter from './components/Hooks/UseStateHooks/HookCounter';
import HookCounterTwo from './components/Hooks/UseStateHooks/HookCounterTwo';
import HookCounterThree from './components/Hooks/UseStateHooks/HookCounterThree';
import UseEffectCounter from './components/Hooks/UseEffect/UseEffectCounter';
import CounterClassWithoutHook from './components/Hooks/UseEffect/CounterClassWithoutHook';
import MouseCount from './components/Hooks/UseEffect/UseEffectOnlyOnce/MouseCount';
import HookMouse from './components/Hooks/UseEffect/UseEffectOnlyOnce/HookMouse';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Solanki" myCity="Ambaji">
        <p> Testing  </p>
         </Greet>
      <Welcome myName="React developer"/>
      <JSXComp /> */}
    {/* <StateClass /> */}

    {/* <DestructuringProps name="Destructuring" fullname="Examples" />
      <DestructuringPropsClass name="Destructuring" fullname="Class Examples"></DestructuringPropsClass> */}

    {/* <FunctionClick />

    <FunctionClickClassComp />
    <EventBindingClass /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}

    {/* <NameList /> */}
    {/* <NameListWithKey /> */}

    {/* <Stylesheet myClass={true}/> */}
    {/* <Inline /> */}
    {/* <h1 className={styles.sucess}> Success </h1> */}
    {/* <Form /> */}
    {/* <MountingClassA /> */}
    {/* <UpdateClassA /> */}
    {/* <FragmentDemo /> */}
    {/* <Table /> */}
    {/* <PureComp /> */}
    {/* <ParentComp /> */}
    {/* <RefsDemo /> */}
    {/* <FocusInput /> */}
    {/* <FRCompParentInput /> */}
    {/* <PortalRootComp /> */}
    {/* Error Handling */}
    {/* <ErrorBoundary>
      <Hero heroName="Arun"/> 
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Jay"/> 
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Jocker"/> 
    </ErrorBoundary> */}

    {/* Render props */}
    {/* <CounterClick /> */}
    {/* <HoverCounter/> */}
    {/*<HoverCount />
    <User render={(isLoggedIn) => isLoggedIn ? 'Arun': 'Guest'}/> */}
    {/* <Counter>
      {(counter,HandleClickCount) => (
        <ClickCounter counter={counter} HandleClickCount={HandleClickCount} />
      )} 
    </Counter> 
    <Counter>
      {(counter,HandleClickCount) => (
        <HoverCount counter={counter} HandleClickCount={HandleClickCount} />
      )} 
    </Counter>  */}

    {/* Context */}
    {/* <UserProvider value="Arun">
      <ComponentC />
    </UserProvider> */}

    {/* Default Context */}
      {/* <ComponentC /> */}
      
      {/* Http request */}
      {/* <PostList /> */}
      {/* <PostForm /> */}

      {/* Hook */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      
      {/* <CounterClassWithoutHook /> */}
      {/* <UseEffectCounter /> */}

      {/* <MouseCount /> */}
      <HookMouse />
   </div>
  );
}

export default App;
