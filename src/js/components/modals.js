import SimpleModal from '../functions/SimpleModal';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  disableScroll: true,
  transition: 250,
  nested: true,
  overlayCloseAll: true,
};

const modals = new SimpleModal(options);
modals.init();

window.modals = modals;

export default modals;