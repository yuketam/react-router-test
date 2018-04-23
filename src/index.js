import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import App from './App';
import Login from './Login';
import Discovery from './Discovery';
import Top from './Top';

// liverpool-webplayerではmainContainer部分だけroutingが効く
// propsにchildrenが渡ってくる、と言っていた（たすく先生）
// このチュートリアルも同じように作り替えてみる

// ということは、まずは App にどういう値が入ってくるかを見る必要があるな

// propsを渡すようにしたらすんなりできた。
// どういう仕組みなんだろう？
// 「react-router props」で調べてみればいいのかな
const routes = (
  <Route component={App}>
    <Redirect from='/' to='top' />
    <Route path="/top" component={Top} />
    <Route path="/login" component={Login} />
  </Route>
)

ReactDOM.render((
  <Router routes={routes} history={browserHistory} />
), document.getElementById('root'));
