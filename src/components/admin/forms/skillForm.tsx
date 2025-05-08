'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React, { FC, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import Actions from '@actions';
import Form from '@/components/shared/form';
import SubmitButtonWithLoading from '@/components/shared/submitButtonWithLoading';
import { Skill } from '@prisma/client';
import { createSkillSchema, skillSchema } from '@/lib/schemas/skillSchema';

interface Props {
  isUpdate: boolean;
  existingSkill?: Skill;
}

type SkillFormValues = {
  title: string
  description: string
  id?: string
  iconName: string | null
};

const SkillForm: FC<Props> = ({ isUpdate, existingSkill }) => {
  const [actionResult, executeAction] = useActionState(
    isUpdate ? Actions.updateSkill : Actions.createSkill,
    { success: false },
  );

  const hookForm = useForm<SkillFormValues>({
    resolver: zodResolver(isUpdate ? skillSchema : createSkillSchema),
    defaultValues: isUpdate ? { ...existingSkill } : { title: '', description: '', iconName: '' },
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
                {isUpdate ? 'Update Skill' : 'Create Skill'}
              </Typography>
            </Box>
            <Form hookForm={hookForm} action={executeAction} actionResult={actionResult} id={existingSkill?.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  {...hookForm.register('title')}
                  label="Skill title"
                  fullWidth
                  variant="outlined"
                  error={!!hookForm.formState.errors.title || !!actionResult?.errors?.title}
                  helperText={
                    hookForm.formState.errors.title?.message || actionResult?.errors?.title?.[0]
                  }
                />
                <TextField
                  {...hookForm.register('description')}
                  label="Skill Description"
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
                  {...hookForm.register('iconName')}
                  label="Icon Name"
                  fullWidth
                  variant="outlined"
                  error={
                    !!hookForm.formState.errors.iconName || !!actionResult?.errors?.iconName
                  }
                  helperText={
                    hookForm.formState.errors.iconName?.message ||
                    actionResult?.errors?.iconName?.[0]
                  }
                />
                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Loading..."
                  text={isUpdate ? 'Update Skill' : 'Create Skill'}
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

export default SkillForm;
