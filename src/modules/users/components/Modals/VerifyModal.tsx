import { Button, Modal } from "antd";
import { atom, useAtom } from "jotai";
import React from "react";

type VerifyModalAtomType = {
  visible: boolean;
};

export const verifyModalAtom = atom<VerifyModalAtomType>({
  visible: false,
});

const VerifyModal = () => {
  const [modalData, setModalData] = useAtom(verifyModalAtom);

  return (
    <Modal
      open={modalData.visible}
      onCancel={() => setModalData({ visible: false })}
      footer={false}
    >
      <div className="grid place-content-center">
        <Button type="primary" className="bg-primary">
          Verifikasi
        </Button>
      </div>
    </Modal>
  );
};

export default VerifyModal;
