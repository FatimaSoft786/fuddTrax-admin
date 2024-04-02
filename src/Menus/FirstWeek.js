import React, { useState, useEffect } from "react";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import EditMenu from "./EditMenu";
import { IoPerson } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";

const FirstWeek = () => {
  const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" },
  };

  const navItems = [
    {
      name: "First Week",
      icon: BsCalendar3WeekFill,
      link: "/first",
    },
    {
      name: "Second Week",
      icon: BsCalendar3WeekFill,
      link: "/second",
    },
    {
      name: "Third Week",
      icon: BsCalendar3WeekFill,
      link: "/third",
    },
    {
      name: "Fourth Week",
      icon: BsCalendar3WeekFill,
      link: "/fourth",
    },
      {
      name: "App users",
      icon: IoPerson,
      link: "/users",
    },
     {
      name: "Orders",
      icon: GiMeal,
      link: "/orders",
    }
  ];

  const [menu, setMenu] = useState([]);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [id, setId] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const data = {
      week: "First",
    };
    axios
      .post("https://fuddtrax-backend-production.up.railway.app/api/menu/fetch", data)
      .then((response) => {
        setMenu(response.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="w-full bg-slate-200 h-screen flex justify-between items-start">
      <motion.section
        animate={isExpanded ? "expanded" : "nonExpanded"}
        variants={variants}
        className={
          "w-1/5 bg-white h-screen flex flex-col justify-between items-center gap-10 relative border-slate-100 border-r " +
          (isExpanded ? "py-8 px-6 " : "px-8 py-6")
        }
      >
        <div className="flex flex-col justify-center items-center gap-8">
          {isExpanded ? (
            <div id="logo-box">
              <img src="/logo.jpeg" className=" w-48 h-48" />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <img src="/logo.jpeg" className="w-16 h-16" />
            </div>
          )}

          <div
            id="navlinks-box"
            className="flex flex-col justify-center items-start gap-5 w-full mt-5"
          >
            {navItems.map((item, index) => (
              <Link
                id={item.id}
                to={item.link}
                key={item.name}
                className={
                  "flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl " +
                  (activeNavIndex === index
                    ? "bg-[#de0e02] text-white "
                    : "text-black ") +
                  (isExpanded ? "px-6 py-2 " : "px-8 py-6")
                }
                onClick={() => {
                  setActiveNavIndex(index);
                }}
              >
                <div className="bg-[#de0e02] text-white p-2 rounded-full">
                  <item.icon className="md:w-6 w-4 h-4 md:h-6" />
                </div>

                <span className={"text-lg " + (isExpanded ? "flex" : "hidden")}>
                  {item?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div
          id="expanded-icon"
          className="bg-[#de0e02] text-white p-2 rounded-full cursor-pointer absolute -right-4 bottom-20 md:bottom-40 md:flex hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaArrowRight />
        </div>

        <div
          id="logout-box"
          className="w-full flex flex-col justify-start items-center gap-4 cursor-pointer"
        >
          <div className="bg-slate-700 w-full h-[0.5px]"></div>
          <div className="flex justify-center items-center gap-2">
            <MdLogout className="text-black h-6 w-6" />
            <span
              className={
                "text-black text-lg " + (isExpanded ? "flex" : "hidden")
              }
            >
              Logout
            </span>
          </div>
        </div>
      </motion.section>

      <section className="w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4">
        <Header />

        <div className=" w-full px-4 py-0 sm:px-6 sm:py-24 lg:px-8 ">
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {menu.map((meal) => (
              <div
                key={meal._id}
                className=" rounded-lg border border-[#de0e02]"
              >
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-[#de0e02] font-extrabold text-lg text-center">
                    ****{meal.day_name}****
                  </p>
                  <p className="text-black font-normal text-[10px] text-center">
                    ({meal.served})
                  </p>
                  <p className="text-black font-medium text-sm text-center">
                    ${meal.price}
                  </p>
                  <p className="text-black font-medium text-sm text-center">
                    {meal.menu_1}
                  </p>
                  <p className="text-black font-medium text-sm text-center">
                    {meal.menu_2}
                  </p>
                  <p className="text-black font-medium text-sm text-center">
                    {meal.menu_3}
                  </p>
                  <p className="text-black font-medium text-sm text-center">
                    {meal.menu_4}
                  </p>
                  <p className="text-black font-normal text-[10px]">
                    ({meal.extra})
                  </p>
                  <p className="text-black font-normal text-[10px] text-center">
                    ({meal.soda})
                  </p>

                  <div
                    className=" flex flex-row w-[80%] bg-[#de0e02] justify-center items-center rounded-md my-4 h-10"
                    onClick={() => {
                      openModal();
                      setId(meal._id);
                    }}
                  >
                    <p className=" font-normal font-sans text-[16px] mt-3 h-full w-full text-white text-center cursor-pointer">
                      Edit
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EditMenu isOpen={isModalOpen} onRequestClose={closeModal} id={id} />
      </section>
    </main>
  );
};

export default FirstWeek;
