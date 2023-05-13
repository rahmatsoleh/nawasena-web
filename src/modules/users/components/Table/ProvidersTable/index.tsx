import { Modal, Table, TableProps, Tooltip } from "antd";
import React, { useMemo } from "react";
import { verifyModalAtom } from "../../Modals/VerifyModal";
import { useAtom } from "jotai";
import useUsersQuery from "@/modules/users/hooks/queries/getUsersQuery";
import { ExclamationCircleFilled } from "@ant-design/icons";
import usePatchProviderDetailMutation from "@/modules/users/hooks/mutations/usePatchProviderDetailMutation";

type ProvidersTableProps = TableProps<{
  id: string;
  name: string;
  isVerified: boolean;
  email: string;
}>;

const { confirm } = Modal;

const ProvidersTable = () => {
  const { mutate } = usePatchProviderDetailMutation({});

  const { data: usersResponse } = useUsersQuery({
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
          <>
            {record.isVerified ? (
              <Tooltip title="Menhapus verifikasi">
                <button
                  onClick={() => {
                    confirm({
                      title: "Apakah anda yakin ?",
                      icon: <ExclamationCircleFilled />,
                      content: "Verifikasi penyedia layanan akan dihapus",
                      onOk() {
                        mutate({
                          isVerified: false,
                          email: record.email,
                        });
                      },
                      onCancel() {},
                    });
                  }}
                  type="button"
                  className="border py-1 px-2 rounded"
                >
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
                </button>
              </Tooltip>
            ) : (
              <Tooltip title="Verifikasi penyedia layanan">
                <button
                  onClick={async () => {
                    mutate({
                      isVerified: true,
                      email: record.email,
                    });
                  }}
                  type="button"
                  className="border py-1 px-2 rounded"
                >
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
                </button>
              </Tooltip>
            )}
          </>
        );
      },
    },
  ];

  const data: ProvidersTableProps["dataSource"] = useMemo(() => {
    if (!usersResponse?.data) return [];
    return usersResponse?.data?.map((user) => ({
      id: user.id,
      name: user.name,
      isVerified: user?.ProviderDetail?.isVerified,
      email: user.email,
    }));
  }, [usersResponse?.data]);

  return (
    <Table rowKey={(record) => record.id} columns={column} dataSource={data} />
  );
};

export default ProvidersTable;
