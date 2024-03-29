"use client"
import { Button } from '@/components/ui/button'
import { AnyPtrRecord } from 'dns'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import { ProductCart } from './AddToBag'

const CheckoutNow = ({ currency, description, name, price, image, price_id }: ProductCart) => {
    const { checkoutSingleItem } = useShoppingCart()

    function buyNow(priceId: string) {
        checkoutSingleItem(priceId)
    }
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
    return (
        <Button onClick={() => {
            buyNow(product.price_id)
        }}>Checkout Now</Button>
    )
}

export default CheckoutNow