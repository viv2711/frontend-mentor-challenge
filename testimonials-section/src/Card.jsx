import React from "react";

function Card(props) {
  const {imgUrl, name, styles, content1, content2 } = props;
  return (
    <div
      className={styles}
    >
      <div className="flex flex-col  gap-4 justify-center items-center p-6">
        <div className="self-start flex gap-4 items-center justify-center">
          <img
            className="border-2 w-[2rem] h-[2rem] border-white rounded-[100%]"
            src={imgUrl}
            alt="profile"
          />

          <div>
            <h2 className="text-[13px] font-semibold ">{name}</h2>
            <p>Verified Graduate</p>
          </div>
        </div>
        <p className="text-[1rem] font-semibold">
          {content1}
        </p>
        <p className="text-[0.8rem] font-medium">
          {content2}
        </p>
      </div>
    </div>
  );
}

export default Card;
