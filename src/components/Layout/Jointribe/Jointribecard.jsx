import { RupeeIocn } from "@/utils/reactIcons";

const Jointribecard = ({ item, frameIndex }) => {
  //   const { handleMouseEnter, handleMouseLeave, mobileOrTablet, poster, videoRef } = useVideoWithDyanamicPoster(videoSource, frameIndex);

  return (
    <div className="pb-3">
  <section className="relative">
    <video
      className="rounded-t-xl bg-gray-300"
      src={item.video}
      loop
      autoPlay={true} // Autoplay only if not mobile or tablet
      muted
    />
    <div className="absolute -bottom-9 w-full">
      <img
        src={item.image}
        className="bg-stone-100 border-[1.5px] shadow w-16 h-16 object-cover mx-auto text-center  rounded-md text-sm font-semibold"
      />
    </div>
  </section>
  <section className="pt-14 space-y-2">
    <h4 className="text-base text-center font-bold">{item.name}</h4>
    <div className="flex gap-1 items-center justify-center">
      <span className="flex items-center text-base font-extrabold">
        <RupeeIocn />
        {item.offerPrice}
      </span>
      <span className="flex items-center text-sm font-semibold line-through text-gray-500">
        <RupeeIocn />
        {item.originalPrice}
      </span>
      <span className="text-xs font-semibold text-cyan-500">
        {item.offPercentage}% off
      </span>
    </div>
  </section>
</div>

  );
};

export default Jointribecard;
