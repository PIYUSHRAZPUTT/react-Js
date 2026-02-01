import React from "react";
import "./App.css";
import CompanyCards from "./components/CompanyCards";
const App = () => {
  const companies = [
    {
      id: 1,
      image:
        "https://indiebooksintl.com/wp-content/uploads/2015/03/amazon-icon.png",
      title: "amazon",
      name: "Amazon",
      time: "5 days ago",
      role: "Senior UI/Ux Designer",
      timing: "Part-Time",
      schedule: "Senior Level",
      salary: "$120/hr",
      origin: "Mumbai,India",
    },
    {
      id: 2,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "google",
      name: "Google",
      time: "10 days ago",
      role: "Graphic Designer",
      timing: "Part-Time",
      schedule: "Flexible Schedule",
      salary: "$150-220k",
      origin: "Kochi,India",
    },
    {
      id: 3,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.gZ_pHqiDqluVgy1FYDPF_AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "dribble",
      name: "Dribble",
      time: "10 days ago",
      role: "Senior Motion Designer",
      timing: "Contract",
      schedule: "Remote",
      salary: "$85/hr",
      origin: "Chennai,India",
    },
    {
      id: 4,
      image:
        "https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png",
      title: "figma",
      name: "Figma",
      time: "5 days ago",
      role: "Ux Designer",
      timing: "Full-Time",
      schedule: "in office",
      salary: "$200-250k",
      origin: "Banglore,India",
    },
    {
      id: 5,
      image:
        "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912246/airbnb-icon-md.png",
      title: "airbnb",
      name: "Airbnb",
      time: "5 days ago",
      role: "Junior UI/Ux Designer",
      timing: "Contract",
      schedule: "Remote",
      salary: "$100/hr",
      origin: "Delhi,India",
    },
    {
      id: 6,
      image:
        "https://www.apple.com/newsroom/images/default/apple-logo-og-16x9.jpg",
      title: "apple",
      name: "Apple",
      time: "5 days ago",
      role: "Graphic Designer",
      timing: "Full-Time",
      schedule: "Flexible Schedule",
      salary: "$85-120k",
      origin: "Noida,India",
    },
  ];
  return (
    <div className="parent">
      {companies.map((company) => (
        <CompanyCards
          key={company.id}
          image={company.image}
          title={company.title}
          name={company.name}
          time={company.time}
          role={company.role}
          timing={company.timing}
          schedule={company.schedule}
          salary={company.salary}
          origin={company.origin}
        />
      ))}
    </div>
  );
};

export default App;
