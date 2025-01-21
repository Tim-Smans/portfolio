import { hashPassword } from '@/lib/server/utils/passwordUtils';
import { PrismaClient } from '@prisma/client';

export const seedDev = async (prisma: PrismaClient) => {
  // ** Roles **
  const roles = [
    { id: '4d7bb39d-5acb-4255-99fc-595ba4718f45', name: 'Admin' },
    { id: '3fc523ca-5ab8-4f5d-ae24-9e85588256fe', name: 'User' },
  ];

  const [adminRole, studentRole] = await Promise.all(
    roles.map(role =>
      prisma.role.create({
        data: role,
      }),
    ),
  );

  // ** Users **
  await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: hashPassword('123test123'),
      roleId: adminRole.id,
    },
  });

  await Promise.all([
    prisma.user.create({
      data: {
        username: 'user1',
        email: 'user1@example.com',
        password: hashPassword('123test123'),
        roleId: studentRole.id,
      },
    }),
    prisma.user.create({
      data: {
        username: 'user2',
        email: 'user2@example.com',
        password: hashPassword('123test123'),
        roleId: studentRole.id,
      },
    }),
  ]);

  
  console.log('Seed data created successfully!');
};
