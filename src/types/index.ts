interface Products {
  id: string
  price: number
  image: string
  description: string
  link: string
  value: string
  label: string
}

interface Carts extends Products {
  quantity: number
  selectedItem?: boolean
}

export type { Products, Carts }
