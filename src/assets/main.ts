import { getAllProducts } from "../api/product"
import type { Product } from "../api/type"

const mainCards = document.querySelector(".main-cards") as HTMLDivElement | null

async function renderCards(): Promise<void> {
  if (!mainCards) return

  try {
    const products = await getAllProducts()

    mainCards.innerHTML = products.map((product: Product) => `
      <div class="card-item">
        <div class="card-item-header">
          <img class="card-item-img" src="${product.imageUrl}" alt="${product.title}">
          <button class="card-item-unfavorite-btn">
            <img src="/un-favorite.svg" alt="">
          </button>
        </div>
        <div class="card-item-content">
          <div class="card-item-main">
            <span class="card-item-category">${product.category}</span>
            <h2 class="card-item-title">${product.title}</h2>
          </div>
          <div class="card-item-footer">
            <span class="card-item-price">$${product.price.toFixed(2)}</span>
            <button class="card-item-add-btn">
              <img src="/basket-add.svg" alt="">
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    `).join("")

  } catch (error) {
    console.error("Error :", error)
    mainCards.innerHTML = `<p>An error occurred !</p>`
  }
}

renderCards()