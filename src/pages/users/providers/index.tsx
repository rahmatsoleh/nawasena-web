import VerifyModal from "@/modules/users/components/Modals/VerifyModal";
import ProvidersTable from "@/modules/users/components/Table/ProvidersTable";
import useUsersQuery from "@/modules/users/hooks/queries/getUsersQuery";
import React from "react";

const UsersProviderPage = () => {
  const { data, isLoading } = useUsersQuery({
    queryParams: {},
  });

  const waitingForVerification =
    data?.data?.filter((user) => !user?.ProviderDetail?.isVerified) || [];

  return (
    <>
      <div>
        <h3 className="text-3xl mb-3">Penyedia Layanan</h3>
        {!isLoading && waitingForVerification.length > 0 && (
          <div className="bg-yellow-500 align-middle text-sm flex gap-2 p-3 rounded-lg mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            Ada {waitingForVerification?.length || 0} penyedia layanan yang
            perlu di konfirmasi
          </div>
        )}
        <ProvidersTable />
      </div>
      <VerifyModal />
    </>
  );
};

export default UsersProviderPage;
