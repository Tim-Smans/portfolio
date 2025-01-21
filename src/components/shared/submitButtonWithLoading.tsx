import {FunctionComponent} from 'react';
import {Loader2} from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface SubmitButtonWithLoadingProps {
  text: string
  loadingText: string
  variant?: ButtonProps['variant']
  className?: ButtonProps['className']
  disabled?: boolean
  role?: string
}

const SubmitButtonWithLoading: FunctionComponent<SubmitButtonWithLoadingProps> = ({
  text,
  loadingText,
  variant,
  disabled,
  role,
}) => {
  const forcefullyDisabled = disabled ?? false;
  const {pending} = useFormStatus();

  console.log(pending);
  return (
    <Button
      role={role}
      disabled={forcefullyDisabled || pending}
      type="submit"
      variant={variant}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? loadingText : text}
    </Button>
  );
};

export default SubmitButtonWithLoading;