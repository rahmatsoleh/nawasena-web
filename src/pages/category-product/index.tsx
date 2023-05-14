import CreateCategoryProductModal from "@/modules/category-product/components/Modals/CreateCategoryProduct";
import CategoryProductTable from "@/modules/category-product/components/Tables/CategoryProduct";
import { Button } from "antd";
import React from "react";

const CategoryProductPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl mb-3">Kategori</h3>
          <Button type="primary">Tambah Kategori</Button>
        </div>

        <CategoryProductTable />
      </div>

      <CreateCategoryProductModal />
    </>
  );
};

export default CategoryProductPage;
