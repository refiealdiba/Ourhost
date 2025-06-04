import jumbotron from "/jumbotron.png";

const Home = () => {
    console.log(jumbotron);
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div
                className={`bg-cover w-full min-h-100 max-h-200 aspect-video bg-center`}
                style={{ backgroundImage: `url(${jumbotron})` }}
            ></div>
        </div>
    );
};
export default Home;
