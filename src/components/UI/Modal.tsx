import { createPortal } from 'react-dom';

const Modal = ({ title, children, onClose }: any) => {
	return createPortal(
		<>
			<div className='backdrop' onClick={onClose}></div>
			<dialog className='modal'>{children}</dialog>
		</>,
		document.getElementById('modal')!
	);
};

export default Modal;
