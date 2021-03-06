
import  Aux  from '../Aux/Aux';
import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer : false,
    }

    

    sideDrawerClosedHandler = () => {
        this.setState((prevState)=>{ return {
            showSideDrawer: !prevState.showSideDrawer
                }
            }
        );
    }

    render (){
        return <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerClosedHandler}></Toolbar>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    }
};

export default Layout;