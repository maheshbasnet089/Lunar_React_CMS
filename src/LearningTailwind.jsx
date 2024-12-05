

function LearningTailwind(){
    return (
       <>
       
<section className="bg-blue-600 py-2 ">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-white font-bold text-5xl leading-tight mb-6">Discover the world's best coffee</h1>
                <p className="text-white text-xl mb-8">From hand-picked farms to your cup, we source the finest beans and
                    roast them to perfection.</p>
                <a href="#"
                    className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200">Shop
                    now</a>
            </div>
            <div className="md:w-1/2">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee beans"
                    className="w-full rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
</section>

<section className="py-20">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Coffee"
                    className="w-full h-64 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Single Origin Blend</h3>
                    <p className="text-gray-700 text-base">Our most popular blend, featuring beans from a single farm in
                        Ethiopia. Notes of chocolate, berries, and citrus.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-700 font-medium">$14.99</span>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    className="w-full h-64 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-700 font-medium">$12.99</span>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    className="w-full h-64 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-700 font-medium">$12.99</span>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    className="w-full h-64 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p className="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-gray-700 font-medium">$12.99</span>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
       </>
    )
}

export default LearningTailwind