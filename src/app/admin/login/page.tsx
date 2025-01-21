'use client';
import { loginSchema } from '@/lib/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label, LockOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Input, Typography } from '@mui/material';
import React, { FC, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import Actions from '@actions';
import Form from '@/components/shared/form';
import FormError from '@/components/shared/formError';
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
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label className="sr-only">
                    Email
                  </Label>
                  <Input
                    {...form.register('email')}
                    placeholder="Email"
                    role="textbox"
                    className="rounded"
                    defaultValue={actionResponse?.submittedData?.email ?? ''
                    }
                  />
                  <FormError path="email" formErrors={form.formState.errors} serverErrors={actionResponse} />
                </div>
                <div className="grid gap-1">
                  <Label>Password</Label>
                  <Input
                    {...form.register('password')}
                    placeholder="Password"
                    className="rounded"
                    role="textbox"
                    type="password"
                    defaultValue={actionResponse?.submittedData?.password ?? ''}
                  />
                  <FormError path="password" formErrors={form.formState.errors} serverErrors={actionResponse} />
                </div>
                <SubmitButtonWithLoading
                  className="mt-4 bg-red-500 rounded hover:bg-red-600"
                  loadingText="Logging in ..."
                  text="Log in"
                  role="button"
                />
              </div>
            </Form>
          </CardContent>
        </Card>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;