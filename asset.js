//Task 1
const assets = [
    {id: 1, name: "Tesla", type: "stock", price: 500, quantiy: 12},
    {id: 2, name: "Ford", type: "stock", price: 30, quantiy: 23},
    {id: 3, name: "Meta", type: "stock", price: 1000, quantiy: 5},
    {id: 4, name: "Bitcoin", type: "stock", price: 60000, quantiy: 12},
];     

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);      
}
export { assets };
