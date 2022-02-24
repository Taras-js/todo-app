import '../scss/main.scss';
import App from 'next/app';
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Home from "./index";
import NewTodos from "./newtodos";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
       <Provider store={store}>
        <Component{...pageProps}>
            <Home />
            <NewTodos/>
        </Component>
       </Provider>
    )
  }
}

const doStore = () => store;
const wrapper = createWrapper(doStore);
export default wrapper.withRedux(MyApp);
