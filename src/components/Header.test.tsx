/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  // Моковые данные [Mock data]
  const mockProps = {
    searchTerm: '',
    setSearchTerm: vi.fn(),
    cart: [
      { id: 1, title: 'Guitar', price: 100, quantity: 2, image: '', description: '', category: '', rating: { rate: 5, count: 1 } }
    ]
  };

  it('should render the login link with correct text', () => {
    render(
      <BrowserRouter>
        <Header {...mockProps} />
      </BrowserRouter>
    );

    
    const loginText = screen.getByText(/войти/i);
    expect(loginText).toBeDefined();

  
    const loginLink = screen.getByRole('link', { name: /войти/i });
    expect(loginLink.getAttribute('href')).toBe('/register');
  });

  it('should display the correct number of items in the cart', () => {
    render(
      <BrowserRouter>
        <Header {...mockProps} />
      </BrowserRouter>
    );

    
    const cartCount = screen.getByText('(2)');
    expect(cartCount).toBeDefined();
  });
});