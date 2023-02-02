import CategoryButton from "./CategoryButton";
import { useState } from "react";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all"); //array destructring

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn white ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
