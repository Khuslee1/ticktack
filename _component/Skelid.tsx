import { Skeleton } from "@/components/ui/skeleton";

export const Skelid = () => {
  return (
    <div className="w-screen flex flex-col gap-10 items-center">
      <div className="w-[1080px]">
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-10 w-[411px] rounded-full" />
            <Skeleton className="h-10 w-[411px] rounded-full" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-medium">Rating</p>
            <div className="w-full flex flex-col items-center gap-1">
              <Skeleton className="w-[83px] h-5" />
              <Skeleton className="w-[83px] h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1080px] h-[428px] flex gap-8">
        <Skeleton className="w-[290px] h-[428px]" />
        <Skeleton className="w-[760px] h-[428px]" />
      </div>
      <div className="flex flex-col gap-2 w-[1080px]">
        <div className="flex gap-3">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[77px] h-5 rounded-full" />
        </div>
        <Skeleton className="w-[1080px] h-5 rounded-full" />
        <Skeleton className="w-[580px] h-5 rounded-full" />
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
        <div className="flex gap-15">
          <Skeleton className="w-[77px] h-5 rounded-full" />
          <Skeleton className="w-[137px] h-5 rounded-full" />
        </div>
      </div>
      <div className="w-screen flex flex-col items-center">
        <div className="flex justify-between items-center w-[1080px]">
          <Skeleton className="w-[250px] h-8 rounded-full" />
          <Skeleton className="w-[165px] h-8 rounded-full" />
        </div>
        <div className="w-[1080px] flex gap-8 flex-wrap py-10">
          <Skeleton className="w-[190px] h-[372px] rounded-lg" />
          <Skeleton className="w-[190px] h-[372px] rounded-lg" />
          <Skeleton className="w-[190px] h-[372px] rounded-lg" />
          <Skeleton className="w-[190px] h-[372px] rounded-lg" />
          <Skeleton className="w-[190px] h-[372px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};
