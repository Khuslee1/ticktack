import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { GoStarFill } from "react-icons/go";
const movie: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type SmallProps = {
  title: string;
};

export const Small = ({ title }: { title: string }) => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1277px] flex flex-start">
        <h1 className="font-sans text-[32px] font-semibold">{title}</h1>
      </div>
      <div className="w-[1277px] h-[910px] flex gap-8 flex-wrap py-10">
        {movie.map((el, i) => {
          return (
            <Card key={i} className={`h-[439px] w-[229px] pt-0`}>
              <CardHeader className={`h-[340] w-full rounded-t-lg p-0`}>
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
