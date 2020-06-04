/*** 
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:
- put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value. 
- get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- remove(key) : Remove the mapping for the value key if this map contains the mapping for the key. 
***/

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.map = []
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for (let i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            this.map[i][1] = value
            return
        }
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for (let i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            return this.map[i][1]
        } 
        return -1
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    for (let i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            this.map.splice(i, 1)
            break
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */