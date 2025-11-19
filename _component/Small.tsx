import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { GoStarFill } from "react-icons/go";
type Smalltype = {
  title: string;
  movie: number[];
};

export const Small = ({ title, movie }: Smalltype) => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1080px] flex flex-start">
        <h1 className="font-sans text-[32px] font-semibold">{title}</h1>
      </div>
      <div className="w-[1080px] flex gap-8 flex-wrap py-10">
        {movie.map((el, i) => {
          return (
            <Card key={i} className={`h-[372px] w-[190px] pt-0`}>
              <CardHeader className={`h-[281px] w-full rounded-t-lg p-0`}>
                img tag
              </CardHeader>
              <CardFooter className={`flex-col flex gap-0.5`}>
                <div className="w-full flex items-center">
                  {" "}
                  <GoStarFill className="text-[#FDE047]" />{" "}
                  <p className="font-semibold text-[14px]">{el}</p>
                  <p className="text-[12px] text-gray-500">/10</p>
                </div>

                <p className="font-sans text-[18px] font-normal w-full">
                  Title
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
