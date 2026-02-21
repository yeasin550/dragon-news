/* eslint-disable react-hooks/set-state-in-effect */
import { useLoaderData, useParams } from "react-router";
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import { LoginWith } from "../../Components/LoginWith/LoginWith";
import { NewsDetailsCard } from "./NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const [newsData, setNewsData] = useState({});
    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        const filterData = data.find(news => news.id == id);
        setNewsData(filterData)
        console.log(filterData)
    }, [data, id])
    return (
        <div>
            <Header />
            <Navbar />
            <div className="flex w-11/12 mx-auto gap-4">
                <div className="w-9/12">
                    {/* <NewsDetailsCard newsData={newsData} /> */}
                </div>
                <div className="w-3/12">

                <LoginWith/>
                </div>
            </div>
        </div>
    )
}
export default NewsDetails;