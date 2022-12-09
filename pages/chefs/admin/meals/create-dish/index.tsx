import React from "react";
import AdminPageHeader from "../../../../../components/elements/AdminPageHeader";
import CreateMeal from "../../../../../components/sections/chefs/meals/CreateDishComponent";

const createDish = () => {
  return (
    <div>
      <AdminPageHeader withBack title="Create Dish" />
      <div className="px-[6rem]  overflow-auto">
        <CreateMeal />
      </div>
    </div>
  );
};

export default createDish;
