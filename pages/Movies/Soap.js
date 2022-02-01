import Head from 'next/head';
import React, { Component, useEffect } from "react";
export default function Soap() {
  useEffect(() => {
    window.location.href = "https://soap2day.rs";
  }, []);
  return (
    <>
    <Head>
    <title>Loading Soap2Day...</title>
    </Head>
  </>
  )
}
