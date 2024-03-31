import React, { useState, useEffect } from 'react';
import "../../styles/globals.css";
import Page from "../components/Page/Page";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {

  return (
    <Page>
      <Component {...pageProps}  />
      <ToastContainer theme="colored" />
    </Page>
  );
}

export default MyApp;
