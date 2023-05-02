import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const styleText = {position: 'absolute', top: '250px'}
  return (
    <ul style={styleText}>Егор может следующее:
      <li>Сделать сайт</li>
      <li>Сделать красивый сайт</li>
      <li>Почистить вам крышу</li>
      <li>Выгулять собаку</li>
      <li>Присмотреть за вашей квартирой</li>
      <li>Так же есть телевизор на продажу</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h2>Добро пожаловать!</h2>
  );
}

const SearchPanel = () => {
  const styleText1 = {position: 'absolute', left: '550px'}
  const styleT2 = {margin: '30px'}
  return (
    <div>
    <p>Приложение подготовено программистом Егором. Он наставник групп Веб-программистов. Он вообще очень классный.
      <p>Что написать он особо не придумал, по этому вставит довольно известную цитату одного хорошего парня:</p>
      <p style={styleT2}>«С большой силой приходит большая ответственность»</p>
    </p>
    <p style={styleText1}>----------------------------------- Дядя Бен.</p>
    </div>
  );
}

const App = () => {
  return (
  <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>
  </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));