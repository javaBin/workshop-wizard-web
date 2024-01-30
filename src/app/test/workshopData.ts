import { Workshop } from "@/types/workshop";

// Test data
export const workshops: Workshop[] = [
    {
      _id: '1',
      name: 'Introduction to CSS',
      slug: 'introduction-to-css',
      startTime: new Date('2024-02-01T09:00:00'),
      endTime: new Date('2024-02-01T12:00:00'),
      description: 'Learn the basics of Cascading Style Sheets (CSS).',
    },
    {
      _id: '2',
      name: 'JavaScript Fundamentals',
      slug: 'javascript-fundamentals',
      startTime: new Date('2024-02-02T10:00:00'),
      endTime: new Date('2024-02-02T13:00:00'),
      description: 'Get started with the fundamentals of JavaScript programming.',
    },
    {
      _id: '3',
      name: 'Responsive Web Design',
      slug: 'responsive-web-design',
      startTime: new Date('2024-02-03T14:00:00'),
      endTime: new Date('2024-02-03T17:00:00'),
      description: 'Learn how to create responsive web layouts using CSS.',
    },
    {
      _id: '4',
      name: 'Node.js Basics',
      slug: 'node-js-basics',
      startTime: new Date('2024-02-04T15:00:00'),
      endTime: new Date('2024-02-04T18:00:00'),
      description: 'Introduction to server-side JavaScript with Node.js.',
    },
    {
      _id: '5',
      name: 'React Workshop',
      slug: 'react-workshop',
      startTime: new Date('2024-02-05T11:00:00'),
      endTime: new Date('2024-02-05T14:00:00'),
      description: 'Explore building user interfaces with React.',
    },
  ];