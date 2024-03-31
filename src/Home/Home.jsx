import { useEffect, useState } from "react";
import './Home.css'
import { useForm } from "react-hook-form"
import { WiHumidity } from "react-icons/wi";
import { FaCloudShowersWater } from "react-icons/fa6";



const Home = () => {

    const [search, setSearch] = useState("")
    // const [image, setImage] = useState(``)
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => setSearch(data.search)

    const [data, setData] = useState({})

    const api = {
        key: `b1605d6bdb8482fa40b1f0f850c0581a`,
        base: `https://api.openweathermap.org/data/2.5`
    }

    'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b1605d6bdb8482fa40b1f0f850c0581a'

    useEffect(() => {
        fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.base)
                setData(result)
            });
    }, [api.base, api.key, search])
    console.log(data);
    // console.log(data?.weather[0]?.icon);
    // console.log(data?.weather[0]?.icon);

    if (data.cod === undefined) {
        return;
    }



    return (
        <div className="body pt-10" >
            <div className="relative md:max-w-xl mx-5 md:mx-auto md:mt-20 card border md:h-96  rounded-md py-10 md:py-0 ">
                <div className="flex justify-center items-center md:pt-10 ">
                    <div className="flex justify-center sm:justify-start">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="hidden py-1 px-3"></label>
                            <input className="appearance-none text-md py-1 px-2  focus:outline-none border-2 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-900 text-purple-900 dark:text-gray-100 placeholder-blue-300 dark:placeholder-gray-600 font-semibold rounded-l" type="search" name="search" {...register("search")} placeholder="Location Name" />
                            <input type="submit" className="bg-blue-500 hover:bg-blue-800 px-5 py-1 text-lg font-bold hover:shadow-2xl cursor-pointer transition duration-250 ease-in-out rounded-r text-white" value="Search" color="blue" />
                        </form>
                    </div>
                </div>

                <div className=" mt-10 inset-0 flex items-center justify-center">

                    {
                        data.cod === '400' ? <>
                            <div className="flex flex-col justify-center items-center">
                                <img className="h-52 " src="https://i.ibb.co/CKjSjTC/404.png" alt="" />
                                <h1 className="text-white text-4xl font-bold">Oops! Location not found!</h1>
                            </div>
                        </> : <>
                            <div className="inline text-center">
                                <div data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <h2 className="text-white text-3xl font-bold">{data?.name}</h2>
                                    <h2 className="text-white text-3xl font-bold"> temperature : {data?.main?.temp}°C</h2>
                                    <h2 className="text-white text-3xl font-bold"> description : {data?.weather[0]?.description}</h2>

                                </div>
                                <div data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" className="md:flex justify-center items-center gap-10 mt-10">
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <WiHumidity className="text-white text-8xl font-bold" />
                                        </div>
                                        <div>
                                            <h2 className="text-white text-3xl font-bold">{data?.main?.humidity} %</h2>
                                            <h2 className="text-white text-3xl font-bold">humidity</h2>

                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center text-start gap-5 mt-5 md:mt-0">
                                        <div>
                                            <FaCloudShowersWater className="text-white text-7xl font-bold" />
                                        </div>
                                        <div>
                                            <h2 className="text-white text-3xl font-bold">{data?.wind.speed} km/h</h2>
                                            <h2 className="text-white text-3xl font-bold">Speed</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;