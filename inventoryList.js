function inventoryList() {
    const items = [];

    return {
        add: function (name) {
            if (!items.includes(name) && items.length < 10) {
                items.push(name);
            }
        },

        remove: function (name) {
            const index = items.indexOf(name);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        getList: function () {
            return items.length > 0 ? items : ['No Items'];
        },
    };
}

// Example usage:
const inventory = inventoryList();
inventory.add('Item1');
inventory.add('Item2');
inventory.add('Item3');
inventory.remove('Item2');
const result = inventory.getList();
console.log(result.join(','));
