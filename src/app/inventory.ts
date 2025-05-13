export interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
}

export class Inventory {
    private items: InventoryItem[] = [];
    private nextId = 1;

    addItem(name: string, quantity: number): InventoryItem {
        const item: InventoryItem = {
            id: this.nextId++,
            name,
            quantity
        };
        this.items.push(item);
        return item;
    }

    removeItem(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    updateQuantity(id: number, quantity: number): boolean {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
            return true;
        }
        return false;
    }

    getItem(id: number): InventoryItem | undefined {
        return this.items.find(item => item.id === id);
    }

    listItems(): InventoryItem[] {
        return [...this.items];
    }
}