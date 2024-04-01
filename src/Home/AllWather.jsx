import { WiCloud } from "react-icons/wi";
import { WiRain } from "react-icons/wi";

const AllWather = ({ allDayData }) => {

    if (!allDayData || !allDayData?.list) {
        return null; // or return a loading indicator
    }

    const renderedData = allDayData?.list?.map((element) => {
        console.log(element);
        let weatherIcon = null;
        if (element?.weather) {
            // Map weather condition to appropriate icon
            switch (element?.weather[0]?.description) {
                case "Clouds":
                    weatherIcon = <WiCloud />;
                    break;
                case "Rain":
                    weatherIcon = <WiRain />;
                    break;
                // Add more cases for other weather conditions as needed
                default:
                    weatherIcon = null;
            }
        }

        let backgroundImage = "";
        if (element?.weather) {
            // Set background image based on weather condition
            switch (element?.weather[0].main) {
                case "Clear":
                    backgroundImage = "url('https://i.ibb.co/Z2Fcx25/clear.png')";
                    break;
                case "Clouds":
                    backgroundImage = "url('https://i.ibb.co/CWf1bcD/cloud.png')";
                    break;
                case "Rain":
                    backgroundImage = "url('https://i.ibb.co/PDP5k8C/rain.png')";
                    break;
                // Add more cases for other weather conditions as needed
                default:
                    backgroundImage = "";
            }
        }
        console.log(element?.main?.temp);
        const date = element?.dt_txt
        const temperature = element?.main?.temp
        const description = element?.weather[0].description

        return { weatherIcon, backgroundImage, date, temperature, description }
    });

    console.log(renderedData);

    return (
        <div className="grid allWatherBox lg:grid-cols-7 md:grid-cols-5" style={{ backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/3d-creative-for-website-powerpoint-background_3ecbad0de1__960_540.jpg)' }}>
            {
                renderedData.map((element, index) =>
                    <div key={index} className="hero bg-sky-300 md:w-32   md:mx-auto md:mt-20 card border  rounded-md p-2 md:py-0 " style={{ backgroundImage: element.backgroundImage }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content md:mx-auto">
                            <div className="w-32 ">
                                <h2 className="text-base font-bold">{element?.temperature}</h2>
                                <h2 className="text-base font-bold">{element?.description}</h2>
                                <h2 className="text-base font-bold">{element?.date}</h2>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllWather;