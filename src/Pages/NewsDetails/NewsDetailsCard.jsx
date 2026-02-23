

import { FaBookmark, FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

export const NewsDetailsCard = ({ newsData }) => {
    const { id, author, title, image_url, details, rating, total_view } = newsData;
    // console.log(newsData)


    return (
        <div>
            <h3 className="font-bold">Dragon News Data</h3>
            <div className="flex flex-col items-center gap-6 mt-4">

                <div

                    className="w-full bg-white overflow-hidden border border-gray-400 rounded-md"
                >

                    {/* Header */}
                    <div className="flex items-center justify-between px-4 pt-4 pb-3">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                                <img
                                    src={author?.img}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    {author?.name}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {author?.published_date}
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
                            {title}
                        </h2>
                    </div>

                    {/* Image */}
                    <div className="mx-4  rounded-sm overflow-hidden">
                        <img
                            src={image_url}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="px-4 pt-3">
                        <p className="text-sm text-slate-600">
                            {details}
                        </p>

                        <p to={`/news-details/${id}`} className="text-orange-500 text-sm font-semibold mt-2">
                            Read More
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center px-4 py-3 border-t mt-3">

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <FaStar
                                    key={star}
                                    className={
                                        star <= rating?.number
                                            ? "text-orange-400"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                            <span className="ml-2 text-sm font-semibold">
                                {rating?.number}
                            </span>
                        </div>

                        {/* Views */}
                        <div className="flex items-center gap-1 text-slate-500">
                            <FaEye />
                            <span>{total_view}</span>
                        </div>

                    </div>

                    <div className="mb-5">
                        <Link to={`${id}`} className="my-5 ml-5 bg-red-600 py-2 px-5 rounded-md text-white font-bold">All news in this category</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}