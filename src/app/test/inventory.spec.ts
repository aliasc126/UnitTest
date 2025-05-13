import { Inventory, InventoryItem } from '../inventory';

describe('Inventory', () => {
    let inventory: Inventory;

    beforeEach(() => {
        inventory = new Inventory();
    });

    it('should add an item and return it with a unique id', () => {
        const item = inventory.addItem('Apple', 10);
        expect(item).toEqual({ id: 1, name: 'Apple', quantity: 10 });
        const items = inventory.listItems();
        expect(items.length).toBe(1);
        expect(items[0]).toEqual(item);
    });

    it('should increment id for each new item', () => {
        const item1 = inventory.addItem('Apple', 10);
        const item2 = inventory.addItem('Banana', 5);
        expect(item1.id).toBe(1);
        expect(item2.id).toBe(2);
    });

    it('should remove an item by id', () => {
        const item = inventory.addItem('Orange', 7);
        const removed = inventory.removeItem(item.id);
        expect(removed).toBe(true);
        expect(inventory.getItem(item.id)).toBeUndefined();
    });

    it('should return false when removing non-existent item', () => {
        expect(inventory.removeItem(999)).toBe(false);
    });

    it('should update quantity of an existing item', () => {
        const item = inventory.addItem('Grapes', 15);
        const updated = inventory.updateQuantity(item.id, 20);
        expect(updated).toBe(true);
        const updatedItem = inventory.getItem(item.id);
        expect(updatedItem?.quantity).toBe(20);
    });

    it('should return false when updating quantity of non-existent item', () => {
        expect(inventory.updateQuantity(999, 5)).toBe(false);
    });

    it('should get an item by id', () => {
        const item = inventory.addItem('Mango', 12);
        const found = inventory.getItem(item.id);
        expect(found).toEqual(item);
    });

    it('should return undefined for non-existent item', () => {
        expect(inventory.getItem(999)).toBeUndefined();
    });

    it('should list all items', () => {
        const item1 = inventory.addItem('Apple', 10);
        const item2 = inventory.addItem('Banana', 5);
        const items = inventory.listItems();
        expect(items).toEqual([item1, item2]);
    });

    it('should not mutate internal items array when listing items', () => {
        inventory.addItem('Apple', 10);
        const items = inventory.listItems();
        items.push({ id: 999, name: 'Fake', quantity: 1 });
        expect(inventory.listItems().length).toBe(1);
    });
});