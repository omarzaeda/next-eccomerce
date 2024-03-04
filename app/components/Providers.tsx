"use client"
import React, { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'
const CartProvider = ({ children }: { children: ReactNode }) => {
    return (
        <USCProvider language='en-US' cartMode='client-only' stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string} successUrl='http://localhost:3000/stripe/success' cancelUrl='http://localhost:3000/stripe/error' currency='USD' billingAddressCollection={false} shouldPersist>
            {children}
        </USCProvider>
    )
}

export default CartProvider