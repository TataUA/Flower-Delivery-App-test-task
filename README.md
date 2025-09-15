# 🌸 Flower Delivery App

A simple flower delivery application built as a test task (`base level`).  
The app allows users to choose a flower shop, add bouquets or flowers to the cart, fill out order details, and submit an order.

## Demo

- Public URL: https://flowers-delivery.vercel.app/
- Repository: https://github.com/TataUA/Flower-Delivery-App-test-task

## Accomplished Tasks (Base level)

- **Flower shops page**:

  - Fetching shops and products from the database.
  - User can add bouquets or flowers to the cart.

- **Shopping cart page**:
  - Inputs for name, email, phone number, and delivery address.
  - Displays all selected products.
  - User can change quantity or remove items (quantity = 0).
  - Orders are saved in the database after submission.
  - Success/error notifications are shown after order creation.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **State management**: Zustand
- **Deployment**: Vercel (frontend), Render (backend)

## Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/TataUA/Flower-Delivery-App-test-task
   cd flower-delivery-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run backend:

   ```bash
    cd backend
    npm run dev
   ```

4. Run frontend:
   ```bash
    cd frontend
    npm run dev
   ```
   Open http://localhost:3000

## Notes

Orders are saved in MongoDB and can be viewed in the database.
