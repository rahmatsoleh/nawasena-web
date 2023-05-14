import { Table, TableProps, Tooltip } from "antd";
import React, { useMemo } from "react";
import useCategoryProductQuery from "../../../hooks/queries/useCategoryProductQuery";

type ProvidersTableProps = TableProps<{
  id: string;
  name: string;
}>;

const CategoryProductTable = () => {
  const { data: categoriesResponse } = useCategoryProductQuery({
    queryParams: {},
  });

  const column: ProvidersTableProps["columns"] = [
    {
      title: "Nama",
      render: (_, record) => {
        return <span>{record.name}</span>;
      },
    },
    {
      title: "Quick Action",
      render: () => {
        return (
          <div className="flex gap-1 items-center">
            <Tooltip title="Hapus kategori">
              <button
                onClick={() => {}}
                type="button"
                className="border py-1 px-2 rounded"
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                    stroke="#000000"
                    stroke-width="2"
                  />
                  <path
                    d="M19.5 5H4.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                    stroke="#000000"
                    stroke-width="2"
                  />
                  <path
                    d="M14 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </Tooltip>

            <Tooltip title="Edit Kategori">
              <button
                onClick={() => {}}
                type="button"
                className="border py-1 px-2 rounded"
              >
                <svg
                  className="w-3 h-3"
                  fill="#000000"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z" />
                </svg>
              </button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const data: ProvidersTableProps["dataSource"] = useMemo(() => {
    if (!categoriesResponse?.data?.length) return [];
    return categoriesResponse?.data?.map((category) => ({
      id: category.id,
      name: category.name,
    }));
  }, [categoriesResponse?.data]);

  return (
    <Table rowKey={(record) => record.id} columns={column} dataSource={data} />
  );
};

export default CategoryProductTable;
