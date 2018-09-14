import React from 'react';
import ReactDOM from 'react-dom';
import AuthorList from './components/AuthorList';
import AuthorCreation from './components/AuthorCreation';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/dogList' component={AuthorList}/>
            <Route  path='/newDog' component={AuthorCreation}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

registerServiceWorker();
