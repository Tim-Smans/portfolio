'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React, { FC, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import Actions from '@actions';
import Form from '@/components/shared/form';
import SubmitButtonWithLoading from '@/components/shared/submitButtonWithLoading';
import { createTagSchema } from '@/lib/schemas/tagSchema';
import { createImageSchema } from '@/lib/schemas/imageSchema';


interface Props{
  projectId: string
}

const ImageForm: FC<Props> = ({projectId}) => {
  const [actionResponse, executeAction] = useActionState(Actions.createImage, {success: false});


  const form = useForm({
    resolver: zodResolver(createImageSchema),
    defaultValues: {
      url: '',
      projectId: projectId,
      alt: '',
    },
  });


  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth='sm'>
        <Card elevation={6}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <LockOutlined sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography component='h1' variant='h5'>
                Add an image
              </Typography>
            </Box>
            <Form hookForm={form} action={executeAction} actionResult={actionResponse}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  {...form.register('url')}
                  placeholder="Url"
                  label="Url"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.url || !!actionResponse?.errors?.url}
                  defaultValue={actionResponse?.submittedData?.url ?? ''}
                  helperText={
                    form.formState.errors.url?.message || actionResponse?.errors?.url?.[0]
                  }
                />
                <TextField
                  {...form.register('alt')}
                  placeholder="Alt"
                  label="Alt"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.alt || !!actionResponse?.errors?.alt}
                  defaultValue={actionResponse?.submittedData?.alt ?? ''}
                  helperText={
                    form.formState.errors.alt?.message || actionResponse?.errors?.alt?.[0]
                  }
                />
                <TextField
                  {...form.register('projectId')}
                  label="projectId"
                  fullWidth
                  hidden
                  variant="outlined"
                  onChange={(e) => form.setValue('projectId', projectId)}
                  error={!!form.formState.errors.projectId || !!actionResponse?.errors?.projectId}
                  defaultValue={actionResponse?.submittedData?.projectId ?? ''}
                  helperText={
                    form.formState.errors.projectId?.message || actionResponse?.errors?.projectId?.[0]
                  }
                />

                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Creating image ..."
                  text="Create image"
                  role="button"
                />
              </Box>
              
            </Form>
          </CardContent>
        </Card>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            © {new Date().getFullYear()} Tim Smans. All rights reserved.
          </Typography>
        </Box>
      </Container>

    </Box>
  );
};

export default ImageForm;