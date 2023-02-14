import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
  let navigate = useNavigate();
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    if (chefs.length == 0) {
      fetch("/api/chefs")
        .then((res) => res.json())
        .then((data) => {
          setChefs(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [chefs]);

  if (chefs.length == 0) {
    return (
      <div className="section chiefs">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">Loading</div>
      </div>
    );
  }

  const chiefImages = [
    "/img/top-chiefs/img_1.jpg",
    "/img/top-chiefs/img_2.jpg",
    "/img/top-chiefs/img_3.jpg",
    "/img/top-chiefs/img_4.jpg",
    "/img/top-chiefs/img_5.jpg",
    "/img/top-chiefs/img_6.jpg",
  ];

  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {chefs.map((chief, index) => {
          return (
            <button
              onClick={() => {
                navigate("/chief", {
                  state: { chief, image: chiefImages[index] },
                });
              }}
              style={{ border: "none", cursor: "pointer" }}
            >
              <ChiefCard key={index} chief={chief} image={chiefImages[index]} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
