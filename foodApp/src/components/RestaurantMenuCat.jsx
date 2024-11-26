import ResMenuItems from "./ResMenuItems.jsx";

const RestaurantMenuCat = ({ elem, showItems, onclickHandler }) => {
  // console.log(elem)
  return (
    <>
      <div
        onClick={onclickHandler}
        className=" cursor-pointer bg-white flex justify-between w-full py-4 px-5 my-2"
      >
        <h2 className="text-xl">
          {elem?.card?.card?.title} ({elem?.card?.card?.itemCards?.length})
        </h2>
        <div className="cursor-pointer w-5" >⬇️</div>
      </div>
      {showItems && <ResMenuItems key={elem?.card?.card?.title} data={elem?.card?.card?.itemCards} />}
    </>
  );
};
export default RestaurantMenuCat;
