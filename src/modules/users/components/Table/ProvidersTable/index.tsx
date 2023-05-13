import { Table, TableColumnsType, TableProps, Tooltip } from "antd";
import React from "react";
import { verifyModalAtom } from "../../Modals/VerifyModal";
import { useAtom } from "jotai";

type ProvidersTableProps = TableProps<{
  name: string;
  isVerified: boolean;
}>;

const ProvidersTable = () => {
  const [, setModalData] = useAtom(verifyModalAtom);

  const column: ProvidersTableProps["columns"] = [
    {
      title: "Nama",
      render: (_, record) => {
        return <span>{record.name}</span>;
      },
    },
    {
      title: "Status",
      render: (_, record) => {
        return !record.isVerified ? (
          <div className="text-red-500 flex gap-1 items-center">
            <span className="text-xs">Perlu Diverifikasi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
        ) : (
          <div className="text-green-500 flex gap-1 items-center">
            <span>Terverifikasi</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
      },
    },
    {
      title: "Quick Action",
      render: (_, record) => {
        return (
          <Tooltip title="Verifikasi penyedia layanan">
            <button
              onClick={() => setModalData({ visible: true })}
              type="button"
              className="border py-1 px-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </button>
          </Tooltip>
        );
      },
    },
  ];

  const data: ProvidersTableProps["dataSource"] = [
    {
      name: "PT. Sinar Jaya",
      isVerified: false,
    },
    {
      name: "PT. Sinar Jaya",
      isVerified: false,
    },
    {
      name: "PT. Sinar Jaya",
      isVerified: false,
    },
    {
      name: "PT. Sukses Jaya",
      isVerified: true,
    },
  ];

  return <Table columns={column} dataSource={data} />;
};

export default ProvidersTable;
