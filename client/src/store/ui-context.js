import React, { useState } from 'react';

const UIContext = React.createContext({
  modal: false,
  openModal: () => {},
  closeModal: () => {},
  notification: null,
  closeNotification: () => {},
  showNotification: () => {},
});

export const UIContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState();

  const openModal = () => {
    setShowModal(true);

    if (typeof window != 'undefined' && window.document)
      document.body.style.overflow = 'hidden';
  };

  const hideModal = () => {
    setShowModal(false);

    document.body.style.overflow = 'unset';
  };

  const showNotification = (data) => {
    setNotification(data);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const contextValue = {
    modal: showModal,
    openModal,
    closeModal: hideModal,
    notification,
    closeNotification,
    showNotification,
  };

  return (
    <UIContext.Provider value={contextValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
