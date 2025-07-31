import React from "react";

function İntroduceSec() {
  return (
    <section className="max-w-[1320px] w-[90%] mx-auto mt-[8rem]">
      <div className="grid grid-cols-12 gap-4 items-center px-8 py-20  text-white">
        {/* Sol tərəf (Mətn hissəsi) */}
        <div className="col-span-7">
          <h1 className="text-[42px] text-end mb-6">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>
          <p className="mb-[33px] text-[20px]">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷
          </p>
          <p className="mb-[33px] text-[20px]">
            I am fluent in classics like{" "}
            <span className="text-purple-400 font-semibold italic">
              C++, Javascript
            </span>
            .
          </p>
          <p className="mb-[33px] text-[20px]">
            My field of Interest's are building new
            <span className="text-purple-400 italic">
              {" "}
              Web Technologies and Products
            </span>{" "}
            and also in areas related to{" "}
            <span className="text-purple-400 italic">Blockchain</span>.
          </p>
          <p className="mb-[33px] text-[20px]">
            Whenever possible, I also apply my passion for developing products
            with
            <span className="text-purple-400"> Node.js </span>
            and
            <span className="text-purple-400 italic">
              {" "}
              Modern Javascript Library and Frameworks
            </span>
            like{" "}
            <span className="text-purple-400 italic">React.js and Next.js</span>
            .
          </p>
        </div>

        {/* Sağ tərəf (Avatar şəkli) */}
        <div className="col-span-5 flex justify-center">
          <img
            src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
            alt="Avatar"
            className="w-70 h-70 rounded-full  p-4"
          />
        </div>
      </div>
    </section>
  );
}

export default İntroduceSec;
