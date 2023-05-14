import { Modal } from "antd";
import { atom, useAtom } from "jotai";
import React from "react";

type CreateCategoryAtomType = {
  visible: boolean;
};

export const createCategoryModalAtom = atom<CreateCategoryAtomType>({
  visible: false,
});

const CreateCategoryProductModal = () => {
  const [modalData, setModalData] = useAtom(createCategoryModalAtom);

  return (
    <Modal
      open={modalData.visible}
      onCancel={() => setModalData({ visible: false })}
      footer={false}
    >
      <div className="grid place-content-center"></div>
    </Modal>
  );
};

export default CreateCategoryProductModal;
