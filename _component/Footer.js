import { TbMovie } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-screen h-[280px] bg-[#4338CA] mt-25 py-10 px-15 flex justify-center items-center">
      <div className="w-[1277px] h-full flex justify-between">
        <div className="flex flex-col gap-3 w-[200px]">
          <div className="flex gap-2 items-center">
            <TbMovie className="text-white w-6 h-6 font-light p-0" />
            <p className="text-4 font-sans text-white font-bold italic">
              Movie Z
            </p>
          </div>
          <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-3 text-white">
            <p>Contact Information</p>
            <div>
              <div className="flex gap-3 items-center">
                <FiPhone />
                <p>
                  <span>Email:</span>
                  <br /> support@movieZ.com
                </p>
              </div>
              <div className="flex gap-3 items-center pt-8">
                <MdOutlineEmail />
                <p>
                  <span>Phone:</span>
                  <br /> +976 (11) 123-4567
                </p>
              </div>
            </div>
          </div>
          <div className=" text-white">
            <p>Follow us</p>
            <div className="flex gap-3 text-white pt-3">
              <p>Facebook</p> <p>Instagram</p> <p>Twitter</p> <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
