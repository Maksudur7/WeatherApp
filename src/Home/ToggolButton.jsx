


const ToggolButton = ({ setTem, data }) => {
    const farenheit = data?.main?.temp * 1.8 + 32
    const handelCelsius = () => {
        setTem(data?.main?.temp)
    }
    const handelFarenheit = () =>{
        setTem(farenheit)
        console.log(farenheit);
    }
    console.log(farenheit);
    return (
        <div>
            <div className="flex gap-2 mt-5 md:mt-0 justify-center md:justify-normal">
                <button onClick={()=> handelFarenheit()} className="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white">
                    fahrenheit
                </button>
                <button onClick={() => handelCelsius()} className="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white">celsius</button>
            </div>
        </div>
    );
};

export default ToggolButton;