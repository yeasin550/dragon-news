import { useLoaderData, useParams } from "react-router";
import { FaBookmark, FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const CategoriesDetails = () => {
    const [newsData, setNewsData] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(newsData)


    useEffect(() => {

        // condition 1: যদি id না থাকে → সব data show
        if (id == "0") {
            setNewsData(data);
            // console.log(data)
            return
        }

        // condition 2: today pick show (example route: /categories/today)
        else if (id === "1") {
            const todayPick = data.filter(
                news => news.others?.is_today_pick == true
            );
            setNewsData(todayPick);
            console.log(todayPick)
            return
        }

        // condition 3: category ways filter
        else {
            const filterData = data.filter(
                news => news.category_id == id
            );
            setNewsData(filterData);
            // console.log(filterData)
            return
        }

    }, [data, id]);

    return (
        <div>
            <h3 className="font-bold">Dragon News { newsData.length} Found</h3>
            <div className="min-h-screen flex flex-col items-center gap-6 mt-4">
                {newsData.slice(0, 10).map(news => (
                    <div
                        key={news.id}
                        className="max-w-xl w-full bg-white overflow-hidden border border-gray-400 rounded-md"
                    >

                        {/* Header */}
                        <div className="flex items-center justify-between px-4 pt-4 pb-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                                    <img
                                        src={news.author?.img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">
                                        {news.author?.name}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {news.author?.published_date}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <FaBookmark className="cursor-pointer text-slate-500 hover:text-orange-500" />
                                <FaShareAlt className="cursor-pointer text-slate-500 hover:text-orange-500" />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="px-4 pb-3">
                            <h2 className="font-bold text-lg text-slate-900">
                                {news.title}
                            </h2>
                        </div>

                        {/* Image */}
                        <div className="mx-4  rounded-sm overflow-hidden h-56">
                            <img
                                src={news?.image_url}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="px-4 pt-3">
                            <p className="text-sm text-slate-600">
                                {news.details.slice(0, 140)}...
                            </p>

                            <button className="text-orange-500 text-sm font-semibold mt-2">
                                Read More
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center px-4 py-3 border-t mt-3">

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <FaStar
                                        key={star}
                                        className={
                                            star <= news.rating?.number
                                                ? "text-orange-400"
                                                : "text-gray-300"
                                        }
                                    />
                                ))}
                                <span className="ml-2 text-sm font-semibold">
                                    {news.rating?.number}
                                </span>
                            </div>

                            {/* Views */}
                            <div className="flex items-center gap-1 text-slate-500">
                                <FaEye />
                                <span>{news.total_view}</span>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
    </div>
    );
};

export default CategoriesDetails;