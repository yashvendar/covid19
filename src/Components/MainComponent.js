import React, { Component } from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import Contact from './ContactUsComponent';
import Footer from './FooterComponent';
import GraphComponent from './GraphComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Hospital from './Hospital';
class Main extends Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
        return(
            <div >
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/graph' component={GraphComponent} />
                    <Route path='/hospital' component={Hospital} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;