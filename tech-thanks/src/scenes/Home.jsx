import React, {useEffect} from "react";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

export default function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
        </>
    )}