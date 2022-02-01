import Head from 'next/head';
import React, { Component, useEffect } from "react";
export default function Stream() {
  useEffect(() => {
    window.location.href = "https://stream-planet.com";
  }, []);
  return (
    <>
    <Head>
    <title>Loading Stream Planet...</title>
    </Head>
  </>
  )
}
