'use client';
import { loginSchema } from '@/lib/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LockOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React, { FC, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import Actions from '@actions';
import Form from '@/components/shared/form';
import SubmitButtonWithLoading from '@/components/shared/submitButtonWithLoading';

const AdminLogin: FC = () => {
  const [actionResponse, signInOrRegister] = useActionState(Actions.signInOrRegister, {success: false});


  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
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
                Admin Login
              </Typography>
            </Box>
            <Form hookForm={form} action={signInOrRegister} actionResult={actionResponse}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  {...form.register('email')}
                  placeholder="Email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.email || !!actionResponse?.errors?.email}
                  defaultValue={actionResponse?.submittedData?.email ?? ''}
                  helperText={
                    form.formState.errors.email?.message || actionResponse?.errors?.email?.[0]
                  }
                />
                <TextField
                  {...form.register('password')}
                  placeholder="Password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  error={!!form.formState.errors.password || !!actionResponse?.errors?.password}
                  defaultValue={actionResponse?.submittedData?.password ?? ''}
                  helperText={
                    form.formState.errors.password?.message || actionResponse?.errors?.password?.[0]
                  }
                />
                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Logging in ..."
                  text="Log in"
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

export default AdminLogin;