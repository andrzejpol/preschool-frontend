import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {vi} from 'vitest';
import Menu from '../Menu'; // Adjust path to match your file structure

// Mock the role from "../../data.ts"
vi.mock('../../data.ts', () => ({
  role: 'admin', // Default role for testing
}));

describe('Menu Component', () => {
  it('renders menu items for the admin role', () => {
    render(
      <Router>
        <Menu/>
      </Router>
    );

    // Check for admin-visible items
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Teachers')).toBeInTheDocument();
    expect(screen.getByText('Students')).toBeInTheDocument();
    expect(screen.getByText('Parents')).toBeInTheDocument();
    expect(screen.getByText('Groups')).toBeInTheDocument();
    expect(screen.getByText('Attendance')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();

    // Check for shared items
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

});
