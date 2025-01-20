import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="flex lg:flex-row lg:-mt-36 lg:justify-between lg:items-center px-5 flex-col-reverse mb-20">
      <div className="lg:w-6/12">
        <h2 className="font-bold text-[24px] lg:text-[33px] md:text-xl mb-5 lg:mb-5 md:mb-2 lg:text-primary lg:w-10/12 md:w-full lg:leading-10">
          Cutting Post-harvest Losses in Africa’s Food Supply Chains
        </h2>
        <div className="text-[14px] text-[#050810] lg:text-[18px] lg:w-full">
          {
            "We combine technology with cutting-edge food product and process innovations to solve postharvest loss problems in Africa’s food supply chains. Through our ML-powered food value chain management platform, we provide farmers with reliable production and postharvest support, and efficient integration into high-value local and global food value chains."
          }
        </div>
        <div className="lg:mt-7 mt-5">
          <Link
            href="https://forms.zohopublic.com/infoare1/form/ArefelWaitlist/formperma/2-xblnApSXKXISCMQcGc_0pzCMsHmJ94pEHF7BSUAhk"
            target="_blank"
            className="flex text-white bg-[rgb(79,104,6)] border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg lg:w-[160px]"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
      <div className="lg:w-5/12">
        <Image
          className="rounded-xl shadow-xl mb-5"
          alt="arefel banner"
          src={
            "https://res.cloudinary.com/duytxrvsx/image/upload/v1724194188/banner-image-1_oowdmx.jpg"
          }
          height={800}
          width={1000}
        />
      </div>
    </div>
  );
}
