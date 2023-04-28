import avatar1 from "../../assets/blogs/blog1.jpg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Items from "../Items/Items";
import LineChartMod from "../Charts/LineChartMod";

function CommunityProfile() {
  const data = [
    {
      label: "ITEMS",
      value: "items",
      desc: <Items />,
    },
    {
      label: "ANALYTICS",
      value: "analytics",
      desc: <LineChartMod />,
    },
    {
      label: "ACTIVITY",
      value: "activity",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <>
      <section>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${avatar1})`,
            height: "500px",
          }}
        ></div>

        <div className="container mx-auto">
          <div className="text-center text-gray-800">
            <div
              className="block rounded-lg shadow-lg w-56 h-56"
              style={{
                marginTop: "-130px",
                background: "hsla(0, 0%, 100%, 0.7)",
                backdropFilter: "blur(30px)",
              }}
            >
              <br />
              <br />
              <br />
              <h1 className="text-5xl md:text-4xl xl:text-5xl font-bold tracking-tight">
                VXON
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Tabs
        value="items"
        style={{
          marginTop: "14px",
          marginLeft: "10px",
          marginRight: "10px",
          color: "white",
        }}
      >
        <TabsHeader
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} style={{ color: "wheat" }}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} style={{ color: "white" }}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}

export default CommunityProfile;
