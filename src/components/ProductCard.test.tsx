/**
 * @vitest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Guitar',
    price: 500,
    image: 'test.jpg',
    description: 'A great guitar',
    category: 'instruments',
    rating: { rate: 4.5, count: 10 }
  };

  it('should call addToCart when the button is clicked', () => {
    
    const addToCartMock = vi.fn();


    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} addToCart={addToCartMock} />
      </BrowserRouter>
    );

    // 3. Находим кнопку и кликаем [Find button and click]
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // 4. Проверяем, что функция вызвана ровно 1 раз и с нашим товаром
    // [Check that function was called exactly once with our product]
    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});