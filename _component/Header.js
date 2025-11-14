export const Header = () => {
  return (
    <div className="w-screen h-[59px] flex items-center justify-center  pl-4 pr-4">
      <div className="w-7xl h-9 flex justify-between">
        <div className="flex gap-2 items-center">
          <img className="w-5 h-5" src=".\Icon.png" />
          <p className="text-4 font-sans text-[#4338CA] font-bold italic">
            Movie Z
          </p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-9 w-[97px] rounded-md border border-[#E4E4E7] flex justify-center items-center gap-2">
              <HiChevronDown className="size-4" />
              <span className="text-[14px] text-[#18181B] font-medium">
                Genre
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`p-5 gap-4`} align="start">
              <div className="flex flex-col gap-1 pb-4">
                <DropdownMenuLabel className="font-sans text-[24px] font-semibold p-0">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel className="font-sans text-[16px] p-0 font-normal">
                  See lists of movies by genre
                </DropdownMenuLabel>
              </div>
              <div className="flex gap-4 flex-wrap w-[537px] pt-4 border-t border-[#E4E4E7]">
                {genre.map((ele) => {
                  return (
                    <Button variant="outline" className={`h-5 p-0.5`}>
                      {" "}
                      <span className="text-[14px] text-[#18181B] font-medium">
                        {ele}
                      </span>
                      <HiChevronRight className="size-4" />
                    </Button>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative w-[379px] h-9">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <Input
              placeholder={`Search..`}
              className="w-[379px] h-9 pl-9 pr-3"
            />
          </div>
        </div>
        <Button variant="outline" className="h-9 w-9 p-0 rounded-md">
          {" "}
          <img src="/Icon1.png" className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
