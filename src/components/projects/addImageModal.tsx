import { Button, Modal } from '@mui/material';
import React, { FC } from 'react';
import TagForm from '../admin/forms/tagForm';
import { ImageAspectRatio, Tag } from '@mui/icons-material';
import ImageForm from '../admin/forms/imageForm';

interface Props{
  projectId: string
}

const AddImageModal: FC<Props> = ({projectId}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='outlined'
        size='small'
        startIcon={<ImageAspectRatio />}
      >
        Add image to project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImageForm projectId={projectId}/>
      </Modal>
    </>
  );
};

export default AddImageModal;