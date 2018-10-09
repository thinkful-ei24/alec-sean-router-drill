import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EmailList from './components/email-list';
import Email from './components/email';
import SideBar from './components/sidebar';
import SingleEmail from './components/single-email';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Link</Link></h1>
                </header>
                <main>
                    {/* <Route exact path= "/:folderId" component={EmailList} />
                    <Route exact path= "/:folderId/:emailId" component={SingleEmail} /> */}
                    <Route
                      exact path= "/"
                      render={() => <EmailList folderId="inbox"/>}
                    />
                </main>
            </div>
        </Router>
    );
}
