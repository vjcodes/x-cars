import { useState } from "react";
import "./FilterSection.scss";
import { Tabs } from "antd";

const { TabPane } = Tabs;
function FilterSection() {
  const [activeTab, setActiveTab] = useState("1");

  const filterTabs = [
    {
      id: "1",
      label: "SEDAN",
      styleId: "btn-sedan",
    },
    {
      id: "2",
      label: "SUV",
      styleId: "btn-suv”",
    },
    {
      id: "3",
      label: "HATCHBACK",
      styleId: "btn-hatchback",
    },
    {
      id: "4",
      label: "COUPE",
      styleId: "btn-coupe",
    },
  ];

  return (
    <div className="filter-section-container">
      <div className="tabs-container">
        <Tabs
          activeKey={activeTab}
          onChange={(activeKey) => setActiveTab(activeKey)}
          defaultActiveKey="1"
        >
          {filterTabs.map((item) => {
            return (
              <TabPane
                tab={<div className="tab-label">{item.label}</div>}
                key={item.id}
                className="tabs"
                id={item?.styleId}
              ></TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}

export default FilterSection;
