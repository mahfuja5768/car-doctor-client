import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="my-12 px-4 py-12">
          <div className="flex flex-col justify-center items-center gap-5 relative">
          <img
            src={"https://i.ibb.co/YytgHf5/empty.gif"}
            className="h-[400px]"
            alt=""
          />
          <h2 className="md:text-3xl text-2xl absolute text-secondary top-12 font-bold text-center">
            Sorry, this page is not found! <Link to='/'> <br /><span className="flex underline justify-center">back to home page</span></Link>
          </h2>
        </div>
        </div>
    );
};

export default ErrorPage;