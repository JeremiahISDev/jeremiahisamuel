import Head from 'next/head';
import React, { Component, useEffect } from "react";
export default function BeatThat() {
  useEffect(() => {
    window.location.href = "https://playbeatthat.acura.com/";
  }, []);
  return (
    <>
    <Head>
    <title>Loading Acura Beat That...</title>
    </Head>
  </>
  )
}
