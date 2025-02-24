import { Button, Modal } from '@mui/material';
import React, { FC } from 'react';
import TagForm from '../admin/forms/tagForm';
import { Tag } from '@mui/icons-material';


const AddTagModal: FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='outlined'
        size='small'
        startIcon={<Tag />}
      >
        Add tag to project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TagForm />
      </Modal>
    </>
  );
};

export default AddTagModal;