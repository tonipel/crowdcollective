import { render, screen } from '@testing-library/react'
import Note from './Note'
import { vi } from 'vitest';

test('renders content', () => {
  const note = {
    id: 1,
    title: 'test title',
    content: 'test content',
    done: true,
    created_at: new Date,
    updated_at: new Date,
    user: 1,
  }

  const mockDeleteNote = vi.fn();

  render(<Note note={note} deleteNote={mockDeleteNote}/>)

  const element = screen.getByText('test content')
  expect(element).toBeDefined()
})
