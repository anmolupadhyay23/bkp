import React from "react";
import NewNavbar from "../../Layout/NewNavbar";
import Footer from "../../Widgets/HomeWidgets/Footer";

const Blog = () => {
  return (
    <div>
        <NewNavbar/>
      <div className="blogimage pt-16">
        <img
          src="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/gpili2znoqnghrkahgpw"
          alt="Blogimage"
          className="absolute "
        />
        <p className="relative font-serif text-4xl font-bold text-center text-white p-11 md:p-40 md:text-8xl">
          Blogs
        </p>
      </div>
      <div className=" center md:flex sm:mt-6">
        <div className="flex flex-col search-post-tag md:w-1/3 gap-y-4">
          <div className="search w-[80%]  border  shadow-xl bg-gray-50 rounded-lg ml-10 ">
            <h3 className="p-4 font-medium ">Search</h3>
            <form className="max-w-lg p-4 mx-5 ">
              <div className="flex ">
                <div className="relative w-full">
                  <input
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white  border  border-gray-400    rounded-3xl"
                    placeholder="Search Post"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-[80%] mt-1  text-white bg-orange-400    rounded-3xl  mr-2"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="post w-[80%] border shadow-xl bg-gray-50 rounded-lg mt-5 ml-10">
            <h3 className="m-5 font-bold"> Recent Post </h3>
            <RecentPost
              image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/vihhp0tbqsc5nuixfcd5"
              time="March 8, 2024"
              discription="Maha Shivratri: The Great Night of Lord Shiva where we celebrate the festival of love toward our lord shva"
            />
            <RecentPost
              image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/vihhp0tbqsc5nuixfcd5"
              time="March 8, 2024"
              discription="Maha Shivratri: The Great Night of Lord Shiva"
            />
          </div>
          <div className="tags w-[80%]  border  shadow-xl bg-gray-50 rounded-lg ml-10 mt-5">
            <h3 className="m-5 font-bold">Popular Tags</h3>
            <div className="p-4 buttons">
              <button
                type="button"
                class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
              >
                SANATAN
              </button>
              <button
                type="button"
                class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
              >
                SANATAN
              </button>
              <button
                type="button"
                class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
              >
                SANATAN
              </button>
              <button
                type="button"
                class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
              >
                SANATAN
              </button>
              <button
                type="button"
                class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
              >
                SANATAN
              </button>
            </div>
          </div>
        </div>
        <div className="postandarrow border shadow-xl md:w-[60%] h-full ">
          <div className="blogpost ">
            <div className="1strow md:flex ">
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription="Maha Shivratri: The Great Night of Lord Shiva in which we celebrate the holy night of "
              />
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription="Maha Shivratri, the holiest night dedicated to Lord Shiva."
              />
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription=" Immerse yourself in the magic of Maha Shivratri."
              />
            </div>
            <div className="1strow md:flex ">
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription="Celebrate Maha Shivratri, the night of immense spiritual world where  we wiill deep dive into the world of the  "
              />
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription="Maha Shivratri: The Night of Maha Shivratri"
              />
              <Blogpost
                image="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/pfonp77723uwvjqk3rtb"
                time="March 8, 2024"
                discription="Embark on a spiritual journey on Maha Shivratri"
              />
            </div>
          </div>
          <div className="my-4 text-center arrow md:my-6">
            <button
              type="button"
              class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
            <button
              type="button"
              class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              1
            </button>
            <button
              type="button"
              class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              2
            </button>
            <button
              type="button"
              class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 "
            >
              3
            </button>
            <button
              type="button"
              class="text-orange-400 bg-orange-100 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2  "
            >
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="lastimage mt-7">
        <img
          src="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/bkhkb2iprpzawtftjol5"
          alt="BottomBlogimage"
          
        />
      </div>
      <div> <Footer/></div>
      
    </div>
  );
};

export default Blog;

const Blogpost = ({ discription, time, image }) => {
  return (
    <div>
      <div className="onepost w-[80%] mt-5  border overflow-auto shadow-xl bg-gray-50 rounded-lg ml-10  ">
        <div className="image ">
          <img src={image} alt="shivjiimageimage" className="" />
        </div>
        <div className="text ">
          <h3 className="text-orange-500 w-[90%] font-bold m-3 text-xs ml-4 max-h-10  text-ellipsis line-clamp-2 overflow-hidden">
            {discription}
          </h3>
          <div className="data">
            <div className="flex mt-1 date">
              <div className="calenderimage">
                <img
                  src="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/nj6ny4nkpbpnvkph7wxv"
                  alt="calenderimage"
                  className="ml-4 "
                />
              </div>
              <div className="data">
                <h3 className="mb-2 ml-1 text-xs">{time}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentPost = ({ discription, time, image }) => {
  return (
    <div>
      <div className="mx-8 data">
        <div className="image ">
          <img src={image} alt="shivimageimage" className="absolute w-14" />
        </div>
        <div className="text ">
          <h3 className="text-orange-500 w-[70%] font-bold text-xs ml-20  line-clamp-2 overflow-hidden">
            {discription}
          </h3>
          <div className="data">
            <div className="flex mt-1 date">
              <div className="calenderimage">
                <img
                  src="https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/waste/nj6ny4nkpbpnvkph7wxv"
                  alt="calenderimage"
                  className="ml-20 "
                />
              </div>
              <div className="data">
                <h3 className="ml-1 text-xs">{time}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="line ">
          <hr className="m-5 border-gray-300 border-1" />
        </div>
      </div>
    </div>
  );
};