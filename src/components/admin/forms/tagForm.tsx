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


interface Props{
  projectId: string
}

const TagForm: FC<Props> = ({projectId}) => {
  const [actionResponse, executeAction] = useActionState(Actions.createTag, {success: false});


  const form = useForm({
    resolver: zodResolver(createTagSchema),
    defaultValues: {
      name: '',
      projectId: projectId,
      color: '#000000',
      iconName: '',
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
                Add a tag
              </Typography>
            </Box>
            <Form hookForm={form} action={executeAction} actionResult={actionResponse}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  {...form.register('name')}
                  placeholder="Name"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.name || !!actionResponse?.errors?.name}
                  defaultValue={actionResponse?.submittedData?.name ?? ''}
                  helperText={
                    form.formState.errors.name?.message || actionResponse?.errors?.name?.[0]
                  }
                />
                <TextField
                  {...form.register('projectId')}
                  label="ProjectId"
                  fullWidth
                  variant="outlined"
                  onChange={() => form.setValue('projectId', projectId)}
                  error={!!form.formState.errors.projectId || !!actionResponse?.errors?.projectId}
                  defaultValue={actionResponse?.submittedData?.projectId ?? ''}
                  helperText={
                    form.formState.errors.projectId?.message || actionResponse?.errors?.projectId?.[0]
                  }
                />
                <TextField
                  {...form.register('iconName')}
                  label="Icon Name"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.iconName || !!actionResponse?.errors?.iconName}
                  defaultValue={actionResponse?.submittedData?.iconName ?? ''}
                  helperText={
                    form.formState.errors.iconName?.message || actionResponse?.errors?.iconName?.[0]
                  }
                />
                <input
                  type='color'
                  {...form.register('color')}
                  placeholder="Color"
                  defaultValue={actionResponse?.submittedData?.color ?? ''}
                />
                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Logging in ..."
                  text="Create tag"
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

export default TagForm;