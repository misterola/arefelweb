export default function How() {
  return (
    <div className="mb-10">
      <section className="lg:body-font px-5">
        <h1 className="lg:text-center lg:font-bold font-bold text-2xl lg:text-3xl mb-0 mt-10">
          How It Works
        </h1>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#4f6806]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 font-bold title-font text-2xl mb-2 sm:mb-0">
                Overview of our platform
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Discover the key features, benefits, and functionality that make
                our platform unique.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://res.cloudinary.com/dj1lgzojo/image/upload/c_crop,ar_4:3/v1730448433/arefel-step-one_lwvvpk.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font mt-5">Step 1</h2>
              <p className="text-base leading-relaxed mt-2">
                Using sound market intelligence and local foods knowledge, we
                develop innovative food products from perishable agricultural
                produce, and reliable data-driven processes to make these
                products at scale.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://res.cloudinary.com/dj1lgzojo/image/upload/v1730448491/arefel-step-two_svtwli.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font mt-5">Step 2</h2>
              <p className="text-base leading-relaxed mt-2">
                We onboard farmers (organized into economically viable groups)
                on our platform, deploy ML to predict yield and harvest date of
                farm clusters, and provide these farmer groups with reliable
                production and postharvest support.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://res.cloudinary.com/dj1lgzojo/image/upload/v1730448517/arefel-step-three_x0gozd.jpg"
                />
              </div>
              <h2 className="text-xl font-bold title-font mt-5">Step 3</h2>
              <p className="text-base leading-relaxed mt-2">
                In our data-driven food processing facility, we transform the
                highly perishable produce into shelf-stable intermediates to be
                flexibly deployed in production. We then flexibly process
                produce and intermediates into innovative food products to
                fulfil massive food and nutritional demands of Africans in the
                cities and the diaspora.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-center lg:-mt-6">
          <button className="flex text-white bg-[rgb(79,104,6)] lg:self-center border-0 py-2 px-3 focus:outline-none hover:bg-gray-400 rounded text-lg">
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
