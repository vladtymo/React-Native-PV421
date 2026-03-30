// // Home.test.tsx
// import React from 'react';
// import { render, screen } from '@testing-library/react-native';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import Home from '../app/(tabs)';
// import menuSlice from '../app/slices/menuSlice';

// const renderWithRedux = (component, { preloadedState, store = configureStore({
//     reducer: { menu: menuSlice },
//     preloadedState,
// }) } = {}) => {
//     return render(<Provider store={store}>{component}</Provider>);
// };

// test('renders title from Redux store', () => {
//     renderWithRedux(<Home />, {
//         preloadedState: {
//             menu: { title: 'My Redux Title' },
//         },
//     });

//     expect(screen.getByText('My Redux Title')).toBeTruthy();
// });

xit("test", () => {});
