import ItemCard from '../components/ItemCard'


const ItemsList = () => {
    return (
        <div className="container">
            <div class="page-header">
                <h1>Все товары</h1>
            </div>
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-value">0</span>
                    <span class="stat-label">Товаров</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">0</span>
                    <span class="stat-label">Ставок</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">0</span>
                    <span class="stat-label">Активных</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">0₽</span>
                    <span class="stat-label">Средняя цена</span>
                </div>
            </div>

            <div class="items-grid">
                    <ItemCard/>
            </div>
        </div>
    )
}

export default ItemsList
