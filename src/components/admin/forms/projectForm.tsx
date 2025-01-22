'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React, { FC, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import Actions from '@actions';
import { Project } from '@/lib/models/project';
import { createProjectSchema, projectSchema } from '@/lib/schemas/projectSchema';
import Form from '@/components/shared/form';
import SubmitButtonWithLoading from '@/components/shared/submitButtonWithLoading';

interface Props {
  isUpdate: boolean;
  existingProject?: Project;
}

type ProjectFormValues = {
  name: string;
  description: string;
  shortDescription: string;
  coverImageUrl?: string | null;
  id?: string;
};

const ProjectForm: FC<Props> = ({ isUpdate, existingProject }) => {
  const [actionResult, executeAction] = useActionState(
    isUpdate ? Actions.updateProject : Actions.createNewProject,
    { success: false },
  );

  const hookForm = useForm<ProjectFormValues>({
    resolver: zodResolver(isUpdate ? projectSchema : createProjectSchema),
    defaultValues: isUpdate ? { ...existingProject } : { name: '', description: '', shortDescription: '', coverImageUrl: '' },
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
      <Container maxWidth="sm">
        <Card elevation={6}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <LockOutlined sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography component="h1" variant="h5">
                {isUpdate ? 'Update Project' : 'Create Project'}
              </Typography>
            </Box>
            <Form hookForm={hookForm} action={executeAction} actionResult={actionResult} id={existingProject?.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  {...hookForm.register('name')}
                  label="Project Name"
                  fullWidth
                  variant="outlined"
                  error={!!hookForm.formState.errors.name || !!actionResult?.errors?.name}
                  helperText={
                    hookForm.formState.errors.name?.message || actionResult?.errors?.name?.[0]
                  }
                />
                <TextField
                  {...hookForm.register('shortDescription')}
                  label="Project Short Description"
                  fullWidth
                  multiline
                  rows={2}
                  variant="outlined"
                  error={
                    !!hookForm.formState.errors.shortDescription || !!actionResult?.errors?.shortDescription
                  }
                  helperText={
                    hookForm.formState.errors.shortDescription?.message ||
                    actionResult?.errors?.shortDescription?.[0]
                  }
                />
                <TextField
                  {...hookForm.register('description')}
                  label="Project Description"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  error={
                    !!hookForm.formState.errors.description || !!actionResult?.errors?.description
                  }
                  helperText={
                    hookForm.formState.errors.description?.message ||
                    actionResult?.errors?.description?.[0]
                  }
                />
                <TextField
                  {...hookForm.register('coverImageUrl')}
                  label="Cover image (optional)"
                  fullWidth
                  variant="outlined"
                  error={!!hookForm.formState.errors.coverImageUrl || !!actionResult?.errors?.coverImageUrl}
                  helperText={
                    hookForm.formState.errors.coverImageUrl?.message || actionResult?.errors?.coverImageUrl?.[0]
                  }
                />
                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Loading..."
                  text={isUpdate ? 'Update project' : 'Create project'}
                  role="button"
                />
              </Box>
            </Form>
          </CardContent>
        </Card>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Tim Smans. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectForm;
