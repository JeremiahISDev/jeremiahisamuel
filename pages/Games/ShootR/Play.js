import Head from 'next/head';
import React, { Component, useEffect } from "react";
export default function BeatThat() {
  useEffect(() => {
    window.location.href = "https://shootr.azurewebsites.net/";
  }, []);
  return (
    <>
    <Head>
    <title>Loading ShootR...</title>
    </Head>
  </>
  )
}
