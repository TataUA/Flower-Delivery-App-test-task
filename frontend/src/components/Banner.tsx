import React from "react";

export const Banner = () => {
  return (
    <section 
      className="bg-no-repeat bg-center bg-cover h-96 flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <h1 className="text-2xl font-bold text-[var(--brown)] text-center">
        Brighten someone’s day with the beauty of flowers
      </h1>
    </section>
  );
};
