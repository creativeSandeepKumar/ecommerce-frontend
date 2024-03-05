import React from "react";
import { NoImage } from "../../utils/Images";
import ReactHtmlParser from "html-react-parser";
import { formatDate } from "../../utils/helper";
import useScrollToTopButton from "../../hooks/useScrollTopButton";
import { useNavigate } from "react-router-dom";

const PostItemCard = ({ postdetails, postimage, postcontent, isnavigate=true }) => {
  const navigate = useNavigate();
  const { displayButton, scrollToTop } = useScrollToTopButton();

  // Here give post url instead of id because of seo regions
  const handleNavigate = () => {
    if(isnavigate) {
      scrollToTop();
      navigate(`/blogs/${postdetails._id}`);
    }
  };

  return (
    <section className="border-[1px] bg-stone-200 border-blue-100 w-full rounded-lg">
      <div className="">
        {/* post image exist then show else check postimage from create blog or not show image */}
        <img
          src={
            postimage
              ? URL.createObjectURL(postimage)
              : postdetails.image?.url || NoImage
          }
          alt={postdetails?.title}
          width="100%"
          onClick={handleNavigate}
          className={`max-h-[300px] object-fill cursor-pointer rounded-t-md fade-${
            displayButton ? "scrollTopBtn in" : "scrollTopBtn out"
          }`}
        />
      </div>
      <div className="px-3 py-4 space-y-2">
        <p className="text-blue-500 font-medium text-sm">{postdetails?.category?.name ? postdetails?.category?.name : "Trust and safety"}</p>
        <h2 onClick={handleNavigate} className={`text-xl hover:underline cursor-pointer hover:decoration-sky-400 font-semibold py-2 fade-${
            displayButton ? "scrollTopBtn in" : "scrollTopBtn out"
          }`}>
          {postdetails.title ? postdetails.title : "Your blog title is here"}
        </h2>
        {!postcontent && (
        <div>
        {postdetails.content ? (
          ReactHtmlParser(postdetails.content)
        ) : (
          <div>No Content is Available</div>
        )}
        </div>
        )}
        <div className="pt-2 flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold">Tutorbe Official </p>
            <div className="h-4 w-[1.5px] bg-gray-500"></div>
            <p className="text-gray-700">
               {formatDate(postdetails.updatedAt)} 
            </p>
        </div>
      </div>
    </section>
  );
};

export default PostItemCard;
