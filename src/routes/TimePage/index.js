const TimePage = () => {
    function getdate ()  {
        new Date().toLocaleTimeString();
    } 

    // const getTime = setInterval(getdate, 1000)
    console.log(getdate);
    return (
        <p> 
            This is  TimePage;
        </p>
    )
}

export default TimePage;