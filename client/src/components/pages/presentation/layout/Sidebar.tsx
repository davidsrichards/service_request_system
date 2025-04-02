import "./Sidebar.css";
import { Tooltip } from "antd";
import image2 from "../../../../assets/images/signin/image2.png";
import image4 from "../../../../assets/images/presentation/image2.png";
import image5 from "../../../../assets/images/presentation/image3.png";
import image6 from "../../../../assets/images/signin/image5.svg"
import image7 from "../../../../assets/images/user/image1.svg"


import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();

  // Tooltip content for each button
  const tooltips = [
    "Home Dashboard",
    "Service Requests",
    "Manage Services",
    "Manage Categories",
    "Analytics Dashboard",
    "Settings",
  ];

  const [sideBarItems, _] = useState([
    {
      title: "Service Requests",
      icon: image2,
      path: "/app/request",
    },
    {
      title: "Manage Categories",
      icon: image4,
      path: "/app/category",
    },
    {
      title: "Users",
      icon: image7,
      path: "/app/users",
      disable: true
    },
    {
      title: "Settings",
      icon: image5,
      path: "/app",
      disable: true,
    },
    {
      title: "Logout",
      icon: image6,
      path: "/",
    },
  ]);

  return (
    <div>
      <div className="bg-white w-20 fixed top-6 bottom-6 left-6 rounded-xl flex py-4 transition-all duration-300 select-none shadow-md flex-col items-center gap-6">
        <Tooltip
          title={tooltips[0]}
          placement="right"
          overlayClassName="custom-tooltip"
          color="#3b82f6"
        >
          <button
            onClick={() => navigate("/app")}
            className="cursor-pointer group"
          >
            <img
              src="https://ug.nsuk.edu.ng/api/global/logo"
              alt="Home"
              className="w-12 transition-transform duration-200 group-hover:scale-110"
            />
          </button>
        </Tooltip>

        <div className="w-full h-px bg-gray-300"></div>
        {sideBarItems.map((item) => (
          <Tooltip
            key={item.title}
            title={item.title}
            placement="right"
            overlayClassName="custom-tooltip"
            color="#3b82f6"
          >
            <button
            disabled={item.disable ? true : false}
              onClick={() => navigate(item.path)}
              className={`${item.disable ? 'cursor-not-allowed' : 'cursor-pointer'} group`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 transition-transform duration-200 group-hover:scale-110"
              />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
