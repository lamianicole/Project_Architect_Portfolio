import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";

const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);
    return ( 
        <>
        {""}
        {isLoading ? (<Loader />) : (
            <>
                <Header />
                <main className="outlet">
                    <Outlet />
                </main>
                <Footer />
            </>
        )}
        </>
    );
}

export default RootLayout;