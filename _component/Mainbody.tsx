import { BodyType } from "./BodyType";

export const Mainbody = () => {
  return (
    <div className="w-screen pl-20 pr-20 pt-20 flex flex-col items-center">
      <BodyType call={"upcoming"} />
      <BodyType call={"popular"} />
      <BodyType call={"top_rated"} />
    </div>
  );
};
