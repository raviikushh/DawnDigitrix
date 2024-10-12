import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, RadioGroup, Radio} from "@nextui-org/react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function ModalPage({ isOpen, onOpenChange, onClose }) {
  const navigate = useNavigate();



  return (
    <div className="flex flex-col gap-2">
      <Modal 
        isOpen={isOpen} 
        placement="top"
        onOpenChange={onOpenChange} 
      >
        <ModalContent className="bg-gray-100 p-4">
            <ModalHeader>Menu</ModalHeader>
            <ModalBody>
                <RadioGroup name="menu">
                    <Radio value="home" onClick={() => { navigate('/'); onClose(); }} className="hover:text-orange-600 text-xl">Home</Radio>
                    <Radio value="about" onClick={() => { navigate('/about'); onClose(); }} className="hover:text-orange-600 text-xl">About Us</Radio>
                    <Radio value="services" onClick={() => { navigate('/services'); onClose(); }} className="hover:text-orange-600 text-xl">Services</Radio>
                    <Radio value="contact" onClick={() => { navigate('/contact'); onClose(); }} className="hover:text-orange-600 text-xl">Contact</Radio>
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button auto onClick={onClose} className="primary-btn">Close</Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
ModalPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalPage;