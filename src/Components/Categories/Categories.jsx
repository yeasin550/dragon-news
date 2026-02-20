import { use} from "react"
import { NavLink } from "react-router";
const categoryPromise = fetch('/categories.json').then(res => res.json())
const Categories = () => {
    // const [allCategory, setAllCategory] = useState([])
    // const categoryPromise = fetch('/categories.json').then(res => res.json())
    // categoryPromise.then(data => setAllCategory(data));

    //! other way from p-hero
    const category = use(categoryPromise)
    // console.log(category)

    return (
        <div>
            <h1 className="font-bold mb-4">All Category {category.length}</h1>
            {/* my way */}
            {/* {
                allCategory.map(category =>
                    <NavLink onClick={handleCategory}
                        className="flex flex-row justify-center py-3 px-2
                     hover:bg-gray-200 font-bold rounded sm">
                        {category.name}
                    </NavLink>
                )
            } */}
            {/* p-hero way */}
            {
                category.map(category =>
                    <NavLink
                        to={`categories/${category.id}`}
                        key={category.id}
                        className="block"
                    >
                        {({ isActive }) => (
                            <div
                                className={`flex flex-row justify-center py-3 px-2 font-bold rounded border border-gray-400 mb-1 hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""
                                    }`}
                            >
                                {category.name}
                            </div>
                        )}
                    </NavLink>
                )
            }
        </div>
    )
}

export default Categories;