var allItems = {};

function getItemDef(itemstring) {
  return allItems[itemstring];
}

class ItemBase {
  constructor(itemstring, props) {
    this.itemstring = itemstring;
    
    this.stackable = true;
    this.maxStack = 64;
    
    this.isNode = false;
    this.isTool = false;
    this.toolWear = 0;
    
    this.iconFile = null;
    this.icon = null;
    
    Object.assign(this, props);
    
    if(!this.stackable) {
      this.maxStack = 1;
    }
    
    if(this.iconFile != null && this.icon == null) {
      var e = iconExists(this.iconFile);
      if(e != false) {
        this.icon = e;
      } else {
        this.icon = loadIcon(this.itemstring, this.iconFile);
      }
    }
  }
}

class Item extends ItemBase {
  constructor(itemstring, props) {
    super(itemstring, props);
  }
}

api.registerItem = function(item) {
  //TODO: validation
  allItems[item.itemstring] = item;
};
