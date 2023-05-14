import CategoryProductTable from "@/modules/category-product/components/CategoryProductTable";
import VerifyModal from "@/modules/users/components/Modals/VerifyModal";
import React from "react";

const CategoryProductPage = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl mb-3">Kategori</h3>

        <CategoryProductTable />
      </div>
      <VerifyModal />
    </>
  );
};

export default CategoryProductPage;
